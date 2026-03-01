import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { canImportLayer, getLayerForPath } from './layer-rules';

const IMPORT_REGEX = /import\s+(?:type\s+)?(?:[^'";]+\s+from\s+)?['"]([^'"]+)['"]/g;

export interface ArchitectureViolation {
  file: string;
  importPath: string;
  fromLayer: string;
  toLayer: string;
}

export function collectTypeScriptFiles(rootDir: string): string[] {
  const results: string[] = [];

  function walk(dir: string): void {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        walk(fullPath);
        continue;
      }

      if (fullPath.endsWith('.ts') && !fullPath.endsWith('.d.ts')) {
        results.push(fullPath);
      }
    }
  }

  walk(rootDir);
  return results;
}

export function validateArchitectureBoundaries(files: string[]): ArchitectureViolation[] {
  const violations: ArchitectureViolation[] = [];

  for (const file of files) {
    const fromLayer = getLayerForPath(file);
    if (!fromLayer) continue;

    const content = readFileSync(file, 'utf8');
    IMPORT_REGEX.lastIndex = 0;

    let match: RegExpExecArray | null;
    while ((match = IMPORT_REGEX.exec(content)) !== null) {
      const rawImportPath = match[1];
      if (!rawImportPath || !rawImportPath.startsWith('.')) continue;

      const resolvedImportPath = path.resolve(path.dirname(file), rawImportPath);
      const toLayer = getLayerForPath(resolvedImportPath);
      if (!toLayer) continue;

      if (!canImportLayer(fromLayer, toLayer)) {
        violations.push({
          file,
          importPath: rawImportPath,
          fromLayer,
          toLayer,
        });
      }
    }
  }

  return violations;
}

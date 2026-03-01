import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  collectTypeScriptFiles,
  validateArchitectureBoundaries,
} from '../../../src/shared/architecture/enforce-boundaries';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

describe('enforce architecture boundaries', () => {
  it('collects ts files recursively', () => {
    const fixtureRoot = path.resolve(currentDir, '../../fixtures/src');
    const files = collectTypeScriptFiles(fixtureRoot);

    expect(files.some((entry) => entry.endsWith('violator.ts'))).toBe(true);
    expect(files.some((entry) => entry.endsWith('mock-view-model.ts'))).toBe(true);
  });

  it('detects forbidden cross-layer imports', () => {
    const violatingFile = path.resolve(currentDir, '../../fixtures/src/domain/violator.ts');
    const violations = validateArchitectureBoundaries([violatingFile]);

    expect(violations).toEqual([
      expect.objectContaining({
        fromLayer: 'domain',
        toLayer: 'presentation',
      }),
    ]);
  });

  it('accepts legal imports in current source tree', () => {
    const srcDir = path.resolve(currentDir, '../../../src');
    const files = collectTypeScriptFiles(srcDir);
    const violations = validateArchitectureBoundaries(files);

    expect(violations).toEqual([]);
  });
});

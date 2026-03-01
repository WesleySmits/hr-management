import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  collectTypeScriptFiles,
  validateArchitectureBoundaries,
} from '../../src/shared/architecture/enforce-boundaries';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

describe('architecture boundary quality gate', () => {
  it('has no invalid cross-layer imports', () => {
    const srcDir = path.resolve(currentDir, '../../src');
    const files = collectTypeScriptFiles(srcDir);
    const violations = validateArchitectureBoundaries(files);

    expect(violations).toEqual([]);
  });

  it('fails when a lower layer imports a higher layer', () => {
    const violatingFile = path.resolve(currentDir, '../fixtures/src/domain/violator.ts');
    const violations = validateArchitectureBoundaries([violatingFile]);

    expect(violations).toHaveLength(1);
    expect(violations[0]).toMatchObject({
      fromLayer: 'domain',
      toLayer: 'presentation',
    });
  });
});

import { describe, expect, it } from 'vitest';
import { serialize } from '../../src/api/example-handler';
import { toRecord } from '../../src/app/example-service';
import { createDomainEntity } from '../../src/domain/example';
import { save } from '../../src/infra/example-repository';
import { toLabel } from '../../src/ui/example-view-model';

describe('architecture layer examples', () => {
  it('covers the layer sample modules', () => {
    const entity = createDomainEntity('emp-1');
    expect(save(entity)).toEqual({ id: 'emp-1' });
    expect(toRecord(entity)).toEqual({ id: 'emp-1' });
    expect(toLabel(entity)).toBe('emp-1');
    expect(serialize(entity)).toBe('{"id":"emp-1"}');
  });
});

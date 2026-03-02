import type { DomainEntity } from '../domain/example';

export function toLabel(entity: DomainEntity): string {
  return entity.id;
}

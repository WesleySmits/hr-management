import type { DomainEntity } from '../domain/example';

export function toRecord(entity: DomainEntity): Record<string, string> {
  return { id: entity.id };
}

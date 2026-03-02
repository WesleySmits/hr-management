import type { DomainEntity } from '../domain/example';
import { toRecord } from '../app/example-service';

export function serialize(entity: DomainEntity): string {
  return JSON.stringify(toRecord(entity));
}

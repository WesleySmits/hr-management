export interface DomainEntity {
  id: string;
}

export function createDomainEntity(id: string): DomainEntity {
  return { id };
}

import type { MockViewModel } from '../presentation/mock-view-model';

export function forbiddenDependency(input: MockViewModel): string {
  return input.title;
}

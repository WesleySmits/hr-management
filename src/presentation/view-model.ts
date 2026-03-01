export interface ViewModel {
  title: string;
}

export function createViewModel(title: string): ViewModel {
  return { title };
}

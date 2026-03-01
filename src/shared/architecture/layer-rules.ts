export type LayerName =
  | 'shared'
  | 'domain'
  | 'app'
  | 'infrastructure'
  | 'presentation';

export const LAYER_ORDER: LayerName[] = [
  'shared',
  'domain',
  'app',
  'infrastructure',
  'presentation',
];

export const LAYER_PREFIXES: Record<LayerName, string> = {
  shared: '/src/shared/',
  domain: '/src/domain/',
  app: '/src/app/',
  infrastructure: '/src/infrastructure/',
  presentation: '/src/presentation/',
};

const LAYER_RANK = Object.fromEntries(LAYER_ORDER.map((name, index) => [name, index])) as Record<
  LayerName,
  number
>;

export function getLayerForPath(path: string): LayerName | null {
  const normalizedPath = path.replaceAll('\\', '/');
  for (const layer of LAYER_ORDER) {
    if (normalizedPath.includes(LAYER_PREFIXES[layer])) {
      return layer;
    }
  }
  return null;
}

export function canImportLayer(from: LayerName, to: LayerName): boolean {
  return LAYER_RANK[to] <= LAYER_RANK[from];
}

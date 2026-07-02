/** Geo-aware shard routing for multi-DC deployments. */
export class GeoAwareRouter {
  route(key: string, preferredDC?: string): { shardId: number; dc: string } {
    return { shardId: 0, dc: preferredDC || 'local' };
  }
}

/** Multi-DC topology management. */
export class CrossDCTopology {
  constructor(private config: any) {}
  getDCs(): string[] { return []; }
  getPeers(dc: string): string[] { return []; }
}

/** Cross-DC failover coordination. */
export class DCFailoverManager {
  async onDCFailure(dc: string): Promise<void> {}
  async onDCRecovery(dc: string): Promise<void> {}
}

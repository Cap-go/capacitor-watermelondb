export interface CapacitorWatermelonDbPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

import { WebPlugin } from '@capacitor/core';

import type { CapacitorWatermelonDbPlugin } from './definitions';

export class CapacitorWatermelonDbWeb
  extends WebPlugin
  implements CapacitorWatermelonDbPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

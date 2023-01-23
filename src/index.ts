import { registerPlugin } from '@capacitor/core';

import type { CapacitorWatermelonDbPlugin } from './definitions';

const CapacitorWatermelonDb = registerPlugin<CapacitorWatermelonDbPlugin>(
  'CapacitorWatermelonDb',
  {
    web: () => import('./web').then(m => new m.CapacitorWatermelonDbWeb()),
  },
);

export * from './definitions';
export * from '@nozbe/watermelondb';
export { CapacitorWatermelonDb };

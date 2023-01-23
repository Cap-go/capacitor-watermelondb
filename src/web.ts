import { WebPlugin } from '@capacitor/core';
import type { TableName, RecordId } from '@nozbe/watermelondb';
import type { CachedFindResult, CachedQueryResult, UnsafeExecuteOperations } from '@nozbe/watermelondb/adapters/type';
// import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'

import type { CapacitorWatermelonDbPlugin } from './definitions';

export class CapacitorWatermelonDbWeb
  extends WebPlugin
  implements CapacitorWatermelonDbPlugin
{
  async initialize(options: {
    tag: number,
    databaseName: string,
    schemaVersion: number,
}): Promise<void> {
    console.log('initialize', options);
    return;
}
  async setUpWithSchema(options: { tag: number, databaseName: string, schema: string, schemaVersion: number }): Promise<void> {
    console.log('setUpWithSchema', options);
    return;
  }
  async setUpWithMigrations(options: { tag: number, databaseName: string, migrations: string, fromVersion: number, toVersion: number }): Promise<void> {
    console.log('setUpWithMigrations', options);
    return;
  }
  async find(options: { tag: number, table: TableName<any>, id: RecordId }): Promise<CachedFindResult> {
    console.log('find', options);
    return '';
  }
  async query(options: { tag: number, table: TableName<any>, query: string, args: string[] }): Promise<CachedQueryResult> {
    console.log('query', options);
    return [];
  }
  async queryIds(options: { tag: number, table: TableName<any>, query: string, args: string[] }): Promise<RecordId[]> {
    console.log('queryIds', options);
    return [];
  }
  async unsafeQueryRaw(options: { tag: number, query: string, args: string[] }): Promise<any[]> {
    console.log('unsafeQueryRaw', options);
    return [];
  }
  async count(options: { tag: number, query: string, args: string[] }): Promise<number> {
    console.log('count', options);
    return 0;
  }
  async batch(options: { tag: number, operations: string[] }): Promise<void> {
    console.log('batch', options);
    return;
  }
  async getDeletedRecords(options: {tableName: TableName<any>}): Promise<RecordId[]> {
    console.log('getDeletedRecords', options);
    return [];
  }
  async destroyDeletedRecords(options: {tableName: TableName<any>, recordIds: RecordId[]}): Promise<void> {
    console.log('destroyDeletedRecords', options);
    return;
  }
  async unsafeLoadFromSync(options: {jsonId: number}): Promise<any> {
    console.log('unsafeLoadFromSync', options);
    return;
  }
  async provideSyncJson(options: { id: number }): Promise<void> {
    console.log('provideSyncJson', options);
    return;
  }
  async unsafeResetDatabase(options: { tag: number, schema: string, schemaVersion: number  }): Promise<void> {
    console.log('unsafeResetDatabase', options);
    return;
  }
  async unsafeExecute(options: {work: UnsafeExecuteOperations}): Promise<void> {
    console.log('unsafeExecute', options);
    return;
  }
  async getLocal(options: { tag: number, key: string }): Promise<string | undefined> {
    console.log('getLocal', options);
    return options.key;
  }
  async setLocal(options: { tag: number, key: string, value: string }): Promise<void> {
    console.log('setLocal', options);
    return;
  }
  async removeLocal(options: { tag: number, key: string }): Promise<void> {
    console.log('removeLocal', options);
    return;
  }
}
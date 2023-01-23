import type { RecordId, TableName } from "@nozbe/watermelondb";
import type { CachedFindResult, CachedQueryResult, UnsafeExecuteOperations } from "@nozbe/watermelondb/adapters/type";

export interface CapacitorWatermelonDbPlugin {
  initialize(options: {
        tag: number,
        databaseName: string,
        schemaVersion: number,
 }): Promise<void>;
 setUpWithSchema(options: { tag: number, databaseName: string, schema: string, schemaVersion: number }): Promise<void>;
 setUpWithMigrations(options: { tag: number, databaseName: string, migrations: string, fromVersion: number, toVersion: number }): Promise<void>;
 find(options: { tag: number, table: TableName<any>, id: RecordId }): Promise<CachedFindResult>;
 query(options: { tag: number, table: TableName<any>, query: string, args: string[] }): Promise<CachedQueryResult>;
 queryIds(options: { tag: number, table: TableName<any>, query: string, args: string[] }): Promise<RecordId[]>;
 unsafeQueryRaw(options: { tag: number, query: string, args: string[] }): Promise<any[]>;
 count(options: { tag: number, query: string, args: string[] }): Promise<number>;
 batch(options: { tag: number, operations: string[] }): Promise<void>;
 getDeletedRecords(options: {tableName: TableName<any>}): Promise<RecordId[]>;
 destroyDeletedRecords(options: {tableName: TableName<any>, recordIds: RecordId[]}): Promise<void>;
 unsafeLoadFromSync(options: {jsonId: number}): Promise<any>;
 provideSyncJson(options: { id: number }): Promise<void>;
 unsafeResetDatabase(options: { tag: number, schema: string, schemaVersion: number  }): Promise<void>;
 unsafeExecute(options: {work: UnsafeExecuteOperations}): Promise<void>;
 getLocal(options: { tag: number, key: string }): Promise<string | undefined>;
 setLocal(options: { tag: number, key: string, value: string }): Promise<void>;
 removeLocal(options: { tag: number, key: string }): Promise<void>;
}
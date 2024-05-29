
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Witness
 * 
 */
export type Witness = $Result.DefaultSelection<Prisma.$WitnessPayload>
/**
 * Model Committee
 * 
 */
export type Committee = $Result.DefaultSelection<Prisma.$CommitteePayload>
/**
 * Model WitnessList
 * 
 */
export type WitnessList = $Result.DefaultSelection<Prisma.$WitnessListPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Witnesses
 * const witnesses = await prisma.witness.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Witnesses
   * const witnesses = await prisma.witness.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.witness`: Exposes CRUD operations for the **Witness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Witnesses
    * const witnesses = await prisma.witness.findMany()
    * ```
    */
  get witness(): Prisma.WitnessDelegate<ExtArgs>;

  /**
   * `prisma.committee`: Exposes CRUD operations for the **Committee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Committees
    * const committees = await prisma.committee.findMany()
    * ```
    */
  get committee(): Prisma.CommitteeDelegate<ExtArgs>;

  /**
   * `prisma.witnessList`: Exposes CRUD operations for the **WitnessList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WitnessLists
    * const witnessLists = await prisma.witnessList.findMany()
    * ```
    */
  get witnessList(): Prisma.WitnessListDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Witness: 'Witness',
    Committee: 'Committee',
    WitnessList: 'WitnessList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'witness' | 'committee' | 'witnessList'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Witness: {
        payload: Prisma.$WitnessPayload<ExtArgs>
        fields: Prisma.WitnessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WitnessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WitnessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload>
          }
          findFirst: {
            args: Prisma.WitnessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WitnessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload>
          }
          findMany: {
            args: Prisma.WitnessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload>[]
          }
          create: {
            args: Prisma.WitnessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload>
          }
          createMany: {
            args: Prisma.WitnessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WitnessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload>
          }
          update: {
            args: Prisma.WitnessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload>
          }
          deleteMany: {
            args: Prisma.WitnessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WitnessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WitnessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessPayload>
          }
          aggregate: {
            args: Prisma.WitnessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWitness>
          }
          groupBy: {
            args: Prisma.WitnessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WitnessGroupByOutputType>[]
          }
          count: {
            args: Prisma.WitnessCountArgs<ExtArgs>,
            result: $Utils.Optional<WitnessCountAggregateOutputType> | number
          }
        }
      }
      Committee: {
        payload: Prisma.$CommitteePayload<ExtArgs>
        fields: Prisma.CommitteeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitteeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitteeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload>
          }
          findFirst: {
            args: Prisma.CommitteeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitteeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload>
          }
          findMany: {
            args: Prisma.CommitteeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload>[]
          }
          create: {
            args: Prisma.CommitteeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload>
          }
          createMany: {
            args: Prisma.CommitteeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommitteeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload>
          }
          update: {
            args: Prisma.CommitteeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload>
          }
          deleteMany: {
            args: Prisma.CommitteeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommitteeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommitteeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommitteePayload>
          }
          aggregate: {
            args: Prisma.CommitteeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommittee>
          }
          groupBy: {
            args: Prisma.CommitteeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommitteeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitteeCountArgs<ExtArgs>,
            result: $Utils.Optional<CommitteeCountAggregateOutputType> | number
          }
        }
      }
      WitnessList: {
        payload: Prisma.$WitnessListPayload<ExtArgs>
        fields: Prisma.WitnessListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WitnessListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WitnessListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload>
          }
          findFirst: {
            args: Prisma.WitnessListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WitnessListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload>
          }
          findMany: {
            args: Prisma.WitnessListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload>[]
          }
          create: {
            args: Prisma.WitnessListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload>
          }
          createMany: {
            args: Prisma.WitnessListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WitnessListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload>
          }
          update: {
            args: Prisma.WitnessListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload>
          }
          deleteMany: {
            args: Prisma.WitnessListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WitnessListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WitnessListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WitnessListPayload>
          }
          aggregate: {
            args: Prisma.WitnessListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWitnessList>
          }
          groupBy: {
            args: Prisma.WitnessListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WitnessListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WitnessListCountArgs<ExtArgs>,
            result: $Utils.Optional<WitnessListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CommitteeCountOutputType
   */

  export type CommitteeCountOutputType = {
    witnesses: number
  }

  export type CommitteeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    witnesses?: boolean | CommitteeCountOutputTypeCountWitnessesArgs
  }

  // Custom InputTypes

  /**
   * CommitteeCountOutputType without action
   */
  export type CommitteeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeCountOutputType
     */
    select?: CommitteeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommitteeCountOutputType without action
   */
  export type CommitteeCountOutputTypeCountWitnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WitnessWhereInput
  }



  /**
   * Count Type WitnessListCountOutputType
   */

  export type WitnessListCountOutputType = {
    committees: number
  }

  export type WitnessListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    committees?: boolean | WitnessListCountOutputTypeCountCommitteesArgs
  }

  // Custom InputTypes

  /**
   * WitnessListCountOutputType without action
   */
  export type WitnessListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessListCountOutputType
     */
    select?: WitnessListCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WitnessListCountOutputType without action
   */
  export type WitnessListCountOutputTypeCountCommitteesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Witness
   */

  export type AggregateWitness = {
    _count: WitnessCountAggregateOutputType | null
    _min: WitnessMinAggregateOutputType | null
    _max: WitnessMaxAggregateOutputType | null
  }

  export type WitnessMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    organization: string | null
    city: string | null
    state: string | null
    name: string | null
    committeeId: string | null
  }

  export type WitnessMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    organization: string | null
    city: string | null
    state: string | null
    name: string | null
    committeeId: string | null
  }

  export type WitnessCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    organization: number
    city: number
    state: number
    name: number
    committeeId: number
    _all: number
  }


  export type WitnessMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    organization?: true
    city?: true
    state?: true
    name?: true
    committeeId?: true
  }

  export type WitnessMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    organization?: true
    city?: true
    state?: true
    name?: true
    committeeId?: true
  }

  export type WitnessCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    organization?: true
    city?: true
    state?: true
    name?: true
    committeeId?: true
    _all?: true
  }

  export type WitnessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Witness to aggregate.
     */
    where?: WitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Witnesses to fetch.
     */
    orderBy?: WitnessOrderByWithRelationInput | WitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Witnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Witnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Witnesses
    **/
    _count?: true | WitnessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WitnessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WitnessMaxAggregateInputType
  }

  export type GetWitnessAggregateType<T extends WitnessAggregateArgs> = {
        [P in keyof T & keyof AggregateWitness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWitness[P]>
      : GetScalarType<T[P], AggregateWitness[P]>
  }




  export type WitnessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WitnessWhereInput
    orderBy?: WitnessOrderByWithAggregationInput | WitnessOrderByWithAggregationInput[]
    by: WitnessScalarFieldEnum[] | WitnessScalarFieldEnum
    having?: WitnessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WitnessCountAggregateInputType | true
    _min?: WitnessMinAggregateInputType
    _max?: WitnessMaxAggregateInputType
  }

  export type WitnessGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string | null
    organization: string
    city: string
    state: string
    name: string
    committeeId: string
    _count: WitnessCountAggregateOutputType | null
    _min: WitnessMinAggregateOutputType | null
    _max: WitnessMaxAggregateOutputType | null
  }

  type GetWitnessGroupByPayload<T extends WitnessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WitnessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WitnessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WitnessGroupByOutputType[P]>
            : GetScalarType<T[P], WitnessGroupByOutputType[P]>
        }
      >
    >


  export type WitnessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    organization?: boolean
    city?: boolean
    state?: boolean
    name?: boolean
    committeeId?: boolean
    committee?: boolean | CommitteeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["witness"]>

  export type WitnessSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    organization?: boolean
    city?: boolean
    state?: boolean
    name?: boolean
    committeeId?: boolean
  }

  export type WitnessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    committee?: boolean | CommitteeDefaultArgs<ExtArgs>
  }


  export type $WitnessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Witness"
    objects: {
      committee: Prisma.$CommitteePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string | null
      organization: string
      city: string
      state: string
      name: string
      committeeId: string
    }, ExtArgs["result"]["witness"]>
    composites: {}
  }


  type WitnessGetPayload<S extends boolean | null | undefined | WitnessDefaultArgs> = $Result.GetResult<Prisma.$WitnessPayload, S>

  type WitnessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WitnessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WitnessCountAggregateInputType | true
    }

  export interface WitnessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Witness'], meta: { name: 'Witness' } }
    /**
     * Find zero or one Witness that matches the filter.
     * @param {WitnessFindUniqueArgs} args - Arguments to find a Witness
     * @example
     * // Get one Witness
     * const witness = await prisma.witness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WitnessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessFindUniqueArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Witness that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WitnessFindUniqueOrThrowArgs} args - Arguments to find a Witness
     * @example
     * // Get one Witness
     * const witness = await prisma.witness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WitnessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Witness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessFindFirstArgs} args - Arguments to find a Witness
     * @example
     * // Get one Witness
     * const witness = await prisma.witness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WitnessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessFindFirstArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Witness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessFindFirstOrThrowArgs} args - Arguments to find a Witness
     * @example
     * // Get one Witness
     * const witness = await prisma.witness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WitnessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Witnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Witnesses
     * const witnesses = await prisma.witness.findMany()
     * 
     * // Get first 10 Witnesses
     * const witnesses = await prisma.witness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const witnessWithIdOnly = await prisma.witness.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WitnessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Witness.
     * @param {WitnessCreateArgs} args - Arguments to create a Witness.
     * @example
     * // Create one Witness
     * const Witness = await prisma.witness.create({
     *   data: {
     *     // ... data to create a Witness
     *   }
     * })
     * 
    **/
    create<T extends WitnessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessCreateArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Witnesses.
     *     @param {WitnessCreateManyArgs} args - Arguments to create many Witnesses.
     *     @example
     *     // Create many Witnesses
     *     const witness = await prisma.witness.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WitnessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Witness.
     * @param {WitnessDeleteArgs} args - Arguments to delete one Witness.
     * @example
     * // Delete one Witness
     * const Witness = await prisma.witness.delete({
     *   where: {
     *     // ... filter to delete one Witness
     *   }
     * })
     * 
    **/
    delete<T extends WitnessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessDeleteArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Witness.
     * @param {WitnessUpdateArgs} args - Arguments to update one Witness.
     * @example
     * // Update one Witness
     * const witness = await prisma.witness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WitnessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessUpdateArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Witnesses.
     * @param {WitnessDeleteManyArgs} args - Arguments to filter Witnesses to delete.
     * @example
     * // Delete a few Witnesses
     * const { count } = await prisma.witness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WitnessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Witnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Witnesses
     * const witness = await prisma.witness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WitnessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Witness.
     * @param {WitnessUpsertArgs} args - Arguments to update or create a Witness.
     * @example
     * // Update or create a Witness
     * const witness = await prisma.witness.upsert({
     *   create: {
     *     // ... data to create a Witness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Witness we want to update
     *   }
     * })
    **/
    upsert<T extends WitnessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessUpsertArgs<ExtArgs>>
    ): Prisma__WitnessClient<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Witnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessCountArgs} args - Arguments to filter Witnesses to count.
     * @example
     * // Count the number of Witnesses
     * const count = await prisma.witness.count({
     *   where: {
     *     // ... the filter for the Witnesses we want to count
     *   }
     * })
    **/
    count<T extends WitnessCountArgs>(
      args?: Subset<T, WitnessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WitnessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Witness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WitnessAggregateArgs>(args: Subset<T, WitnessAggregateArgs>): Prisma.PrismaPromise<GetWitnessAggregateType<T>>

    /**
     * Group by Witness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WitnessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WitnessGroupByArgs['orderBy'] }
        : { orderBy?: WitnessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WitnessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWitnessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Witness model
   */
  readonly fields: WitnessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Witness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WitnessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    committee<T extends CommitteeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommitteeDefaultArgs<ExtArgs>>): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Witness model
   */ 
  interface WitnessFieldRefs {
    readonly id: FieldRef<"Witness", 'String'>
    readonly createdAt: FieldRef<"Witness", 'DateTime'>
    readonly updatedAt: FieldRef<"Witness", 'DateTime'>
    readonly title: FieldRef<"Witness", 'String'>
    readonly organization: FieldRef<"Witness", 'String'>
    readonly city: FieldRef<"Witness", 'String'>
    readonly state: FieldRef<"Witness", 'String'>
    readonly name: FieldRef<"Witness", 'String'>
    readonly committeeId: FieldRef<"Witness", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Witness findUnique
   */
  export type WitnessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * Filter, which Witness to fetch.
     */
    where: WitnessWhereUniqueInput
  }


  /**
   * Witness findUniqueOrThrow
   */
  export type WitnessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * Filter, which Witness to fetch.
     */
    where: WitnessWhereUniqueInput
  }


  /**
   * Witness findFirst
   */
  export type WitnessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * Filter, which Witness to fetch.
     */
    where?: WitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Witnesses to fetch.
     */
    orderBy?: WitnessOrderByWithRelationInput | WitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Witnesses.
     */
    cursor?: WitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Witnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Witnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Witnesses.
     */
    distinct?: WitnessScalarFieldEnum | WitnessScalarFieldEnum[]
  }


  /**
   * Witness findFirstOrThrow
   */
  export type WitnessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * Filter, which Witness to fetch.
     */
    where?: WitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Witnesses to fetch.
     */
    orderBy?: WitnessOrderByWithRelationInput | WitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Witnesses.
     */
    cursor?: WitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Witnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Witnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Witnesses.
     */
    distinct?: WitnessScalarFieldEnum | WitnessScalarFieldEnum[]
  }


  /**
   * Witness findMany
   */
  export type WitnessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * Filter, which Witnesses to fetch.
     */
    where?: WitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Witnesses to fetch.
     */
    orderBy?: WitnessOrderByWithRelationInput | WitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Witnesses.
     */
    cursor?: WitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Witnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Witnesses.
     */
    skip?: number
    distinct?: WitnessScalarFieldEnum | WitnessScalarFieldEnum[]
  }


  /**
   * Witness create
   */
  export type WitnessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * The data needed to create a Witness.
     */
    data: XOR<WitnessCreateInput, WitnessUncheckedCreateInput>
  }


  /**
   * Witness createMany
   */
  export type WitnessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Witnesses.
     */
    data: WitnessCreateManyInput | WitnessCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Witness update
   */
  export type WitnessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * The data needed to update a Witness.
     */
    data: XOR<WitnessUpdateInput, WitnessUncheckedUpdateInput>
    /**
     * Choose, which Witness to update.
     */
    where: WitnessWhereUniqueInput
  }


  /**
   * Witness updateMany
   */
  export type WitnessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Witnesses.
     */
    data: XOR<WitnessUpdateManyMutationInput, WitnessUncheckedUpdateManyInput>
    /**
     * Filter which Witnesses to update
     */
    where?: WitnessWhereInput
  }


  /**
   * Witness upsert
   */
  export type WitnessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * The filter to search for the Witness to update in case it exists.
     */
    where: WitnessWhereUniqueInput
    /**
     * In case the Witness found by the `where` argument doesn't exist, create a new Witness with this data.
     */
    create: XOR<WitnessCreateInput, WitnessUncheckedCreateInput>
    /**
     * In case the Witness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WitnessUpdateInput, WitnessUncheckedUpdateInput>
  }


  /**
   * Witness delete
   */
  export type WitnessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    /**
     * Filter which Witness to delete.
     */
    where: WitnessWhereUniqueInput
  }


  /**
   * Witness deleteMany
   */
  export type WitnessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Witnesses to delete
     */
    where?: WitnessWhereInput
  }


  /**
   * Witness without action
   */
  export type WitnessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
  }



  /**
   * Model Committee
   */

  export type AggregateCommittee = {
    _count: CommitteeCountAggregateOutputType | null
    _min: CommitteeMinAggregateOutputType | null
    _max: CommitteeMaxAggregateOutputType | null
  }

  export type CommitteeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    listId: string | null
  }

  export type CommitteeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    listId: string | null
  }

  export type CommitteeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    listId: number
    _all: number
  }


  export type CommitteeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    listId?: true
  }

  export type CommitteeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    listId?: true
  }

  export type CommitteeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    listId?: true
    _all?: true
  }

  export type CommitteeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Committee to aggregate.
     */
    where?: CommitteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Committees to fetch.
     */
    orderBy?: CommitteeOrderByWithRelationInput | CommitteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Committees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Committees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Committees
    **/
    _count?: true | CommitteeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitteeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitteeMaxAggregateInputType
  }

  export type GetCommitteeAggregateType<T extends CommitteeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommittee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommittee[P]>
      : GetScalarType<T[P], AggregateCommittee[P]>
  }




  export type CommitteeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeWhereInput
    orderBy?: CommitteeOrderByWithAggregationInput | CommitteeOrderByWithAggregationInput[]
    by: CommitteeScalarFieldEnum[] | CommitteeScalarFieldEnum
    having?: CommitteeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitteeCountAggregateInputType | true
    _min?: CommitteeMinAggregateInputType
    _max?: CommitteeMaxAggregateInputType
  }

  export type CommitteeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    listId: string | null
    _count: CommitteeCountAggregateOutputType | null
    _min: CommitteeMinAggregateOutputType | null
    _max: CommitteeMaxAggregateOutputType | null
  }

  type GetCommitteeGroupByPayload<T extends CommitteeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitteeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitteeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitteeGroupByOutputType[P]>
            : GetScalarType<T[P], CommitteeGroupByOutputType[P]>
        }
      >
    >


  export type CommitteeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listId?: boolean
    list?: boolean | Committee$listArgs<ExtArgs>
    witnesses?: boolean | Committee$witnessesArgs<ExtArgs>
    _count?: boolean | CommitteeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["committee"]>

  export type CommitteeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listId?: boolean
  }

  export type CommitteeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | Committee$listArgs<ExtArgs>
    witnesses?: boolean | Committee$witnessesArgs<ExtArgs>
    _count?: boolean | CommitteeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommitteePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Committee"
    objects: {
      list: Prisma.$WitnessListPayload<ExtArgs> | null
      witnesses: Prisma.$WitnessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      listId: string | null
    }, ExtArgs["result"]["committee"]>
    composites: {}
  }


  type CommitteeGetPayload<S extends boolean | null | undefined | CommitteeDefaultArgs> = $Result.GetResult<Prisma.$CommitteePayload, S>

  type CommitteeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommitteeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommitteeCountAggregateInputType | true
    }

  export interface CommitteeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Committee'], meta: { name: 'Committee' } }
    /**
     * Find zero or one Committee that matches the filter.
     * @param {CommitteeFindUniqueArgs} args - Arguments to find a Committee
     * @example
     * // Get one Committee
     * const committee = await prisma.committee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommitteeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommitteeFindUniqueArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Committee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommitteeFindUniqueOrThrowArgs} args - Arguments to find a Committee
     * @example
     * // Get one Committee
     * const committee = await prisma.committee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommitteeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommitteeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Committee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeFindFirstArgs} args - Arguments to find a Committee
     * @example
     * // Get one Committee
     * const committee = await prisma.committee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommitteeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommitteeFindFirstArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Committee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeFindFirstOrThrowArgs} args - Arguments to find a Committee
     * @example
     * // Get one Committee
     * const committee = await prisma.committee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommitteeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommitteeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Committees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Committees
     * const committees = await prisma.committee.findMany()
     * 
     * // Get first 10 Committees
     * const committees = await prisma.committee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const committeeWithIdOnly = await prisma.committee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommitteeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommitteeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Committee.
     * @param {CommitteeCreateArgs} args - Arguments to create a Committee.
     * @example
     * // Create one Committee
     * const Committee = await prisma.committee.create({
     *   data: {
     *     // ... data to create a Committee
     *   }
     * })
     * 
    **/
    create<T extends CommitteeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommitteeCreateArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Committees.
     *     @param {CommitteeCreateManyArgs} args - Arguments to create many Committees.
     *     @example
     *     // Create many Committees
     *     const committee = await prisma.committee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommitteeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommitteeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Committee.
     * @param {CommitteeDeleteArgs} args - Arguments to delete one Committee.
     * @example
     * // Delete one Committee
     * const Committee = await prisma.committee.delete({
     *   where: {
     *     // ... filter to delete one Committee
     *   }
     * })
     * 
    **/
    delete<T extends CommitteeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommitteeDeleteArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Committee.
     * @param {CommitteeUpdateArgs} args - Arguments to update one Committee.
     * @example
     * // Update one Committee
     * const committee = await prisma.committee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommitteeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommitteeUpdateArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Committees.
     * @param {CommitteeDeleteManyArgs} args - Arguments to filter Committees to delete.
     * @example
     * // Delete a few Committees
     * const { count } = await prisma.committee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommitteeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommitteeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Committees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Committees
     * const committee = await prisma.committee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommitteeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommitteeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Committee.
     * @param {CommitteeUpsertArgs} args - Arguments to update or create a Committee.
     * @example
     * // Update or create a Committee
     * const committee = await prisma.committee.upsert({
     *   create: {
     *     // ... data to create a Committee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Committee we want to update
     *   }
     * })
    **/
    upsert<T extends CommitteeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommitteeUpsertArgs<ExtArgs>>
    ): Prisma__CommitteeClient<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Committees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeCountArgs} args - Arguments to filter Committees to count.
     * @example
     * // Count the number of Committees
     * const count = await prisma.committee.count({
     *   where: {
     *     // ... the filter for the Committees we want to count
     *   }
     * })
    **/
    count<T extends CommitteeCountArgs>(
      args?: Subset<T, CommitteeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitteeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Committee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommitteeAggregateArgs>(args: Subset<T, CommitteeAggregateArgs>): Prisma.PrismaPromise<GetCommitteeAggregateType<T>>

    /**
     * Group by Committee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommitteeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitteeGroupByArgs['orderBy'] }
        : { orderBy?: CommitteeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommitteeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitteeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Committee model
   */
  readonly fields: CommitteeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Committee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitteeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    list<T extends Committee$listArgs<ExtArgs> = {}>(args?: Subset<T, Committee$listArgs<ExtArgs>>): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    witnesses<T extends Committee$witnessesArgs<ExtArgs> = {}>(args?: Subset<T, Committee$witnessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WitnessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Committee model
   */ 
  interface CommitteeFieldRefs {
    readonly id: FieldRef<"Committee", 'String'>
    readonly name: FieldRef<"Committee", 'String'>
    readonly createdAt: FieldRef<"Committee", 'DateTime'>
    readonly updatedAt: FieldRef<"Committee", 'DateTime'>
    readonly listId: FieldRef<"Committee", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Committee findUnique
   */
  export type CommitteeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * Filter, which Committee to fetch.
     */
    where: CommitteeWhereUniqueInput
  }


  /**
   * Committee findUniqueOrThrow
   */
  export type CommitteeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * Filter, which Committee to fetch.
     */
    where: CommitteeWhereUniqueInput
  }


  /**
   * Committee findFirst
   */
  export type CommitteeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * Filter, which Committee to fetch.
     */
    where?: CommitteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Committees to fetch.
     */
    orderBy?: CommitteeOrderByWithRelationInput | CommitteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Committees.
     */
    cursor?: CommitteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Committees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Committees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Committees.
     */
    distinct?: CommitteeScalarFieldEnum | CommitteeScalarFieldEnum[]
  }


  /**
   * Committee findFirstOrThrow
   */
  export type CommitteeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * Filter, which Committee to fetch.
     */
    where?: CommitteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Committees to fetch.
     */
    orderBy?: CommitteeOrderByWithRelationInput | CommitteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Committees.
     */
    cursor?: CommitteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Committees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Committees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Committees.
     */
    distinct?: CommitteeScalarFieldEnum | CommitteeScalarFieldEnum[]
  }


  /**
   * Committee findMany
   */
  export type CommitteeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * Filter, which Committees to fetch.
     */
    where?: CommitteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Committees to fetch.
     */
    orderBy?: CommitteeOrderByWithRelationInput | CommitteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Committees.
     */
    cursor?: CommitteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Committees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Committees.
     */
    skip?: number
    distinct?: CommitteeScalarFieldEnum | CommitteeScalarFieldEnum[]
  }


  /**
   * Committee create
   */
  export type CommitteeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * The data needed to create a Committee.
     */
    data: XOR<CommitteeCreateInput, CommitteeUncheckedCreateInput>
  }


  /**
   * Committee createMany
   */
  export type CommitteeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Committees.
     */
    data: CommitteeCreateManyInput | CommitteeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Committee update
   */
  export type CommitteeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * The data needed to update a Committee.
     */
    data: XOR<CommitteeUpdateInput, CommitteeUncheckedUpdateInput>
    /**
     * Choose, which Committee to update.
     */
    where: CommitteeWhereUniqueInput
  }


  /**
   * Committee updateMany
   */
  export type CommitteeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Committees.
     */
    data: XOR<CommitteeUpdateManyMutationInput, CommitteeUncheckedUpdateManyInput>
    /**
     * Filter which Committees to update
     */
    where?: CommitteeWhereInput
  }


  /**
   * Committee upsert
   */
  export type CommitteeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * The filter to search for the Committee to update in case it exists.
     */
    where: CommitteeWhereUniqueInput
    /**
     * In case the Committee found by the `where` argument doesn't exist, create a new Committee with this data.
     */
    create: XOR<CommitteeCreateInput, CommitteeUncheckedCreateInput>
    /**
     * In case the Committee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitteeUpdateInput, CommitteeUncheckedUpdateInput>
  }


  /**
   * Committee delete
   */
  export type CommitteeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    /**
     * Filter which Committee to delete.
     */
    where: CommitteeWhereUniqueInput
  }


  /**
   * Committee deleteMany
   */
  export type CommitteeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Committees to delete
     */
    where?: CommitteeWhereInput
  }


  /**
   * Committee.list
   */
  export type Committee$listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    where?: WitnessListWhereInput
  }


  /**
   * Committee.witnesses
   */
  export type Committee$witnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Witness
     */
    select?: WitnessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessInclude<ExtArgs> | null
    where?: WitnessWhereInput
    orderBy?: WitnessOrderByWithRelationInput | WitnessOrderByWithRelationInput[]
    cursor?: WitnessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WitnessScalarFieldEnum | WitnessScalarFieldEnum[]
  }


  /**
   * Committee without action
   */
  export type CommitteeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
  }



  /**
   * Model WitnessList
   */

  export type AggregateWitnessList = {
    _count: WitnessListCountAggregateOutputType | null
    _min: WitnessListMinAggregateOutputType | null
    _max: WitnessListMaxAggregateOutputType | null
  }

  export type WitnessListMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    department: string | null
  }

  export type WitnessListMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    department: string | null
  }

  export type WitnessListCountAggregateOutputType = {
    id: number
    timestamp: number
    createdAt: number
    updatedAt: number
    department: number
    _all: number
  }


  export type WitnessListMinAggregateInputType = {
    id?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type WitnessListMaxAggregateInputType = {
    id?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type WitnessListCountAggregateInputType = {
    id?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    department?: true
    _all?: true
  }

  export type WitnessListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WitnessList to aggregate.
     */
    where?: WitnessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WitnessLists to fetch.
     */
    orderBy?: WitnessListOrderByWithRelationInput | WitnessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WitnessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WitnessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WitnessLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WitnessLists
    **/
    _count?: true | WitnessListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WitnessListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WitnessListMaxAggregateInputType
  }

  export type GetWitnessListAggregateType<T extends WitnessListAggregateArgs> = {
        [P in keyof T & keyof AggregateWitnessList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWitnessList[P]>
      : GetScalarType<T[P], AggregateWitnessList[P]>
  }




  export type WitnessListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WitnessListWhereInput
    orderBy?: WitnessListOrderByWithAggregationInput | WitnessListOrderByWithAggregationInput[]
    by: WitnessListScalarFieldEnum[] | WitnessListScalarFieldEnum
    having?: WitnessListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WitnessListCountAggregateInputType | true
    _min?: WitnessListMinAggregateInputType
    _max?: WitnessListMaxAggregateInputType
  }

  export type WitnessListGroupByOutputType = {
    id: string
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    department: string
    _count: WitnessListCountAggregateOutputType | null
    _min: WitnessListMinAggregateOutputType | null
    _max: WitnessListMaxAggregateOutputType | null
  }

  type GetWitnessListGroupByPayload<T extends WitnessListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WitnessListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WitnessListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WitnessListGroupByOutputType[P]>
            : GetScalarType<T[P], WitnessListGroupByOutputType[P]>
        }
      >
    >


  export type WitnessListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
    committees?: boolean | WitnessList$committeesArgs<ExtArgs>
    _count?: boolean | WitnessListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["witnessList"]>

  export type WitnessListSelectScalar = {
    id?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }

  export type WitnessListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    committees?: boolean | WitnessList$committeesArgs<ExtArgs>
    _count?: boolean | WitnessListCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WitnessListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WitnessList"
    objects: {
      committees: Prisma.$CommitteePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      createdAt: Date
      updatedAt: Date
      department: string
    }, ExtArgs["result"]["witnessList"]>
    composites: {}
  }


  type WitnessListGetPayload<S extends boolean | null | undefined | WitnessListDefaultArgs> = $Result.GetResult<Prisma.$WitnessListPayload, S>

  type WitnessListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WitnessListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WitnessListCountAggregateInputType | true
    }

  export interface WitnessListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WitnessList'], meta: { name: 'WitnessList' } }
    /**
     * Find zero or one WitnessList that matches the filter.
     * @param {WitnessListFindUniqueArgs} args - Arguments to find a WitnessList
     * @example
     * // Get one WitnessList
     * const witnessList = await prisma.witnessList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WitnessListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessListFindUniqueArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WitnessList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WitnessListFindUniqueOrThrowArgs} args - Arguments to find a WitnessList
     * @example
     * // Get one WitnessList
     * const witnessList = await prisma.witnessList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WitnessListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WitnessList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessListFindFirstArgs} args - Arguments to find a WitnessList
     * @example
     * // Get one WitnessList
     * const witnessList = await prisma.witnessList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WitnessListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessListFindFirstArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WitnessList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessListFindFirstOrThrowArgs} args - Arguments to find a WitnessList
     * @example
     * // Get one WitnessList
     * const witnessList = await prisma.witnessList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WitnessListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WitnessLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WitnessLists
     * const witnessLists = await prisma.witnessList.findMany()
     * 
     * // Get first 10 WitnessLists
     * const witnessLists = await prisma.witnessList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const witnessListWithIdOnly = await prisma.witnessList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WitnessListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WitnessList.
     * @param {WitnessListCreateArgs} args - Arguments to create a WitnessList.
     * @example
     * // Create one WitnessList
     * const WitnessList = await prisma.witnessList.create({
     *   data: {
     *     // ... data to create a WitnessList
     *   }
     * })
     * 
    **/
    create<T extends WitnessListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessListCreateArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WitnessLists.
     *     @param {WitnessListCreateManyArgs} args - Arguments to create many WitnessLists.
     *     @example
     *     // Create many WitnessLists
     *     const witnessList = await prisma.witnessList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WitnessListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WitnessList.
     * @param {WitnessListDeleteArgs} args - Arguments to delete one WitnessList.
     * @example
     * // Delete one WitnessList
     * const WitnessList = await prisma.witnessList.delete({
     *   where: {
     *     // ... filter to delete one WitnessList
     *   }
     * })
     * 
    **/
    delete<T extends WitnessListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessListDeleteArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WitnessList.
     * @param {WitnessListUpdateArgs} args - Arguments to update one WitnessList.
     * @example
     * // Update one WitnessList
     * const witnessList = await prisma.witnessList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WitnessListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessListUpdateArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WitnessLists.
     * @param {WitnessListDeleteManyArgs} args - Arguments to filter WitnessLists to delete.
     * @example
     * // Delete a few WitnessLists
     * const { count } = await prisma.witnessList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WitnessListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WitnessListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WitnessLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WitnessLists
     * const witnessList = await prisma.witnessList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WitnessListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WitnessList.
     * @param {WitnessListUpsertArgs} args - Arguments to update or create a WitnessList.
     * @example
     * // Update or create a WitnessList
     * const witnessList = await prisma.witnessList.upsert({
     *   create: {
     *     // ... data to create a WitnessList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WitnessList we want to update
     *   }
     * })
    **/
    upsert<T extends WitnessListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WitnessListUpsertArgs<ExtArgs>>
    ): Prisma__WitnessListClient<$Result.GetResult<Prisma.$WitnessListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WitnessLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessListCountArgs} args - Arguments to filter WitnessLists to count.
     * @example
     * // Count the number of WitnessLists
     * const count = await prisma.witnessList.count({
     *   where: {
     *     // ... the filter for the WitnessLists we want to count
     *   }
     * })
    **/
    count<T extends WitnessListCountArgs>(
      args?: Subset<T, WitnessListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WitnessListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WitnessList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WitnessListAggregateArgs>(args: Subset<T, WitnessListAggregateArgs>): Prisma.PrismaPromise<GetWitnessListAggregateType<T>>

    /**
     * Group by WitnessList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WitnessListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WitnessListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WitnessListGroupByArgs['orderBy'] }
        : { orderBy?: WitnessListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WitnessListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWitnessListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WitnessList model
   */
  readonly fields: WitnessListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WitnessList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WitnessListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    committees<T extends WitnessList$committeesArgs<ExtArgs> = {}>(args?: Subset<T, WitnessList$committeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WitnessList model
   */ 
  interface WitnessListFieldRefs {
    readonly id: FieldRef<"WitnessList", 'String'>
    readonly timestamp: FieldRef<"WitnessList", 'DateTime'>
    readonly createdAt: FieldRef<"WitnessList", 'DateTime'>
    readonly updatedAt: FieldRef<"WitnessList", 'DateTime'>
    readonly department: FieldRef<"WitnessList", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WitnessList findUnique
   */
  export type WitnessListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * Filter, which WitnessList to fetch.
     */
    where: WitnessListWhereUniqueInput
  }


  /**
   * WitnessList findUniqueOrThrow
   */
  export type WitnessListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * Filter, which WitnessList to fetch.
     */
    where: WitnessListWhereUniqueInput
  }


  /**
   * WitnessList findFirst
   */
  export type WitnessListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * Filter, which WitnessList to fetch.
     */
    where?: WitnessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WitnessLists to fetch.
     */
    orderBy?: WitnessListOrderByWithRelationInput | WitnessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WitnessLists.
     */
    cursor?: WitnessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WitnessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WitnessLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WitnessLists.
     */
    distinct?: WitnessListScalarFieldEnum | WitnessListScalarFieldEnum[]
  }


  /**
   * WitnessList findFirstOrThrow
   */
  export type WitnessListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * Filter, which WitnessList to fetch.
     */
    where?: WitnessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WitnessLists to fetch.
     */
    orderBy?: WitnessListOrderByWithRelationInput | WitnessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WitnessLists.
     */
    cursor?: WitnessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WitnessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WitnessLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WitnessLists.
     */
    distinct?: WitnessListScalarFieldEnum | WitnessListScalarFieldEnum[]
  }


  /**
   * WitnessList findMany
   */
  export type WitnessListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * Filter, which WitnessLists to fetch.
     */
    where?: WitnessListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WitnessLists to fetch.
     */
    orderBy?: WitnessListOrderByWithRelationInput | WitnessListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WitnessLists.
     */
    cursor?: WitnessListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WitnessLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WitnessLists.
     */
    skip?: number
    distinct?: WitnessListScalarFieldEnum | WitnessListScalarFieldEnum[]
  }


  /**
   * WitnessList create
   */
  export type WitnessListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * The data needed to create a WitnessList.
     */
    data: XOR<WitnessListCreateInput, WitnessListUncheckedCreateInput>
  }


  /**
   * WitnessList createMany
   */
  export type WitnessListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WitnessLists.
     */
    data: WitnessListCreateManyInput | WitnessListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WitnessList update
   */
  export type WitnessListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * The data needed to update a WitnessList.
     */
    data: XOR<WitnessListUpdateInput, WitnessListUncheckedUpdateInput>
    /**
     * Choose, which WitnessList to update.
     */
    where: WitnessListWhereUniqueInput
  }


  /**
   * WitnessList updateMany
   */
  export type WitnessListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WitnessLists.
     */
    data: XOR<WitnessListUpdateManyMutationInput, WitnessListUncheckedUpdateManyInput>
    /**
     * Filter which WitnessLists to update
     */
    where?: WitnessListWhereInput
  }


  /**
   * WitnessList upsert
   */
  export type WitnessListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * The filter to search for the WitnessList to update in case it exists.
     */
    where: WitnessListWhereUniqueInput
    /**
     * In case the WitnessList found by the `where` argument doesn't exist, create a new WitnessList with this data.
     */
    create: XOR<WitnessListCreateInput, WitnessListUncheckedCreateInput>
    /**
     * In case the WitnessList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WitnessListUpdateInput, WitnessListUncheckedUpdateInput>
  }


  /**
   * WitnessList delete
   */
  export type WitnessListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
    /**
     * Filter which WitnessList to delete.
     */
    where: WitnessListWhereUniqueInput
  }


  /**
   * WitnessList deleteMany
   */
  export type WitnessListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WitnessLists to delete
     */
    where?: WitnessListWhereInput
  }


  /**
   * WitnessList.committees
   */
  export type WitnessList$committeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Committee
     */
    select?: CommitteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommitteeInclude<ExtArgs> | null
    where?: CommitteeWhereInput
    orderBy?: CommitteeOrderByWithRelationInput | CommitteeOrderByWithRelationInput[]
    cursor?: CommitteeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitteeScalarFieldEnum | CommitteeScalarFieldEnum[]
  }


  /**
   * WitnessList without action
   */
  export type WitnessListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WitnessList
     */
    select?: WitnessListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WitnessListInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WitnessScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    organization: 'organization',
    city: 'city',
    state: 'state',
    name: 'name',
    committeeId: 'committeeId'
  };

  export type WitnessScalarFieldEnum = (typeof WitnessScalarFieldEnum)[keyof typeof WitnessScalarFieldEnum]


  export const CommitteeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    listId: 'listId'
  };

  export type CommitteeScalarFieldEnum = (typeof CommitteeScalarFieldEnum)[keyof typeof CommitteeScalarFieldEnum]


  export const WitnessListScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    department: 'department'
  };

  export type WitnessListScalarFieldEnum = (typeof WitnessListScalarFieldEnum)[keyof typeof WitnessListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type WitnessWhereInput = {
    AND?: WitnessWhereInput | WitnessWhereInput[]
    OR?: WitnessWhereInput[]
    NOT?: WitnessWhereInput | WitnessWhereInput[]
    id?: UuidFilter<"Witness"> | string
    createdAt?: DateTimeFilter<"Witness"> | Date | string
    updatedAt?: DateTimeFilter<"Witness"> | Date | string
    title?: StringNullableFilter<"Witness"> | string | null
    organization?: StringFilter<"Witness"> | string
    city?: StringFilter<"Witness"> | string
    state?: StringFilter<"Witness"> | string
    name?: StringFilter<"Witness"> | string
    committeeId?: UuidFilter<"Witness"> | string
    committee?: XOR<CommitteeRelationFilter, CommitteeWhereInput>
  }

  export type WitnessOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrderInput | SortOrder
    organization?: SortOrder
    city?: SortOrder
    state?: SortOrder
    name?: SortOrder
    committeeId?: SortOrder
    committee?: CommitteeOrderByWithRelationInput
  }

  export type WitnessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    committeeId_name?: WitnessCommitteeIdNameCompoundUniqueInput
    AND?: WitnessWhereInput | WitnessWhereInput[]
    OR?: WitnessWhereInput[]
    NOT?: WitnessWhereInput | WitnessWhereInput[]
    createdAt?: DateTimeFilter<"Witness"> | Date | string
    updatedAt?: DateTimeFilter<"Witness"> | Date | string
    title?: StringNullableFilter<"Witness"> | string | null
    organization?: StringFilter<"Witness"> | string
    city?: StringFilter<"Witness"> | string
    state?: StringFilter<"Witness"> | string
    name?: StringFilter<"Witness"> | string
    committeeId?: UuidFilter<"Witness"> | string
    committee?: XOR<CommitteeRelationFilter, CommitteeWhereInput>
  }, "id" | "committeeId_name">

  export type WitnessOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrderInput | SortOrder
    organization?: SortOrder
    city?: SortOrder
    state?: SortOrder
    name?: SortOrder
    committeeId?: SortOrder
    _count?: WitnessCountOrderByAggregateInput
    _max?: WitnessMaxOrderByAggregateInput
    _min?: WitnessMinOrderByAggregateInput
  }

  export type WitnessScalarWhereWithAggregatesInput = {
    AND?: WitnessScalarWhereWithAggregatesInput | WitnessScalarWhereWithAggregatesInput[]
    OR?: WitnessScalarWhereWithAggregatesInput[]
    NOT?: WitnessScalarWhereWithAggregatesInput | WitnessScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Witness"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Witness"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Witness"> | Date | string
    title?: StringNullableWithAggregatesFilter<"Witness"> | string | null
    organization?: StringWithAggregatesFilter<"Witness"> | string
    city?: StringWithAggregatesFilter<"Witness"> | string
    state?: StringWithAggregatesFilter<"Witness"> | string
    name?: StringWithAggregatesFilter<"Witness"> | string
    committeeId?: UuidWithAggregatesFilter<"Witness"> | string
  }

  export type CommitteeWhereInput = {
    AND?: CommitteeWhereInput | CommitteeWhereInput[]
    OR?: CommitteeWhereInput[]
    NOT?: CommitteeWhereInput | CommitteeWhereInput[]
    id?: UuidFilter<"Committee"> | string
    name?: StringFilter<"Committee"> | string
    createdAt?: DateTimeFilter<"Committee"> | Date | string
    updatedAt?: DateTimeFilter<"Committee"> | Date | string
    listId?: UuidNullableFilter<"Committee"> | string | null
    list?: XOR<WitnessListNullableRelationFilter, WitnessListWhereInput> | null
    witnesses?: WitnessListRelationFilter
  }

  export type CommitteeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listId?: SortOrderInput | SortOrder
    list?: WitnessListOrderByWithRelationInput
    witnesses?: WitnessOrderByRelationAggregateInput
  }

  export type CommitteeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listId_name?: CommitteeListIdNameCompoundUniqueInput
    AND?: CommitteeWhereInput | CommitteeWhereInput[]
    OR?: CommitteeWhereInput[]
    NOT?: CommitteeWhereInput | CommitteeWhereInput[]
    name?: StringFilter<"Committee"> | string
    createdAt?: DateTimeFilter<"Committee"> | Date | string
    updatedAt?: DateTimeFilter<"Committee"> | Date | string
    listId?: UuidNullableFilter<"Committee"> | string | null
    list?: XOR<WitnessListNullableRelationFilter, WitnessListWhereInput> | null
    witnesses?: WitnessListRelationFilter
  }, "id" | "listId_name">

  export type CommitteeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listId?: SortOrderInput | SortOrder
    _count?: CommitteeCountOrderByAggregateInput
    _max?: CommitteeMaxOrderByAggregateInput
    _min?: CommitteeMinOrderByAggregateInput
  }

  export type CommitteeScalarWhereWithAggregatesInput = {
    AND?: CommitteeScalarWhereWithAggregatesInput | CommitteeScalarWhereWithAggregatesInput[]
    OR?: CommitteeScalarWhereWithAggregatesInput[]
    NOT?: CommitteeScalarWhereWithAggregatesInput | CommitteeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Committee"> | string
    name?: StringWithAggregatesFilter<"Committee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Committee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Committee"> | Date | string
    listId?: UuidNullableWithAggregatesFilter<"Committee"> | string | null
  }

  export type WitnessListWhereInput = {
    AND?: WitnessListWhereInput | WitnessListWhereInput[]
    OR?: WitnessListWhereInput[]
    NOT?: WitnessListWhereInput | WitnessListWhereInput[]
    id?: UuidFilter<"WitnessList"> | string
    timestamp?: DateTimeFilter<"WitnessList"> | Date | string
    createdAt?: DateTimeFilter<"WitnessList"> | Date | string
    updatedAt?: DateTimeFilter<"WitnessList"> | Date | string
    department?: StringFilter<"WitnessList"> | string
    committees?: CommitteeListRelationFilter
  }

  export type WitnessListOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
    committees?: CommitteeOrderByRelationAggregateInput
  }

  export type WitnessListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    timestamp_department?: WitnessListTimestampDepartmentCompoundUniqueInput
    AND?: WitnessListWhereInput | WitnessListWhereInput[]
    OR?: WitnessListWhereInput[]
    NOT?: WitnessListWhereInput | WitnessListWhereInput[]
    timestamp?: DateTimeFilter<"WitnessList"> | Date | string
    createdAt?: DateTimeFilter<"WitnessList"> | Date | string
    updatedAt?: DateTimeFilter<"WitnessList"> | Date | string
    department?: StringFilter<"WitnessList"> | string
    committees?: CommitteeListRelationFilter
  }, "id" | "timestamp_department">

  export type WitnessListOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
    _count?: WitnessListCountOrderByAggregateInput
    _max?: WitnessListMaxOrderByAggregateInput
    _min?: WitnessListMinOrderByAggregateInput
  }

  export type WitnessListScalarWhereWithAggregatesInput = {
    AND?: WitnessListScalarWhereWithAggregatesInput | WitnessListScalarWhereWithAggregatesInput[]
    OR?: WitnessListScalarWhereWithAggregatesInput[]
    NOT?: WitnessListScalarWhereWithAggregatesInput | WitnessListScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WitnessList"> | string
    timestamp?: DateTimeWithAggregatesFilter<"WitnessList"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WitnessList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WitnessList"> | Date | string
    department?: StringWithAggregatesFilter<"WitnessList"> | string
  }

  export type WitnessCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    organization: string
    city: string
    state: string
    name: string
    committee: CommitteeCreateNestedOneWithoutWitnessesInput
  }

  export type WitnessUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    organization: string
    city: string
    state: string
    name: string
    committeeId: string
  }

  export type WitnessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    committee?: CommitteeUpdateOneRequiredWithoutWitnessesNestedInput
  }

  export type WitnessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    committeeId?: StringFieldUpdateOperationsInput | string
  }

  export type WitnessCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    organization: string
    city: string
    state: string
    name: string
    committeeId: string
  }

  export type WitnessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WitnessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    committeeId?: StringFieldUpdateOperationsInput | string
  }

  export type CommitteeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    list?: WitnessListCreateNestedOneWithoutCommitteesInput
    witnesses?: WitnessCreateNestedManyWithoutCommitteeInput
  }

  export type CommitteeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listId?: string | null
    witnesses?: WitnessUncheckedCreateNestedManyWithoutCommitteeInput
  }

  export type CommitteeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: WitnessListUpdateOneWithoutCommitteesNestedInput
    witnesses?: WitnessUpdateManyWithoutCommitteeNestedInput
  }

  export type CommitteeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
    witnesses?: WitnessUncheckedUpdateManyWithoutCommitteeNestedInput
  }

  export type CommitteeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listId?: string | null
  }

  export type CommitteeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WitnessListCreateInput = {
    id?: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: string
    committees?: CommitteeCreateNestedManyWithoutListInput
  }

  export type WitnessListUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: string
    committees?: CommitteeUncheckedCreateNestedManyWithoutListInput
  }

  export type WitnessListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
    committees?: CommitteeUpdateManyWithoutListNestedInput
  }

  export type WitnessListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
    committees?: CommitteeUncheckedUpdateManyWithoutListNestedInput
  }

  export type WitnessListCreateManyInput = {
    id?: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: string
  }

  export type WitnessListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type WitnessListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CommitteeRelationFilter = {
    is?: CommitteeWhereInput
    isNot?: CommitteeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WitnessCommitteeIdNameCompoundUniqueInput = {
    committeeId: string
    name: string
  }

  export type WitnessCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    city?: SortOrder
    state?: SortOrder
    name?: SortOrder
    committeeId?: SortOrder
  }

  export type WitnessMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    city?: SortOrder
    state?: SortOrder
    name?: SortOrder
    committeeId?: SortOrder
  }

  export type WitnessMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    city?: SortOrder
    state?: SortOrder
    name?: SortOrder
    committeeId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type WitnessListNullableRelationFilter = {
    is?: WitnessListWhereInput | null
    isNot?: WitnessListWhereInput | null
  }

  export type WitnessListRelationFilter = {
    every?: WitnessWhereInput
    some?: WitnessWhereInput
    none?: WitnessWhereInput
  }

  export type WitnessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommitteeListIdNameCompoundUniqueInput = {
    listId: string
    name: string
  }

  export type CommitteeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listId?: SortOrder
  }

  export type CommitteeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listId?: SortOrder
  }

  export type CommitteeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CommitteeListRelationFilter = {
    every?: CommitteeWhereInput
    some?: CommitteeWhereInput
    none?: CommitteeWhereInput
  }

  export type CommitteeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WitnessListTimestampDepartmentCompoundUniqueInput = {
    timestamp: Date | string
    department: string
  }

  export type WitnessListCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type WitnessListMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type WitnessListMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type CommitteeCreateNestedOneWithoutWitnessesInput = {
    create?: XOR<CommitteeCreateWithoutWitnessesInput, CommitteeUncheckedCreateWithoutWitnessesInput>
    connectOrCreate?: CommitteeCreateOrConnectWithoutWitnessesInput
    connect?: CommitteeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommitteeUpdateOneRequiredWithoutWitnessesNestedInput = {
    create?: XOR<CommitteeCreateWithoutWitnessesInput, CommitteeUncheckedCreateWithoutWitnessesInput>
    connectOrCreate?: CommitteeCreateOrConnectWithoutWitnessesInput
    upsert?: CommitteeUpsertWithoutWitnessesInput
    connect?: CommitteeWhereUniqueInput
    update?: XOR<XOR<CommitteeUpdateToOneWithWhereWithoutWitnessesInput, CommitteeUpdateWithoutWitnessesInput>, CommitteeUncheckedUpdateWithoutWitnessesInput>
  }

  export type WitnessListCreateNestedOneWithoutCommitteesInput = {
    create?: XOR<WitnessListCreateWithoutCommitteesInput, WitnessListUncheckedCreateWithoutCommitteesInput>
    connectOrCreate?: WitnessListCreateOrConnectWithoutCommitteesInput
    connect?: WitnessListWhereUniqueInput
  }

  export type WitnessCreateNestedManyWithoutCommitteeInput = {
    create?: XOR<WitnessCreateWithoutCommitteeInput, WitnessUncheckedCreateWithoutCommitteeInput> | WitnessCreateWithoutCommitteeInput[] | WitnessUncheckedCreateWithoutCommitteeInput[]
    connectOrCreate?: WitnessCreateOrConnectWithoutCommitteeInput | WitnessCreateOrConnectWithoutCommitteeInput[]
    createMany?: WitnessCreateManyCommitteeInputEnvelope
    connect?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
  }

  export type WitnessUncheckedCreateNestedManyWithoutCommitteeInput = {
    create?: XOR<WitnessCreateWithoutCommitteeInput, WitnessUncheckedCreateWithoutCommitteeInput> | WitnessCreateWithoutCommitteeInput[] | WitnessUncheckedCreateWithoutCommitteeInput[]
    connectOrCreate?: WitnessCreateOrConnectWithoutCommitteeInput | WitnessCreateOrConnectWithoutCommitteeInput[]
    createMany?: WitnessCreateManyCommitteeInputEnvelope
    connect?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
  }

  export type WitnessListUpdateOneWithoutCommitteesNestedInput = {
    create?: XOR<WitnessListCreateWithoutCommitteesInput, WitnessListUncheckedCreateWithoutCommitteesInput>
    connectOrCreate?: WitnessListCreateOrConnectWithoutCommitteesInput
    upsert?: WitnessListUpsertWithoutCommitteesInput
    disconnect?: WitnessListWhereInput | boolean
    delete?: WitnessListWhereInput | boolean
    connect?: WitnessListWhereUniqueInput
    update?: XOR<XOR<WitnessListUpdateToOneWithWhereWithoutCommitteesInput, WitnessListUpdateWithoutCommitteesInput>, WitnessListUncheckedUpdateWithoutCommitteesInput>
  }

  export type WitnessUpdateManyWithoutCommitteeNestedInput = {
    create?: XOR<WitnessCreateWithoutCommitteeInput, WitnessUncheckedCreateWithoutCommitteeInput> | WitnessCreateWithoutCommitteeInput[] | WitnessUncheckedCreateWithoutCommitteeInput[]
    connectOrCreate?: WitnessCreateOrConnectWithoutCommitteeInput | WitnessCreateOrConnectWithoutCommitteeInput[]
    upsert?: WitnessUpsertWithWhereUniqueWithoutCommitteeInput | WitnessUpsertWithWhereUniqueWithoutCommitteeInput[]
    createMany?: WitnessCreateManyCommitteeInputEnvelope
    set?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    disconnect?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    delete?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    connect?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    update?: WitnessUpdateWithWhereUniqueWithoutCommitteeInput | WitnessUpdateWithWhereUniqueWithoutCommitteeInput[]
    updateMany?: WitnessUpdateManyWithWhereWithoutCommitteeInput | WitnessUpdateManyWithWhereWithoutCommitteeInput[]
    deleteMany?: WitnessScalarWhereInput | WitnessScalarWhereInput[]
  }

  export type WitnessUncheckedUpdateManyWithoutCommitteeNestedInput = {
    create?: XOR<WitnessCreateWithoutCommitteeInput, WitnessUncheckedCreateWithoutCommitteeInput> | WitnessCreateWithoutCommitteeInput[] | WitnessUncheckedCreateWithoutCommitteeInput[]
    connectOrCreate?: WitnessCreateOrConnectWithoutCommitteeInput | WitnessCreateOrConnectWithoutCommitteeInput[]
    upsert?: WitnessUpsertWithWhereUniqueWithoutCommitteeInput | WitnessUpsertWithWhereUniqueWithoutCommitteeInput[]
    createMany?: WitnessCreateManyCommitteeInputEnvelope
    set?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    disconnect?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    delete?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    connect?: WitnessWhereUniqueInput | WitnessWhereUniqueInput[]
    update?: WitnessUpdateWithWhereUniqueWithoutCommitteeInput | WitnessUpdateWithWhereUniqueWithoutCommitteeInput[]
    updateMany?: WitnessUpdateManyWithWhereWithoutCommitteeInput | WitnessUpdateManyWithWhereWithoutCommitteeInput[]
    deleteMany?: WitnessScalarWhereInput | WitnessScalarWhereInput[]
  }

  export type CommitteeCreateNestedManyWithoutListInput = {
    create?: XOR<CommitteeCreateWithoutListInput, CommitteeUncheckedCreateWithoutListInput> | CommitteeCreateWithoutListInput[] | CommitteeUncheckedCreateWithoutListInput[]
    connectOrCreate?: CommitteeCreateOrConnectWithoutListInput | CommitteeCreateOrConnectWithoutListInput[]
    createMany?: CommitteeCreateManyListInputEnvelope
    connect?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
  }

  export type CommitteeUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<CommitteeCreateWithoutListInput, CommitteeUncheckedCreateWithoutListInput> | CommitteeCreateWithoutListInput[] | CommitteeUncheckedCreateWithoutListInput[]
    connectOrCreate?: CommitteeCreateOrConnectWithoutListInput | CommitteeCreateOrConnectWithoutListInput[]
    createMany?: CommitteeCreateManyListInputEnvelope
    connect?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
  }

  export type CommitteeUpdateManyWithoutListNestedInput = {
    create?: XOR<CommitteeCreateWithoutListInput, CommitteeUncheckedCreateWithoutListInput> | CommitteeCreateWithoutListInput[] | CommitteeUncheckedCreateWithoutListInput[]
    connectOrCreate?: CommitteeCreateOrConnectWithoutListInput | CommitteeCreateOrConnectWithoutListInput[]
    upsert?: CommitteeUpsertWithWhereUniqueWithoutListInput | CommitteeUpsertWithWhereUniqueWithoutListInput[]
    createMany?: CommitteeCreateManyListInputEnvelope
    set?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    disconnect?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    delete?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    connect?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    update?: CommitteeUpdateWithWhereUniqueWithoutListInput | CommitteeUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: CommitteeUpdateManyWithWhereWithoutListInput | CommitteeUpdateManyWithWhereWithoutListInput[]
    deleteMany?: CommitteeScalarWhereInput | CommitteeScalarWhereInput[]
  }

  export type CommitteeUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<CommitteeCreateWithoutListInput, CommitteeUncheckedCreateWithoutListInput> | CommitteeCreateWithoutListInput[] | CommitteeUncheckedCreateWithoutListInput[]
    connectOrCreate?: CommitteeCreateOrConnectWithoutListInput | CommitteeCreateOrConnectWithoutListInput[]
    upsert?: CommitteeUpsertWithWhereUniqueWithoutListInput | CommitteeUpsertWithWhereUniqueWithoutListInput[]
    createMany?: CommitteeCreateManyListInputEnvelope
    set?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    disconnect?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    delete?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    connect?: CommitteeWhereUniqueInput | CommitteeWhereUniqueInput[]
    update?: CommitteeUpdateWithWhereUniqueWithoutListInput | CommitteeUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: CommitteeUpdateManyWithWhereWithoutListInput | CommitteeUpdateManyWithWhereWithoutListInput[]
    deleteMany?: CommitteeScalarWhereInput | CommitteeScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CommitteeCreateWithoutWitnessesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    list?: WitnessListCreateNestedOneWithoutCommitteesInput
  }

  export type CommitteeUncheckedCreateWithoutWitnessesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listId?: string | null
  }

  export type CommitteeCreateOrConnectWithoutWitnessesInput = {
    where: CommitteeWhereUniqueInput
    create: XOR<CommitteeCreateWithoutWitnessesInput, CommitteeUncheckedCreateWithoutWitnessesInput>
  }

  export type CommitteeUpsertWithoutWitnessesInput = {
    update: XOR<CommitteeUpdateWithoutWitnessesInput, CommitteeUncheckedUpdateWithoutWitnessesInput>
    create: XOR<CommitteeCreateWithoutWitnessesInput, CommitteeUncheckedCreateWithoutWitnessesInput>
    where?: CommitteeWhereInput
  }

  export type CommitteeUpdateToOneWithWhereWithoutWitnessesInput = {
    where?: CommitteeWhereInput
    data: XOR<CommitteeUpdateWithoutWitnessesInput, CommitteeUncheckedUpdateWithoutWitnessesInput>
  }

  export type CommitteeUpdateWithoutWitnessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: WitnessListUpdateOneWithoutCommitteesNestedInput
  }

  export type CommitteeUncheckedUpdateWithoutWitnessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WitnessListCreateWithoutCommitteesInput = {
    id?: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: string
  }

  export type WitnessListUncheckedCreateWithoutCommitteesInput = {
    id?: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: string
  }

  export type WitnessListCreateOrConnectWithoutCommitteesInput = {
    where: WitnessListWhereUniqueInput
    create: XOR<WitnessListCreateWithoutCommitteesInput, WitnessListUncheckedCreateWithoutCommitteesInput>
  }

  export type WitnessCreateWithoutCommitteeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    organization: string
    city: string
    state: string
    name: string
  }

  export type WitnessUncheckedCreateWithoutCommitteeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    organization: string
    city: string
    state: string
    name: string
  }

  export type WitnessCreateOrConnectWithoutCommitteeInput = {
    where: WitnessWhereUniqueInput
    create: XOR<WitnessCreateWithoutCommitteeInput, WitnessUncheckedCreateWithoutCommitteeInput>
  }

  export type WitnessCreateManyCommitteeInputEnvelope = {
    data: WitnessCreateManyCommitteeInput | WitnessCreateManyCommitteeInput[]
    skipDuplicates?: boolean
  }

  export type WitnessListUpsertWithoutCommitteesInput = {
    update: XOR<WitnessListUpdateWithoutCommitteesInput, WitnessListUncheckedUpdateWithoutCommitteesInput>
    create: XOR<WitnessListCreateWithoutCommitteesInput, WitnessListUncheckedCreateWithoutCommitteesInput>
    where?: WitnessListWhereInput
  }

  export type WitnessListUpdateToOneWithWhereWithoutCommitteesInput = {
    where?: WitnessListWhereInput
    data: XOR<WitnessListUpdateWithoutCommitteesInput, WitnessListUncheckedUpdateWithoutCommitteesInput>
  }

  export type WitnessListUpdateWithoutCommitteesInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type WitnessListUncheckedUpdateWithoutCommitteesInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type WitnessUpsertWithWhereUniqueWithoutCommitteeInput = {
    where: WitnessWhereUniqueInput
    update: XOR<WitnessUpdateWithoutCommitteeInput, WitnessUncheckedUpdateWithoutCommitteeInput>
    create: XOR<WitnessCreateWithoutCommitteeInput, WitnessUncheckedCreateWithoutCommitteeInput>
  }

  export type WitnessUpdateWithWhereUniqueWithoutCommitteeInput = {
    where: WitnessWhereUniqueInput
    data: XOR<WitnessUpdateWithoutCommitteeInput, WitnessUncheckedUpdateWithoutCommitteeInput>
  }

  export type WitnessUpdateManyWithWhereWithoutCommitteeInput = {
    where: WitnessScalarWhereInput
    data: XOR<WitnessUpdateManyMutationInput, WitnessUncheckedUpdateManyWithoutCommitteeInput>
  }

  export type WitnessScalarWhereInput = {
    AND?: WitnessScalarWhereInput | WitnessScalarWhereInput[]
    OR?: WitnessScalarWhereInput[]
    NOT?: WitnessScalarWhereInput | WitnessScalarWhereInput[]
    id?: UuidFilter<"Witness"> | string
    createdAt?: DateTimeFilter<"Witness"> | Date | string
    updatedAt?: DateTimeFilter<"Witness"> | Date | string
    title?: StringNullableFilter<"Witness"> | string | null
    organization?: StringFilter<"Witness"> | string
    city?: StringFilter<"Witness"> | string
    state?: StringFilter<"Witness"> | string
    name?: StringFilter<"Witness"> | string
    committeeId?: UuidFilter<"Witness"> | string
  }

  export type CommitteeCreateWithoutListInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    witnesses?: WitnessCreateNestedManyWithoutCommitteeInput
  }

  export type CommitteeUncheckedCreateWithoutListInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    witnesses?: WitnessUncheckedCreateNestedManyWithoutCommitteeInput
  }

  export type CommitteeCreateOrConnectWithoutListInput = {
    where: CommitteeWhereUniqueInput
    create: XOR<CommitteeCreateWithoutListInput, CommitteeUncheckedCreateWithoutListInput>
  }

  export type CommitteeCreateManyListInputEnvelope = {
    data: CommitteeCreateManyListInput | CommitteeCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type CommitteeUpsertWithWhereUniqueWithoutListInput = {
    where: CommitteeWhereUniqueInput
    update: XOR<CommitteeUpdateWithoutListInput, CommitteeUncheckedUpdateWithoutListInput>
    create: XOR<CommitteeCreateWithoutListInput, CommitteeUncheckedCreateWithoutListInput>
  }

  export type CommitteeUpdateWithWhereUniqueWithoutListInput = {
    where: CommitteeWhereUniqueInput
    data: XOR<CommitteeUpdateWithoutListInput, CommitteeUncheckedUpdateWithoutListInput>
  }

  export type CommitteeUpdateManyWithWhereWithoutListInput = {
    where: CommitteeScalarWhereInput
    data: XOR<CommitteeUpdateManyMutationInput, CommitteeUncheckedUpdateManyWithoutListInput>
  }

  export type CommitteeScalarWhereInput = {
    AND?: CommitteeScalarWhereInput | CommitteeScalarWhereInput[]
    OR?: CommitteeScalarWhereInput[]
    NOT?: CommitteeScalarWhereInput | CommitteeScalarWhereInput[]
    id?: UuidFilter<"Committee"> | string
    name?: StringFilter<"Committee"> | string
    createdAt?: DateTimeFilter<"Committee"> | Date | string
    updatedAt?: DateTimeFilter<"Committee"> | Date | string
    listId?: UuidNullableFilter<"Committee"> | string | null
  }

  export type WitnessCreateManyCommitteeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    organization: string
    city: string
    state: string
    name: string
  }

  export type WitnessUpdateWithoutCommitteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WitnessUncheckedUpdateWithoutCommitteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WitnessUncheckedUpdateManyWithoutCommitteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommitteeCreateManyListInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    witnesses?: WitnessUpdateManyWithoutCommitteeNestedInput
  }

  export type CommitteeUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    witnesses?: WitnessUncheckedUpdateManyWithoutCommitteeNestedInput
  }

  export type CommitteeUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CommitteeCountOutputTypeDefaultArgs instead
     */
    export type CommitteeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommitteeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WitnessListCountOutputTypeDefaultArgs instead
     */
    export type WitnessListCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WitnessListCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WitnessDefaultArgs instead
     */
    export type WitnessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WitnessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommitteeDefaultArgs instead
     */
    export type CommitteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommitteeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WitnessListDefaultArgs instead
     */
    export type WitnessListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WitnessListDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
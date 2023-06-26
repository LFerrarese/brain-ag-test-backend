
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model State
 * 
 */
export type State = {
  id: string
  name: string
  acronym: string
}

/**
 * Model Crop
 * 
 */
export type Crop = {
  id: string
  name: string
}

/**
 * Model City
 * 
 */
export type City = {
  id: string
  stateId: string
  name: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  phone: string
  name: string
  password: string
}

/**
 * Model Farmer
 * 
 */
export type Farmer = {
  id: string
  name: string
  document: string
  farmName: string
  totalArea: number
  arableArea: number
  vegetationArea: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model FarmerCrop
 * 
 */
export type FarmerCrop = {
  id: string
  farmerId: string
  cropId: string
}

/**
 * Model Address
 * 
 */
export type Address = {
  id: string
  farmerId: string
  stateId: string
  cityId: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more States
 * const states = await prisma.state.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more States
   * const states = await prisma.state.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<GlobalReject>;

  /**
   * `prisma.crop`: Exposes CRUD operations for the **Crop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crop.findMany()
    * ```
    */
  get crop(): Prisma.CropDelegate<GlobalReject>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.farmer`: Exposes CRUD operations for the **Farmer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmers
    * const farmers = await prisma.farmer.findMany()
    * ```
    */
  get farmer(): Prisma.FarmerDelegate<GlobalReject>;

  /**
   * `prisma.farmerCrop`: Exposes CRUD operations for the **FarmerCrop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FarmerCrops
    * const farmerCrops = await prisma.farmerCrop.findMany()
    * ```
    */
  get farmerCrop(): Prisma.FarmerCropDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    State: 'State',
    Crop: 'Crop',
    City: 'City',
    User: 'User',
    Farmer: 'Farmer',
    FarmerCrop: 'FarmerCrop',
    Address: 'Address'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StateCountOutputType
   */


  export type StateCountOutputType = {
    City: number
    Address: number
  }

  export type StateCountOutputTypeSelect = {
    City?: boolean
    Address?: boolean
  }

  export type StateCountOutputTypeGetPayload<S extends boolean | null | undefined | StateCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StateCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StateCountOutputTypeArgs)
    ? StateCountOutputType 
    : S extends { select: any } & (StateCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StateCountOutputType ? StateCountOutputType[P] : never
  } 
      : StateCountOutputType




  // Custom InputTypes

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect | null
  }



  /**
   * Count Type CropCountOutputType
   */


  export type CropCountOutputType = {
    FarmerCrop: number
  }

  export type CropCountOutputTypeSelect = {
    FarmerCrop?: boolean
  }

  export type CropCountOutputTypeGetPayload<S extends boolean | null | undefined | CropCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CropCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CropCountOutputTypeArgs)
    ? CropCountOutputType 
    : S extends { select: any } & (CropCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CropCountOutputType ? CropCountOutputType[P] : never
  } 
      : CropCountOutputType




  // Custom InputTypes

  /**
   * CropCountOutputType without action
   */
  export type CropCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CropCountOutputType
     */
    select?: CropCountOutputTypeSelect | null
  }



  /**
   * Count Type CityCountOutputType
   */


  export type CityCountOutputType = {
    Address: number
  }

  export type CityCountOutputTypeSelect = {
    Address?: boolean
  }

  export type CityCountOutputTypeGetPayload<S extends boolean | null | undefined | CityCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CityCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CityCountOutputTypeArgs)
    ? CityCountOutputType 
    : S extends { select: any } & (CityCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CityCountOutputType ? CityCountOutputType[P] : never
  } 
      : CityCountOutputType




  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect | null
  }



  /**
   * Count Type FarmerCountOutputType
   */


  export type FarmerCountOutputType = {
    FarmerCrop: number
  }

  export type FarmerCountOutputTypeSelect = {
    FarmerCrop?: boolean
  }

  export type FarmerCountOutputTypeGetPayload<S extends boolean | null | undefined | FarmerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FarmerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FarmerCountOutputTypeArgs)
    ? FarmerCountOutputType 
    : S extends { select: any } & (FarmerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FarmerCountOutputType ? FarmerCountOutputType[P] : never
  } 
      : FarmerCountOutputType




  // Custom InputTypes

  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FarmerCountOutputType
     */
    select?: FarmerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model State
   */


  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateMinAggregateOutputType = {
    id: string | null
    name: string | null
    acronym: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    acronym: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    acronym: number
    _all: number
  }


  export type StateMinAggregateInputType = {
    id?: true
    name?: true
    acronym?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
    acronym?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    acronym?: true
    _all?: true
  }

  export type StateAggregateArgs = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs = {
    where?: StateWhereInput
    orderBy?: Enumerable<StateOrderByWithAggregationInput>
    by: StateScalarFieldEnum[]
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }


  export type StateGroupByOutputType = {
    id: string
    name: string
    acronym: string
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect = {
    id?: boolean
    name?: boolean
    acronym?: boolean
    City?: boolean | State$CityArgs
    Address?: boolean | State$AddressArgs
    _count?: boolean | StateCountOutputTypeArgs
  }


  export type StateInclude = {
    City?: boolean | State$CityArgs
    Address?: boolean | State$AddressArgs
    _count?: boolean | StateCountOutputTypeArgs
  }

  export type StateGetPayload<S extends boolean | null | undefined | StateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? State :
    S extends undefined ? never :
    S extends { include: any } & (StateArgs | StateFindManyArgs)
    ? State  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'City' ? Array < CityGetPayload<S['include'][P]>>  :
        P extends 'Address' ? Array < AddressGetPayload<S['include'][P]>>  :
        P extends '_count' ? StateCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StateArgs | StateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'City' ? Array < CityGetPayload<S['select'][P]>>  :
        P extends 'Address' ? Array < AddressGetPayload<S['select'][P]>>  :
        P extends '_count' ? StateCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof State ? State[P] : never
  } 
      : State


  type StateCountArgs = 
    Omit<StateFindManyArgs, 'select' | 'include'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'State'> extends True ? Prisma__StateClient<StateGetPayload<T>> : Prisma__StateClient<StateGetPayload<T> | null, null>

    /**
     * Find one State that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StateFindUniqueOrThrowArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'State'> extends True ? Prisma__StateClient<StateGetPayload<T>> : Prisma__StateClient<StateGetPayload<T> | null, null>

    /**
     * Find the first State that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StateFindFirstOrThrowArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StateFindManyArgs>(
      args?: SelectSubset<T, StateFindManyArgs>
    ): Prisma.PrismaPromise<Array<StateGetPayload<T>>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
    **/
    create<T extends StateCreateArgs>(
      args: SelectSubset<T, StateCreateArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Create many States.
     *     @param {StateCreateManyArgs} args - Arguments to create many States.
     *     @example
     *     // Create many States
     *     const state = await prisma.state.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StateCreateManyArgs>(
      args?: SelectSubset<T, StateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
    **/
    delete<T extends StateDeleteArgs>(
      args: SelectSubset<T, StateDeleteArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StateUpdateArgs>(
      args: SelectSubset<T, StateUpdateArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StateDeleteManyArgs>(
      args?: SelectSubset<T, StateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StateUpdateManyArgs>(
      args: SelectSubset<T, StateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
    **/
    upsert<T extends StateUpsertArgs>(
      args: SelectSubset<T, StateUpsertArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    City<T extends State$CityArgs= {}>(args?: Subset<T, State$CityArgs>): Prisma.PrismaPromise<Array<CityGetPayload<T>>| Null>;

    Address<T extends State$AddressArgs= {}>(args?: Subset<T, State$AddressArgs>): Prisma.PrismaPromise<Array<AddressGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * State base type for findUnique actions
   */
  export type StateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUnique
   */
  export interface StateFindUniqueArgs extends StateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }


  /**
   * State base type for findFirst actions
   */
  export type StateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: Enumerable<StateScalarFieldEnum>
  }

  /**
   * State findFirst
   */
  export interface StateFindFirstArgs extends StateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: Enumerable<StateScalarFieldEnum>
  }


  /**
   * State findMany
   */
  export type StateFindManyArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: Enumerable<StateScalarFieldEnum>
  }


  /**
   * State create
   */
  export type StateCreateArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }


  /**
   * State createMany
   */
  export type StateCreateManyArgs = {
    /**
     * The data used to create many States.
     */
    data: Enumerable<StateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * State update
   */
  export type StateUpdateArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }


  /**
   * State updateMany
   */
  export type StateUpdateManyArgs = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
  }


  /**
   * State upsert
   */
  export type StateUpsertArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }


  /**
   * State delete
   */
  export type StateDeleteArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }


  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
  }


  /**
   * State.City
   */
  export type State$CityArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    where?: CityWhereInput
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * State.Address
   */
  export type State$AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * State without action
   */
  export type StateArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
  }



  /**
   * Model Crop
   */


  export type AggregateCrop = {
    _count: CropCountAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  export type CropMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CropMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CropCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CropMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CropMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CropCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CropAggregateArgs = {
    /**
     * Filter which Crop to aggregate.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: Enumerable<CropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crops
    **/
    _count?: true | CropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropMaxAggregateInputType
  }

  export type GetCropAggregateType<T extends CropAggregateArgs> = {
        [P in keyof T & keyof AggregateCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrop[P]>
      : GetScalarType<T[P], AggregateCrop[P]>
  }




  export type CropGroupByArgs = {
    where?: CropWhereInput
    orderBy?: Enumerable<CropOrderByWithAggregationInput>
    by: CropScalarFieldEnum[]
    having?: CropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropCountAggregateInputType | true
    _min?: CropMinAggregateInputType
    _max?: CropMaxAggregateInputType
  }


  export type CropGroupByOutputType = {
    id: string
    name: string
    _count: CropCountAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  type GetCropGroupByPayload<T extends CropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropGroupByOutputType[P]>
            : GetScalarType<T[P], CropGroupByOutputType[P]>
        }
      >
    >


  export type CropSelect = {
    id?: boolean
    name?: boolean
    FarmerCrop?: boolean | Crop$FarmerCropArgs
    _count?: boolean | CropCountOutputTypeArgs
  }


  export type CropInclude = {
    FarmerCrop?: boolean | Crop$FarmerCropArgs
    _count?: boolean | CropCountOutputTypeArgs
  }

  export type CropGetPayload<S extends boolean | null | undefined | CropArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Crop :
    S extends undefined ? never :
    S extends { include: any } & (CropArgs | CropFindManyArgs)
    ? Crop  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'FarmerCrop' ? Array < FarmerCropGetPayload<S['include'][P]>>  :
        P extends '_count' ? CropCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CropArgs | CropFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'FarmerCrop' ? Array < FarmerCropGetPayload<S['select'][P]>>  :
        P extends '_count' ? CropCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Crop ? Crop[P] : never
  } 
      : Crop


  type CropCountArgs = 
    Omit<CropFindManyArgs, 'select' | 'include'> & {
      select?: CropCountAggregateInputType | true
    }

  export interface CropDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Crop that matches the filter.
     * @param {CropFindUniqueArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CropFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CropFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Crop'> extends True ? Prisma__CropClient<CropGetPayload<T>> : Prisma__CropClient<CropGetPayload<T> | null, null>

    /**
     * Find one Crop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CropFindUniqueOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CropFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CropFindUniqueOrThrowArgs>
    ): Prisma__CropClient<CropGetPayload<T>>

    /**
     * Find the first Crop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CropFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CropFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Crop'> extends True ? Prisma__CropClient<CropGetPayload<T>> : Prisma__CropClient<CropGetPayload<T> | null, null>

    /**
     * Find the first Crop that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CropFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CropFindFirstOrThrowArgs>
    ): Prisma__CropClient<CropGetPayload<T>>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crop.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropWithIdOnly = await prisma.crop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CropFindManyArgs>(
      args?: SelectSubset<T, CropFindManyArgs>
    ): Prisma.PrismaPromise<Array<CropGetPayload<T>>>

    /**
     * Create a Crop.
     * @param {CropCreateArgs} args - Arguments to create a Crop.
     * @example
     * // Create one Crop
     * const Crop = await prisma.crop.create({
     *   data: {
     *     // ... data to create a Crop
     *   }
     * })
     * 
    **/
    create<T extends CropCreateArgs>(
      args: SelectSubset<T, CropCreateArgs>
    ): Prisma__CropClient<CropGetPayload<T>>

    /**
     * Create many Crops.
     *     @param {CropCreateManyArgs} args - Arguments to create many Crops.
     *     @example
     *     // Create many Crops
     *     const crop = await prisma.crop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CropCreateManyArgs>(
      args?: SelectSubset<T, CropCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Crop.
     * @param {CropDeleteArgs} args - Arguments to delete one Crop.
     * @example
     * // Delete one Crop
     * const Crop = await prisma.crop.delete({
     *   where: {
     *     // ... filter to delete one Crop
     *   }
     * })
     * 
    **/
    delete<T extends CropDeleteArgs>(
      args: SelectSubset<T, CropDeleteArgs>
    ): Prisma__CropClient<CropGetPayload<T>>

    /**
     * Update one Crop.
     * @param {CropUpdateArgs} args - Arguments to update one Crop.
     * @example
     * // Update one Crop
     * const crop = await prisma.crop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CropUpdateArgs>(
      args: SelectSubset<T, CropUpdateArgs>
    ): Prisma__CropClient<CropGetPayload<T>>

    /**
     * Delete zero or more Crops.
     * @param {CropDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CropDeleteManyArgs>(
      args?: SelectSubset<T, CropDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CropUpdateManyArgs>(
      args: SelectSubset<T, CropUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Crop.
     * @param {CropUpsertArgs} args - Arguments to update or create a Crop.
     * @example
     * // Update or create a Crop
     * const crop = await prisma.crop.upsert({
     *   create: {
     *     // ... data to create a Crop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crop we want to update
     *   }
     * })
    **/
    upsert<T extends CropUpsertArgs>(
      args: SelectSubset<T, CropUpsertArgs>
    ): Prisma__CropClient<CropGetPayload<T>>

    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crop.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropCountArgs>(
      args?: Subset<T, CropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropAggregateArgs>(args: Subset<T, CropAggregateArgs>): Prisma.PrismaPromise<GetCropAggregateType<T>>

    /**
     * Group by Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropGroupByArgs} args - Group by arguments.
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
      T extends CropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropGroupByArgs['orderBy'] }
        : { orderBy?: CropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Crop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CropClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    FarmerCrop<T extends Crop$FarmerCropArgs= {}>(args?: Subset<T, Crop$FarmerCropArgs>): Prisma.PrismaPromise<Array<FarmerCropGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Crop base type for findUnique actions
   */
  export type CropFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findUnique
   */
  export interface CropFindUniqueArgs extends CropFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Crop findUniqueOrThrow
   */
  export type CropFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }


  /**
   * Crop base type for findFirst actions
   */
  export type CropFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: Enumerable<CropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: Enumerable<CropScalarFieldEnum>
  }

  /**
   * Crop findFirst
   */
  export interface CropFindFirstArgs extends CropFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Crop findFirstOrThrow
   */
  export type CropFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: Enumerable<CropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: Enumerable<CropScalarFieldEnum>
  }


  /**
   * Crop findMany
   */
  export type CropFindManyArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: Enumerable<CropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    distinct?: Enumerable<CropScalarFieldEnum>
  }


  /**
   * Crop create
   */
  export type CropCreateArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * The data needed to create a Crop.
     */
    data: XOR<CropCreateInput, CropUncheckedCreateInput>
  }


  /**
   * Crop createMany
   */
  export type CropCreateManyArgs = {
    /**
     * The data used to create many Crops.
     */
    data: Enumerable<CropCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Crop update
   */
  export type CropUpdateArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * The data needed to update a Crop.
     */
    data: XOR<CropUpdateInput, CropUncheckedUpdateInput>
    /**
     * Choose, which Crop to update.
     */
    where: CropWhereUniqueInput
  }


  /**
   * Crop updateMany
   */
  export type CropUpdateManyArgs = {
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
  }


  /**
   * Crop upsert
   */
  export type CropUpsertArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * The filter to search for the Crop to update in case it exists.
     */
    where: CropWhereUniqueInput
    /**
     * In case the Crop found by the `where` argument doesn't exist, create a new Crop with this data.
     */
    create: XOR<CropCreateInput, CropUncheckedCreateInput>
    /**
     * In case the Crop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropUpdateInput, CropUncheckedUpdateInput>
  }


  /**
   * Crop delete
   */
  export type CropDeleteArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
    /**
     * Filter which Crop to delete.
     */
    where: CropWhereUniqueInput
  }


  /**
   * Crop deleteMany
   */
  export type CropDeleteManyArgs = {
    /**
     * Filter which Crops to delete
     */
    where?: CropWhereInput
  }


  /**
   * Crop.FarmerCrop
   */
  export type Crop$FarmerCropArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    where?: FarmerCropWhereInput
    orderBy?: Enumerable<FarmerCropOrderByWithRelationInput>
    cursor?: FarmerCropWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FarmerCropScalarFieldEnum>
  }


  /**
   * Crop without action
   */
  export type CropArgs = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CropInclude | null
  }



  /**
   * Model City
   */


  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    stateId: string | null
    name: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    stateId: string | null
    name: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    stateId: number
    name: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    stateId?: true
    name?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    stateId?: true
    name?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    stateId?: true
    name?: true
    _all?: true
  }

  export type CityAggregateArgs = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs = {
    where?: CityWhereInput
    orderBy?: Enumerable<CityOrderByWithAggregationInput>
    by: CityScalarFieldEnum[]
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }


  export type CityGroupByOutputType = {
    id: string
    stateId: string
    name: string
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect = {
    id?: boolean
    stateId?: boolean
    name?: boolean
    State?: boolean | StateArgs
    Address?: boolean | City$AddressArgs
    _count?: boolean | CityCountOutputTypeArgs
  }


  export type CityInclude = {
    State?: boolean | StateArgs
    Address?: boolean | City$AddressArgs
    _count?: boolean | CityCountOutputTypeArgs
  }

  export type CityGetPayload<S extends boolean | null | undefined | CityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? City :
    S extends undefined ? never :
    S extends { include: any } & (CityArgs | CityFindManyArgs)
    ? City  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'State' ? StateGetPayload<S['include'][P]> :
        P extends 'Address' ? Array < AddressGetPayload<S['include'][P]>>  :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CityArgs | CityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'State' ? StateGetPayload<S['select'][P]> :
        P extends 'Address' ? Array < AddressGetPayload<S['select'][P]>>  :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof City ? City[P] : never
  } 
      : City


  type CityCountArgs = 
    Omit<CityFindManyArgs, 'select' | 'include'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'City'> extends True ? Prisma__CityClient<CityGetPayload<T>> : Prisma__CityClient<CityGetPayload<T> | null, null>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CityFindUniqueOrThrowArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'City'> extends True ? Prisma__CityClient<CityGetPayload<T>> : Prisma__CityClient<CityGetPayload<T> | null, null>

    /**
     * Find the first City that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CityFindFirstOrThrowArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CityFindManyArgs>(
      args?: SelectSubset<T, CityFindManyArgs>
    ): Prisma.PrismaPromise<Array<CityGetPayload<T>>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends CityCreateArgs>(
      args: SelectSubset<T, CityCreateArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Create many Cities.
     *     @param {CityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CityCreateManyArgs>(
      args?: SelectSubset<T, CityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends CityDeleteArgs>(
      args: SelectSubset<T, CityDeleteArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CityUpdateArgs>(
      args: SelectSubset<T, CityUpdateArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CityDeleteManyArgs>(
      args?: SelectSubset<T, CityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CityUpdateManyArgs>(
      args: SelectSubset<T, CityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends CityUpsertArgs>(
      args: SelectSubset<T, CityUpsertArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    State<T extends StateArgs= {}>(args?: Subset<T, StateArgs>): Prisma__StateClient<StateGetPayload<T> | Null>;

    Address<T extends City$AddressArgs= {}>(args?: Subset<T, City$AddressArgs>): Prisma.PrismaPromise<Array<AddressGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * City base type for findUnique actions
   */
  export type CityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUnique
   */
  export interface CityFindUniqueArgs extends CityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City base type for findFirst actions
   */
  export type CityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }

  /**
   * City findFirst
   */
  export interface CityFindFirstArgs extends CityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * City findMany
   */
  export type CityFindManyArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * City create
   */
  export type CityCreateArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }


  /**
   * City createMany
   */
  export type CityCreateManyArgs = {
    /**
     * The data used to create many Cities.
     */
    data: Enumerable<CityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * City update
   */
  export type CityUpdateArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City updateMany
   */
  export type CityUpdateManyArgs = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }


  /**
   * City upsert
   */
  export type CityUpsertArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }


  /**
   * City delete
   */
  export type CityDeleteArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }


  /**
   * City.Address
   */
  export type City$AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * City without action
   */
  export type CityArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    phone: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    password?: boolean
  }


  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
  }



  /**
   * Model Farmer
   */


  export type AggregateFarmer = {
    _count: FarmerCountAggregateOutputType | null
    _avg: FarmerAvgAggregateOutputType | null
    _sum: FarmerSumAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  export type FarmerAvgAggregateOutputType = {
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
  }

  export type FarmerSumAggregateOutputType = {
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
  }

  export type FarmerMinAggregateOutputType = {
    id: string | null
    name: string | null
    document: string | null
    farmName: string | null
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    document: string | null
    farmName: string | null
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmerCountAggregateOutputType = {
    id: number
    name: number
    document: number
    farmName: number
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmerAvgAggregateInputType = {
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
  }

  export type FarmerSumAggregateInputType = {
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
  }

  export type FarmerMinAggregateInputType = {
    id?: true
    name?: true
    document?: true
    farmName?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmerMaxAggregateInputType = {
    id?: true
    name?: true
    document?: true
    farmName?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmerCountAggregateInputType = {
    id?: true
    name?: true
    document?: true
    farmName?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmerAggregateArgs = {
    /**
     * Filter which Farmer to aggregate.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Enumerable<FarmerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farmers
    **/
    _count?: true | FarmerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmerMaxAggregateInputType
  }

  export type GetFarmerAggregateType<T extends FarmerAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmer[P]>
      : GetScalarType<T[P], AggregateFarmer[P]>
  }




  export type FarmerGroupByArgs = {
    where?: FarmerWhereInput
    orderBy?: Enumerable<FarmerOrderByWithAggregationInput>
    by: FarmerScalarFieldEnum[]
    having?: FarmerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmerCountAggregateInputType | true
    _avg?: FarmerAvgAggregateInputType
    _sum?: FarmerSumAggregateInputType
    _min?: FarmerMinAggregateInputType
    _max?: FarmerMaxAggregateInputType
  }


  export type FarmerGroupByOutputType = {
    id: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt: Date
    updatedAt: Date
    _count: FarmerCountAggregateOutputType | null
    _avg: FarmerAvgAggregateOutputType | null
    _sum: FarmerSumAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  type GetFarmerGroupByPayload<T extends FarmerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FarmerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmerGroupByOutputType[P]>
            : GetScalarType<T[P], FarmerGroupByOutputType[P]>
        }
      >
    >


  export type FarmerSelect = {
    id?: boolean
    name?: boolean
    document?: boolean
    farmName?: boolean
    totalArea?: boolean
    arableArea?: boolean
    vegetationArea?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Address?: boolean | AddressArgs
    FarmerCrop?: boolean | Farmer$FarmerCropArgs
    _count?: boolean | FarmerCountOutputTypeArgs
  }


  export type FarmerInclude = {
    Address?: boolean | AddressArgs
    FarmerCrop?: boolean | Farmer$FarmerCropArgs
    _count?: boolean | FarmerCountOutputTypeArgs
  }

  export type FarmerGetPayload<S extends boolean | null | undefined | FarmerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Farmer :
    S extends undefined ? never :
    S extends { include: any } & (FarmerArgs | FarmerFindManyArgs)
    ? Farmer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Address' ? AddressGetPayload<S['include'][P]> | null :
        P extends 'FarmerCrop' ? Array < FarmerCropGetPayload<S['include'][P]>>  :
        P extends '_count' ? FarmerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FarmerArgs | FarmerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Address' ? AddressGetPayload<S['select'][P]> | null :
        P extends 'FarmerCrop' ? Array < FarmerCropGetPayload<S['select'][P]>>  :
        P extends '_count' ? FarmerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Farmer ? Farmer[P] : never
  } 
      : Farmer


  type FarmerCountArgs = 
    Omit<FarmerFindManyArgs, 'select' | 'include'> & {
      select?: FarmerCountAggregateInputType | true
    }

  export interface FarmerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Farmer that matches the filter.
     * @param {FarmerFindUniqueArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FarmerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FarmerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Farmer'> extends True ? Prisma__FarmerClient<FarmerGetPayload<T>> : Prisma__FarmerClient<FarmerGetPayload<T> | null, null>

    /**
     * Find one Farmer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FarmerFindUniqueOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FarmerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FarmerFindUniqueOrThrowArgs>
    ): Prisma__FarmerClient<FarmerGetPayload<T>>

    /**
     * Find the first Farmer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FarmerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FarmerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Farmer'> extends True ? Prisma__FarmerClient<FarmerGetPayload<T>> : Prisma__FarmerClient<FarmerGetPayload<T> | null, null>

    /**
     * Find the first Farmer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FarmerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FarmerFindFirstOrThrowArgs>
    ): Prisma__FarmerClient<FarmerGetPayload<T>>

    /**
     * Find zero or more Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmers
     * const farmers = await prisma.farmer.findMany()
     * 
     * // Get first 10 Farmers
     * const farmers = await prisma.farmer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmerWithIdOnly = await prisma.farmer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FarmerFindManyArgs>(
      args?: SelectSubset<T, FarmerFindManyArgs>
    ): Prisma.PrismaPromise<Array<FarmerGetPayload<T>>>

    /**
     * Create a Farmer.
     * @param {FarmerCreateArgs} args - Arguments to create a Farmer.
     * @example
     * // Create one Farmer
     * const Farmer = await prisma.farmer.create({
     *   data: {
     *     // ... data to create a Farmer
     *   }
     * })
     * 
    **/
    create<T extends FarmerCreateArgs>(
      args: SelectSubset<T, FarmerCreateArgs>
    ): Prisma__FarmerClient<FarmerGetPayload<T>>

    /**
     * Create many Farmers.
     *     @param {FarmerCreateManyArgs} args - Arguments to create many Farmers.
     *     @example
     *     // Create many Farmers
     *     const farmer = await prisma.farmer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FarmerCreateManyArgs>(
      args?: SelectSubset<T, FarmerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farmer.
     * @param {FarmerDeleteArgs} args - Arguments to delete one Farmer.
     * @example
     * // Delete one Farmer
     * const Farmer = await prisma.farmer.delete({
     *   where: {
     *     // ... filter to delete one Farmer
     *   }
     * })
     * 
    **/
    delete<T extends FarmerDeleteArgs>(
      args: SelectSubset<T, FarmerDeleteArgs>
    ): Prisma__FarmerClient<FarmerGetPayload<T>>

    /**
     * Update one Farmer.
     * @param {FarmerUpdateArgs} args - Arguments to update one Farmer.
     * @example
     * // Update one Farmer
     * const farmer = await prisma.farmer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FarmerUpdateArgs>(
      args: SelectSubset<T, FarmerUpdateArgs>
    ): Prisma__FarmerClient<FarmerGetPayload<T>>

    /**
     * Delete zero or more Farmers.
     * @param {FarmerDeleteManyArgs} args - Arguments to filter Farmers to delete.
     * @example
     * // Delete a few Farmers
     * const { count } = await prisma.farmer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FarmerDeleteManyArgs>(
      args?: SelectSubset<T, FarmerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FarmerUpdateManyArgs>(
      args: SelectSubset<T, FarmerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farmer.
     * @param {FarmerUpsertArgs} args - Arguments to update or create a Farmer.
     * @example
     * // Update or create a Farmer
     * const farmer = await prisma.farmer.upsert({
     *   create: {
     *     // ... data to create a Farmer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmer we want to update
     *   }
     * })
    **/
    upsert<T extends FarmerUpsertArgs>(
      args: SelectSubset<T, FarmerUpsertArgs>
    ): Prisma__FarmerClient<FarmerGetPayload<T>>

    /**
     * Count the number of Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCountArgs} args - Arguments to filter Farmers to count.
     * @example
     * // Count the number of Farmers
     * const count = await prisma.farmer.count({
     *   where: {
     *     // ... the filter for the Farmers we want to count
     *   }
     * })
    **/
    count<T extends FarmerCountArgs>(
      args?: Subset<T, FarmerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmerAggregateArgs>(args: Subset<T, FarmerAggregateArgs>): Prisma.PrismaPromise<GetFarmerAggregateType<T>>

    /**
     * Group by Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerGroupByArgs} args - Group by arguments.
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
      T extends FarmerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmerGroupByArgs['orderBy'] }
        : { orderBy?: FarmerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FarmerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Farmer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FarmerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Address<T extends AddressArgs= {}>(args?: Subset<T, AddressArgs>): Prisma__AddressClient<AddressGetPayload<T> | Null>;

    FarmerCrop<T extends Farmer$FarmerCropArgs= {}>(args?: Subset<T, Farmer$FarmerCropArgs>): Prisma.PrismaPromise<Array<FarmerCropGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Farmer base type for findUnique actions
   */
  export type FarmerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * Filter, which Farmer to fetch.
     */
    where: FarmerWhereUniqueInput
  }

  /**
   * Farmer findUnique
   */
  export interface FarmerFindUniqueArgs extends FarmerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Farmer findUniqueOrThrow
   */
  export type FarmerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * Filter, which Farmer to fetch.
     */
    where: FarmerWhereUniqueInput
  }


  /**
   * Farmer base type for findFirst actions
   */
  export type FarmerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * Filter, which Farmer to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Enumerable<FarmerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmers.
     */
    distinct?: Enumerable<FarmerScalarFieldEnum>
  }

  /**
   * Farmer findFirst
   */
  export interface FarmerFindFirstArgs extends FarmerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Farmer findFirstOrThrow
   */
  export type FarmerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * Filter, which Farmer to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Enumerable<FarmerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmers.
     */
    distinct?: Enumerable<FarmerScalarFieldEnum>
  }


  /**
   * Farmer findMany
   */
  export type FarmerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * Filter, which Farmers to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Enumerable<FarmerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    distinct?: Enumerable<FarmerScalarFieldEnum>
  }


  /**
   * Farmer create
   */
  export type FarmerCreateArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * The data needed to create a Farmer.
     */
    data: XOR<FarmerCreateInput, FarmerUncheckedCreateInput>
  }


  /**
   * Farmer createMany
   */
  export type FarmerCreateManyArgs = {
    /**
     * The data used to create many Farmers.
     */
    data: Enumerable<FarmerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Farmer update
   */
  export type FarmerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * The data needed to update a Farmer.
     */
    data: XOR<FarmerUpdateInput, FarmerUncheckedUpdateInput>
    /**
     * Choose, which Farmer to update.
     */
    where: FarmerWhereUniqueInput
  }


  /**
   * Farmer updateMany
   */
  export type FarmerUpdateManyArgs = {
    /**
     * The data used to update Farmers.
     */
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyInput>
    /**
     * Filter which Farmers to update
     */
    where?: FarmerWhereInput
  }


  /**
   * Farmer upsert
   */
  export type FarmerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * The filter to search for the Farmer to update in case it exists.
     */
    where: FarmerWhereUniqueInput
    /**
     * In case the Farmer found by the `where` argument doesn't exist, create a new Farmer with this data.
     */
    create: XOR<FarmerCreateInput, FarmerUncheckedCreateInput>
    /**
     * In case the Farmer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmerUpdateInput, FarmerUncheckedUpdateInput>
  }


  /**
   * Farmer delete
   */
  export type FarmerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
    /**
     * Filter which Farmer to delete.
     */
    where: FarmerWhereUniqueInput
  }


  /**
   * Farmer deleteMany
   */
  export type FarmerDeleteManyArgs = {
    /**
     * Filter which Farmers to delete
     */
    where?: FarmerWhereInput
  }


  /**
   * Farmer.FarmerCrop
   */
  export type Farmer$FarmerCropArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    where?: FarmerCropWhereInput
    orderBy?: Enumerable<FarmerCropOrderByWithRelationInput>
    cursor?: FarmerCropWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FarmerCropScalarFieldEnum>
  }


  /**
   * Farmer without action
   */
  export type FarmerArgs = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude | null
  }



  /**
   * Model FarmerCrop
   */


  export type AggregateFarmerCrop = {
    _count: FarmerCropCountAggregateOutputType | null
    _min: FarmerCropMinAggregateOutputType | null
    _max: FarmerCropMaxAggregateOutputType | null
  }

  export type FarmerCropMinAggregateOutputType = {
    id: string | null
    farmerId: string | null
    cropId: string | null
  }

  export type FarmerCropMaxAggregateOutputType = {
    id: string | null
    farmerId: string | null
    cropId: string | null
  }

  export type FarmerCropCountAggregateOutputType = {
    id: number
    farmerId: number
    cropId: number
    _all: number
  }


  export type FarmerCropMinAggregateInputType = {
    id?: true
    farmerId?: true
    cropId?: true
  }

  export type FarmerCropMaxAggregateInputType = {
    id?: true
    farmerId?: true
    cropId?: true
  }

  export type FarmerCropCountAggregateInputType = {
    id?: true
    farmerId?: true
    cropId?: true
    _all?: true
  }

  export type FarmerCropAggregateArgs = {
    /**
     * Filter which FarmerCrop to aggregate.
     */
    where?: FarmerCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerCrops to fetch.
     */
    orderBy?: Enumerable<FarmerCropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmerCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FarmerCrops
    **/
    _count?: true | FarmerCropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmerCropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmerCropMaxAggregateInputType
  }

  export type GetFarmerCropAggregateType<T extends FarmerCropAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmerCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmerCrop[P]>
      : GetScalarType<T[P], AggregateFarmerCrop[P]>
  }




  export type FarmerCropGroupByArgs = {
    where?: FarmerCropWhereInput
    orderBy?: Enumerable<FarmerCropOrderByWithAggregationInput>
    by: FarmerCropScalarFieldEnum[]
    having?: FarmerCropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmerCropCountAggregateInputType | true
    _min?: FarmerCropMinAggregateInputType
    _max?: FarmerCropMaxAggregateInputType
  }


  export type FarmerCropGroupByOutputType = {
    id: string
    farmerId: string
    cropId: string
    _count: FarmerCropCountAggregateOutputType | null
    _min: FarmerCropMinAggregateOutputType | null
    _max: FarmerCropMaxAggregateOutputType | null
  }

  type GetFarmerCropGroupByPayload<T extends FarmerCropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FarmerCropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmerCropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmerCropGroupByOutputType[P]>
            : GetScalarType<T[P], FarmerCropGroupByOutputType[P]>
        }
      >
    >


  export type FarmerCropSelect = {
    id?: boolean
    farmerId?: boolean
    cropId?: boolean
    Farmer?: boolean | FarmerArgs
    Crop?: boolean | CropArgs
  }


  export type FarmerCropInclude = {
    Farmer?: boolean | FarmerArgs
    Crop?: boolean | CropArgs
  }

  export type FarmerCropGetPayload<S extends boolean | null | undefined | FarmerCropArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FarmerCrop :
    S extends undefined ? never :
    S extends { include: any } & (FarmerCropArgs | FarmerCropFindManyArgs)
    ? FarmerCrop  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Farmer' ? FarmerGetPayload<S['include'][P]> :
        P extends 'Crop' ? CropGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FarmerCropArgs | FarmerCropFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Farmer' ? FarmerGetPayload<S['select'][P]> :
        P extends 'Crop' ? CropGetPayload<S['select'][P]> :  P extends keyof FarmerCrop ? FarmerCrop[P] : never
  } 
      : FarmerCrop


  type FarmerCropCountArgs = 
    Omit<FarmerCropFindManyArgs, 'select' | 'include'> & {
      select?: FarmerCropCountAggregateInputType | true
    }

  export interface FarmerCropDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FarmerCrop that matches the filter.
     * @param {FarmerCropFindUniqueArgs} args - Arguments to find a FarmerCrop
     * @example
     * // Get one FarmerCrop
     * const farmerCrop = await prisma.farmerCrop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FarmerCropFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FarmerCropFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FarmerCrop'> extends True ? Prisma__FarmerCropClient<FarmerCropGetPayload<T>> : Prisma__FarmerCropClient<FarmerCropGetPayload<T> | null, null>

    /**
     * Find one FarmerCrop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FarmerCropFindUniqueOrThrowArgs} args - Arguments to find a FarmerCrop
     * @example
     * // Get one FarmerCrop
     * const farmerCrop = await prisma.farmerCrop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FarmerCropFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FarmerCropFindUniqueOrThrowArgs>
    ): Prisma__FarmerCropClient<FarmerCropGetPayload<T>>

    /**
     * Find the first FarmerCrop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCropFindFirstArgs} args - Arguments to find a FarmerCrop
     * @example
     * // Get one FarmerCrop
     * const farmerCrop = await prisma.farmerCrop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FarmerCropFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FarmerCropFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FarmerCrop'> extends True ? Prisma__FarmerCropClient<FarmerCropGetPayload<T>> : Prisma__FarmerCropClient<FarmerCropGetPayload<T> | null, null>

    /**
     * Find the first FarmerCrop that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCropFindFirstOrThrowArgs} args - Arguments to find a FarmerCrop
     * @example
     * // Get one FarmerCrop
     * const farmerCrop = await prisma.farmerCrop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FarmerCropFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FarmerCropFindFirstOrThrowArgs>
    ): Prisma__FarmerCropClient<FarmerCropGetPayload<T>>

    /**
     * Find zero or more FarmerCrops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCropFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmerCrops
     * const farmerCrops = await prisma.farmerCrop.findMany()
     * 
     * // Get first 10 FarmerCrops
     * const farmerCrops = await prisma.farmerCrop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmerCropWithIdOnly = await prisma.farmerCrop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FarmerCropFindManyArgs>(
      args?: SelectSubset<T, FarmerCropFindManyArgs>
    ): Prisma.PrismaPromise<Array<FarmerCropGetPayload<T>>>

    /**
     * Create a FarmerCrop.
     * @param {FarmerCropCreateArgs} args - Arguments to create a FarmerCrop.
     * @example
     * // Create one FarmerCrop
     * const FarmerCrop = await prisma.farmerCrop.create({
     *   data: {
     *     // ... data to create a FarmerCrop
     *   }
     * })
     * 
    **/
    create<T extends FarmerCropCreateArgs>(
      args: SelectSubset<T, FarmerCropCreateArgs>
    ): Prisma__FarmerCropClient<FarmerCropGetPayload<T>>

    /**
     * Create many FarmerCrops.
     *     @param {FarmerCropCreateManyArgs} args - Arguments to create many FarmerCrops.
     *     @example
     *     // Create many FarmerCrops
     *     const farmerCrop = await prisma.farmerCrop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FarmerCropCreateManyArgs>(
      args?: SelectSubset<T, FarmerCropCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FarmerCrop.
     * @param {FarmerCropDeleteArgs} args - Arguments to delete one FarmerCrop.
     * @example
     * // Delete one FarmerCrop
     * const FarmerCrop = await prisma.farmerCrop.delete({
     *   where: {
     *     // ... filter to delete one FarmerCrop
     *   }
     * })
     * 
    **/
    delete<T extends FarmerCropDeleteArgs>(
      args: SelectSubset<T, FarmerCropDeleteArgs>
    ): Prisma__FarmerCropClient<FarmerCropGetPayload<T>>

    /**
     * Update one FarmerCrop.
     * @param {FarmerCropUpdateArgs} args - Arguments to update one FarmerCrop.
     * @example
     * // Update one FarmerCrop
     * const farmerCrop = await prisma.farmerCrop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FarmerCropUpdateArgs>(
      args: SelectSubset<T, FarmerCropUpdateArgs>
    ): Prisma__FarmerCropClient<FarmerCropGetPayload<T>>

    /**
     * Delete zero or more FarmerCrops.
     * @param {FarmerCropDeleteManyArgs} args - Arguments to filter FarmerCrops to delete.
     * @example
     * // Delete a few FarmerCrops
     * const { count } = await prisma.farmerCrop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FarmerCropDeleteManyArgs>(
      args?: SelectSubset<T, FarmerCropDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmerCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmerCrops
     * const farmerCrop = await prisma.farmerCrop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FarmerCropUpdateManyArgs>(
      args: SelectSubset<T, FarmerCropUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FarmerCrop.
     * @param {FarmerCropUpsertArgs} args - Arguments to update or create a FarmerCrop.
     * @example
     * // Update or create a FarmerCrop
     * const farmerCrop = await prisma.farmerCrop.upsert({
     *   create: {
     *     // ... data to create a FarmerCrop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmerCrop we want to update
     *   }
     * })
    **/
    upsert<T extends FarmerCropUpsertArgs>(
      args: SelectSubset<T, FarmerCropUpsertArgs>
    ): Prisma__FarmerCropClient<FarmerCropGetPayload<T>>

    /**
     * Count the number of FarmerCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCropCountArgs} args - Arguments to filter FarmerCrops to count.
     * @example
     * // Count the number of FarmerCrops
     * const count = await prisma.farmerCrop.count({
     *   where: {
     *     // ... the filter for the FarmerCrops we want to count
     *   }
     * })
    **/
    count<T extends FarmerCropCountArgs>(
      args?: Subset<T, FarmerCropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmerCropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FarmerCrop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmerCropAggregateArgs>(args: Subset<T, FarmerCropAggregateArgs>): Prisma.PrismaPromise<GetFarmerCropAggregateType<T>>

    /**
     * Group by FarmerCrop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCropGroupByArgs} args - Group by arguments.
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
      T extends FarmerCropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmerCropGroupByArgs['orderBy'] }
        : { orderBy?: FarmerCropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FarmerCropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmerCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FarmerCrop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FarmerCropClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Farmer<T extends FarmerArgs= {}>(args?: Subset<T, FarmerArgs>): Prisma__FarmerClient<FarmerGetPayload<T> | Null>;

    Crop<T extends CropArgs= {}>(args?: Subset<T, CropArgs>): Prisma__CropClient<CropGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FarmerCrop base type for findUnique actions
   */
  export type FarmerCropFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * Filter, which FarmerCrop to fetch.
     */
    where: FarmerCropWhereUniqueInput
  }

  /**
   * FarmerCrop findUnique
   */
  export interface FarmerCropFindUniqueArgs extends FarmerCropFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FarmerCrop findUniqueOrThrow
   */
  export type FarmerCropFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * Filter, which FarmerCrop to fetch.
     */
    where: FarmerCropWhereUniqueInput
  }


  /**
   * FarmerCrop base type for findFirst actions
   */
  export type FarmerCropFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * Filter, which FarmerCrop to fetch.
     */
    where?: FarmerCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerCrops to fetch.
     */
    orderBy?: Enumerable<FarmerCropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmerCrops.
     */
    cursor?: FarmerCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmerCrops.
     */
    distinct?: Enumerable<FarmerCropScalarFieldEnum>
  }

  /**
   * FarmerCrop findFirst
   */
  export interface FarmerCropFindFirstArgs extends FarmerCropFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FarmerCrop findFirstOrThrow
   */
  export type FarmerCropFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * Filter, which FarmerCrop to fetch.
     */
    where?: FarmerCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerCrops to fetch.
     */
    orderBy?: Enumerable<FarmerCropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmerCrops.
     */
    cursor?: FarmerCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmerCrops.
     */
    distinct?: Enumerable<FarmerCropScalarFieldEnum>
  }


  /**
   * FarmerCrop findMany
   */
  export type FarmerCropFindManyArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * Filter, which FarmerCrops to fetch.
     */
    where?: FarmerCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerCrops to fetch.
     */
    orderBy?: Enumerable<FarmerCropOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FarmerCrops.
     */
    cursor?: FarmerCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerCrops.
     */
    skip?: number
    distinct?: Enumerable<FarmerCropScalarFieldEnum>
  }


  /**
   * FarmerCrop create
   */
  export type FarmerCropCreateArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * The data needed to create a FarmerCrop.
     */
    data: XOR<FarmerCropCreateInput, FarmerCropUncheckedCreateInput>
  }


  /**
   * FarmerCrop createMany
   */
  export type FarmerCropCreateManyArgs = {
    /**
     * The data used to create many FarmerCrops.
     */
    data: Enumerable<FarmerCropCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FarmerCrop update
   */
  export type FarmerCropUpdateArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * The data needed to update a FarmerCrop.
     */
    data: XOR<FarmerCropUpdateInput, FarmerCropUncheckedUpdateInput>
    /**
     * Choose, which FarmerCrop to update.
     */
    where: FarmerCropWhereUniqueInput
  }


  /**
   * FarmerCrop updateMany
   */
  export type FarmerCropUpdateManyArgs = {
    /**
     * The data used to update FarmerCrops.
     */
    data: XOR<FarmerCropUpdateManyMutationInput, FarmerCropUncheckedUpdateManyInput>
    /**
     * Filter which FarmerCrops to update
     */
    where?: FarmerCropWhereInput
  }


  /**
   * FarmerCrop upsert
   */
  export type FarmerCropUpsertArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * The filter to search for the FarmerCrop to update in case it exists.
     */
    where: FarmerCropWhereUniqueInput
    /**
     * In case the FarmerCrop found by the `where` argument doesn't exist, create a new FarmerCrop with this data.
     */
    create: XOR<FarmerCropCreateInput, FarmerCropUncheckedCreateInput>
    /**
     * In case the FarmerCrop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmerCropUpdateInput, FarmerCropUncheckedUpdateInput>
  }


  /**
   * FarmerCrop delete
   */
  export type FarmerCropDeleteArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
    /**
     * Filter which FarmerCrop to delete.
     */
    where: FarmerCropWhereUniqueInput
  }


  /**
   * FarmerCrop deleteMany
   */
  export type FarmerCropDeleteManyArgs = {
    /**
     * Filter which FarmerCrops to delete
     */
    where?: FarmerCropWhereInput
  }


  /**
   * FarmerCrop without action
   */
  export type FarmerCropArgs = {
    /**
     * Select specific fields to fetch from the FarmerCrop
     */
    select?: FarmerCropSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerCropInclude | null
  }



  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    farmerId: string | null
    stateId: string | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    farmerId: string | null
    stateId: string | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    farmerId: number
    stateId: number
    cityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    farmerId?: true
    stateId?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    farmerId?: true
    stateId?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    farmerId?: true
    stateId?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: AddressScalarFieldEnum[]
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: string
    farmerId: string
    stateId: string
    cityId: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    id?: boolean
    farmerId?: boolean
    stateId?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Farmer?: boolean | FarmerArgs
    State?: boolean | StateArgs
    City?: boolean | CityArgs
  }


  export type AddressInclude = {
    Farmer?: boolean | FarmerArgs
    State?: boolean | StateArgs
    City?: boolean | CityArgs
  }

  export type AddressGetPayload<S extends boolean | null | undefined | AddressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Address :
    S extends undefined ? never :
    S extends { include: any } & (AddressArgs | AddressFindManyArgs)
    ? Address  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Farmer' ? FarmerGetPayload<S['include'][P]> :
        P extends 'State' ? StateGetPayload<S['include'][P]> :
        P extends 'City' ? CityGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AddressArgs | AddressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Farmer' ? FarmerGetPayload<S['select'][P]> :
        P extends 'State' ? StateGetPayload<S['select'][P]> :
        P extends 'City' ? CityGetPayload<S['select'][P]> :  P extends keyof Address ? Address[P] : never
  } 
      : Address


  type AddressCountArgs = 
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): Prisma.PrismaPromise<Array<AddressGetPayload<T>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Farmer<T extends FarmerArgs= {}>(args?: Subset<T, FarmerArgs>): Prisma__FarmerClient<FarmerGetPayload<T> | Null>;

    State<T extends StateArgs= {}>(args?: Subset<T, StateArgs>): Prisma__StateClient<StateGetPayload<T> | Null>;

    City<T extends CityArgs= {}>(args?: Subset<T, CityArgs>): Prisma__CityClient<CityGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Address base type for findUnique actions
   */
  export type AddressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUnique
   */
  export interface AddressFindUniqueArgs extends AddressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address base type for findFirst actions
   */
  export type AddressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * Address findFirst
   */
  export interface AddressFindFirstArgs extends AddressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     */
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }


  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
  }



  /**
   * Enums
   */

  export const AddressScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    stateId: 'stateId',
    cityId: 'cityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    stateId: 'stateId',
    name: 'name'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const CropScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CropScalarFieldEnum = (typeof CropScalarFieldEnum)[keyof typeof CropScalarFieldEnum]


  export const FarmerCropScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    cropId: 'cropId'
  };

  export type FarmerCropScalarFieldEnum = (typeof FarmerCropScalarFieldEnum)[keyof typeof FarmerCropScalarFieldEnum]


  export const FarmerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    document: 'document',
    farmName: 'farmName',
    totalArea: 'totalArea',
    arableArea: 'arableArea',
    vegetationArea: 'vegetationArea',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmerScalarFieldEnum = (typeof FarmerScalarFieldEnum)[keyof typeof FarmerScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    acronym: 'acronym'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type StateWhereInput = {
    AND?: Enumerable<StateWhereInput>
    OR?: Enumerable<StateWhereInput>
    NOT?: Enumerable<StateWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    acronym?: StringFilter | string
    City?: CityListRelationFilter
    Address?: AddressListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    acronym?: SortOrder
    City?: CityOrderByRelationAggregateInput
    Address?: AddressOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = {
    id?: string
    acronym?: string
  }

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    acronym?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StateScalarWhereWithAggregatesInput>
    OR?: Enumerable<StateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StateScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    acronym?: StringWithAggregatesFilter | string
  }

  export type CropWhereInput = {
    AND?: Enumerable<CropWhereInput>
    OR?: Enumerable<CropWhereInput>
    NOT?: Enumerable<CropWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    FarmerCrop?: FarmerCropListRelationFilter
  }

  export type CropOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    FarmerCrop?: FarmerCropOrderByRelationAggregateInput
  }

  export type CropWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type CropOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CropCountOrderByAggregateInput
    _max?: CropMaxOrderByAggregateInput
    _min?: CropMinOrderByAggregateInput
  }

  export type CropScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CropScalarWhereWithAggregatesInput>
    OR?: Enumerable<CropScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CropScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type CityWhereInput = {
    AND?: Enumerable<CityWhereInput>
    OR?: Enumerable<CityWhereInput>
    NOT?: Enumerable<CityWhereInput>
    id?: StringFilter | string
    stateId?: StringFilter | string
    name?: StringFilter | string
    State?: XOR<StateRelationFilter, StateWhereInput>
    Address?: AddressListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    stateId?: SortOrder
    name?: SortOrder
    State?: StateOrderByWithRelationInput
    Address?: AddressOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = {
    id?: string
  }

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    stateId?: SortOrder
    name?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CityScalarWhereWithAggregatesInput>
    OR?: Enumerable<CityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CityScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    stateId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    phone?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    phone?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type FarmerWhereInput = {
    AND?: Enumerable<FarmerWhereInput>
    OR?: Enumerable<FarmerWhereInput>
    NOT?: Enumerable<FarmerWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    document?: StringFilter | string
    farmName?: StringFilter | string
    totalArea?: IntFilter | number
    arableArea?: IntFilter | number
    vegetationArea?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Address?: XOR<AddressRelationFilter, AddressWhereInput> | null
    FarmerCrop?: FarmerCropListRelationFilter
  }

  export type FarmerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    farmName?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Address?: AddressOrderByWithRelationInput
    FarmerCrop?: FarmerCropOrderByRelationAggregateInput
  }

  export type FarmerWhereUniqueInput = {
    id?: string
  }

  export type FarmerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    farmName?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmerCountOrderByAggregateInput
    _avg?: FarmerAvgOrderByAggregateInput
    _max?: FarmerMaxOrderByAggregateInput
    _min?: FarmerMinOrderByAggregateInput
    _sum?: FarmerSumOrderByAggregateInput
  }

  export type FarmerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FarmerScalarWhereWithAggregatesInput>
    OR?: Enumerable<FarmerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FarmerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    document?: StringWithAggregatesFilter | string
    farmName?: StringWithAggregatesFilter | string
    totalArea?: IntWithAggregatesFilter | number
    arableArea?: IntWithAggregatesFilter | number
    vegetationArea?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FarmerCropWhereInput = {
    AND?: Enumerable<FarmerCropWhereInput>
    OR?: Enumerable<FarmerCropWhereInput>
    NOT?: Enumerable<FarmerCropWhereInput>
    id?: StringFilter | string
    farmerId?: StringFilter | string
    cropId?: StringFilter | string
    Farmer?: XOR<FarmerRelationFilter, FarmerWhereInput>
    Crop?: XOR<CropRelationFilter, CropWhereInput>
  }

  export type FarmerCropOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    cropId?: SortOrder
    Farmer?: FarmerOrderByWithRelationInput
    Crop?: CropOrderByWithRelationInput
  }

  export type FarmerCropWhereUniqueInput = {
    id?: string
  }

  export type FarmerCropOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    cropId?: SortOrder
    _count?: FarmerCropCountOrderByAggregateInput
    _max?: FarmerCropMaxOrderByAggregateInput
    _min?: FarmerCropMinOrderByAggregateInput
  }

  export type FarmerCropScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FarmerCropScalarWhereWithAggregatesInput>
    OR?: Enumerable<FarmerCropScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FarmerCropScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    farmerId?: StringWithAggregatesFilter | string
    cropId?: StringWithAggregatesFilter | string
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    id?: StringFilter | string
    farmerId?: StringFilter | string
    stateId?: StringFilter | string
    cityId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Farmer?: XOR<FarmerRelationFilter, FarmerWhereInput>
    State?: XOR<StateRelationFilter, StateWhereInput>
    City?: XOR<CityRelationFilter, CityWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    stateId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Farmer?: FarmerOrderByWithRelationInput
    State?: StateOrderByWithRelationInput
    City?: CityOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = {
    id?: string
    farmerId?: string
  }

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    stateId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    farmerId?: StringWithAggregatesFilter | string
    stateId?: StringWithAggregatesFilter | string
    cityId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type StateCreateInput = {
    id?: string
    name: string
    acronym: string
    City?: CityCreateNestedManyWithoutStateInput
    Address?: AddressCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: string
    name: string
    acronym: string
    City?: CityUncheckedCreateNestedManyWithoutStateInput
    Address?: AddressUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    City?: CityUpdateManyWithoutStateNestedInput
    Address?: AddressUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    City?: CityUncheckedUpdateManyWithoutStateNestedInput
    Address?: AddressUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: string
    name: string
    acronym: string
  }

  export type StateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
  }

  export type CropCreateInput = {
    id?: string
    name: string
    FarmerCrop?: FarmerCropCreateNestedManyWithoutCropInput
  }

  export type CropUncheckedCreateInput = {
    id?: string
    name: string
    FarmerCrop?: FarmerCropUncheckedCreateNestedManyWithoutCropInput
  }

  export type CropUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    FarmerCrop?: FarmerCropUpdateManyWithoutCropNestedInput
  }

  export type CropUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    FarmerCrop?: FarmerCropUncheckedUpdateManyWithoutCropNestedInput
  }

  export type CropCreateManyInput = {
    id?: string
    name: string
  }

  export type CropUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CropUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    State: StateCreateNestedOneWithoutCityInput
    Address?: AddressCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    stateId: string
    name: string
    Address?: AddressUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    State?: StateUpdateOneRequiredWithoutCityNestedInput
    Address?: AddressUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    stateId: string
    name: string
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone: string
    name: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone: string
    name: string
    password: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FarmerCreateInput = {
    id?: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Address?: AddressCreateNestedOneWithoutFarmerInput
    FarmerCrop?: FarmerCropCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateInput = {
    id?: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Address?: AddressUncheckedCreateNestedOneWithoutFarmerInput
    FarmerCrop?: FarmerCropUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressUpdateOneWithoutFarmerNestedInput
    FarmerCrop?: FarmerCropUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressUncheckedUpdateOneWithoutFarmerNestedInput
    FarmerCrop?: FarmerCropUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerCreateManyInput = {
    id?: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerCropCreateInput = {
    id?: string
    Farmer: FarmerCreateNestedOneWithoutFarmerCropInput
    Crop: CropCreateNestedOneWithoutFarmerCropInput
  }

  export type FarmerCropUncheckedCreateInput = {
    id?: string
    farmerId: string
    cropId: string
  }

  export type FarmerCropUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Farmer?: FarmerUpdateOneRequiredWithoutFarmerCropNestedInput
    Crop?: CropUpdateOneRequiredWithoutFarmerCropNestedInput
  }

  export type FarmerCropUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
  }

  export type FarmerCropCreateManyInput = {
    id?: string
    farmerId: string
    cropId: string
  }

  export type FarmerCropUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FarmerCropUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Farmer: FarmerCreateNestedOneWithoutAddressInput
    State: StateCreateNestedOneWithoutAddressInput
    City: CityCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    farmerId: string
    stateId: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Farmer?: FarmerUpdateOneRequiredWithoutAddressNestedInput
    State?: StateUpdateOneRequiredWithoutAddressNestedInput
    City?: CityUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: string
    farmerId: string
    stateId: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    acronym?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    acronym?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    acronym?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FarmerCropListRelationFilter = {
    every?: FarmerCropWhereInput
    some?: FarmerCropWhereInput
    none?: FarmerCropWhereInput
  }

  export type FarmerCropOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CropCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CropMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CropMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    name?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    name?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    name?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type FarmerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    farmName?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmerAvgOrderByAggregateInput = {
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
  }

  export type FarmerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    farmName?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    farmName?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmerSumOrderByAggregateInput = {
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type FarmerRelationFilter = {
    is?: FarmerWhereInput
    isNot?: FarmerWhereInput
  }

  export type CropRelationFilter = {
    is?: CropWhereInput
    isNot?: CropWhereInput
  }

  export type FarmerCropCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    cropId?: SortOrder
  }

  export type FarmerCropMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    cropId?: SortOrder
  }

  export type FarmerCropMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    cropId?: SortOrder
  }

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    stateId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    stateId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    stateId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<CityCreateWithoutStateInput>, Enumerable<CityUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutStateInput>
    createMany?: CityCreateManyStateInputEnvelope
    connect?: Enumerable<CityWhereUniqueInput>
  }

  export type AddressCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<AddressCreateWithoutStateInput>, Enumerable<AddressUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutStateInput>
    createMany?: AddressCreateManyStateInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type CityUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<CityCreateWithoutStateInput>, Enumerable<CityUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutStateInput>
    createMany?: CityCreateManyStateInputEnvelope
    connect?: Enumerable<CityWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<AddressCreateWithoutStateInput>, Enumerable<AddressUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutStateInput>
    createMany?: AddressCreateManyStateInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CityUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<CityCreateWithoutStateInput>, Enumerable<CityUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<CityUpsertWithWhereUniqueWithoutStateInput>
    createMany?: CityCreateManyStateInputEnvelope
    set?: Enumerable<CityWhereUniqueInput>
    disconnect?: Enumerable<CityWhereUniqueInput>
    delete?: Enumerable<CityWhereUniqueInput>
    connect?: Enumerable<CityWhereUniqueInput>
    update?: Enumerable<CityUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<CityUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<CityScalarWhereInput>
  }

  export type AddressUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutStateInput>, Enumerable<AddressUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutStateInput>
    createMany?: AddressCreateManyStateInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type CityUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<CityCreateWithoutStateInput>, Enumerable<CityUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<CityUpsertWithWhereUniqueWithoutStateInput>
    createMany?: CityCreateManyStateInputEnvelope
    set?: Enumerable<CityWhereUniqueInput>
    disconnect?: Enumerable<CityWhereUniqueInput>
    delete?: Enumerable<CityWhereUniqueInput>
    connect?: Enumerable<CityWhereUniqueInput>
    update?: Enumerable<CityUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<CityUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<CityScalarWhereInput>
  }

  export type AddressUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutStateInput>, Enumerable<AddressUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutStateInput>
    createMany?: AddressCreateManyStateInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type FarmerCropCreateNestedManyWithoutCropInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutCropInput>, Enumerable<FarmerCropUncheckedCreateWithoutCropInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutCropInput>
    createMany?: FarmerCropCreateManyCropInputEnvelope
    connect?: Enumerable<FarmerCropWhereUniqueInput>
  }

  export type FarmerCropUncheckedCreateNestedManyWithoutCropInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutCropInput>, Enumerable<FarmerCropUncheckedCreateWithoutCropInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutCropInput>
    createMany?: FarmerCropCreateManyCropInputEnvelope
    connect?: Enumerable<FarmerCropWhereUniqueInput>
  }

  export type FarmerCropUpdateManyWithoutCropNestedInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutCropInput>, Enumerable<FarmerCropUncheckedCreateWithoutCropInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutCropInput>
    upsert?: Enumerable<FarmerCropUpsertWithWhereUniqueWithoutCropInput>
    createMany?: FarmerCropCreateManyCropInputEnvelope
    set?: Enumerable<FarmerCropWhereUniqueInput>
    disconnect?: Enumerable<FarmerCropWhereUniqueInput>
    delete?: Enumerable<FarmerCropWhereUniqueInput>
    connect?: Enumerable<FarmerCropWhereUniqueInput>
    update?: Enumerable<FarmerCropUpdateWithWhereUniqueWithoutCropInput>
    updateMany?: Enumerable<FarmerCropUpdateManyWithWhereWithoutCropInput>
    deleteMany?: Enumerable<FarmerCropScalarWhereInput>
  }

  export type FarmerCropUncheckedUpdateManyWithoutCropNestedInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutCropInput>, Enumerable<FarmerCropUncheckedCreateWithoutCropInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutCropInput>
    upsert?: Enumerable<FarmerCropUpsertWithWhereUniqueWithoutCropInput>
    createMany?: FarmerCropCreateManyCropInputEnvelope
    set?: Enumerable<FarmerCropWhereUniqueInput>
    disconnect?: Enumerable<FarmerCropWhereUniqueInput>
    delete?: Enumerable<FarmerCropWhereUniqueInput>
    connect?: Enumerable<FarmerCropWhereUniqueInput>
    update?: Enumerable<FarmerCropUpdateWithWhereUniqueWithoutCropInput>
    updateMany?: Enumerable<FarmerCropUpdateManyWithWhereWithoutCropInput>
    deleteMany?: Enumerable<FarmerCropScalarWhereInput>
  }

  export type StateCreateNestedOneWithoutCityInput = {
    create?: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
    connectOrCreate?: StateCreateOrConnectWithoutCityInput
    connect?: StateWhereUniqueInput
  }

  export type AddressCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<AddressCreateWithoutCityInput>, Enumerable<AddressUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutCityInput>
    createMany?: AddressCreateManyCityInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<AddressCreateWithoutCityInput>, Enumerable<AddressUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutCityInput>
    createMany?: AddressCreateManyCityInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type StateUpdateOneRequiredWithoutCityNestedInput = {
    create?: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
    connectOrCreate?: StateCreateOrConnectWithoutCityInput
    upsert?: StateUpsertWithoutCityInput
    connect?: StateWhereUniqueInput
    update?: XOR<StateUpdateWithoutCityInput, StateUncheckedUpdateWithoutCityInput>
  }

  export type AddressUpdateManyWithoutCityNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutCityInput>, Enumerable<AddressUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutCityInput>
    createMany?: AddressCreateManyCityInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutCityInput>, Enumerable<AddressUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutCityInput>
    createMany?: AddressCreateManyCityInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressCreateNestedOneWithoutFarmerInput = {
    create?: XOR<AddressCreateWithoutFarmerInput, AddressUncheckedCreateWithoutFarmerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutFarmerInput
    connect?: AddressWhereUniqueInput
  }

  export type FarmerCropCreateNestedManyWithoutFarmerInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutFarmerInput>, Enumerable<FarmerCropUncheckedCreateWithoutFarmerInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutFarmerInput>
    createMany?: FarmerCropCreateManyFarmerInputEnvelope
    connect?: Enumerable<FarmerCropWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedOneWithoutFarmerInput = {
    create?: XOR<AddressCreateWithoutFarmerInput, AddressUncheckedCreateWithoutFarmerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutFarmerInput
    connect?: AddressWhereUniqueInput
  }

  export type FarmerCropUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutFarmerInput>, Enumerable<FarmerCropUncheckedCreateWithoutFarmerInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutFarmerInput>
    createMany?: FarmerCropCreateManyFarmerInputEnvelope
    connect?: Enumerable<FarmerCropWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateOneWithoutFarmerNestedInput = {
    create?: XOR<AddressCreateWithoutFarmerInput, AddressUncheckedCreateWithoutFarmerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutFarmerInput
    upsert?: AddressUpsertWithoutFarmerInput
    disconnect?: boolean
    delete?: boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutFarmerInput, AddressUncheckedUpdateWithoutFarmerInput>
  }

  export type FarmerCropUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutFarmerInput>, Enumerable<FarmerCropUncheckedCreateWithoutFarmerInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutFarmerInput>
    upsert?: Enumerable<FarmerCropUpsertWithWhereUniqueWithoutFarmerInput>
    createMany?: FarmerCropCreateManyFarmerInputEnvelope
    set?: Enumerable<FarmerCropWhereUniqueInput>
    disconnect?: Enumerable<FarmerCropWhereUniqueInput>
    delete?: Enumerable<FarmerCropWhereUniqueInput>
    connect?: Enumerable<FarmerCropWhereUniqueInput>
    update?: Enumerable<FarmerCropUpdateWithWhereUniqueWithoutFarmerInput>
    updateMany?: Enumerable<FarmerCropUpdateManyWithWhereWithoutFarmerInput>
    deleteMany?: Enumerable<FarmerCropScalarWhereInput>
  }

  export type AddressUncheckedUpdateOneWithoutFarmerNestedInput = {
    create?: XOR<AddressCreateWithoutFarmerInput, AddressUncheckedCreateWithoutFarmerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutFarmerInput
    upsert?: AddressUpsertWithoutFarmerInput
    disconnect?: boolean
    delete?: boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutFarmerInput, AddressUncheckedUpdateWithoutFarmerInput>
  }

  export type FarmerCropUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<Enumerable<FarmerCropCreateWithoutFarmerInput>, Enumerable<FarmerCropUncheckedCreateWithoutFarmerInput>>
    connectOrCreate?: Enumerable<FarmerCropCreateOrConnectWithoutFarmerInput>
    upsert?: Enumerable<FarmerCropUpsertWithWhereUniqueWithoutFarmerInput>
    createMany?: FarmerCropCreateManyFarmerInputEnvelope
    set?: Enumerable<FarmerCropWhereUniqueInput>
    disconnect?: Enumerable<FarmerCropWhereUniqueInput>
    delete?: Enumerable<FarmerCropWhereUniqueInput>
    connect?: Enumerable<FarmerCropWhereUniqueInput>
    update?: Enumerable<FarmerCropUpdateWithWhereUniqueWithoutFarmerInput>
    updateMany?: Enumerable<FarmerCropUpdateManyWithWhereWithoutFarmerInput>
    deleteMany?: Enumerable<FarmerCropScalarWhereInput>
  }

  export type FarmerCreateNestedOneWithoutFarmerCropInput = {
    create?: XOR<FarmerCreateWithoutFarmerCropInput, FarmerUncheckedCreateWithoutFarmerCropInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutFarmerCropInput
    connect?: FarmerWhereUniqueInput
  }

  export type CropCreateNestedOneWithoutFarmerCropInput = {
    create?: XOR<CropCreateWithoutFarmerCropInput, CropUncheckedCreateWithoutFarmerCropInput>
    connectOrCreate?: CropCreateOrConnectWithoutFarmerCropInput
    connect?: CropWhereUniqueInput
  }

  export type FarmerUpdateOneRequiredWithoutFarmerCropNestedInput = {
    create?: XOR<FarmerCreateWithoutFarmerCropInput, FarmerUncheckedCreateWithoutFarmerCropInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutFarmerCropInput
    upsert?: FarmerUpsertWithoutFarmerCropInput
    connect?: FarmerWhereUniqueInput
    update?: XOR<FarmerUpdateWithoutFarmerCropInput, FarmerUncheckedUpdateWithoutFarmerCropInput>
  }

  export type CropUpdateOneRequiredWithoutFarmerCropNestedInput = {
    create?: XOR<CropCreateWithoutFarmerCropInput, CropUncheckedCreateWithoutFarmerCropInput>
    connectOrCreate?: CropCreateOrConnectWithoutFarmerCropInput
    upsert?: CropUpsertWithoutFarmerCropInput
    connect?: CropWhereUniqueInput
    update?: XOR<CropUpdateWithoutFarmerCropInput, CropUncheckedUpdateWithoutFarmerCropInput>
  }

  export type FarmerCreateNestedOneWithoutAddressInput = {
    create?: XOR<FarmerCreateWithoutAddressInput, FarmerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutAddressInput
    connect?: FarmerWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutAddressInput = {
    create?: XOR<StateCreateWithoutAddressInput, StateUncheckedCreateWithoutAddressInput>
    connectOrCreate?: StateCreateOrConnectWithoutAddressInput
    connect?: StateWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutAddressInput = {
    create?: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CityCreateOrConnectWithoutAddressInput
    connect?: CityWhereUniqueInput
  }

  export type FarmerUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<FarmerCreateWithoutAddressInput, FarmerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutAddressInput
    upsert?: FarmerUpsertWithoutAddressInput
    connect?: FarmerWhereUniqueInput
    update?: XOR<FarmerUpdateWithoutAddressInput, FarmerUncheckedUpdateWithoutAddressInput>
  }

  export type StateUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<StateCreateWithoutAddressInput, StateUncheckedCreateWithoutAddressInput>
    connectOrCreate?: StateCreateOrConnectWithoutAddressInput
    upsert?: StateUpsertWithoutAddressInput
    connect?: StateWhereUniqueInput
    update?: XOR<StateUpdateWithoutAddressInput, StateUncheckedUpdateWithoutAddressInput>
  }

  export type CityUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CityCreateOrConnectWithoutAddressInput
    upsert?: CityUpsertWithoutAddressInput
    connect?: CityWhereUniqueInput
    update?: XOR<CityUpdateWithoutAddressInput, CityUncheckedUpdateWithoutAddressInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CityCreateWithoutStateInput = {
    id?: string
    name: string
    Address?: AddressCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    Address?: AddressUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutStateInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityCreateManyStateInputEnvelope = {
    data: Enumerable<CityCreateManyStateInput>
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutStateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Farmer: FarmerCreateNestedOneWithoutAddressInput
    City: CityCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutStateInput = {
    id?: string
    farmerId: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutStateInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutStateInput, AddressUncheckedCreateWithoutStateInput>
  }

  export type AddressCreateManyStateInputEnvelope = {
    data: Enumerable<AddressCreateManyStateInput>
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityUpdateWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
  }

  export type CityUpdateManyWithWhereWithoutStateInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutCityInput>
  }

  export type CityScalarWhereInput = {
    AND?: Enumerable<CityScalarWhereInput>
    OR?: Enumerable<CityScalarWhereInput>
    NOT?: Enumerable<CityScalarWhereInput>
    id?: StringFilter | string
    stateId?: StringFilter | string
    name?: StringFilter | string
  }

  export type AddressUpsertWithWhereUniqueWithoutStateInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutStateInput, AddressUncheckedUpdateWithoutStateInput>
    create: XOR<AddressCreateWithoutStateInput, AddressUncheckedCreateWithoutStateInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutStateInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutStateInput, AddressUncheckedUpdateWithoutStateInput>
  }

  export type AddressUpdateManyWithWhereWithoutStateInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutAddressInput>
  }

  export type AddressScalarWhereInput = {
    AND?: Enumerable<AddressScalarWhereInput>
    OR?: Enumerable<AddressScalarWhereInput>
    NOT?: Enumerable<AddressScalarWhereInput>
    id?: StringFilter | string
    farmerId?: StringFilter | string
    stateId?: StringFilter | string
    cityId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FarmerCropCreateWithoutCropInput = {
    id?: string
    Farmer: FarmerCreateNestedOneWithoutFarmerCropInput
  }

  export type FarmerCropUncheckedCreateWithoutCropInput = {
    id?: string
    farmerId: string
  }

  export type FarmerCropCreateOrConnectWithoutCropInput = {
    where: FarmerCropWhereUniqueInput
    create: XOR<FarmerCropCreateWithoutCropInput, FarmerCropUncheckedCreateWithoutCropInput>
  }

  export type FarmerCropCreateManyCropInputEnvelope = {
    data: Enumerable<FarmerCropCreateManyCropInput>
    skipDuplicates?: boolean
  }

  export type FarmerCropUpsertWithWhereUniqueWithoutCropInput = {
    where: FarmerCropWhereUniqueInput
    update: XOR<FarmerCropUpdateWithoutCropInput, FarmerCropUncheckedUpdateWithoutCropInput>
    create: XOR<FarmerCropCreateWithoutCropInput, FarmerCropUncheckedCreateWithoutCropInput>
  }

  export type FarmerCropUpdateWithWhereUniqueWithoutCropInput = {
    where: FarmerCropWhereUniqueInput
    data: XOR<FarmerCropUpdateWithoutCropInput, FarmerCropUncheckedUpdateWithoutCropInput>
  }

  export type FarmerCropUpdateManyWithWhereWithoutCropInput = {
    where: FarmerCropScalarWhereInput
    data: XOR<FarmerCropUpdateManyMutationInput, FarmerCropUncheckedUpdateManyWithoutFarmerCropInput>
  }

  export type FarmerCropScalarWhereInput = {
    AND?: Enumerable<FarmerCropScalarWhereInput>
    OR?: Enumerable<FarmerCropScalarWhereInput>
    NOT?: Enumerable<FarmerCropScalarWhereInput>
    id?: StringFilter | string
    farmerId?: StringFilter | string
    cropId?: StringFilter | string
  }

  export type StateCreateWithoutCityInput = {
    id?: string
    name: string
    acronym: string
    Address?: AddressCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    acronym: string
    Address?: AddressUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutCityInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
  }

  export type AddressCreateWithoutCityInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Farmer: FarmerCreateNestedOneWithoutAddressInput
    State: StateCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutCityInput = {
    id?: string
    farmerId: string
    stateId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutCityInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput>
  }

  export type AddressCreateManyCityInputEnvelope = {
    data: Enumerable<AddressCreateManyCityInput>
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutCityInput = {
    update: XOR<StateUpdateWithoutCityInput, StateUncheckedUpdateWithoutCityInput>
    create: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
  }

  export type StateUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutStateNestedInput
  }

  export type AddressUpsertWithWhereUniqueWithoutCityInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCityInput, AddressUncheckedUpdateWithoutCityInput>
    create: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCityInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCityInput, AddressUncheckedUpdateWithoutCityInput>
  }

  export type AddressUpdateManyWithWhereWithoutCityInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutAddressInput>
  }

  export type AddressCreateWithoutFarmerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    State: StateCreateNestedOneWithoutAddressInput
    City: CityCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutFarmerInput = {
    id?: string
    stateId: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutFarmerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutFarmerInput, AddressUncheckedCreateWithoutFarmerInput>
  }

  export type FarmerCropCreateWithoutFarmerInput = {
    id?: string
    Crop: CropCreateNestedOneWithoutFarmerCropInput
  }

  export type FarmerCropUncheckedCreateWithoutFarmerInput = {
    id?: string
    cropId: string
  }

  export type FarmerCropCreateOrConnectWithoutFarmerInput = {
    where: FarmerCropWhereUniqueInput
    create: XOR<FarmerCropCreateWithoutFarmerInput, FarmerCropUncheckedCreateWithoutFarmerInput>
  }

  export type FarmerCropCreateManyFarmerInputEnvelope = {
    data: Enumerable<FarmerCropCreateManyFarmerInput>
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutFarmerInput = {
    update: XOR<AddressUpdateWithoutFarmerInput, AddressUncheckedUpdateWithoutFarmerInput>
    create: XOR<AddressCreateWithoutFarmerInput, AddressUncheckedCreateWithoutFarmerInput>
  }

  export type AddressUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    State?: StateUpdateOneRequiredWithoutAddressNestedInput
    City?: CityUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerCropUpsertWithWhereUniqueWithoutFarmerInput = {
    where: FarmerCropWhereUniqueInput
    update: XOR<FarmerCropUpdateWithoutFarmerInput, FarmerCropUncheckedUpdateWithoutFarmerInput>
    create: XOR<FarmerCropCreateWithoutFarmerInput, FarmerCropUncheckedCreateWithoutFarmerInput>
  }

  export type FarmerCropUpdateWithWhereUniqueWithoutFarmerInput = {
    where: FarmerCropWhereUniqueInput
    data: XOR<FarmerCropUpdateWithoutFarmerInput, FarmerCropUncheckedUpdateWithoutFarmerInput>
  }

  export type FarmerCropUpdateManyWithWhereWithoutFarmerInput = {
    where: FarmerCropScalarWhereInput
    data: XOR<FarmerCropUpdateManyMutationInput, FarmerCropUncheckedUpdateManyWithoutFarmerCropInput>
  }

  export type FarmerCreateWithoutFarmerCropInput = {
    id?: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Address?: AddressCreateNestedOneWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutFarmerCropInput = {
    id?: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Address?: AddressUncheckedCreateNestedOneWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutFarmerCropInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutFarmerCropInput, FarmerUncheckedCreateWithoutFarmerCropInput>
  }

  export type CropCreateWithoutFarmerCropInput = {
    id?: string
    name: string
  }

  export type CropUncheckedCreateWithoutFarmerCropInput = {
    id?: string
    name: string
  }

  export type CropCreateOrConnectWithoutFarmerCropInput = {
    where: CropWhereUniqueInput
    create: XOR<CropCreateWithoutFarmerCropInput, CropUncheckedCreateWithoutFarmerCropInput>
  }

  export type FarmerUpsertWithoutFarmerCropInput = {
    update: XOR<FarmerUpdateWithoutFarmerCropInput, FarmerUncheckedUpdateWithoutFarmerCropInput>
    create: XOR<FarmerCreateWithoutFarmerCropInput, FarmerUncheckedCreateWithoutFarmerCropInput>
  }

  export type FarmerUpdateWithoutFarmerCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressUpdateOneWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutFarmerCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressUncheckedUpdateOneWithoutFarmerNestedInput
  }

  export type CropUpsertWithoutFarmerCropInput = {
    update: XOR<CropUpdateWithoutFarmerCropInput, CropUncheckedUpdateWithoutFarmerCropInput>
    create: XOR<CropCreateWithoutFarmerCropInput, CropUncheckedCreateWithoutFarmerCropInput>
  }

  export type CropUpdateWithoutFarmerCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CropUncheckedUpdateWithoutFarmerCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FarmerCreateWithoutAddressInput = {
    id?: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt?: Date | string
    updatedAt?: Date | string
    FarmerCrop?: FarmerCropCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    document: string
    farmName: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    createdAt?: Date | string
    updatedAt?: Date | string
    FarmerCrop?: FarmerCropUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutAddressInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutAddressInput, FarmerUncheckedCreateWithoutAddressInput>
  }

  export type StateCreateWithoutAddressInput = {
    id?: string
    name: string
    acronym: string
    City?: CityCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    acronym: string
    City?: CityUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutAddressInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutAddressInput, StateUncheckedCreateWithoutAddressInput>
  }

  export type CityCreateWithoutAddressInput = {
    id?: string
    name: string
    State: StateCreateNestedOneWithoutCityInput
  }

  export type CityUncheckedCreateWithoutAddressInput = {
    id?: string
    stateId: string
    name: string
  }

  export type CityCreateOrConnectWithoutAddressInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
  }

  export type FarmerUpsertWithoutAddressInput = {
    update: XOR<FarmerUpdateWithoutAddressInput, FarmerUncheckedUpdateWithoutAddressInput>
    create: XOR<FarmerCreateWithoutAddressInput, FarmerUncheckedCreateWithoutAddressInput>
  }

  export type FarmerUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FarmerCrop?: FarmerCropUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    totalArea?: IntFieldUpdateOperationsInput | number
    arableArea?: IntFieldUpdateOperationsInput | number
    vegetationArea?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FarmerCrop?: FarmerCropUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type StateUpsertWithoutAddressInput = {
    update: XOR<StateUpdateWithoutAddressInput, StateUncheckedUpdateWithoutAddressInput>
    create: XOR<StateCreateWithoutAddressInput, StateUncheckedCreateWithoutAddressInput>
  }

  export type StateUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    City?: CityUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    acronym?: StringFieldUpdateOperationsInput | string
    City?: CityUncheckedUpdateManyWithoutStateNestedInput
  }

  export type CityUpsertWithoutAddressInput = {
    update: XOR<CityUpdateWithoutAddressInput, CityUncheckedUpdateWithoutAddressInput>
    create: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
  }

  export type CityUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    State?: StateUpdateOneRequiredWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateManyStateInput = {
    id?: string
    name: string
  }

  export type AddressCreateManyStateInput = {
    id?: string
    farmerId: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Farmer?: FarmerUpdateOneRequiredWithoutAddressNestedInput
    City?: CityUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerCropCreateManyCropInput = {
    id?: string
    farmerId: string
  }

  export type FarmerCropUpdateWithoutCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    Farmer?: FarmerUpdateOneRequiredWithoutFarmerCropNestedInput
  }

  export type FarmerCropUncheckedUpdateWithoutCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
  }

  export type FarmerCropUncheckedUpdateManyWithoutFarmerCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateManyCityInput = {
    id?: string
    farmerId: string
    stateId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Farmer?: FarmerUpdateOneRequiredWithoutAddressNestedInput
    State?: StateUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerCropCreateManyFarmerInput = {
    id?: string
    cropId: string
  }

  export type FarmerCropUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    Crop?: CropUpdateOneRequiredWithoutFarmerCropNestedInput
  }

  export type FarmerCropUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
  }



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
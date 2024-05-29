import { z } from "zod";

import type * as types from "./types";

import * as terminal from "~/application/support/terminal";

import {
  ConfigurationError,
  type ConfigurationErrorFormattingOptions,
  type ConfiguredError,
} from "./configuration-error";

type EnvironmentConfiguration<R extends types.RuntimeEnv<V>, V extends types.Validators<R>> = {
  readonly runtime: R;
  readonly validators: V;
};

type EnvironmentOptions<R extends types.RuntimeEnv<V>, V extends types.Validators<R>> = {
  readonly errorMessage?: ConfigurationErrorFormattingOptions<R, V>;
  readonly onError?: (err: ConfigurationError<R, V>) => void;
};

export class Environment<R extends types.RuntimeEnv<V>, V extends types.Validators<R>> {
  private readonly validators: V;
  private readonly runtime: R;
  private readonly _options?: EnvironmentOptions<R, V>;

  private _env: types.Env<R, V> | undefined = undefined;

  constructor(
    { validators, runtime }: EnvironmentConfiguration<R, V>,
    options?: EnvironmentOptions<R, V>,
  ) {
    this.validators = validators;
    this.runtime = runtime;
    this._options = options;
  }

  public static create<R extends types.RuntimeEnv<V>, V extends types.Validators<R>>(
    { validators, runtime }: EnvironmentConfiguration<R, V>,
    options: EnvironmentOptions<R, V>,
  ): Environment<R, V> {
    return new Environment({ validators, runtime }, options);
  }

  private get errorMessageConfig(): ConfigurationErrorFormattingOptions<R, V> | undefined {
    return this._options?.errorMessage;
  }

  private parseEnv(): types.Env<R, V> {
    const parsed = z.object(this.validators).safeParse(this.runtime);
    if (parsed.success) {
      /* I do not understand why this type coercion is necessary - but we should investigate it
         at a later point in time. */
      return parsed.data as types.Env<R, V>;
    }
    this.onError(parsed.error);
    throw new Error("The 'onError' option did not throw an error as expected.");
  }

  private get env(): types.Env<R, V> {
    if (this._env === undefined) {
      this._env = this.parseEnv();
    }
    return this._env;
  }

  private onError(error: z.ZodError) {
    const e = new ConfigurationError(error, this.errorMessageConfig);
    /* eslint-disable-next-line no-console */
    const handler =
      this._options?.onError ??
      (err => {
        throw err;
      });
    handler(e);
  }

  public throwConfigurationError(
    error: ConfiguredError<R, V>,
    options?: ConfigurationErrorFormattingOptions<R, V>,
  ): never;

  public throwConfigurationError(
    field: types.EnvKey<R, V>,
    message: string,
    options?: ConfigurationErrorFormattingOptions<R, V>,
  ): never;

  public throwConfigurationError(
    error: ConfiguredError<R, V> | types.EnvKey<R, V>,
    message?: string | ConfigurationErrorFormattingOptions<R, V>,
    options?: ConfigurationErrorFormattingOptions<R, V>,
  ): never {
    if (typeof error === "string") {
      if (typeof message !== "string") {
        throw new TypeError(
          "Invalid method implementation:  The second argument must be a message string.",
        );
      }
      throw new ConfigurationError(
        { message, field: error },
        { ...this.errorMessageConfig, ...options },
      );
    }
    throw new ConfigurationError(error, { ...this.errorMessageConfig, ...options });
  }

  public get toString(): string {
    const lines: string[] = [];
    for (const key in this.env) {
      lines.push(
        `- ${key} = ${terminal.YELLOW + this.env[key as keyof typeof this.env] + terminal.RESET}`,
      );
    }
    return lines.join("\n");
  }

  public pick<K extends types.EnvKey<R, V>>(keys: K[]): { [key in K]: types.EnvValue<key, R, V> } {
    const env = {} as { [key in K]: types.EnvValue<key, R, V> };
    for (const key of keys) {
      env[key] = this.get(key);
    }
    return env;
  }

  public get<K extends types.EnvKey<R, V>>(key: K): types.EnvValue<K, R, V> {
    return this.env[key];
  }
}

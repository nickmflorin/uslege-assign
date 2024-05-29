import { type z } from "zod";

type ValidEnvValue = string | number | boolean | undefined | string[];

type BaseRuntimeEnv = {
  [key in string]: string | undefined;
};

export type EnvKey<R extends RuntimeEnv<V>, V extends Validators<R>> = Extract<keyof R, string> &
  Extract<keyof V, string>;

export type EnvValue<
  K extends EnvKey<R, V>,
  R extends RuntimeEnv<V>,
  V extends Validators<R>,
> = z.infer<V[K]>;

export type Validators<R extends BaseRuntimeEnv = BaseRuntimeEnv> = {
  [key in Extract<keyof R, string>]: z.ZodType<ValidEnvValue>;
};

export type RuntimeEnv<V extends Validators> = {
  [key in Extract<keyof V, string>]: string | undefined;
};

export type Runtime<R extends RuntimeEnv<V>, V extends Validators<R>> = {
  [key in EnvKey<R, V>]: R[key];
};

export type Env<R extends RuntimeEnv<V>, V extends Validators<R>> = {
  [key in EnvKey<R, V>]: EnvValue<key, R, V>;
};

import { createCommaSeparatedArraySchema } from "./util";

export enum PrismaLogLevel {
  Info = "info",
  Query = "query",
  Warn = "warn",
  Error = "error",
}

export const PrismaLogLevelSchema = createCommaSeparatedArraySchema({
  options: Object.values(PrismaLogLevel),
  partTransformer: v => v.toLowerCase(),
});

export enum EnvironmentName {
  Test = "test",
  Development = "development",
  Production = "production",
}

export enum LogLevel {
  FATAL = "fatal",
  ERROR = "error",
  INFO = "info",
  WARN = "warn",
  DEBUG = "debug",
  TRACE = "trace",
  SILENT = "silent",
}

export const DEFAULT_LOG_LEVELS: { [key in EnvironmentName]: LogLevel } = {
  development: LogLevel.DEBUG,
  production: LogLevel.INFO,
  test: LogLevel.DEBUG,
};

export const DEFAULT_PRETTY_LOGGING: Record<EnvironmentName, boolean> = {
  development: true,
  production: false,
  test: true,
};

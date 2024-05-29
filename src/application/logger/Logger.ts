import pino, { type LoggerOptions, type DestinationStream, multistream } from "pino";
import { v4 as uuid } from "uuid";

import { type LogLevel, environment } from "~/environment";

const __NOT_SET__ = "__NOT_SET__" as const;
type NotSet = typeof __NOT_SET__;

export class Logger {
  private readonly instance: string;
  private _level: LogLevel | undefined;
  private _pino: pino.Logger | null = null;
  private _prettyStream: DestinationStream | NotSet | null = __NOT_SET__;

  constructor(level?: LogLevel) {
    this.instance = uuid();
    this._level = level;
  }

  public get level() {
    if (this._level === undefined) {
      return environment.get("LOG_LEVEL");
    }
    return this._level;
  }

  public set level(level: LogLevel) {
    this._level = level;
    /* eslint-disable-next-line no-console -- The logger is not yet configured here. */
    console.info(`Resetting logger with level '${level}'...`);
    this.reset();
  }

  private get env() {
    return process.env.NODE_ENV;
  }

  private get vercelEnv() {
    return process.env.VERCEL_ENV;
  }

  private get prettyStream() {
    if (this._prettyStream === __NOT_SET__) {
      if (typeof window === "undefined" && environment.get("PRETTY_LOGGING") === true) {
        /* eslint-disable-next-line @typescript-eslint/no-var-requires */
        const pretty = require("pino-pretty");
        return pretty({ colorize: true, sync: true });
      }
      return null;
    }
    return this._prettyStream;
  }

  private get stream() {
    if (this.prettyStream) {
      /* eslint-disable-next-line no-console -- The logger is not yet configured here. */
      console.info("Configuring logger for pretty logging...");
      return multistream([this.prettyStream]);
    }
    return undefined;
  }

  private get config(): LoggerOptions {
    return {
      level: this.level,
      base: {
        env: this.env,
        instance: this.instance,
      },
    };
  }

  private reset() {
    this._pino = pino(this.config, this.stream);
  }

  private get pino() {
    if (!this._pino) {
      this.reset();
    }
    return this._pino as pino.Logger;
  }

  public warn(message: string, context?: object, ...args: any[]): void {
    if (context !== undefined) {
      this.pino.warn(context, message, ...args);
    } else {
      this.pino.warn(message, ...args);
    }
  }

  public error(message: string, context?: object, ...args: any[]): void {
    if (context !== undefined) {
      this.pino.error(context, message, ...args);
    } else {
      this.pino.error(message, ...args);
    }
  }

  public info(message: string, context?: object, ...args: any[]): void {
    if (context !== undefined) {
      this.pino.info(context, message, ...args);
    } else {
      this.pino.info(message, ...args);
    }
  }

  public debug(message: string, context?: object, ...args: any[]): void {
    if (context !== undefined) {
      this.pino.debug(context, message, ...args);
    } else {
      this.pino.debug(message, ...args);
    }
  }
}

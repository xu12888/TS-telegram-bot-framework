// utils/logger.ts

export enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

export class Logger {
  log(level: LogLevel, message: string): void {
    console.log(
      `[${level.toUpperCase()}] ${new Date().toISOString()}: ${message}`
    );
  }

  info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  warn(message: string): void {
    this.log(LogLevel.WARN, message);
  }

  error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }
}

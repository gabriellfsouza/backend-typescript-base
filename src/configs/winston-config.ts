import { resolve } from 'path';
import { format } from 'winston';
import { ConsoleTransportOptions, FileTransportOptions } from 'winston/lib/winston/transports';

interface IWinstonConfig {
  file: FileTransportOptions;
  fileErrors: FileTransportOptions;
  console: ConsoleTransportOptions;
}

const {
  combine, timestamp, printf, json,
} = format;

const myFormat = printf(
  ({
    level, message, timestamp: timeSTMP, ...more
  }) => `${timeSTMP} - ${level}: ${message} ${
    Object.entries(more).length > 0
      ? `more: ${JSON.stringify({
        more,
      })}`
      : ''
  }`,
);

const winstonConfig : IWinstonConfig = {
  file: {
    filename: resolve(__dirname, '..', '..', 'logs', 'server.log'),
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5,
    format: combine(timestamp(), json()),
  },
  fileErrors: {
    level: 'error',
    filename: resolve(__dirname, '..', '..', 'logs', 'errors.log'),
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5,
    format: combine(timestamp(), json()),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: combine(timestamp(), myFormat),
  },
};

export default winstonConfig;

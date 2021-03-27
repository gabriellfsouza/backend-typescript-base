import { createLogger, transports, config } from 'winston';
import winstonConfig from '../../../configs/winston-config';

/**
 * logger.debug('mensagem') => console messages
 * logger.info('mensagem') => info log
 * logger.warn('mensagem') => warn log
 */
export const logger = createLogger({
  levels: config.syslog.levels,
  transports: [
    new transports.Console(winstonConfig.console),
    new transports.File(winstonConfig.fileErrors),
    new transports.File(winstonConfig.file),
  ],
  exitOnError: false,
});

const winstonUtils = {
  logger,
};

export default winstonUtils;

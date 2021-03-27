import { logger } from '.';

describe('winstonConfig', () => {
  it('should be able to validate a simple equation', () => {
    expect(logger).toHaveProperty('info');
    expect(logger).toHaveProperty('debug');
    expect(logger).toHaveProperty('warn');
  });
});

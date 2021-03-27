import { logger } from '.';

describe('winstonConfig', () => {
  it('should be able to validate the logger methods', () => {
    expect(logger).toHaveProperty('info');
    expect(logger).toHaveProperty('debug');
    expect(logger).toHaveProperty('error');
  });
});

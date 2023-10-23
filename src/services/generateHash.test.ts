import { generateHash } from './generateHash';

global.TextEncoder = require('util').TextEncoder;

describe('generateHash', () => {
  it('should return a valid string', () => {
    const result = generateHash('foo', 'bar', 'baz');

    expect(result).toBe('130b02b90cf45e7f465c717196aa4f706ab7a52901d22384d0b0562ca668598d');
  });

  it('should handle empty strings', () => {
    const result = generateHash('', '', '');

    expect(result).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  });

  it('should return a valid string with special characters', () => {
    const result = generateHash('foo', '<html#>', 'baz');

    expect(result).toBe('b7385df3b782339b66400089d41a142d4e007d84c94fb68397d7f4fb82e74f9b');
  });
});

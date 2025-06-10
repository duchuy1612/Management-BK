import capitalize from '../config/capitalize.js';

describe('capitalize utility', () => {
  test('capitalizes single word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalizes multiple words', () => {
    expect(capitalize('hello world')).toBe('Hello World');
  });
});

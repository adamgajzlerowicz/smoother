import { validateConfig } from './config';

test('basic', () => {
  expect(validateConfig('a')).toBe(true);
});

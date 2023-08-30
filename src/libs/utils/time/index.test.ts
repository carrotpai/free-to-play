import { describe, it } from 'vitest';
import { formatTime } from '.';

describe('time utils', () => {
  it('format time invalid time', () => {
    const tempStr = '0000-00-00';
    expect(formatTime(tempStr)).toBeUndefined();
  });

  it('format time with invalid days', () => {
    const tempStr = '2012-10-00';
    expect(formatTime(tempStr)).toBeDefined();
  });

  it('format valid time', () => {
    const tempStr = '2012-10-01';
    expect(formatTime(tempStr)).toBeDefined();
  });
});

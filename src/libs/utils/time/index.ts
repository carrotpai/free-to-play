import { format, parse } from 'date-fns';

export const formatTime = (date?: string): string | undefined => {
  if (!date) {
    return undefined;
  }
  try {
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'd MMMM yyyy');
  } catch (e) {
    if (date.slice(-2) === '00') {
      let newStr = date.substring(0, date.length - 2).concat('01');
      return formatTime(newStr);
    }
    return undefined;
  }
};

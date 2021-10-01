/* eslint-disable no-use-before-define */
import { format, getYear, differenceInYears } from 'date-fns';

/**
 * formatISO
 */
const formatISO = (date: string): string => {
  let dateToConvert = date;

  // check to see if the time is included
  const includesTime = date.includes('T');
  if (!includesTime) {
    dateToConvert = `${dateToConvert}T00:00:00`;
  }

  const newDate = new Date(dateToConvert);
  return format(newDate, 'MMMM d, yyyy');
};

export { formatISO };

/*
// TODO: HARD CODED DATE IN
const formatSitemapDate = (date: string): string => {
  if (!date) return;
  // return parseISO(date);
  return '2021-01-08';
};

export { formatSitemapDate };
*/

/**
 * gets the current year
 * @returns {number}
 */
const getCurrentYear = (): number => getYear(new Date());

export { getCurrentYear };

/**
 * Format the Date
 * Takes the date and returns an array
 *  @returns {string[]} - [year, month, date]
 */
const formatDate = (date: string): string[] => {
  if (!date) return;
  const dateArray = date.split('-');
  return dateArray;
};

/**
 * prettyDate
 * Formats the date as "Month Date, Year"
 */
const prettyDate = (date: string): string => `${getPostMonth(date)} ${getPostDate(date)}, ${getPostYear(date)}`;

export { prettyDate };

/**
 * Get the Post Date
 * Returns the date as a number
 */
const getPostDate = (dateToFormat: string): number => {
  if (!dateToFormat) return;
  // eslint-disable-next-line no-unused-vars
  const [year, month, date] = formatDate(dateToFormat);
  return Number(date);
};

export { getPostDate };

/**
 * Get the Post Month
 * Returns the month (expanded string)
 */
const getPostMonth = (dateToFormat: string): string => {
  if (!dateToFormat) return;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [year, month, date] = formatDate(dateToFormat);
  return months[Number(month) - 1];
};

export { getPostMonth };

/**
 * getPostMonthAbbrev
 * Returns the month as an abbreviation
 */
const getPostMonthAbbrev = (dateToFormat: number): string => {
  const abbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // const [year, month, date] = formatDate(dateToFormat);
  // TODO: Not Dynamic
  return abbreviations[3];
};

export { getPostMonthAbbrev };

/**
 * Get the Post Year
 * Returns the date as the full year (2021)
 */
const getPostYear = (dateToFormat: string): string => {
  if (!dateToFormat) return;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [year, month, date] = formatDate(dateToFormat);
  return year;
};

export { getPostYear };

/**
 * Get Age
 * Takes a birthday and returns the age in years
 */
const getAge = (birthday: string, compareDate = ''): number => {
  let today: Date;

  if (compareDate) {
    const formattedToday = formatDate(compareDate);
    today = new Date(Number(formattedToday[0]), Number(formattedToday[1]) - 1, Number(formattedToday[2]));
  } else {
    today = new Date();
  }

  // format birthday
  const formattedDate = formatDate(birthday);
  const birthdayDate = new Date(Number(formattedDate[0]), Number(formattedDate[1]) - 1, Number(formattedDate[2]));

  return differenceInYears(today, birthdayDate);
};

export { getAge };

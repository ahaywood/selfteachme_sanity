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
const prettyDate = (date: string | Date): string =>
  `${getPostMonth(date.toString())} ${getPostDate(date.toString())}, ${getPostYear(date.toString())}`;

export { prettyDate };

/**
 * Get the Post Date
 * Returns the date as a number
 */
const getPostDate = (dateToFormat: string | Date): number => {
  if (!dateToFormat) return;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [year, month, date] = formatDate(dateToFormat.toString());
  return Number(date);
};

export { getPostDate };

/**
 * Get the Post Month
 * Returns the month (expanded string)
 */
const getPostMonth = (dateToFormat: string | Date): string => {
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
  const [year, month, date] = formatDate(dateToFormat.toString());
  return months[Number(month) - 1];
};

export { getPostMonth };

/**
 * Get the Post Year
 * Returns the date as the full year (2021)
 */
const getPostYear = (dateToFormat: string | Date): string => {
  if (!dateToFormat) return;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [year, month, date] = formatDate(dateToFormat.toString());
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

/**
 * Show Post Date
 * Takes the publish date and the updated date and determines which date to show
 * @param dateUpdated - string or date that the post was updated
 * @param datePublished - string or date that the post was Published
 * @param withString - boolean that determines whether to include a label
 * @return string containing the published or updated date
 */
const showPostDate = (dateUpdated: string | Date, datePublished: string | Date, withString = true): string => {
  if (dateUpdated) {
    return withString ? `Last Updated ${prettyDate(dateUpdated.toString())}` : prettyDate(dateUpdated.toString());
  }
  if (datePublished) {
    return withString ? `Published: ${prettyDate(datePublished.toString())}` : prettyDate(datePublished.toString());
  }
  return '';
};

export { showPostDate };

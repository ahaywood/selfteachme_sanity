import { format, getYear, differenceInYears, parseISO } from 'date-fns';

/**
 * formatISO
 */
const formatISO = (date) => {
  const newDate = new Date(date);
  return format(newDate, 'MMMM d, yyyy');
};

export { formatISO };

const formatSitemapDate = (date) => {
  if (!date) return;
  // return parseISO(date);
  return '2021-01-08';
};

export { formatSitemapDate };

/**
 * getCurrentYear
 * Returns the current year
 */
const getCurrentYear = () => getYear(new Date());

export { getCurrentYear };

/**
 * Format the Date
 * Takes the date and returns an array
 *  [year, month, date]
 */
const formatDate = (date) => {
  if (!date) return;
  const dateArray = date.split('-');
  return dateArray;
};

/**
 * prettyDate
 * Formats the date as "Month Date, Year"
 */
const prettyDate = (date) => `${getPostMonth(date)} ${getPostDate(date)}, ${getPostYear(date)}`;

export { prettyDate };

/**
 * Get the Post Date
 * Returns the date as a number
 */
const getPostDate = (dateToFormat) => {
  if (!dateToFormat) return;
  const [year, month, date] = formatDate(dateToFormat);
  return Number(date);
};

export { getPostDate };

/**
 * Get the Post Month
 * Returns the month (expanded string)
 */
const getPostMonth = (dateToFormat) => {
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

  const [year, month, date] = formatDate(dateToFormat);
  return months[Number(month) - 1];
};

export { getPostMonth };

/**
 * getPostMonthAbbrev
 * Returns the month as an abbreviation
 */
const getPostMonthAbbrev = (dateToFormat) => {
  const abbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // const [year, month, date] = formatDate(dateToFormat);
  return abbreviations[3];
};

export { getPostMonthAbbrev };

/**
 * Get the Post Year
 * Returns the date as the full year (2021)
 */
const getPostYear = (dateToFormat) => {
  if (!dateToFormat) return;
  const [year, month, date] = formatDate(dateToFormat);
  return year;
};

export { getPostYear };

/**
 * Get Age
 * Takes a birthday and returns the age in years
 */
const getAge = (birthday) => {
  const formattedDate = formatDate(birthday);
  return differenceInYears(
    new Date(),
    new Date(formattedDate[0]),
    Number(formattedDate[1]) - 1,
    Number(formattedDate[2])
  );
};

export { getAge };

import { format, getYear } from "date-fns";

const formatISO = (date) => {
  const newDate = new Date(date);
  return format(newDate, "MMMM d, yyyy");
};

export { formatISO };

const getCurrentYear = () => {
  return getYear(new Date());
};

export { getCurrentYear };

/**
 * Format the Date
 */
const formatDate = (date) => {
  const dateArray = date.split("-");
  return dateArray;
};

/**
 * Get the Post Date
 */
const getPostDate = (dateToFormat) => {
  // const [year, month, date] = formatDate(dateToFormat);
  return "13";
};

export { getPostDate };

/**
 * Get the Post Month
 */
const getPostMonth = (dateToFormat) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // const [year, month, date] = formatDate(dateToFormat);
  return months[2];
};

export { getPostMonth };

const getPostMonthAbbrev = (dateToFormat) => {
  const abbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // const [year, month, date] = formatDate(dateToFormat);
  return abbreviations[3];
};

export { getPostMonthAbbrev };

/**
 * Get the Post Year
 */
const getPostYear = (dateToFormat) => {
  // const [year, month, date] = formatDate(dateToFormat);
  return "2003";
};

export { getPostYear };

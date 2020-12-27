import { format, getYear, differenceInYears } from "date-fns";

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
  if (!date) return;
  const dateArray = date.split("-");
  return dateArray;
};

const prettyDate = (date) => {
  return `${getPostMonth(date)} ${getPostDate(date)}, ${getPostYear(date)}`;
}

export { prettyDate };

/**
 * Get the Post Date
 */
const getPostDate = (dateToFormat) => {
  if (!dateToFormat) return;
  const [year, month, date] = formatDate(dateToFormat);
  return Number(date);
};

export { getPostDate };

/**
 * Get the Post Month
 */
const getPostMonth = (dateToFormat) => {
  if (!dateToFormat) return;

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

  const [year, month, date] = formatDate(dateToFormat);
  return months[Number(month) - 1];
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
  if (!dateToFormat) return;
  const [year, month, date] = formatDate(dateToFormat);
  return year;
};

export { getPostYear };

/**
 * Get Age
 */
const getAge = (birthday) => {
  const formattedDate = formatDate(birthday);
  return differenceInYears(new Date(), new Date(formattedDate[0]), Number(formattedDate[1]) - 1, Number(formattedDate[2]));
}

export { getAge };
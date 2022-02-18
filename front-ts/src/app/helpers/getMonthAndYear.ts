import { GB_LOCALE, LT_LOCALE } from '../constants/languages';

const getMonthAndYear = ({ isLithuanian = true, monthBack = 0 } = {}) => {
  const locale = isLithuanian ? LT_LOCALE : GB_LOCALE;
  const date = new Date();

  const newDate = new Date(date.setMonth(date.getMonth() - monthBack));

  const month = newDate.toLocaleString(locale, { month: 'long' });

  return `${month[0].toUpperCase() + month.slice(1)} ${newDate.getFullYear()}`;
};

export default getMonthAndYear;

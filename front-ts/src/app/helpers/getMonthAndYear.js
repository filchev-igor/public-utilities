"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const language_1 = require("../constants/language");
const getMonthAndYear = ({ isLithuanian = true, monthBack = 0 }) => {
    const locale = isLithuanian ? language_1.LT_LOCALE : language_1.GB_LOCALE;
    const date = new Date();
    const newDate = new Date(date.setMonth(date.getMonth() - monthBack));
    const month = newDate.toLocaleString(locale, { month: 'long' });
    return `${month[0].toUpperCase() + month.slice(1)} ${newDate.getFullYear()}`;
};
exports.default = getMonthAndYear;

export const SETTINGS = "settings";
export const BILLS = "bills";
export const NEWS_AND_MESSAGES = "news and messages";
export const CONTACTS = "contacts";
export const AMOUNTS_OF_CONSUMED = "amounts of consumed";
export const CONTENT_ADDING = "content adding";
export const LOGIN = "login";
export const SIGN_UP = "sign up";

export const USUAL_PAGES = [
    LOGIN,
    SIGN_UP,
];

export const AUTHENTICATED_PAGES = [
    NEWS_AND_MESSAGES,
    BILLS,
    AMOUNTS_OF_CONSUMED,
    CONTACTS,
    SETTINGS,
];

export const AUTHORIZED_PAGES = [
    ...AUTHENTICATED_PAGES,
    CONTENT_ADDING,
];

export const LOG_OUT_BUTTON = 'log out';

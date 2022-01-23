export const SETTINGS = "settings";
export const BILLS = "bills";
export const NEWS_AND_MESSAGES = "news and messages";
export const CONTACTS = "contacts";
export const AMOUNTS_OF_CONSUMED = "amounts of consumed";
export const CONTENT_ADDING = "content adding";
export const LOGIN = "login"
export const SIGN_UP = "sign up"

export const USUAL_PAGES = [
  LOGIN,
  SIGN_UP,
  NEWS_AND_MESSAGES,
  CONTACTS
];

export const AUTHENTICATED_USER_PAGES = [
  SETTINGS,
  BILLS,
  NEWS_AND_MESSAGES,
  CONTACTS,
  AMOUNTS_OF_CONSUMED,
];

export const AUTHORIZED_USER_PAGES = [
  ...AUTHENTICATED_USER_PAGES,
  CONTENT_ADDING,
];

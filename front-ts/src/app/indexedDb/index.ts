import { openDB } from 'idb';

/*
Opens connection to the database
 */
const getDatabase = () => openDB('publicUtilitiesDb', 1, {
  upgrade(db) {
    db.createObjectStore('siteSettings');
  },
});

/*
Add new item to the database
 */
export const addItem = async (data) => {
  const db = await getDatabase();

  const store = db
    .transaction('siteSettings', 'readwrite')
    .objectStore('siteSettings');

  try {
    await store.add(data);
  } catch (err) {
    if (err.setting === 'ConstraintError') {
      throw new Error('mistake!');
    }
  }
};

/*
Extracts all values from the database
 */
export const getListPromise = async () => {
  const listItems = [];

  const db = await getDatabase();

  const store = db
    .transaction('siteSettings')
    .objectStore('siteSettings');

  let cursor = await store.openCursor();

  while (cursor) {
    listItems.push(cursor.value);

    cursor = await cursor.continue();
  }

  return listItems;
};

export const setDataByKey = async (value, key) => {
  const db = await getDatabase();

  const store = db
    .transaction('siteSettings', 'readwrite')
    .objectStore('siteSettings');

  await store.put(value, key);

  return await store.get(key);
};

export const getDataByKey = async (key, defaultValue) => {
  const db = await getDatabase();

  const store = db
    .transaction('siteSettings', 'readonly')
    .objectStore('siteSettings');

  return await store.get(key) ?? await setDataByKey(defaultValue, key);
};

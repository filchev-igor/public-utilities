"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataByKey = exports.setDataByKey = exports.getListPromise = exports.addItem = void 0;
const idb_1 = require("idb");
/*
Opens connection to the database
 */
const getDatabase = () => (0, idb_1.openDB)('publicUtilitiesDb', 1, {
    upgrade(db) {
        db.createObjectStore('siteSettings');
    },
});
/*
Add new item to the database
 */
const addItem = async (data) => {
    const db = await getDatabase();
    const store = db
        .transaction('siteSettings', 'readwrite')
        .objectStore('siteSettings');
    try {
        await store.add(data);
    }
    catch (err) {
        if (err.setting === 'ConstraintError') {
            throw new Error('mistake!');
        }
    }
};
exports.addItem = addItem;
/*
Extracts all values from the database
 */
const getListPromise = async () => {
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
exports.getListPromise = getListPromise;
const setDataByKey = async (value, key) => {
    const db = await getDatabase();
    const store = db
        .transaction('siteSettings', 'readwrite')
        .objectStore('siteSettings');
    await store.put(value, key);
    return await store.get(key);
};
exports.setDataByKey = setDataByKey;
const getDataByKey = async (key, defaultValue) => {
    const db = await getDatabase();
    const store = db
        .transaction('siteSettings', 'readonly')
        .objectStore('siteSettings');
    return await store.get(key) ?? await (0, exports.setDataByKey)(defaultValue, key);
};
exports.getDataByKey = getDataByKey;

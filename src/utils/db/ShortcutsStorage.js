import { openDB } from 'idb';

const DB_NAME = 'ShortcutsDB';
const DB_VERSION = 1;
const SHORTCUTS_STORE = 'shortcuts';

const openPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(SHORTCUTS_STORE)) {
      db.createObjectStore(SHORTCUTS_STORE, { keyPath: 'id' });
    }
  },
});

export const addShortcut = async (shortcut) => {
  const db = await openPromise;
  const tx = db.transaction(SHORTCUTS_STORE, 'readwrite');
  const store = tx.objectStore(SHORTCUTS_STORE);
  await store.add(shortcut);
};

export const removeShortcut = async (id) => {
  const db = await openPromise;
  const tx = db.transaction(SHORTCUTS_STORE, 'readwrite');
  const store = tx.objectStore(SHORTCUTS_STORE);
  await store.delete(id);
};

export const getAllShortcuts = async () => {
  const db = await openPromise;
  const tx = db.transaction(SHORTCUTS_STORE, 'readonly');
  const store = tx.objectStore(SHORTCUTS_STORE);
  return store.getAll();
};

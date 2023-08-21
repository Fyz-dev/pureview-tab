import { openDB } from 'idb';

const DB_NAME = 'ImagesDB';
const DB_VERSION = 1;

async function openDatabase() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(database) {
      if (!database.objectStoreNames.contains('selectedImages')) {
        database.createObjectStore('selectedImages', {
          keyPath: 'id',
          // autoIncrement: true,
        });
      }

      if (!database.objectStoreNames.contains('favoriteImages')) {
        database.createObjectStore('favoriteImages', {
          keyPath: 'id',
          // autoIncrement: true,
        });
      }
    },
  });
}

export async function addFavoriteImage(image) {
  const db = await openDatabase();
  const tx = db.transaction('favoriteImages', 'readwrite');
  const store = tx.objectStore('favoriteImages');
  await store.add(image);
  tx.done;
  db.close();
}

export async function getAllFavoriteImages() {
  const db = await openDatabase();
  const tx = db.transaction('favoriteImages', 'readonly');
  const store = tx.objectStore('favoriteImages');
  const favoriteImages = await store.getAll();
  tx.done;
  db.close();
  return favoriteImages;
}

export async function removeFavoriteImage(imageId) {
  const db = await openDatabase();
  const tx = db.transaction('favoriteImages', 'readwrite');
  const store = tx.objectStore('favoriteImages');
  await store.delete(imageId);
  tx.done;
  db.close();
}

export async function updateSelectedImage(selectedImage) {
  const db = await openDatabase();
  const tx = db.transaction(['selectedImages'], 'readwrite');
  const selectedStore = tx.objectStore('selectedImages');

  await selectedStore.clear();
  await selectedStore.add(selectedImage);

  tx.done;
  db.close();
}

export async function getSelectedImage() {
  const db = await openDatabase();
  const tx = db.transaction('selectedImages', 'readonly');
  const store = tx.objectStore('selectedImages');

  // Используем метод openCursor() для получения первого доступного объекта
  const cursor = await store.openCursor();
  if (cursor) {
    const selectedImage = cursor.value;
    await cursor.continue(); // Перемещаем курсор к следующему объекту
    await tx.done;
    db.close();
    return selectedImage;
  }

  // Если нет доступных объектов
  await tx.done;
  db.close();
  return null;
}

// Использование:

// // Добавление картинки
// const newImage = { src: 'path_to_image.jpg', favorite: false, selected: false };
// addImage(newImage);

// // Получение всех картинок
// getAllImages().then(images => {
//   console.log('Список картинок:', images);
// });

// Получение выбранной картинки
// getSelectedImage().then(selectedImage => {
//   if (selectedImage) {
//     console.log('Выбранная картинка:', selectedImage);
//   } else {
//     console.log('Нет выбранной картинки.');
//   }
// });

// Установка выбранной картинки
// const imageIdToSelect = 1; // Идентификатор выбранной картинки
// updateSelectedImage(imageIdToSelect).then(() => {
//   console.log('Картинка была выбрана.');
// });

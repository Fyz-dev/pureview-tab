import { makeAutoObservable, runInAction } from 'mobx';
import {
  addShortcut,
  getAllShortcuts,
  removeShortcut,
} from 'src/utils/db/ShortcutsStorage';
import getIconSite from 'src/utils/getIconSite';

class Shortcuts {
  _isVisible = true;
  _shortcuts = [];

  constructor() {
    makeAutoObservable(this);

    this.#loadVisibility();
    this.#loadShortcuts();
  }

  //Загрузка видимости элемента
  #loadVisibility = () => {
    const savedVisible = localStorage.getItem('shortcutsVisible');
    if (savedVisible !== null) {
      this._isVisible = JSON.parse(savedVisible);
    }
  };

  //Загрузка ярлыков из БД
  #loadShortcuts = async () => {
    const items = await getAllShortcuts();
    const shortcutsWithIcons = items.map((item) => ({
      ...item,
      iconUrl: item.iconUrl || getIconSite(item.url),
    }));

    runInAction(() => {
      this._shortcuts = shortcutsWithIcons;
    });
  };

  // PUBLIC FUNCTION //
  get visible() {
    return this._isVisible;
  }

  set visible(value) {
    this._isVisible = value;
    localStorage.setItem('shortcutsVisible', JSON.stringify(value));
  }

  get shortcuts() {
    return this._shortcuts;
  }

  addShortcut = async (item) => {
    item.id = this._shortcuts.reduce((max, shortcut) => {
      return Math.max(max, shortcut.id) + 1;
    }, 1);

    //Добавление в бд
    await addShortcut(item);

    //Ссылка на ярлык(если автоопределение) должна быть в самом массиве, а не в бд
    runInAction(() => {
      if (item.iconUrl === undefined) item.iconUrl = getIconSite(item.url);
      this._shortcuts.push(item);
    });
  };

  removeShortcut = (id) => {
    //Удаляем из бд
    removeShortcut(id);

    this._shortcuts.splice(
      this._shortcuts.findIndex((shorcut) => shorcut.id === id),
      1,
    );
  };
}

export default new Shortcuts();

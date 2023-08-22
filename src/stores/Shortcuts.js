import { makeAutoObservable } from 'mobx';

class Shortcuts {
  _isVisible = true;
  _shortcuts = [
    'https://github.com/',
    'https://chat.openai.com/',
    'https://fonts.google.com/',
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get visible() {
    return this._isVisible;
  }

  set visible(value) {
    this._isVisible = value;
  }

  get shortcuts() {
    return this._shortcuts;
  }

  addShortcut(item) {
    this.shortcuts.push(item);
  }
}

export default new Shortcuts();

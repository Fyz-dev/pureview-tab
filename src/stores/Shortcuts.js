import { makeAutoObservable } from 'mobx';

class Shortcuts {
  _isVisible = true;
  _shortcuts = [
    {
      url: 'https://github.com/',
      iconUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com/&size=64',
    },
    {
      url: 'https://chat.openai.com/',
      iconUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chat.openai.com/&size=64',
    },
    {
      url: 'https://fonts.google.com/',
      iconUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://fonts.google.com/&size=64',
    },
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

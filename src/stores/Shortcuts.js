import { makeAutoObservable } from 'mobx';

class Shortcuts {
  #isVisible = true;

  constructor() {
    makeAutoObservable(this);
  }

  get visible() {
    return this.#isVisible;
  }

  set visible(value) {
    this.#isVisible = value;
  }
}

export default new Shortcuts();

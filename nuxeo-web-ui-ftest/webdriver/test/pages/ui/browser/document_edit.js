'use strict';

export default class DocumentEdit {
  constructor(el, docType) {
    this.el = el;
    this.docType = docType;
  }

  isVisible() {
    return this.el.isVisible();
  }

  waitForVisible() {
    return this.el.waitForVisible();
  }

  set title(title) {
    return this.el.element('#input').setValue(title);
  }
}
import { BaseComponent } from "../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, desc: string) {
    super(`<section class="note">
            <span class="text__title"></span>
            <p class="text__desc"></p>
          </section>`);
    const titleElement = this.element.querySelector(".text__title")! as HTMLSpanElement;
    titleElement.textContent = title;

    const descElement = this.element.querySelector(".text__desc")! as HTMLParagraphElement;
    descElement.textContent = desc;
  }
}

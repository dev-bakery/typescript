import { BaseComponent } from "../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="note">
            <h2 class="todo__title"></h2>
            <input type="checkbox" class="todo__checkbox"/>
          </section>`);
    const titleElement = this.element.querySelector(".todo__title")! as HTMLHeadingElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector(".todo__checkbox")! as HTMLInputElement;
    const label = document.createElement("label");
    label.textContent = todo;
    todoElement.insertAdjacentElement("afterend", label);
  }
}

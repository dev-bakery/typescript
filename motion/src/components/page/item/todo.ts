import { BaseComponent } from "../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string) {
    super(`<ul class="note">
            <li class="list-item"></li>
          </ul>`);
    const liElement = this.element.querySelector(".list-item")! as HTMLLIElement;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "todo1";
    liElement.textContent = title;
    liElement.prepend(checkBox);
  }
}

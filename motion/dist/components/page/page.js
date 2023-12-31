import { BaseComponent } from "./component.js";
class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
          <section class="page-item__body"></section>
          <div class="page-item__controls">
            <button type="button" class="close">&times;</button>
          </div>
        </li>`);
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super('<ul class="page"></ul>');
    }
    addChild(section) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
    }
}

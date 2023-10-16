import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent("첫번째 이미지", "https://dummyimage.com/600x400/000/fff");
    image.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("노트 1", "이게 바로 첫번째 노트야");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("할일 1");
    todo.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);

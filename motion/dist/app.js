import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const video = new VideoComponent("영상", "https://youtu.be/K3-jG52XwuQ");
        this.page.addChild(video);
        const image = new ImageComponent("첫번째 이미지", "https://dummyimage.com/600x400/000/fff");
        this.page.addChild(image);
        const note = new NoteComponent("노트 1", "이게 바로 첫번째 노트야");
        this.page.addChild(note);
        const todo = new TodoComponent("할일 1", "장보기");
        this.page.addChild(todo);
    }
}
new App(document.querySelector(".document"));

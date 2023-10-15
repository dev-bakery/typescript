import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("첫번째 이미지", "https://dummyimage.com/600x400/000/fff");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));

export class ImageComponent {
    constructor(imgSrc) {
        this.element = document.createElement("img");
        this.element.setAttribute("class", "image");
        this.element.setAttribute("src", imgSrc);
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}

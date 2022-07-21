import { r as registerInstance, i as createEvent, j as getElement } from './index-80daacae.js';

const styleCss = "smoothly-reorder>*{cursor:move;transition:transform 0.3s}smoothly-reorder>*.dragging{transition:none;box-shadow:0 0 10px rgba(var(--smoothly-dark-color));z-index:1;user-select:none}";

const SmoothlyReorder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.reorder = createEvent(this, "reorder", 7);
  }
  get children() {
    let result = [];
    if (this.childrenCache)
      result = this.childrenCache;
    else {
      for (let index = 0; index < this.element.children.length; index++) {
        const element = this.element.children[index];
        if (element instanceof HTMLElement) {
          const bounds = element.getBoundingClientRect();
          result.push({
            top: bounds.top,
            middle: bounds.top + bounds.height / 2,
            bottom: bounds.bottom,
            element: element,
          });
        }
      }
      this.childrenCache = result;
    }
    return result;
  }
  onMouseDown(event) {
    if (!this.move && this.element.children.length > 1) {
      this.bounds = this.element.getBoundingClientRect();
      this.childrenCache = undefined;
      const index = this.getCurrentIndex(event.clientY);
      this.dragged = Object.assign(Object.assign({}, this.children[index]), { startY: event.clientY, offsetY: event.clientY - this.children[index].middle, index, height: index < this.children.length - 1
          ? this.children[index + 1].top - this.children[index].top
          : this.children[index].bottom - this.children[index - 1].bottom });
      this.dragged.element.className += " dragging";
    }
  }
  onMouseMove(event) {
    if (this.dragged && this.bounds && event.clientY >= this.bounds.top && event.clientY <= this.bounds.bottom) {
      const currentIndex = this.getCurrentIndex(event.clientY - this.dragged.offsetY);
      this.translate(this.dragged.index, currentIndex, event.clientY - this.dragged.startY);
    }
  }
  onMouseUp(event) {
    if (this.dragged) {
      this.dragged.element.className = this.dragged.element.className.replace(" dragging", "");
      const index = this.getCurrentIndex(event.clientY - this.dragged.offsetY);
      this.translate(this.dragged.index, index, this.children[index].top - this.dragged.top);
      this.move = { from: this.dragged.index, to: index };
      this.dragged = undefined;
      window.setTimeout(() => {
        if (this.move) {
          const children = [...this.children.map(c => c.element)];
          const e = children.splice(this.move.from, 1);
          children.splice(this.move.to, 0, ...e);
          children.forEach(child => this.element.removeChild(child));
          children.forEach(child => {
            child.style.transform = "";
            this.element.appendChild(child);
          });
          this.reorder.emit([this.move.from, this.move.to]);
          this.move = undefined;
        }
      }, 500);
    }
  }
  translate(fromIndex, toIndex, y) {
    for (let index = 0; index < this.children.length; index++) {
      let value;
      if (this.dragged) {
        if (fromIndex < toIndex && index > fromIndex && index <= toIndex)
          value = -this.dragged.height;
        else if (fromIndex > toIndex && index < fromIndex && index >= toIndex)
          value = this.dragged.height;
        else
          value = index == fromIndex ? y : 0;
        this.children[index].element.style.transform = `translateY(${value}px)`;
      }
    }
  }
  getCurrentIndex(y) {
    return this.children.findIndex(c => y < c.bottom);
  }
  componentDidLoad() {
    this.element.childNodes.forEach(child => {
      child.addEventListener("mousedown", (e) => this.onMouseDown(e));
      child.addEventListener("mousemove", (e) => this.onMouseMove(e));
      child.addEventListener("mouseup", (e) => this.onMouseUp(e));
    });
  }
  get element() { return getElement(this); }
};
SmoothlyReorder.style = styleCss;

export { SmoothlyReorder as smoothly_reorder };

//# sourceMappingURL=smoothly-reorder.entry.js.map
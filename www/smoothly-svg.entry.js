import { r as registerInstance, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-svg-h{display:block;min-width:var(--size-width);min-height:var(--size-height);background-color:rgb(var(--color))}object.sc-smoothly-svg{min-width:var(--size-width);min-height:var(--size-height);background-color:rgb(var(--color))}";

const SmoothlySvg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.defaultSizes = {
      large: { height: "50rem", width: "50rem" },
      medium: { height: "30rem", width: "30rem" },
      small: { height: "10rem", width: "10rem" },
      tiny: { height: "5rem", width: "5rem" },
    };
  }
  render() {
    const height = this.size
      ? typeof this.size == "object"
        ? this.size.height
        : this.defaultSizes[this.size].height
      : "10rem";
    const width = this.size
      ? typeof this.size == "object"
        ? this.size.width
        : this.defaultSizes[this.size].width
      : "10rem";
    return (h(Host, { style: {
        "min-height": height,
        "min-width": width,
        "--size-height": height,
        "--size-width": width,
        "--color": this.color,
      } }, h("object", { height: height, width: width, type: "image/svg+xml", data: this.url })));
  }
};
SmoothlySvg.style = styleCss;

export { SmoothlySvg as smoothly_svg };

//# sourceMappingURL=smoothly-svg.entry.js.map
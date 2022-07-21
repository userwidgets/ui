import { r as registerInstance, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-spinner-h:not([active]){display:none}[hidden].sc-smoothly-spinner-h{display:none}.sc-smoothly-spinner-h{display:block;stroke:rgb(var(--spinner-color, var(--smoothly-primary-tint)));position:absolute;inset:0;width:100%;height:100%;background-color:rgba(var(--background-color, var(--smoothly-default-color)), var(--background-opacity, var(--smoothly-semitransparent, 0.8)))}.sc-smoothly-spinner-h svg.sc-smoothly-spinner{position:absolute;left:calc(50% - var(--size) / 2);top:calc(50% - var(--size) / 2);width:var(--size);animation:SPIN-SVG 1.4s linear infinite}.sc-smoothly-spinner-h svg.sc-smoothly-spinner circle.sc-smoothly-spinner{transform-origin:center;animation:SPIN-CIRCLE 1.4s ease-in-out infinite;stroke-dasharray:187;stroke-dashoffset:0}@keyframes SPIN-SVG{0%{transform:rotate(0deg)}100%{transform:rotate(270deg)}}@keyframes SPIN-CIRCLE{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}100%{stroke-dashoffset:187;transform:rotate(450deg)}}";

const SmoothlySpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "large";
  }
  render() {
    const strokeWidth = this.size == "large" ? 6 : this.size == "medium" ? 8 : 12;
    return (h(Host, { style: {
        "--color": `var(--spinner-color)`,
        "--size": this.size == "large" ? "5em" : this.size == "medium" ? "3em" : "1.2em",
      } }, h("svg", { class: "spinner", viewBox: `0 0 ${60 + strokeWidth} ${60 + strokeWidth}`, xmlns: "http://www.w3.org/2000/svg" }, h("circle", { class: "path", fill: "none", "stroke-width": strokeWidth, "stroke-linecap": "round", cx: `${30 + strokeWidth / 2}`, cy: `${30 + strokeWidth / 2}`, r: "30" }))));
  }
};
SmoothlySpinner.style = styleCss;

export { SmoothlySpinner as smoothly_spinner };

//# sourceMappingURL=smoothly-spinner.entry.js.map
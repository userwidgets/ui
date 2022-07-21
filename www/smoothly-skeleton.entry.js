import { r as registerInstance, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-skeleton-h{display:block;height:1rem}.sc-smoothly-skeleton-h::before{content:\"\";display:block;width:var(--width);height:100%;border-radius:0.4rem;background-image:linear-gradient(90deg, rgb(var(--color, var(--smoothly-dark-color))) 0, transparent 2.5rem, rgb(var(--color, var(--smoothly-dark-color))) 5rem);background-size:calc(var(--distance) + 5rem);animation-duration:var(--period, 1.6s);animation-iteration-count:infinite;animation-timing-function:linear;animation-name:shine-lines-left}@keyframes shine-lines-left{0%{background-position:-5rem}40%,100%{background-position:var(--distance)}}[align=center].sc-smoothly-skeleton-h::before{margin:0 auto;animation-name:shine-lines-center}@keyframes shine-lines-center{0%{background-position:calc((var(--width) - var(--distance)) / 2 - 5rem)}40%,100%{background-position:calc(var(--width) + (var(--distance) - var(--width)) / 2)}}[align=right].sc-smoothly-skeleton-h::before{margin:0;margin-left:auto;animation-name:shine-lines-right}@keyframes shine-lines-right{0%{background-position:calc(var(--width) - var(--distance) - 5rem)}40%,100%{background-position:var(--width)}}";

const SmoothlySkeleton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.widths = ["8rem", "9rem", "10rem"];
    this.align = "left";
  }
  componentWillLoad() {
    var _a;
    this.width = (_a = this.width) !== null && _a !== void 0 ? _a : this.widths[Math.floor(Math.random() * this.widths.length)];
  }
  render() {
    var _a;
    const cssVariables = Object.assign(Object.assign({ "--width": this.width, "--distance": (_a = this.distance) !== null && _a !== void 0 ? _a : "10rem" }, (this.color ? { "--color": this.color } : undefined)), (this.period ? { "--period": this.period + "s" } : undefined));
    return h(Host, { style: cssVariables });
  }
};
SmoothlySkeleton.style = styleCss;

export { SmoothlySkeleton as smoothly_skeleton };

//# sourceMappingURL=smoothly-skeleton.entry.js.map
import { r as registerInstance, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-backtotop-h{background-color:rgba(var(--smoothly-default-color), 1);opacity:var(--opacity);pointer-events:var(--pointer-events);transition:opacity 400ms;z-index:3;border-radius:50%;box-shadow:var(--smoothly-shadow);height:3rem;width:3rem;position:fixed;bottom:var(--bottom);right:var(--right);outline:none;cursor:pointer;display:flex;justify-content:center;align-items:center}";

const SmoothlyBacktotop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opacity = "0.5";
    this.bottom = "1rem";
    this.right = "1rem";
  }
  componentWillLoad() {
    window.addEventListener("scroll", () => {
      this.visible = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    });
  }
  render() {
    const cssVariables = {
      "--opacity": this.visible ? this.opacity : "0",
      "--pointer-events": this.visible ? "auto" : "none",
      "--bottom": this.bottom,
      "--right": this.right,
    };
    return (h(Host, { style: cssVariables, onClick: () => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      }) }, h("smoothly-icon", { name: "chevron-up-outline" })));
  }
};
SmoothlyBacktotop.style = styleCss;

export { SmoothlyBacktotop as smoothly_backtotop };

//# sourceMappingURL=smoothly-backtotop.entry.js.map
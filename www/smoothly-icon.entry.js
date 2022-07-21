import { r as registerInstance, h, k as Host } from './index-80daacae.js';

const styleCss = "[size].sc-smoothly-icon-h{background:none}.sc-smoothly-icon-h{display:block}[hidden].sc-smoothly-icon-h{display:none}[size=tiny].sc-smoothly-icon-h{width:1.2em;height:1.2em}[size=small].sc-smoothly-icon-h{width:1.4em;height:1.4em}[size=medium].sc-smoothly-icon-h{width:1.8em;height:1.8em}[size=large].sc-smoothly-icon-h{width:2.8em;height:2.8em}[size=xlarge].sc-smoothly-icon-h{width:4em;height:4em}";

const SmoothlyIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fill = "solid";
    this.size = "medium";
  }
  async loadDocument() {
    if (this.name)
      this.document = await SmoothlyIcon.load(this.name);
  }
  async componentWillLoad() {
    await this.loadDocument();
  }
  hostData() {
    return {
      innerHTML: this.document
        ? this.document
          .replace(` width="512" height="512"`, "")
          .replace(/(<title>)[\w\d\s-]*(<\/title>)/, `<title>${this.toolTip || ""}</title>`)
          .replace(/stroke:#000;/gi, "")
        : undefined,
    };
  }
  __stencil_render() {
    return [];
  }
  static async fetch(url) {
    const response = await fetch(url);
    return response.ok ? response.text() : undefined;
  }
  static async load(name) {
    var _a;
    const url = `https://unpkg.com/ionicons@5.0.0/dist/svg/${name}.svg`;
    return (_a = SmoothlyIcon.cache[url]) !== null && _a !== void 0 ? _a : (SmoothlyIcon.cache[url] = SmoothlyIcon.fetch(url));
  }
  static get watchers() { return {
    "name": ["loadDocument"]
  }; }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
};
SmoothlyIcon.cache = {};
SmoothlyIcon.style = styleCss;

export { SmoothlyIcon as smoothly_icon };

//# sourceMappingURL=smoothly-icon.entry.js.map
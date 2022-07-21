import { r as registerInstance } from './index-80daacae.js';

const styleCss = ".sc-smoothly-display-date-time-h{display:block}[hidden].sc-smoothly-display-date-time-h{display:none}";

const SmoothlyDisplayDateTime = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const datetime = this.datetime.split("T");
    return [datetime[0], " ", datetime[1]];
  }
};
SmoothlyDisplayDateTime.style = styleCss;

export { SmoothlyDisplayDateTime as smoothly_display_date_time };

//# sourceMappingURL=smoothly-display-date-time.entry.js.map
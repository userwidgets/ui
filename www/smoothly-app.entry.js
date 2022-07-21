import { r as registerInstance, h } from './index-80daacae.js';

const styleCss = "smoothly-app{display:block;scrollbar-width:none}smoothly-app[hidden]{display:none}smoothly-app[color=default],smoothly-app:not([color]){--smoothly-app-background:var(--smoothly-default-color);--smoothly-app-color:var(--smoothly-default-contrast);--smoothly-app-hover-background:var(--smoothly-primary-color);--smoothly-app-hover-color:var(--smoothly-primary-contrast);--smoothly-app-shadow:var(--smoothly-default-shadow)}smoothly-app[color=primary]{--smoothly-app-background:var(--smoothly-primary-shade);--smoothly-app-color:var(--smoothly-primary-contrast);--smoothly-app-hover-background:var(--smoothly-secondary-color);--smoothly-app-hover-color:var(--smoothly-secondary-contrast);--smoothly-app-shadow:var(--smoothly-primary-shadow)}smoothly-app[color=secondary]{--smoothly-app-background:var(--smoothly-secondary-shade);--smoothly-app-color:var(--smoothly-secondary-contrast);--smoothly-app-hover-background:var(--smoothly-primary-color);--smoothly-app-hover-color:var(--smoothly-primary-contrast);--smoothly-app-shadow:var(--smoothly-secondary-shadow)}smoothly-app[color=tertiary],smoothly-app[color=success],smoothly-app[color=warning],smoothly-app[color=danger]{--smoothly-app-background:var(--smoothly-color-shade);--smoothly-app-color:var(--smoothly-color-contrast);--smoothly-app-hover-background:var(--smoothly-default-shade);--smoothly-app-hover-color:var(--smoothly-default-contrast);--smoothly-app-shadow:var(--smoothly-color-shadow)}smoothly-app>smoothly-notifier>header{position:fixed;top:0;left:0;width:100%;z-index:5;height:5rem;background-color:rgb(var(--smoothly-app-background));color:rgba(var(--smoothly-medium-color));fill:rgb(var(--smoothly-medium-color));stroke:rgb(var(--smoothly-medium-color));display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 5px 0 rgba(var(--smoothly-app-shadow));border-bottom:1px solid rgba(var(--smoothly-dark-color))}smoothly-app>smoothly-notifier>header a{color:inherit;text-decoration:inherit}smoothly-app>smoothly-notifier>header>nav{width:100%;flex-shrink:2}smoothly-app>smoothly-notifier>header>h1,smoothly-app>smoothly-notifier>header>nav,smoothly-app>smoothly-notifier>header>nav>ul,smoothly-app>smoothly-notifier>header>nav>ul li,smoothly-app>smoothly-notifier>header>nav>ul li>*:not(a){display:flex;height:100%;margin:0}smoothly-app>smoothly-notifier>header>h1{margin-left:3.8rem}smoothly-app>smoothly-notifier>header>h1>a{overflow:hidden;user-select:none;height:200%;display:flex;align-self:center;size:100%;background-position-y:center}smoothly-app>smoothly-notifier>header>nav>ul>li a{line-height:1.6cm}smoothly-app>smoothly-notifier>header>nav>ul{width:100%}smoothly-app>smoothly-notifier>header>[slot=header]{display:flex;margin-right:2.1rem;justify-content:flex-end;border:0}smoothly-app>smoothly-notifier>header>[slot=header]>a{display:flex;align-self:center;border-width:0;align-items:center;margin-right:3.9rem}smoothly-app>smoothly-notifier>header>[slot=header]>a>smoothly-icon{fill:rgb(var(--smoothly-primary-shade));stroke:rgb(var(--smoothly-primary-shade));color:rgb(var(--smoothly-primary-shade))}smoothly-app>smoothly-notifier>header>nav>ul li a{display:flex;height:2.3rem;margin:0 0.4cm;text-decoration:none}smoothly-app>smoothly-notifier>header>nav>ul li>a{display:flex;align-items:center;align-self:center;margin-bottom:2px}smoothly-app>smoothly-notifier>header>nav>ul li smoothly-trigger.sc-smoothly-trigger-h{border:0}smoothly-app>smoothly-notifier>header>nav>ul li>a>smoothly-icon>svg{fill:rgb(var(--smoothly-medium-color));stroke:rgb(var(--smoothly-medium-color));color:rgb(var(--smoothly-medium-color));align-items:center;display:flex}smoothly-app>smoothly-notifier>header>nav>ul li>a:hover>smoothly-icon>svg,smoothly-app>smoothly-notifier>header>nav>ul li>a.active>smoothly-icon>svg{color:rgb(var(--smoothly-app-color));stroke:rgb(var(--smoothly-app-color));fill:rgb(var(--smoothly-app-color))}smoothly-app>smoothly-notifier>header>nav>ul li>smoothly-trigger.active a>smoothly-icon,smoothly-app>smoothly-notifier>header>nav>ul li>smoothly-trigger:hover a>smoothly-icon,smoothly-app>smoothly-notifier>header>nav>ul li a:hover,smoothly-app>smoothly-notifier>header>nav>ul li a.active{border-bottom:2px solid rgb(var(--smoothly-app-color));margin-bottom:0px;border-bottom-width:2px;color:rgb(var(--smoothly-app-color));stroke:rgb(var(--smoothly-app-color));fill:rgb(var(--smoothly-app-color))}smoothly-app>smoothly-notifier>main{position:relative;top:5.6rem}";

const SmoothlyApp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("smoothly-notifier", null, h("slot", null)));
  }
};
SmoothlyApp.style = styleCss;

export { SmoothlyApp as smoothly_app };

//# sourceMappingURL=smoothly-app.entry.js.map
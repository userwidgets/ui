import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-80daacae.js';
import { g as globalScripts } from './app-globals-60b36800.js';

/*
 Stencil Client Patch Browser v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-551d7421.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["smoothly-app-demo",[[0,"smoothly-app-demo",{"baseUrl":[1,"base-url"]}]]],["userwidgets-change-name",[[2,"userwidgets-change-name",{"name":[16]},[[0,"smoothlyChanged","handleInputChanged"],[0,"submit","handleSubmit"]]]]],["userwidgets-user-list",[[2,"userwidgets-user-list",{"users":[32]},[[0,"updated","handleUpdated"]]]]],["userwidgets-login",[[6,"userwidgets-login",{"resolve":[32],"error":[32]},[[0,"login","handleLogin"]]]]],["smoothly-app",[[4,"smoothly-app",{"color":[1]}]]],["userwidgets-change-password",[[2,"userwidgets-change-password",{"key":[32]},[[0,"submit","handleSubmit"]]]]],["userwidgets-demo",[[2,"userwidgets-demo"]]],["smoothly-google-font",[[2,"smoothly-google-font",{"value":[1]}]]],["smoothly-radio-group",[[4,"smoothly-radio-group",{"orientation":[513]}]]],["smoothly-reorder",[[0,"smoothly-reorder"]]],["smoothly-trigger-sink",[[6,"smoothly-trigger-sink",{"context":[16],"destination":[1],"filter":[1]},[[0,"trigger","TriggerListener"]]]]],["smoothly-trigger-source",[[6,"smoothly-trigger-source",{"listen":[1]}]]],["template-version",[[2,"template-version",{"apiInformation":[32],"error":[32]}]]],["userwidgets-logout",[[2,"userwidgets-logout"]]],["smoothly-picker",[[1,"smoothly-picker",{"maxMenuHeight":[1,"max-menu-height"],"maxHeight":[1,"max-height"],"emptyMenuLabel":[1025,"empty-menu-label"],"multiple":[516],"optionStyle":[8,"option-style"],"options":[16],"labelSetting":[513,"label-setting"],"label":[513],"selections":[1040],"selectNoneName":[1025,"select-none-name"],"selectionName":[1025,"selection-name"],"isOpen":[32]},[[0,"optionSelect","optionSelectHander"]]]]],["smoothly-backtotop",[[2,"smoothly-backtotop",{"opacity":[1],"bottom":[1],"right":[1],"visible":[32]}]]],["smoothly-display-amount",[[2,"smoothly-display-amount",{"amount":[8],"currency":[1]}]]],["smoothly-input-demo",[[0,"smoothly-input-demo"]]],["smoothly-select-demo",[[2,"smoothly-select-demo",null,[[0,"selectionChanged","handleSelectionChanged"]]]]],["smoothly-display-demo",[[0,"smoothly-display-demo"]]],["smoothly-table-demo",[[2,"smoothly-table-demo"]]],["userwidgets-user-edit",[[2,"userwidgets-user-edit",{"user":[16]},[[0,"submit","handleSubmit"],[0,"revert","handleRevert"]]]]],["smoothly-dialog-demo",[[0,"smoothly-dialog-demo"]]],["userwidgets-login-dialog",[[2,"userwidgets-login-dialog",null,[[0,"submit","handleSubmit"]]]]],["smoothly-notifier",[[6,"smoothly-notifier",{"notices":[32]},[[0,"notice","onNotice"],[0,"remove","onRemove"]]]]],["smoothly-icon-demo",[[2,"smoothly-icon-demo"]]],["smoothly-button",[[6,"smoothly-button",{"color":[513],"expand":[513],"fill":[513],"disabled":[516],"type":[513],"link":[1],"download":[4]}]]],["userwidgets-demo-version",[[2,"userwidgets-demo-version",{"apiInfo":[32]}]]],["smoothly-input-date-range",[[2,"smoothly-input-date-range",{"value":[1025],"start":[1025],"end":[1025],"max":[1025],"min":[1025],"open":[1028],"showLabel":[516,"show-label"]},[[0,"startChanged","onStartChanged"],[0,"endChanged","onEndChanged"],[0,"dateRangeSet","onDateRangeSet"]]]]],["userwidgets-set-password",[[2,"userwidgets-set-password",{"user":[16],"new":[32],"repeat":[32]},[[0,"smoothlyChanged","handleSmoothlyChanged"],[0,"submit","handleSmoothlySubmit"]]]]],["smoothly-dialog",[[6,"smoothly-dialog",{"color":[513],"open":[1540],"closable":[516],"header":[513]},[[0,"trigger","TriggerListener"]]]]],["smoothly-notification",[[2,"smoothly-notification",{"notice":[16],"tick":[32]},[[0,"trigger","onTrigger"]]]]],["smoothly-checkbox",[[2,"smoothly-checkbox",{"selectAll":[4,"select-all"],"size":[1],"intermediate":[1540],"selected":[1540],"disabled":[1540],"t":[32]}]]],["smoothly-urlencoded",[[0,"smoothly-urlencoded",{"data":[1]}]]],["smoothly-accordion",[[6,"smoothly-accordion",{"value":[1025]},[[0,"smoothlyOpen","handleOpenClose"],[0,"smoothlyClose","handleOpenClose"],[0,"smoothlyAccordionItemDidLoad","onAccordionItemDidLoad"],[0,"smoothlyAccordionItemDidUnload","onAccordionItemDidUnload"]]]]],["smoothly-accordion-item",[[6,"smoothly-accordion-item",{"name":[1],"brand":[1],"open":[1540]}]]],["smoothly-frame",[[2,"smoothly-frame",{"url":[1],"name":[1],"origin":[1],"send":[64]}]]],["smoothly-popup",[[6,"smoothly-popup",{"visible":[1540],"direction":[1537],"cssVariables":[32]}]]],["smoothly-quiet",[[6,"smoothly-quiet",{"color":[1]}]]],["smoothly-radio",[[6,"smoothly-radio",{"name":[1],"value":[1],"checked":[1540],"tabIndex":[2,"tab-index"]}]]],["smoothly-room",[[4,"smoothly-room",{"label":[1],"icon":[1],"path":[1],"to":[1]}]]],["smoothly-select",[[6,"smoothly-select",{"identifier":[1],"background":[513],"value":[1025]}]]],["smoothly-skeleton",[[2,"smoothly-skeleton",{"widths":[16],"width":[1],"color":[1],"period":[2],"distance":[1],"align":[513]}]]],["smoothly-svg",[[2,"smoothly-svg",{"url":[513],"size":[513],"color":[1]}]]],["smoothly-tab",[[6,"smoothly-tab",{"label":[1],"open":[1540]},[[0,"click","onClick"]]]]],["smoothly-tab-switch",[[6,"smoothly-tab-switch",{"selectedElement":[32]},[[0,"expansionOpen","openChanged"]]]]],["smoothly-table",[[6,"smoothly-table"]]],["smoothly-table-cell",[[6,"smoothly-table-cell"]]],["smoothly-table-expandable-cell",[[6,"smoothly-table-expandable-cell",{"align":[1],"open":[1540],"beginOpen":[32]},[[0,"click","onClick"]]]]],["smoothly-table-expandable-row",[[6,"smoothly-table-expandable-row",null,[[0,"expansionLoaded","onExpansionLoaded"],[0,"expansionOpen","onDetailsLoaded"]]]]],["smoothly-table-header",[[6,"smoothly-table-header"]]],["smoothly-table-row",[[6,"smoothly-table-row",{"align":[1],"open":[1540],"beginOpen":[32]},[[0,"click","onClick"]]]]],["smoothly-selector",[[6,"smoothly-selector",{"opened":[32],"selectedElement":[32],"missing":[32],"filter":[32]},[[0,"click","onClick"],[0,"itemSelected","onItemSelected"],[0,"keydown","onKeyDown"]]]]],["smoothly-item",[[6,"smoothly-item",{"value":[8],"selected":[1540],"filter":[64]},[[0,"click","onClick"]]]]],["smoothly-input-month",[[2,"smoothly-input-month",{"value":[1025]}]]],["smoothly-calendar",[[2,"smoothly-calendar",{"month":[1025],"value":[1025],"start":[1025],"end":[1025],"max":[1025],"min":[1025],"doubleInput":[516,"double-input"],"firstSelected":[32]}]]],["smoothly-input-date",[[6,"smoothly-input-date",{"value":[1025],"open":[1028],"max":[1025],"min":[1025],"disabled":[1028]},[[0,"dateSet","dateSetHandler"]]]]],["smoothly-menu-options",[[1,"smoothly-menu-options",{"emptyMenuLabel":[1025,"empty-menu-label"],"maxMenuHeight":[1,"max-menu-height"],"order":[4],"optionStyle":[8,"option-style"],"options":[1040],"resetHighlightOnOptionsChange":[1028,"reset-highlight-on-options-change"],"filteredOptions":[32],"highlightIndex":[32],"moveHighlight":[64],"setHighlight":[64],"getHighlighted":[64],"filterOptions":[64]},[[0,"optionHover","optionHoverHandler"]]]]],["smoothly-display",[[2,"smoothly-display",{"type":[1],"value":[8],"currency":[1],"country":[1]}]]],["smoothly-display-date-time",[[2,"smoothly-display-date-time",{"datetime":[1]}]]],["smoothly-tuple",[[0,"smoothly-tuple",{"tuple":[16]}]]],["smoothly-option",[[1,"smoothly-option",{"aliases":[513],"dataHighlight":[1540,"data-highlight"],"name":[1537],"value":[1537],"divider":[1540]}]]],["smoothly-trigger",[[6,"smoothly-trigger",{"color":[513],"expand":[513],"fill":[513],"disabled":[516],"type":[513],"name":[1],"value":[8]},[[0,"click","onClick"]]]]],["smoothly-spinner",[[2,"smoothly-spinner",{"active":[516],"size":[513]}]]],["smoothly-submit",[[6,"smoothly-submit",{"processing":[1540],"color":[513],"expand":[513],"fill":[513],"disabled":[516],"prevent":[4],"submit":[64]},[[0,"click","handleSubmit"]]]]],["smoothly-icon",[[2,"smoothly-icon",{"color":[513],"fill":[513],"name":[1],"size":[513],"toolTip":[1,"tool-tip"],"document":[32]}]]],["smoothly-input",[[6,"smoothly-input",{"name":[513],"value":[1032],"type":[513],"required":[1540],"minLength":[1026,"min-length"],"showLabel":[516,"show-label"],"maxLength":[1026,"max-length"],"autocomplete":[1028],"pattern":[1040],"placeholder":[1025],"disabled":[1028],"currency":[513],"getFormData":[64],"setKeepFocusOnReRender":[64],"setSelectionRange":[64]}]]]], options);
});

//# sourceMappingURL=userwidgets.esm.js.map
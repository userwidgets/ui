/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { model } from "./model";
import { Notice } from "smoothly";
import { Store } from "./Store";
export namespace Components {
    interface TemplateVersion {
    }
    interface UserwidgetsChangeName {
        "name": model.userwidgets.User.Name;
    }
    interface UserwidgetsChangePassword {
    }
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoVersion {
    }
    interface UserwidgetsLogin {
        "store": Store;
    }
    interface UserwidgetsLoginDialog {
    }
    interface UserwidgetsLoginTrigger {
    }
    interface UserwidgetsLogout {
    }
    interface UserwidgetsSetPassword {
        "user": model.userwidgets.User;
    }
    interface UserwidgetsTesting {
    }
}
export interface UserwidgetsChangeNameCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsChangeNameElement;
}
export interface UserwidgetsChangePasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsChangePasswordElement;
}
export interface UserwidgetsLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsLoginElement;
}
export interface UserwidgetsLoginDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsLoginDialogElement;
}
export interface UserwidgetsLogoutCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsLogoutElement;
}
export interface UserwidgetsSetPasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsSetPasswordElement;
}
declare global {
    interface HTMLTemplateVersionElement extends Components.TemplateVersion, HTMLStencilElement {
    }
    var HTMLTemplateVersionElement: {
        prototype: HTMLTemplateVersionElement;
        new (): HTMLTemplateVersionElement;
    };
    interface HTMLUserwidgetsChangeNameElement extends Components.UserwidgetsChangeName, HTMLStencilElement {
    }
    var HTMLUserwidgetsChangeNameElement: {
        prototype: HTMLUserwidgetsChangeNameElement;
        new (): HTMLUserwidgetsChangeNameElement;
    };
    interface HTMLUserwidgetsChangePasswordElement extends Components.UserwidgetsChangePassword, HTMLStencilElement {
    }
    var HTMLUserwidgetsChangePasswordElement: {
        prototype: HTMLUserwidgetsChangePasswordElement;
        new (): HTMLUserwidgetsChangePasswordElement;
    };
    interface HTMLUserwidgetsDemoElement extends Components.UserwidgetsDemo, HTMLStencilElement {
    }
    var HTMLUserwidgetsDemoElement: {
        prototype: HTMLUserwidgetsDemoElement;
        new (): HTMLUserwidgetsDemoElement;
    };
    interface HTMLUserwidgetsDemoVersionElement extends Components.UserwidgetsDemoVersion, HTMLStencilElement {
    }
    var HTMLUserwidgetsDemoVersionElement: {
        prototype: HTMLUserwidgetsDemoVersionElement;
        new (): HTMLUserwidgetsDemoVersionElement;
    };
    interface HTMLUserwidgetsLoginElement extends Components.UserwidgetsLogin, HTMLStencilElement {
    }
    var HTMLUserwidgetsLoginElement: {
        prototype: HTMLUserwidgetsLoginElement;
        new (): HTMLUserwidgetsLoginElement;
    };
    interface HTMLUserwidgetsLoginDialogElement extends Components.UserwidgetsLoginDialog, HTMLStencilElement {
    }
    var HTMLUserwidgetsLoginDialogElement: {
        prototype: HTMLUserwidgetsLoginDialogElement;
        new (): HTMLUserwidgetsLoginDialogElement;
    };
    interface HTMLUserwidgetsLoginTriggerElement extends Components.UserwidgetsLoginTrigger, HTMLStencilElement {
    }
    var HTMLUserwidgetsLoginTriggerElement: {
        prototype: HTMLUserwidgetsLoginTriggerElement;
        new (): HTMLUserwidgetsLoginTriggerElement;
    };
    interface HTMLUserwidgetsLogoutElement extends Components.UserwidgetsLogout, HTMLStencilElement {
    }
    var HTMLUserwidgetsLogoutElement: {
        prototype: HTMLUserwidgetsLogoutElement;
        new (): HTMLUserwidgetsLogoutElement;
    };
    interface HTMLUserwidgetsSetPasswordElement extends Components.UserwidgetsSetPassword, HTMLStencilElement {
    }
    var HTMLUserwidgetsSetPasswordElement: {
        prototype: HTMLUserwidgetsSetPasswordElement;
        new (): HTMLUserwidgetsSetPasswordElement;
    };
    interface HTMLUserwidgetsTestingElement extends Components.UserwidgetsTesting, HTMLStencilElement {
    }
    var HTMLUserwidgetsTestingElement: {
        prototype: HTMLUserwidgetsTestingElement;
        new (): HTMLUserwidgetsTestingElement;
    };
    interface HTMLElementTagNameMap {
        "template-version": HTMLTemplateVersionElement;
        "userwidgets-change-name": HTMLUserwidgetsChangeNameElement;
        "userwidgets-change-password": HTMLUserwidgetsChangePasswordElement;
        "userwidgets-demo": HTMLUserwidgetsDemoElement;
        "userwidgets-demo-version": HTMLUserwidgetsDemoVersionElement;
        "userwidgets-login": HTMLUserwidgetsLoginElement;
        "userwidgets-login-dialog": HTMLUserwidgetsLoginDialogElement;
        "userwidgets-login-trigger": HTMLUserwidgetsLoginTriggerElement;
        "userwidgets-logout": HTMLUserwidgetsLogoutElement;
        "userwidgets-set-password": HTMLUserwidgetsSetPasswordElement;
        "userwidgets-testing": HTMLUserwidgetsTestingElement;
    }
}
declare namespace LocalJSX {
    interface TemplateVersion {
    }
    interface UserwidgetsChangeName {
        "name"?: model.userwidgets.User.Name;
        "onNotice"?: (event: UserwidgetsChangeNameCustomEvent<Notice>) => void;
    }
    interface UserwidgetsChangePassword {
        "onNotice"?: (event: UserwidgetsChangePasswordCustomEvent<Notice>) => void;
    }
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoVersion {
    }
    interface UserwidgetsLogin {
        "onLoggedIn"?: (event: UserwidgetsLoginCustomEvent<any>) => void;
        "store"?: Store;
    }
    interface UserwidgetsLoginDialog {
        "onLogin"?: (event: UserwidgetsLoginDialogCustomEvent<model.userwidgets.User.Credentials>) => void;
        "onNotice"?: (event: UserwidgetsLoginDialogCustomEvent<Notice>) => void;
    }
    interface UserwidgetsLoginTrigger {
    }
    interface UserwidgetsLogout {
        "onLogout"?: (event: UserwidgetsLogoutCustomEvent<any>) => void;
    }
    interface UserwidgetsSetPassword {
        "onNotice"?: (event: UserwidgetsSetPasswordCustomEvent<Notice>) => void;
        "user"?: model.userwidgets.User;
    }
    interface UserwidgetsTesting {
    }
    interface IntrinsicElements {
        "template-version": TemplateVersion;
        "userwidgets-change-name": UserwidgetsChangeName;
        "userwidgets-change-password": UserwidgetsChangePassword;
        "userwidgets-demo": UserwidgetsDemo;
        "userwidgets-demo-version": UserwidgetsDemoVersion;
        "userwidgets-login": UserwidgetsLogin;
        "userwidgets-login-dialog": UserwidgetsLoginDialog;
        "userwidgets-login-trigger": UserwidgetsLoginTrigger;
        "userwidgets-logout": UserwidgetsLogout;
        "userwidgets-set-password": UserwidgetsSetPassword;
        "userwidgets-testing": UserwidgetsTesting;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "template-version": LocalJSX.TemplateVersion & JSXBase.HTMLAttributes<HTMLTemplateVersionElement>;
            "userwidgets-change-name": LocalJSX.UserwidgetsChangeName & JSXBase.HTMLAttributes<HTMLUserwidgetsChangeNameElement>;
            "userwidgets-change-password": LocalJSX.UserwidgetsChangePassword & JSXBase.HTMLAttributes<HTMLUserwidgetsChangePasswordElement>;
            "userwidgets-demo": LocalJSX.UserwidgetsDemo & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoElement>;
            "userwidgets-demo-version": LocalJSX.UserwidgetsDemoVersion & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoVersionElement>;
            "userwidgets-login": LocalJSX.UserwidgetsLogin & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginElement>;
            "userwidgets-login-dialog": LocalJSX.UserwidgetsLoginDialog & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginDialogElement>;
            "userwidgets-login-trigger": LocalJSX.UserwidgetsLoginTrigger & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginTriggerElement>;
            "userwidgets-logout": LocalJSX.UserwidgetsLogout & JSXBase.HTMLAttributes<HTMLUserwidgetsLogoutElement>;
            "userwidgets-set-password": LocalJSX.UserwidgetsSetPassword & JSXBase.HTMLAttributes<HTMLUserwidgetsSetPasswordElement>;
            "userwidgets-testing": LocalJSX.UserwidgetsTesting & JSXBase.HTMLAttributes<HTMLUserwidgetsTestingElement>;
        }
    }
}

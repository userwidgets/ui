/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Notice } from "smoothly";
import { model } from "./model";
export namespace Components {
    interface TemplateVersion {
    }
    interface UserwidgetLogin {
    }
    interface UserwidgetLoginDialog {
    }
    interface UserwidgetSeed {
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
    interface UserwidgetsLogout {
    }
    interface UserwidgetsSetPassword {
        "user": model.userwidgets.User;
    }
}
export interface UserwidgetLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetLoginElement;
}
export interface UserwidgetLoginDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetLoginDialogElement;
}
export interface UserwidgetsChangeNameCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsChangeNameElement;
}
export interface UserwidgetsChangePasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsChangePasswordElement;
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
    interface HTMLUserwidgetLoginElement extends Components.UserwidgetLogin, HTMLStencilElement {
    }
    var HTMLUserwidgetLoginElement: {
        prototype: HTMLUserwidgetLoginElement;
        new (): HTMLUserwidgetLoginElement;
    };
    interface HTMLUserwidgetLoginDialogElement extends Components.UserwidgetLoginDialog, HTMLStencilElement {
    }
    var HTMLUserwidgetLoginDialogElement: {
        prototype: HTMLUserwidgetLoginDialogElement;
        new (): HTMLUserwidgetLoginDialogElement;
    };
    interface HTMLUserwidgetSeedElement extends Components.UserwidgetSeed, HTMLStencilElement {
    }
    var HTMLUserwidgetSeedElement: {
        prototype: HTMLUserwidgetSeedElement;
        new (): HTMLUserwidgetSeedElement;
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
    interface HTMLElementTagNameMap {
        "template-version": HTMLTemplateVersionElement;
        "userwidget-login": HTMLUserwidgetLoginElement;
        "userwidget-login-dialog": HTMLUserwidgetLoginDialogElement;
        "userwidget-seed": HTMLUserwidgetSeedElement;
        "userwidgets-change-name": HTMLUserwidgetsChangeNameElement;
        "userwidgets-change-password": HTMLUserwidgetsChangePasswordElement;
        "userwidgets-demo": HTMLUserwidgetsDemoElement;
        "userwidgets-demo-version": HTMLUserwidgetsDemoVersionElement;
        "userwidgets-logout": HTMLUserwidgetsLogoutElement;
        "userwidgets-set-password": HTMLUserwidgetsSetPasswordElement;
    }
}
declare namespace LocalJSX {
    interface TemplateVersion {
    }
    interface UserwidgetLogin {
        "onLoggedIn"?: (event: UserwidgetLoginCustomEvent<any>) => void;
    }
    interface UserwidgetLoginDialog {
        "onLogin"?: (event: UserwidgetLoginDialogCustomEvent<model.userwidgets.User.Credentials>) => void;
        "onNotice"?: (event: UserwidgetLoginDialogCustomEvent<Notice>) => void;
    }
    interface UserwidgetSeed {
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
    interface UserwidgetsLogout {
        "onLogout"?: (event: UserwidgetsLogoutCustomEvent<any>) => void;
    }
    interface UserwidgetsSetPassword {
        "onNotice"?: (event: UserwidgetsSetPasswordCustomEvent<Notice>) => void;
        "user"?: model.userwidgets.User;
    }
    interface IntrinsicElements {
        "template-version": TemplateVersion;
        "userwidget-login": UserwidgetLogin;
        "userwidget-login-dialog": UserwidgetLoginDialog;
        "userwidget-seed": UserwidgetSeed;
        "userwidgets-change-name": UserwidgetsChangeName;
        "userwidgets-change-password": UserwidgetsChangePassword;
        "userwidgets-demo": UserwidgetsDemo;
        "userwidgets-demo-version": UserwidgetsDemoVersion;
        "userwidgets-logout": UserwidgetsLogout;
        "userwidgets-set-password": UserwidgetsSetPassword;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "template-version": LocalJSX.TemplateVersion & JSXBase.HTMLAttributes<HTMLTemplateVersionElement>;
            "userwidget-login": LocalJSX.UserwidgetLogin & JSXBase.HTMLAttributes<HTMLUserwidgetLoginElement>;
            "userwidget-login-dialog": LocalJSX.UserwidgetLoginDialog & JSXBase.HTMLAttributes<HTMLUserwidgetLoginDialogElement>;
            "userwidget-seed": LocalJSX.UserwidgetSeed & JSXBase.HTMLAttributes<HTMLUserwidgetSeedElement>;
            "userwidgets-change-name": LocalJSX.UserwidgetsChangeName & JSXBase.HTMLAttributes<HTMLUserwidgetsChangeNameElement>;
            "userwidgets-change-password": LocalJSX.UserwidgetsChangePassword & JSXBase.HTMLAttributes<HTMLUserwidgetsChangePasswordElement>;
            "userwidgets-demo": LocalJSX.UserwidgetsDemo & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoElement>;
            "userwidgets-demo-version": LocalJSX.UserwidgetsDemoVersion & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoVersionElement>;
            "userwidgets-logout": LocalJSX.UserwidgetsLogout & JSXBase.HTMLAttributes<HTMLUserwidgetsLogoutElement>;
            "userwidgets-set-password": LocalJSX.UserwidgetsSetPassword & JSXBase.HTMLAttributes<HTMLUserwidgetsSetPasswordElement>;
        }
    }
}

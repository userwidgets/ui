/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RecursiveData } from "./components/testing/type";
import { Name } from "../model/User/Name";
import { Notice } from "smoothly";
import { UserCredentials } from "./components/user/login/UserCredentials";
import { User } from "../model";
export namespace Components {
    interface ATable {
        "data": RecursiveData;
    }
    interface TemplateVersion {
    }
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoVersion {
    }
    interface UwApp {
    }
    interface UwChangeName {
        "name": Name;
    }
    interface UwChangePassword {
    }
    interface UwLogin {
    }
    interface UwLoginDialog {
    }
    interface UwLogout {
    }
    interface UwSetPassword {
        "user": User;
    }
    interface UwUserEdit {
        "user": User;
    }
    interface UwUserList {
        "users": User[];
    }
}
export interface UwChangeNameCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUwChangeNameElement;
}
export interface UwChangePasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUwChangePasswordElement;
}
export interface UwLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUwLoginElement;
}
export interface UwLoginDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUwLoginDialogElement;
}
export interface UwLogoutCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUwLogoutElement;
}
export interface UwSetPasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUwSetPasswordElement;
}
export interface UwUserEditCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUwUserEditElement;
}
declare global {
    interface HTMLATableElement extends Components.ATable, HTMLStencilElement {
    }
    var HTMLATableElement: {
        prototype: HTMLATableElement;
        new (): HTMLATableElement;
    };
    interface HTMLTemplateVersionElement extends Components.TemplateVersion, HTMLStencilElement {
    }
    var HTMLTemplateVersionElement: {
        prototype: HTMLTemplateVersionElement;
        new (): HTMLTemplateVersionElement;
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
    interface HTMLUwAppElement extends Components.UwApp, HTMLStencilElement {
    }
    var HTMLUwAppElement: {
        prototype: HTMLUwAppElement;
        new (): HTMLUwAppElement;
    };
    interface HTMLUwChangeNameElement extends Components.UwChangeName, HTMLStencilElement {
    }
    var HTMLUwChangeNameElement: {
        prototype: HTMLUwChangeNameElement;
        new (): HTMLUwChangeNameElement;
    };
    interface HTMLUwChangePasswordElement extends Components.UwChangePassword, HTMLStencilElement {
    }
    var HTMLUwChangePasswordElement: {
        prototype: HTMLUwChangePasswordElement;
        new (): HTMLUwChangePasswordElement;
    };
    interface HTMLUwLoginElement extends Components.UwLogin, HTMLStencilElement {
    }
    var HTMLUwLoginElement: {
        prototype: HTMLUwLoginElement;
        new (): HTMLUwLoginElement;
    };
    interface HTMLUwLoginDialogElement extends Components.UwLoginDialog, HTMLStencilElement {
    }
    var HTMLUwLoginDialogElement: {
        prototype: HTMLUwLoginDialogElement;
        new (): HTMLUwLoginDialogElement;
    };
    interface HTMLUwLogoutElement extends Components.UwLogout, HTMLStencilElement {
    }
    var HTMLUwLogoutElement: {
        prototype: HTMLUwLogoutElement;
        new (): HTMLUwLogoutElement;
    };
    interface HTMLUwSetPasswordElement extends Components.UwSetPassword, HTMLStencilElement {
    }
    var HTMLUwSetPasswordElement: {
        prototype: HTMLUwSetPasswordElement;
        new (): HTMLUwSetPasswordElement;
    };
    interface HTMLUwUserEditElement extends Components.UwUserEdit, HTMLStencilElement {
    }
    var HTMLUwUserEditElement: {
        prototype: HTMLUwUserEditElement;
        new (): HTMLUwUserEditElement;
    };
    interface HTMLUwUserListElement extends Components.UwUserList, HTMLStencilElement {
    }
    var HTMLUwUserListElement: {
        prototype: HTMLUwUserListElement;
        new (): HTMLUwUserListElement;
    };
    interface HTMLElementTagNameMap {
        "a-table": HTMLATableElement;
        "template-version": HTMLTemplateVersionElement;
        "userwidgets-demo": HTMLUserwidgetsDemoElement;
        "userwidgets-demo-version": HTMLUserwidgetsDemoVersionElement;
        "uw-app": HTMLUwAppElement;
        "uw-change-name": HTMLUwChangeNameElement;
        "uw-change-password": HTMLUwChangePasswordElement;
        "uw-login": HTMLUwLoginElement;
        "uw-login-dialog": HTMLUwLoginDialogElement;
        "uw-logout": HTMLUwLogoutElement;
        "uw-set-password": HTMLUwSetPasswordElement;
        "uw-user-edit": HTMLUwUserEditElement;
        "uw-user-list": HTMLUwUserListElement;
    }
}
declare namespace LocalJSX {
    interface ATable {
        "data"?: RecursiveData;
    }
    interface TemplateVersion {
    }
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoVersion {
    }
    interface UwApp {
    }
    interface UwChangeName {
        "name"?: Name;
        "onNotice"?: (event: UwChangeNameCustomEvent<Notice>) => void;
    }
    interface UwChangePassword {
        "onNotice"?: (event: UwChangePasswordCustomEvent<Notice>) => void;
    }
    interface UwLogin {
        "onLoggedIn"?: (event: UwLoginCustomEvent<any>) => void;
    }
    interface UwLoginDialog {
        "onLogin"?: (event: UwLoginDialogCustomEvent<UserCredentials>) => void;
        "onNotice"?: (event: UwLoginDialogCustomEvent<Notice>) => void;
    }
    interface UwLogout {
        "onLogout"?: (event: UwLogoutCustomEvent<any>) => void;
    }
    interface UwSetPassword {
        "onNotice"?: (event: UwSetPasswordCustomEvent<Notice>) => void;
        "user"?: User;
    }
    interface UwUserEdit {
        "onUpdated"?: (event: UwUserEditCustomEvent<User>) => void;
        "user"?: User;
    }
    interface UwUserList {
        "users"?: User[];
    }
    interface IntrinsicElements {
        "a-table": ATable;
        "template-version": TemplateVersion;
        "userwidgets-demo": UserwidgetsDemo;
        "userwidgets-demo-version": UserwidgetsDemoVersion;
        "uw-app": UwApp;
        "uw-change-name": UwChangeName;
        "uw-change-password": UwChangePassword;
        "uw-login": UwLogin;
        "uw-login-dialog": UwLoginDialog;
        "uw-logout": UwLogout;
        "uw-set-password": UwSetPassword;
        "uw-user-edit": UwUserEdit;
        "uw-user-list": UwUserList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "a-table": LocalJSX.ATable & JSXBase.HTMLAttributes<HTMLATableElement>;
            "template-version": LocalJSX.TemplateVersion & JSXBase.HTMLAttributes<HTMLTemplateVersionElement>;
            "userwidgets-demo": LocalJSX.UserwidgetsDemo & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoElement>;
            "userwidgets-demo-version": LocalJSX.UserwidgetsDemoVersion & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoVersionElement>;
            "uw-app": LocalJSX.UwApp & JSXBase.HTMLAttributes<HTMLUwAppElement>;
            "uw-change-name": LocalJSX.UwChangeName & JSXBase.HTMLAttributes<HTMLUwChangeNameElement>;
            "uw-change-password": LocalJSX.UwChangePassword & JSXBase.HTMLAttributes<HTMLUwChangePasswordElement>;
            "uw-login": LocalJSX.UwLogin & JSXBase.HTMLAttributes<HTMLUwLoginElement>;
            "uw-login-dialog": LocalJSX.UwLoginDialog & JSXBase.HTMLAttributes<HTMLUwLoginDialogElement>;
            "uw-logout": LocalJSX.UwLogout & JSXBase.HTMLAttributes<HTMLUwLogoutElement>;
            "uw-set-password": LocalJSX.UwSetPassword & JSXBase.HTMLAttributes<HTMLUwSetPasswordElement>;
            "uw-user-edit": LocalJSX.UwUserEdit & JSXBase.HTMLAttributes<HTMLUwUserEditElement>;
            "uw-user-list": LocalJSX.UwUserList & JSXBase.HTMLAttributes<HTMLUwUserListElement>;
        }
    }
}

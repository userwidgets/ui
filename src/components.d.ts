/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { model } from "./model";
import { Notice } from "smoothly";
import { Me } from "./State";
import { Listenable } from "./State/Listenable";
import { Application } from "./State/Application";
import { Options } from "./State/Options";
import { Users } from "./State/Users";
import { Me as Me1 } from "./State/Me";
export namespace Components {
    interface UserwidgetsChangeName {
        "name": model.userwidgets.User.Name;
    }
    interface UserwidgetsChangePassword {
        "state": {
		me: Me & Listenable<Me>
		application: Application & Listenable<Application>
		options: Options
	};
    }
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoVersion {
    }
    interface UserwidgetsLogin {
        "state": { me: Me & Listenable<Me>; onUnauthorized: () => Promise<boolean> };
    }
    interface UserwidgetsLoginDialog {
    }
    interface UserwidgetsLoginTrigger {
        "state": { users: Listenable<Users> & Users };
    }
    interface UserwidgetsLogout {
        "state": {
		me: Me1 & Listenable<Me1>
	};
    }
    interface UserwidgetsMenu {
        "menuOpen": boolean;
    }
    interface UserwidgetsOrganizationPicker {
        "state": {
		me: Me & Listenable<Me>
		application: Application & Listenable<Application>
		options: Options
	};
    }
    interface UserwidgetsRegister {
        "state": {
		me: Me & Listenable<Me>
		options: Options
	};
    }
    interface UserwidgetsSetPassword {
        "user": model.userwidgets.User;
    }
    interface UserwidgetsVersion {
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
export interface UserwidgetsSetPasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsSetPasswordElement;
}
declare global {
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
    interface HTMLUserwidgetsMenuElement extends Components.UserwidgetsMenu, HTMLStencilElement {
    }
    var HTMLUserwidgetsMenuElement: {
        prototype: HTMLUserwidgetsMenuElement;
        new (): HTMLUserwidgetsMenuElement;
    };
    interface HTMLUserwidgetsOrganizationPickerElement extends Components.UserwidgetsOrganizationPicker, HTMLStencilElement {
    }
    var HTMLUserwidgetsOrganizationPickerElement: {
        prototype: HTMLUserwidgetsOrganizationPickerElement;
        new (): HTMLUserwidgetsOrganizationPickerElement;
    };
    interface HTMLUserwidgetsRegisterElement extends Components.UserwidgetsRegister, HTMLStencilElement {
    }
    var HTMLUserwidgetsRegisterElement: {
        prototype: HTMLUserwidgetsRegisterElement;
        new (): HTMLUserwidgetsRegisterElement;
    };
    interface HTMLUserwidgetsSetPasswordElement extends Components.UserwidgetsSetPassword, HTMLStencilElement {
    }
    var HTMLUserwidgetsSetPasswordElement: {
        prototype: HTMLUserwidgetsSetPasswordElement;
        new (): HTMLUserwidgetsSetPasswordElement;
    };
    interface HTMLUserwidgetsVersionElement extends Components.UserwidgetsVersion, HTMLStencilElement {
    }
    var HTMLUserwidgetsVersionElement: {
        prototype: HTMLUserwidgetsVersionElement;
        new (): HTMLUserwidgetsVersionElement;
    };
    interface HTMLElementTagNameMap {
        "userwidgets-change-name": HTMLUserwidgetsChangeNameElement;
        "userwidgets-change-password": HTMLUserwidgetsChangePasswordElement;
        "userwidgets-demo": HTMLUserwidgetsDemoElement;
        "userwidgets-demo-version": HTMLUserwidgetsDemoVersionElement;
        "userwidgets-login": HTMLUserwidgetsLoginElement;
        "userwidgets-login-dialog": HTMLUserwidgetsLoginDialogElement;
        "userwidgets-login-trigger": HTMLUserwidgetsLoginTriggerElement;
        "userwidgets-logout": HTMLUserwidgetsLogoutElement;
        "userwidgets-menu": HTMLUserwidgetsMenuElement;
        "userwidgets-organization-picker": HTMLUserwidgetsOrganizationPickerElement;
        "userwidgets-register": HTMLUserwidgetsRegisterElement;
        "userwidgets-set-password": HTMLUserwidgetsSetPasswordElement;
        "userwidgets-version": HTMLUserwidgetsVersionElement;
    }
}
declare namespace LocalJSX {
    interface UserwidgetsChangeName {
        "name"?: model.userwidgets.User.Name;
        "onNotice"?: (event: UserwidgetsChangeNameCustomEvent<Notice>) => void;
    }
    interface UserwidgetsChangePassword {
        "onNotice"?: (event: UserwidgetsChangePasswordCustomEvent<Notice>) => void;
        "state"?: {
		me: Me & Listenable<Me>
		application: Application & Listenable<Application>
		options: Options
	};
    }
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoVersion {
    }
    interface UserwidgetsLogin {
        "onLoggedIn"?: (event: UserwidgetsLoginCustomEvent<any>) => void;
        "state"?: { me: Me & Listenable<Me>; onUnauthorized: () => Promise<boolean> };
    }
    interface UserwidgetsLoginDialog {
        "onLogin"?: (event: UserwidgetsLoginDialogCustomEvent<model.userwidgets.User.Credentials>) => void;
        "onNotice"?: (event: UserwidgetsLoginDialogCustomEvent<Notice>) => void;
    }
    interface UserwidgetsLoginTrigger {
        "state"?: { users: Listenable<Users> & Users };
    }
    interface UserwidgetsLogout {
        "state"?: {
		me: Me1 & Listenable<Me1>
	};
    }
    interface UserwidgetsMenu {
        "menuOpen"?: boolean;
    }
    interface UserwidgetsOrganizationPicker {
        "state"?: {
		me: Me & Listenable<Me>
		application: Application & Listenable<Application>
		options: Options
	};
    }
    interface UserwidgetsRegister {
        "state"?: {
		me: Me & Listenable<Me>
		options: Options
	};
    }
    interface UserwidgetsSetPassword {
        "onNotice"?: (event: UserwidgetsSetPasswordCustomEvent<Notice>) => void;
        "user"?: model.userwidgets.User;
    }
    interface UserwidgetsVersion {
    }
    interface IntrinsicElements {
        "userwidgets-change-name": UserwidgetsChangeName;
        "userwidgets-change-password": UserwidgetsChangePassword;
        "userwidgets-demo": UserwidgetsDemo;
        "userwidgets-demo-version": UserwidgetsDemoVersion;
        "userwidgets-login": UserwidgetsLogin;
        "userwidgets-login-dialog": UserwidgetsLoginDialog;
        "userwidgets-login-trigger": UserwidgetsLoginTrigger;
        "userwidgets-logout": UserwidgetsLogout;
        "userwidgets-menu": UserwidgetsMenu;
        "userwidgets-organization-picker": UserwidgetsOrganizationPicker;
        "userwidgets-register": UserwidgetsRegister;
        "userwidgets-set-password": UserwidgetsSetPassword;
        "userwidgets-version": UserwidgetsVersion;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "userwidgets-change-name": LocalJSX.UserwidgetsChangeName & JSXBase.HTMLAttributes<HTMLUserwidgetsChangeNameElement>;
            "userwidgets-change-password": LocalJSX.UserwidgetsChangePassword & JSXBase.HTMLAttributes<HTMLUserwidgetsChangePasswordElement>;
            "userwidgets-demo": LocalJSX.UserwidgetsDemo & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoElement>;
            "userwidgets-demo-version": LocalJSX.UserwidgetsDemoVersion & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoVersionElement>;
            "userwidgets-login": LocalJSX.UserwidgetsLogin & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginElement>;
            "userwidgets-login-dialog": LocalJSX.UserwidgetsLoginDialog & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginDialogElement>;
            "userwidgets-login-trigger": LocalJSX.UserwidgetsLoginTrigger & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginTriggerElement>;
            "userwidgets-logout": LocalJSX.UserwidgetsLogout & JSXBase.HTMLAttributes<HTMLUserwidgetsLogoutElement>;
            "userwidgets-menu": LocalJSX.UserwidgetsMenu & JSXBase.HTMLAttributes<HTMLUserwidgetsMenuElement>;
            "userwidgets-organization-picker": LocalJSX.UserwidgetsOrganizationPicker & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationPickerElement>;
            "userwidgets-register": LocalJSX.UserwidgetsRegister & JSXBase.HTMLAttributes<HTMLUserwidgetsRegisterElement>;
            "userwidgets-set-password": LocalJSX.UserwidgetsSetPassword & JSXBase.HTMLAttributes<HTMLUserwidgetsSetPasswordElement>;
            "userwidgets-version": LocalJSX.UserwidgetsVersion & JSXBase.HTMLAttributes<HTMLUserwidgetsVersionElement>;
        }
    }
}

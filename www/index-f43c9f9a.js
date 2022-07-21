import { E as Error, c as client } from './client-f75125eb.js';

var __classPrivateFieldGet$2 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet$2 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Me_value, _Me_listeners;
class Me {
  constructor(client) {
    this.client = client;
    _Me_value.set(this, void 0);
    _Me_listeners.set(this, { changed: [], unauthorized: [] });
    this.client.onUnauthorized = () => new Promise(resolve => __classPrivateFieldGet$2(this, _Me_listeners, "f").unauthorized.forEach(listener => listener(resolve)));
  }
  get value() {
    var _a;
    return (_a = __classPrivateFieldGet$2(this, _Me_value, "f")) !== null && _a !== void 0 ? _a : Promise.resolve(undefined);
  }
  listen(event, listener) {
    switch (event) {
      case "changed":
        this.value.then(value => listener(value));
        break;
      case "unauthorized":
        break;
    }
    __classPrivateFieldGet$2(this, _Me_listeners, "f")[event].push(listener);
  }
  login(user) {
    const result = this.client.me.login(user);
    __classPrivateFieldSet$2(this, _Me_value, result.then(u => {
      const result = Error.is(u) ? undefined : u;
      if (result)
        __classPrivateFieldGet$2(this, _Me_listeners, "f").changed.forEach(listener => listener(result));
      return result;
    }), "f");
    return result;
  }
}
_Me_value = new WeakMap(), _Me_listeners = new WeakMap();
(function (Me) {
  let Event;
  (function (Event) {
    Event.values = ["changed", "unauthorized"];
  })(Event = Me.Event || (Me.Event = {}));
})(Me || (Me = {}));

var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Users_value, _Users_listeners;
class Users {
  constructor(client) {
    this.client = client;
    _Users_value.set(this, void 0);
    _Users_listeners.set(this, { changed: [], created: [] });
  }
  get value() {
    var _a;
    return (_a = __classPrivateFieldGet$1(this, _Users_value, "f")) !== null && _a !== void 0 ? _a : (__classPrivateFieldSet$1(this, _Users_value, this.client.user.list().then(v => (Error.is(v) ? [] : v)), "f"));
  }
  set value(value) {
    __classPrivateFieldSet$1(this, _Users_value, value, "f");
    value.then(v => __classPrivateFieldGet$1(this, _Users_listeners, "f")["changed"].forEach(listener => listener(v)));
  }
  listen(event, listener) {
    switch (event) {
      case "changed":
        this.value.then(v => listener(v));
        break;
    }
    __classPrivateFieldGet$1(this, _Users_listeners, "f")[event].push(listener);
  }
  create(user) {
    return this.client.user.create(user);
  }
}
_Users_value = new WeakMap(), _Users_listeners = new WeakMap();
(function (Users) {
  let Event;
  (function (Event) {
    Event.values = ["changed"];
  })(Event = Users.Event || (Users.Event = {}));
})(Users || (Users = {}));

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Version_value, _Version_listeners;
class Version {
  constructor(client) {
    this.client = client;
    _Version_value.set(this, void 0);
    _Version_listeners.set(this, { changed: [] });
  }
  get value() {
    var _a;
    return (_a = __classPrivateFieldGet(this, _Version_value, "f")) !== null && _a !== void 0 ? _a : (__classPrivateFieldSet(this, _Version_value, this.client.version.fetch().then(v => (Error.is(v) ? undefined : v)), "f"));
  }
  listen(event, listener) {
    switch (event) {
      case "changed":
        this.value.then(v => listener(v));
        break;
    }
    __classPrivateFieldGet(this, _Version_listeners, "f")[event].push(listener);
  }
}
_Version_value = new WeakMap(), _Version_listeners = new WeakMap();
(function (Version) {
  let Event;
  (function (Event) {
    Event.values = ["changed"];
  })(Event = Version.Event || (Version.Event = {}));
})(Version || (Version = {}));

class Store {
  constructor(client) {
    this.users = new Users(client);
    this.me = new Me(client);
    this.version = new Version(client);
  }
}
const store = new Store(client);

export { store as s };

//# sourceMappingURL=index-f43c9f9a.js.map
import './GoogleFont-ed2dd269.js';

class TextEncoder {
    constructor() {
        this.encoding = "utf-8";
    }
    encode(data) {
        return Uint8Array.from(unescape(encodeURIComponent(data)).split(""), c => c.charCodeAt(0));
    }
}

const tables = {
    standard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    url: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
};
function encode$1(value, standard = "standard", padding = "") {
    if (typeof value == "string")
        value = new TextEncoder().encode(value);
    const table = tables[standard];
    const result = [];
    for (let c = 0; c < value.length; c += 3) {
        const c0 = value[c];
        const c1 = c + 1 < value.length ? value[c + 1] : 0;
        const c2 = c + 2 < value.length ? value[c + 2] : 0;
        result.push(table[c0 >>> 2]);
        result.push(table[((c0 & 3) << 4) | (c1 >>> 4)]);
        result.push(table[((c1 & 15) << 2) | (c2 >>> 6)]);
        result.push(table[c2 & 63]);
    }
    const length = Math.ceil((value.length / 3) * 4);
    return result.join("").substr(0, length) + padding.repeat(result.length - length);
}
function decode$1(value, standard = "standard") {
    while (value.endsWith("=") && value.length > 0)
        value = value.substr(0, value.length - 1);
    const table = tables[standard];
    const data = value.split("").map(c => table.indexOf(c));
    const result = new Uint8Array(Math.floor((data.length / 4) * 3));
    for (let c = 0; c < result.length; c += 3) {
        const d0 = data.shift() || 0;
        const d1 = data.shift() || 0;
        const d2 = data.shift() || 0;
        const d3 = data.shift() || 0;
        result[c] = (d0 << 2) | (d1 >>> 4);
        result[c + 1] = ((d1 & 15) << 4) | (d2 >>> 2);
        result[c + 2] = ((d2 & 3) << 6) | d3;
    }
    return result;
}

const crypto = typeof window != "undefined"
    ? window.crypto || window.msCrypto
    : self.crypto || self.msCrypto;

class TextDecoder {
    constructor() {
        this.encoding = "utf-8";
    }
    decode(view, options) {
        return !view
            ? ""
            : decodeURIComponent(escape(Array.from(new Uint8Array(view.buffer, view.byteOffset, view.byteLength), c => String.fromCharCode(c)).join("")));
    }
}

class Algorithm$2 {
    constructor(key) {
        this.key = key;
    }
    async encrypt(data, salt) {
        const iv = salt ? decode$1(salt, "url") : crypto.getRandomValues(new Uint8Array(16));
        return {
            key: this.name,
            salt: salt || encode$1(iv, "url"),
            value: encode$1(new Uint8Array(await crypto.subtle.encrypt({ name: (await this.key).algorithm.name, iv }, await this.key, new TextEncoder().encode(data))), "url"),
        };
    }
    async decrypt(encrypted, salt) {
        if (typeof encrypted == "string")
            encrypted = { value: encrypted, salt: salt !== null && salt !== void 0 ? salt : "" };
        return new TextDecoder().decode(new Uint8Array(await crypto.subtle.decrypt({ name: (await this.key).algorithm.name, iv: decode$1(encrypted.salt, "url") }, await this.key, decode$1(encrypted.value, "url"))));
    }
    async export(parts) {
        let result;
        const key = new Uint8Array(await crypto.subtle.exportKey("raw", await this.key));
        if (parts == undefined)
            result = (await this.export(1))[0];
        else if (typeof parts == "number")
            result = await this.export(parts > 1 ? Algorithm$2.generateRandomKeys(key.length, parts - 1) : []);
        else if (typeof parts == "string")
            result = await this.export(decode$1(parts, "url"));
        else if (parts instanceof Uint8Array)
            result = (await this.export([parts]))[0];
        else if (this.isStringArray(parts))
            result = await this.export(parts.map(part => decode$1(part, "url")));
        else {
            parts = [Algorithm$2.reduceKeys([key, ...parts]), ...parts];
            result = parts.map(r => encode$1(r, "url"));
        }
        return result;
    }
    isStringArray(value) {
        return Array.isArray(value) && value.length > 0 && value.every((item) => typeof item == "string");
    }
    static aesCbc(key) {
        return Algorithm$2.generate("AES-CBC", key);
    }
    static aesGcm(key) {
        return Algorithm$2.generate("AES-GCM", key);
    }
    static random(length, parts) {
        const result = Algorithm$2.generateRandomKeys(length / 8, parts && parts > 0 ? parts : 1).map(r => encode$1(r, "url"));
        return parts ? result : result[0];
    }
    static generate(algorithm, key) {
        return new Algorithm$2(typeof key == "number"
            ? crypto.subtle.generateKey({ name: algorithm, length: key }, true, ["encrypt", "decrypt"])
            : crypto.subtle.importKey("raw", Array.isArray(key)
                ? Algorithm$2.reduceKeys(key.map(k => decode$1(k, "url")))
                : decode$1(key, "url"), algorithm, true, ["encrypt", "decrypt"]));
    }
    static generateRandomKeys(length, parts) {
        return parts > 0
            ? [crypto.getRandomValues(new Uint8Array(length)), ...this.generateRandomKeys(length, parts - 1)]
            : [];
    }
    static reduceKeys(keys) {
        const result = new Uint8Array(keys[0].length);
        for (let index = 0; index < keys[0].length; index++)
            result[index] = keys.reduce((p, c) => p ^ c[index], 0);
        return result;
    }
}

var Algorithms;
(function (Algorithms) {
    function create(create, current, ...secrets) {
        const [first, ...remainder] = isStringArray(secrets)
            ? secrets.map(part => Object.fromEntries(part.split(",").map(secret => secret.split(":", 2).map(item => item.trim()))))
            : secrets;
        const result = Object.assign({}, ...Object.entries(first)
            .map(([name, secret]) => [
            name,
            [secret, ...remainder.map(part => part[name]).filter(part => part)],
        ])
            .map(([name, secrets]) => ({
            get [name]() {
                return Object.assign(create(secrets), { name });
            },
        })));
        return { current: result[current], ...result };
    }
    Algorithms.create = create;
})(Algorithms || (Algorithms = {}));
function isStringArray(value) {
    return Array.isArray(value) && value.length > 0 && typeof value[0] == "string";
}

function encode(value, length) {
    const data = typeof value == "string" ? new TextEncoder().encode(value) : value;
    let result = [];
    for (const d of data)
        result.push(Math.floor(d / 16).toString(16), (d % 16).toString(16));
    if (length)
        result = result.slice(0, length);
    return result.join("");
}
function decode(value) {
    if (value.length % 2 == 1)
        value += "0";
    const result = new Uint8Array(value.length / 2);
    for (let index = 0; index < result.length; index++)
        result[index] = Number.parseInt(value[index * 2], 16) * 16 + Number.parseInt(value[index * 2 + 1], 16);
    return result;
}

class Digest {
    constructor(algorithm) {
        this.algorithm = algorithm;
    }
    get length() {
        return Digest.lengths[this.algorithm];
    }
    async digest(data, base = "standard") {
        let result;
        if (typeof data == "string") {
            const digest = await this.digest(new TextEncoder().encode(data));
            result = base == 16 ? encode(digest) : encode$1(digest, base);
        }
        else
            result = new Uint8Array(await crypto.subtle.digest(this.algorithm, data));
        return result;
    }
}
Digest.lengths = {
    "SHA-1": 128,
    "SHA-256": 256,
    "SHA-384": 384,
    "SHA-512": 512,
};

var Encrypted;
(function (Encrypted) {
    function is(value) {
        return (typeof value == "object" &&
            (value.key == undefined || typeof value.key == "string") &&
            typeof value.value == "string" &&
            typeof value.salt == "string");
    }
    Encrypted.is = is;
    function stringify(encrypted) {
        encrypted.key = encrypted.key && encrypted.key.length != 4 ? encrypted.key.slice(-2) : encrypted.key;
        return [encrypted.key, encrypted.salt, encrypted.value].join(".");
    }
    Encrypted.stringify = stringify;
    function parse(encryptedString) {
        const splitted = encryptedString.split(".");
        const encrypted = { key: splitted[0], salt: splitted[1], value: splitted[2] };
        return Encrypted.is(encrypted) ? encrypted : undefined;
    }
    Encrypted.parse = parse;
})(Encrypted || (Encrypted = {}));

var Identifier;
(function (Identifier) {
    function is(value, length) {
        return (typeof value == "string" &&
            (length == undefined || value.length == length) &&
            Array.from(value).every(c => (c >= "0" && c <= "9") || (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || c == "-" || c == "_"));
    }
    Identifier.is = is;
    function fromUint24(value) {
        return fromHexadecimal(value.toString(16).padStart(6, "0"));
    }
    Identifier.fromUint24 = fromUint24;
    function toUint24(identifier) {
        return Number.parseInt(toHexadecimal(identifier, 6), 16);
    }
    Identifier.toUint24 = toUint24;
    function fromUint48(value) {
        return fromHexadecimal(value.toString(16).padStart(12, "0"));
    }
    Identifier.fromUint48 = fromUint48;
    function toUint48(identifier) {
        return Number.parseInt(toHexadecimal(identifier, 12), 16);
    }
    Identifier.toUint48 = toUint48;
    function fromBinary(identifier) {
        return encode$1(identifier, "url");
    }
    Identifier.fromBinary = fromBinary;
    function toBinary(identifier) {
        return decode$1(identifier, "url");
    }
    Identifier.toBinary = toBinary;
    function generate(length) {
        return fromBinary(crypto.getRandomValues(new Uint8Array((length / 4) * 3)));
    }
    Identifier.generate = generate;
    function fromHexadecimal(identifier) {
        if (identifier.length % 2 == 1)
            identifier += "0";
        const result = new Uint8Array(identifier.length / 2);
        for (let index = 0; index < result.length; index++)
            result[index] = Number.parseInt(identifier[index * 2], 16) * 16 + Number.parseInt(identifier[index * 2 + 1], 16);
        return fromBinary(result);
    }
    Identifier.fromHexadecimal = fromHexadecimal;
    function toHexadecimal(identifier, length) {
        const data = decode$1(identifier, "url");
        let result = [];
        for (const d of data)
            result.push(Math.floor(d / 16).toString(16), (d % 16).toString(16));
        if (length)
            result = result.slice(0, length);
        return result.join("");
    }
    Identifier.toHexadecimal = toHexadecimal;
    Identifier.length = [
        4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112,
        116, 120, 124, 128,
    ];
    let Length;
    (function (Length) {
        function is(value) {
            return typeof value == "number" && value >= 4 && value <= 128 && (value & 252) == value;
        }
        Length.is = is;
    })(Length = Identifier.Length || (Identifier.Length = {}));
})(Identifier || (Identifier = {}));

var Password;
(function (Password) {
    function is(value) {
        return (typeof value == "string" ||
            (typeof value == "object" && typeof value.hash == "string" && typeof value.salt == "string"));
    }
    Password.is = is;
    async function hash(algorithm, password, salt) {
        if (!salt)
            salt = encode$1(crypto.getRandomValues(new Uint8Array(64)));
        return {
            hash: await algorithm.sign(salt + password),
            salt,
        };
    }
    Password.hash = hash;
    async function verify(algorithm, hash, password) {
        return (await Password.hash(algorithm, password, hash.salt)).hash == hash.hash;
    }
    Password.verify = verify;
    let Hashed;
    (function (Hashed) {
        function is(value) {
            return typeof value == "object" && typeof value.hash == "string" && typeof value.salt == "string";
        }
        Hashed.is = is;
    })(Hashed = Password.Hashed || (Password.Hashed = {}));
})(Password || (Password = {}));

var RandomValue;
(function (RandomValue) {
    function generate(array) {
        return crypto.getRandomValues(array);
    }
    RandomValue.generate = generate;
})(RandomValue || (RandomValue = {}));

var Algorithm$1;
(function (Algorithm) {
    function is(value) {
        return value == "HMAC" || value == "RSA" || value == "ECDSA" || value == "RSA-PSS";
    }
    Algorithm.is = is;
})(Algorithm$1 || (Algorithm$1 = {}));

class Base {
    async sign(data) {
        return typeof data == "string"
            ? encode$1(await this.signBinary(new TextEncoder().encode(data)), "url")
            : this.signBinary(data);
    }
    verify(data, signature) {
        if (typeof signature == "string")
            signature = decode$1(signature, "url");
        return typeof data == "string"
            ? this.verifyBinary(new TextEncoder().encode(data), signature)
            : this.verifyBinary(data, signature);
    }
}

class ECDSA extends Base {
    constructor(hash, publicKey, privateKey) {
        super();
        this.hash = hash;
        if (publicKey) {
            if (typeof publicKey == "string")
                publicKey = decode$1(publicKey);
            this.publicKey = crypto.subtle.importKey("spki", publicKey, { name: "ECDSA", namedCurve: hash.replace("SHA", "P") == "P-512" ? "P-521" : hash.replace("SHA", "P") }, false, ["verify"]);
        }
        if (privateKey) {
            if (typeof privateKey == "string")
                privateKey = decode$1(privateKey);
            this.privateKey = crypto.subtle.importKey("pkcs8", privateKey, { name: "ECDSA", namedCurve: hash.replace("SHA", "P") == "P-512" ? "P-521" : hash.replace("SHA", "P") }, true, ["sign", "verify"]);
        }
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign({ name: "ECDSA", hash: { name: this.hash } }, await this.privateKey, data));
    }
    async verifyBinary(data, signature) {
        return crypto.subtle.verify({ name: "ECDSA", hash: { name: this.hash } }, await this.publicKey, signature, data);
    }
}

var Hash;
(function (Hash) {
    function is(value) {
        return value == "SHA-1" || value == "SHA-256" || value == "SHA-384" || value == "SHA-512";
    }
    Hash.is = is;
})(Hash || (Hash = {}));

class Symmetric$1 extends Base {
    async verifyBinary(data, signature) {
        return encode$1(await this.signBinary(data), "url") == encode$1(signature, "url");
    }
}

class HMAC extends Symmetric$1 {
    constructor(hash, key) {
        super();
        this.hash = hash;
        if (typeof key == "string")
            key = decode$1(key, "url");
        this.key = crypto.subtle.importKey("raw", key, { name: "HMAC", hash: { name: hash } }, false, ["sign", "verify"]);
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign("HMAC", await this.key, data));
    }
}

class None extends Symmetric$1 {
    signBinary(_) {
        return Promise.resolve(new Uint8Array(0));
    }
}

class RSA extends Base {
    constructor(hash, publicKey, privateKey) {
        super();
        this.hash = hash;
        if (publicKey) {
            if (typeof publicKey == "string")
                publicKey = decode$1(publicKey);
            this.publicKey = crypto.subtle.importKey("spki", publicKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: hash } }, false, ["verify"]);
        }
        if (privateKey) {
            if (typeof privateKey == "string")
                privateKey = decode$1(privateKey);
            this.privateKey = crypto.subtle.importKey("pkcs8", privateKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: hash } }, true, ["sign"]);
        }
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", await this.privateKey, data));
    }
    async verifyBinary(data, signature) {
        return crypto.subtle.verify("RSASSA-PKCS1-v1_5", await this.publicKey, signature, data);
    }
}

class RSAPSS extends Base {
    constructor(hash, publicKey, privateKey) {
        super();
        this.hash = hash;
        if (publicKey) {
            if (typeof publicKey == "string")
                publicKey = decode$1(publicKey);
            this.publicKey = crypto.subtle.importKey("spki", publicKey, { name: "RSA-PSS", hash: { name: hash } }, false, [
                "verify",
            ]);
        }
        if (privateKey) {
            if (typeof privateKey == "string")
                privateKey = decode$1(privateKey);
            this.privateKey = crypto.subtle.importKey("pkcs8", privateKey, { name: "RSA-PSS", hash: { name: hash } }, true, [
                "sign",
                "verify",
            ]);
        }
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign({ name: "RSA-PSS", saltLength: 128 }, await this.privateKey, data));
    }
    async verifyBinary(data, signature) {
        return crypto.subtle.verify({ name: "RSA-PSS", saltLength: 128 }, await this.publicKey, signature, data);
    }
}

var Signer;
(function (Signer) {
    let Algorithm;
    (function (Algorithm) {
        Algorithm.is = Algorithm$1.is;
    })(Algorithm = Signer.Algorithm || (Signer.Algorithm = {}));
    let Hash$1;
    (function (Hash$1) {
        Hash$1.is = Hash.is;
    })(Hash$1 = Signer.Hash || (Signer.Hash = {}));
    function create(algorithm, hash, ...keys) {
        let result;
        switch (algorithm) {
            case "HMAC":
                if (hash != undefined)
                    result = new HMAC(hash, keys[0]);
                break;
            case "RSA":
                if (hash != undefined)
                    result = new RSA(hash, keys[0], keys[1]);
                break;
            case "RSA-PSS":
                if (hash != undefined)
                    result = new RSAPSS(hash, keys[0], keys[1]);
                break;
            case "ECDSA":
                if (hash != undefined)
                    result = new ECDSA(hash, keys[0], keys[1]);
                break;
            case "None":
                result = new None();
        }
        return result;
    }
    Signer.create = create;
})(Signer || (Signer = {}));

if (!Uint8Array.__proto__.from) {
    ;
    (() => {
        Uint8Array.__proto__.from = function (object, theFunction, thisObject) {
            const typedArrayClass = Uint8Array.__proto__;
            if (typeof this !== "function") {
                throw new TypeError("# is not a constructor");
            }
            if (this.__proto__ !== typedArrayClass) {
                throw new TypeError("this is not a typed array.");
            }
            theFunction = theFunction || (element => element);
            if (typeof theFunction !== "function") {
                throw new TypeError("specified argument is not a function");
            }
            object = Object(object);
            if (!object.length) {
                return new this(0);
            }
            let copyData = [];
            for (const data of copyData) {
                copyData.push(data);
            }
            copyData = copyData.map(theFunction, thisObject);
            const typedArray = new this(copyData.length);
            for (let i = 0; i < typedArray.length; i++) {
                typedArray[i] = copyData[i];
            }
            return typedArray;
        };
    })();
}

var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Converter$1 {
    constructor(conversionMap) {
        this.conversionMap = conversionMap;
    }
    apply(payload) {
        return __awaiter$4(this, void 0, void 0, function* () {
            return payload && this.convert(payload, true);
        });
    }
    reverse(payload) {
        return __awaiter$4(this, void 0, void 0, function* () {
            return payload && this.convert(payload, false);
        });
    }
    convert(payload, forward) {
        return __awaiter$4(this, void 0, void 0, function* () {
            for (const key in this.conversionMap) {
                const fnction = forward ? this.conversionMap[key].forward : this.conversionMap[key].backward;
                const property = key.split(".");
                payload = yield this.convertProperty(payload, property, fnction);
            }
            return payload;
        });
    }
    convertProperty(payload, property, fnction) {
        return __awaiter$4(this, void 0, void 0, function* () {
            const result = Object.assign({}, payload);
            if (result[property[0]])
                result[property[0]] =
                    property.length == 1
                        ? yield fnction(result[property[0]])
                        : yield this.convertProperty(result[property[0]], property.slice(1), fnction);
            return result;
        });
    }
}

var Converter;
(function (Converter) {
    function is(value) {
        return typeof value == "object" && Object.entries(value).every(v => typeof v == "function");
    }
    Converter.is = is;
})(Converter || (Converter = {}));

var Crypto$1;
(function (Crypto) {
    function is(value) {
        return Array.isArray(value) && value.every(v => typeof v == "string");
    }
    Crypto.is = is;
})(Crypto$1 || (Crypto$1 = {}));

var Renamer$1;
(function (Renamer) {
    function is(value) {
        return typeof value == "object" && Object.entries(value).every(thing => typeof thing[1] == "string");
    }
    Renamer.is = is;
})(Renamer$1 || (Renamer$1 = {}));

var Creatable;
(function (Creatable) {
    function is(value) {
        return Crypto$1.is(value) || Converter.is(value) || Renamer$1.is(value);
    }
    Creatable.is = is;
    let Converter$1;
    (function (Converter$1) {
        Converter$1.is = Converter.is;
    })(Converter$1 = Creatable.Converter || (Creatable.Converter = {}));
    let Crypto;
    (function (Crypto) {
        Crypto.is = Crypto$1.is;
    })(Crypto = Creatable.Crypto || (Creatable.Crypto = {}));
    let Renamer;
    (function (Renamer) {
        Renamer.is = Renamer$1.is;
    })(Renamer = Creatable.Renamer || (Creatable.Renamer = {}));
})(Creatable || (Creatable = {}));

class Remover {
    constructor(toRemove) {
        this.toRemove = toRemove;
    }
    apply(payload) {
        return payload && this.removeFrom(payload);
    }
    reverse(payload) {
        return payload && this.removeFrom(payload);
    }
    removeFrom(payload) {
        let result = Object.assign({}, payload);
        this.toRemove.forEach(str => {
            const property = str.split(".");
            result = this.removeProperty(result, property);
        });
        return result;
    }
    removeProperty(payload, property) {
        const result = Object.assign({}, payload);
        if (result[property[0]])
            if (property.length == 1)
                delete result[property[0]];
            else
                result[property[0]] = this.removeProperty(result[property[0]], property.slice(1));
        return result;
    }
    static create(toRemove) {
        return toRemove.length == 0 ? undefined : new Remover(toRemove);
    }
}

var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Crypto {
    constructor(secret, ...properties) {
        this.secret = secret;
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
        this.properties = properties.map(p => p.split("."));
    }
    apply(payload) {
        return __awaiter$3(this, void 0, void 0, function* () {
            return (payload &&
                this.process(payload, value => this.encoder.encode(JSON.stringify(value)), value => encode$1(value, "url")));
        });
    }
    reverse(payload) {
        return __awaiter$3(this, void 0, void 0, function* () {
            return (payload &&
                this.process(payload, value => (typeof value == "string" ? decode$1(value, "url") : new Uint8Array()), value => JSON.parse(this.decoder.decode(value))));
        });
    }
    process(payload, preprocess, postprocess) {
        return __awaiter$3(this, void 0, void 0, function* () {
            const secret = this.secret + payload.sub + payload.iat;
            for (const property of this.properties)
                payload = yield this.processProperty(payload, property, secret + property.join("."), preprocess, postprocess);
            return payload;
        });
    }
    processProperty(payload, property, secret, preprocess, postprocess) {
        return __awaiter$3(this, void 0, void 0, function* () {
            const result = Object.assign({}, payload);
            if (result[property[0]])
                if (property.length == 1) {
                    const data = preprocess(payload[property[0]]);
                    const key = yield new Digest("SHA-512").digest(this.encoder.encode(secret));
                    const processed = new Uint8Array(data.length);
                    for (let index = 0; index < data.length; index++)
                        processed[index] = data[index] ^ key[index];
                    result[property[0]] = postprocess(processed);
                }
                else
                    result[property[0]] = yield this.processProperty(result[property[0]], property.slice(1), secret, preprocess, postprocess);
            return result;
        });
    }
    static create(secret, ...properties) {
        return secret ? new Crypto(secret, ...properties) : Remover.create(properties);
    }
}

class Renamer {
    constructor(forwardTransformMap) {
        this.forwardTransformMap = forwardTransformMap;
        this.createBackwardTransformMap();
    }
    createBackwardTransformMap() {
        const result = {};
        for (const key in this.forwardTransformMap) {
            result[this.forwardTransformMap[key]] = key;
        }
        this.backwardTransformMap = result ? result : {};
    }
    apply(payload) {
        return payload && this.remap(payload, true);
    }
    reverse(payload) {
        return payload && this.remap(payload, false);
    }
    remap(payload, forward) {
        const transformMap = forward ? this.forwardTransformMap : this.backwardTransformMap;
        const result = {};
        for (const key in payload)
            if (key in transformMap)
                result[transformMap[key]] = this.resolve(payload[key], forward);
            else
                result[key] = this.resolve(payload[key], forward);
        return result;
    }
    resolve(payload, forward) {
        let result;
        if (Array.isArray(payload)) {
            result = [];
            payload.forEach(value => result.push(this.resolve(value, forward)));
        }
        else
            result = typeof payload == "object" ? this.remap(payload, forward) : payload;
        return result;
    }
}

var Transformer;
(function (Transformer) {
    function is(value) {
        return typeof value == "object" && typeof value.apply == "function" && typeof value.reverse == "function";
    }
    Transformer.is = is;
    function create(transformer) {
        return {
            apply: transformer.apply ? transformer.apply : (v) => v,
            reverse: transformer.reverse ? transformer.reverse : (v) => v,
        };
    }
    Transformer.create = create;
})(Transformer || (Transformer = {}));

class Typeguard {
    constructor(...is) {
        this.is = is;
    }
    apply(payload) {
        return this.is.some(f => f(payload)) ? payload : undefined;
    }
    reverse(payload) {
        return this.is.some(f => f(payload)) ? payload : undefined;
    }
}

class Actor {
    constructor(id) {
        this.id = id;
        this.transformers = [];
    }
    add(...argument) {
        argument.forEach(value => value && this.transformers.push(Creatable.is(value) ? this.creatableToTransformer(value) : value));
        return this;
    }
    creatableToTransformer(creatable) {
        return Creatable.Converter.is(creatable)
            ? new Converter$1(creatable)
            : Creatable.Crypto.is(creatable)
                ? Crypto.create(creatable[0], ...creatable.slice(1))
                : new Renamer(creatable);
    }
}

var Asymmetric;
(function (Asymmetric) {
    function is(value) {
        return (value == "RS256" ||
            value == "RS384" ||
            value == "RS512" ||
            value == "ES256" ||
            value == "ES384" ||
            value == "ES512" ||
            value == "PS256" ||
            value == "PS384" ||
            value == "PS512");
    }
    Asymmetric.is = is;
})(Asymmetric || (Asymmetric = {}));

var Symmetric;
(function (Symmetric) {
    function is(value) {
        return value == "HS256" || value == "HS384" || value == "HS512";
    }
    Symmetric.is = is;
})(Symmetric || (Symmetric = {}));

var Name;
(function (Name) {
    function is(value) {
        return value == "none" || Symmetric.is(value) || Asymmetric.is(value);
    }
    Name.is = is;
    let Symmetric$1;
    (function (Symmetric$1) {
        Symmetric$1.is = Symmetric.is;
    })(Symmetric$1 = Name.Symmetric || (Name.Symmetric = {}));
    let Asymmetric$1;
    (function (Asymmetric$1) {
        Asymmetric$1.is = Asymmetric.is;
    })(Asymmetric$1 = Name.Asymmetric || (Name.Asymmetric = {}));
})(Name || (Name = {}));

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Algorithm {
    constructor(name, signer) {
        this.name = name;
        this.signer = signer;
    }
    sign(data) {
        return __awaiter$2(this, void 0, void 0, function* () {
            return typeof data == "string" ? this.signer.sign(data) : this.signer.sign(data);
        });
    }
    verify(data, signature) {
        return this.signer.verify(data, signature);
    }
    static create(name, ...keys) {
        let result;
        switch (name) {
            case "ES256":
                result = Signer.create("ECDSA", "SHA-256", keys[0], keys[1]);
                break;
            case "ES384":
                result = Signer.create("ECDSA", "SHA-384", keys[0], keys[1]);
                break;
            case "ES512":
                result = Signer.create("ECDSA", "SHA-512", keys[0], keys[1]);
                break;
            case "PS256":
                result = Signer.create("RSA-PSS", "SHA-256", keys[0], keys[1]);
                break;
            case "PS384":
                result = Signer.create("RSA-PSS", "SHA-384", keys[0], keys[1]);
                break;
            case "PS512":
                result = Signer.create("RSA-PSS", "SHA-512", keys[0], keys[1]);
                break;
            case "HS256":
                result = Signer.create("HMAC", "SHA-256", keys[0]);
                break;
            case "HS384":
                result = Signer.create("HMAC", "SHA-384", keys[0]);
                break;
            case "HS512":
                result = Signer.create("HMAC", "SHA-512", keys[0]);
                break;
            case "RS256":
                result = Signer.create("RSA", "SHA-256", keys[0], keys[1]);
                break;
            case "RS384":
                result = Signer.create("RSA", "SHA-384", keys[0], keys[1]);
                break;
            case "RS512":
                result = Signer.create("RSA", "SHA-512", keys[0], keys[1]);
                break;
            case "none":
                result = Signer.create("None");
                break;
        }
        return result && new Algorithm(name, result);
    }
    static none() {
        return Algorithm.create("none");
    }
    static HS256(key) {
        return Algorithm.create("HS256", key);
    }
    static HS384(key) {
        return Algorithm.create("HS384", key);
    }
    static HS512(key) {
        return Algorithm.create("HS512", key);
    }
    static RS256(publicKey, privateKey) {
        return Algorithm.create("RS256", publicKey, privateKey);
    }
    static RS384(publicKey, privateKey) {
        return Algorithm.create("RS384", publicKey, privateKey);
    }
    static RS512(publicKey, privateKey) {
        return Algorithm.create("RS512", publicKey, privateKey);
    }
    static ES256(publicKey, privateKey) {
        return Algorithm.create("ES256", publicKey, privateKey);
    }
    static ES384(publicKey, privateKey) {
        return Algorithm.create("ES384", publicKey, privateKey);
    }
    static ES512(publicKey, privateKey) {
        return Algorithm.create("ES512", publicKey, privateKey);
    }
    static PS256(publicKey, privateKey) {
        return Algorithm.create("PS256", publicKey, privateKey);
    }
    static PS384(publicKey, privateKey) {
        return Algorithm.create("PS384", publicKey, privateKey);
    }
    static PS512(publicKey, privateKey) {
        return Algorithm.create("PS512", publicKey, privateKey);
    }
}
(function (Algorithm) {
    let Name$1;
    (function (Name$1) {
        Name$1.is = Name.is;
        let Symmetric;
        (function (Symmetric) {
            Symmetric.is = Name.Symmetric.is;
        })(Symmetric = Name$1.Symmetric || (Name$1.Symmetric = {}));
        let Asymmetric;
        (function (Asymmetric) {
            Asymmetric.is = Name.Asymmetric.is;
        })(Asymmetric = Name$1.Asymmetric || (Name$1.Asymmetric = {}));
    })(Name$1 = Algorithm.Name || (Algorithm.Name = {}));
})(Algorithm || (Algorithm = {}));

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Issuer extends Actor {
    constructor(issuer, algorithm) {
        super(issuer);
        this.algorithm = algorithm;
    }
    get header() {
        return {
            alg: this.algorithm.name,
            typ: "JWT",
        };
    }
    get payload() {
        const result = { iss: this.id, iat: Issuer.issuedAt };
        if (this.audience)
            result.aud = this.audience;
        if (this.duration && result.iat)
            result.exp = result.iat + this.duration;
        return result;
    }
    sign(payload, issuedAt) {
        return __awaiter$1(this, void 0, void 0, function* () {
            payload = Object.assign(Object.assign({}, this.payload), payload);
            if (issuedAt)
                payload.iat = typeof issuedAt == "number" ? issuedAt : issuedAt.getTime() / 1000;
            const transformed = yield this.transformers.reduce((p, c) => __awaiter$1(this, void 0, void 0, function* () { return c.apply(yield p); }), Promise.resolve(payload));
            const data = transformed &&
                `${encode$1(new TextEncoder().encode(JSON.stringify(this.header)), "url")}.${encode$1(new TextEncoder().encode(JSON.stringify(transformed)), "url")}`;
            return data && `${data}.${yield this.algorithm.sign(data)}`;
        });
    }
    static get issuedAt() {
        return Issuer.defaultIssuedAt == undefined
            ? Math.floor(Date.now() / 1000)
            : typeof Issuer.defaultIssuedAt == "number"
                ? Issuer.defaultIssuedAt
                : Math.floor(Issuer.defaultIssuedAt.getTime() / 1000);
    }
    static create(issuer, algorithm) {
        return (algorithm && new Issuer(issuer, algorithm)) || undefined;
    }
}

var Token;
(function (Token) {
    function is(value) {
        return typeof value == "string" && /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(value);
    }
    Token.is = is;
})(Token || (Token = {}));

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Verifier extends Actor {
    constructor(...algorithms) {
        super();
        if (algorithms.length > 0) {
            this.algorithms = {};
            for (const algorithm of algorithms)
                if (this.algorithms[algorithm.name])
                    this.algorithms[algorithm.name].push(algorithm);
                else
                    this.algorithms[algorithm.name] = [algorithm];
        }
        else
            this.algorithms = undefined;
    }
    verify(token, ...audience) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (token) {
                const splitted = token.split(".", 3);
                if (splitted.length < 2)
                    result = undefined;
                else {
                    try {
                        const oldDecoder = token.includes("/") || token.includes("+");
                        const header = JSON.parse(new TextDecoder().decode(decode$1(splitted[0], oldDecoder ? "standard" : "url")));
                        result = JSON.parse(new TextDecoder().decode(decode$1(splitted[1], oldDecoder ? "standard" : "url")));
                        if (this.algorithms) {
                            const algorithm = this.algorithms[header.alg];
                            result =
                                splitted.length == 3 &&
                                    algorithm &&
                                    algorithm.some((a) => __awaiter(this, void 0, void 0, function* () { return yield a.verify(`${splitted[0]}.${splitted[1]}`, splitted[2]); }))
                                    ? result
                                    : undefined;
                        }
                    }
                    catch (_a) {
                        result = undefined;
                    }
                    result = result && this.verifyAudience(result.aud, audience) ? result : undefined;
                    if (result) {
                        const now = Math.floor(Date.now() / 1000);
                        if ((result === null || result === void 0 ? void 0 : result.iat) && result.iat > 1000000000000)
                            result.iat = Math.floor(result.iat / 1000);
                        if ((result === null || result === void 0 ? void 0 : result.exp) && result.exp > 1000000000000)
                            result.exp = Math.floor(result.exp / 1000);
                        result =
                            (result.exp == undefined || result.exp > now) && (result.iat == undefined || result.iat <= now)
                                ? result
                                : undefined;
                    }
                    if (result) {
                        result.token = token;
                        result = yield this.transformers.reduceRight((p, c) => __awaiter(this, void 0, void 0, function* () { return c.reverse(yield p); }), Promise.resolve(result));
                    }
                }
            }
            return result;
        });
    }
    verifyAudience(audience, allowed) {
        return (audience == undefined ||
            allowed.length == 0 ||
            (typeof audience == "string" && allowed.some(a => a == audience)) ||
            (Array.isArray(audience) && audience.some(a => allowed.some(ta => ta == a))));
    }
    authenticate(authorization, ...audience) {
        return __awaiter(this, void 0, void 0, function* () {
            return authorization && authorization.startsWith("Bearer ")
                ? this.verify(authorization.substr(7), ...audience)
                : undefined;
        });
    }
    static create(...algorithms) {
        return (((algorithms.length == 0 || algorithms.some(a => !!a)) &&
            new Verifier(...algorithms.filter(a => !!a))) ||
            undefined);
    }
}

class ClientIdentifier {
  constructor() { }
  static get value() {
    ClientIdentifier.valueCache = localStorage.getItem("clientIdentifier") || undefined;
    if (!ClientIdentifier.valueCache) {
      ClientIdentifier.valueCache = Identifier.generate(12);
      localStorage.setItem("clientIdentifier", ClientIdentifier.valueCache);
    }
    return ClientIdentifier.valueCache;
  }
}

class Message {
  static is(value) {
    return typeof value == "object" && typeof value.destination == "string" && value.content != undefined;
  }
  static send(message, content, context) {
    if (Message.is(message) && context == undefined) {
      context = content;
      if (!context)
        context = window;
      const destination = message.destination.split("#", 2);
      message = { destination: destination[1], content: message.content };
      context.postMessage(message, destination[0]);
    }
    else if (typeof context != "string") {
      if (!context)
        context = window;
      if (typeof message == "string")
        Message.send({ destination: message, content }, context);
    }
  }
  static listen(origin, handle, context) {
    const splitted = origin.split("#", 2);
    let destination = "";
    if (splitted.length == 2) {
      origin = splitted[0];
      destination = splitted[1];
    }
    ;
    (context || window).addEventListener("message", (e) => {
      const message = e.data;
      if (Message.is(message) &&
        (origin == "*" || e.origin == origin) &&
        (destination == "" || message.destination == destination))
        handle(message.destination, message.content);
    });
  }
}

class Notice {
  constructor(stateValue, messageValue, task) {
    this.stateValue = stateValue;
    this.messageValue = messageValue;
    this.task = task;
    this.listeners = [];
    switch (stateValue) {
      case "delayed":
        this.timer = window.setTimeout(() => this.execute(), 5000);
        break;
      case "executing":
        this.execute();
        break;
      case "success":
      case "warning":
      case "failed":
        this.startCloseTimer();
        break;
      default:
        break;
    }
  }
  get state() {
    return this.stateValue;
  }
  set state(value) {
    if (this.stateValue != value) {
      this.stateValue = value;
      this.emit();
    }
  }
  get message() {
    return this.messageValue;
  }
  set message(value) {
    if (this.messageValue != value) {
      this.messageValue = value;
      this.emit();
    }
  }
  listen(listener) {
    this.listeners.push(listener);
  }
  unlisten(listener) {
    this.listeners.filter(l => l != listener);
  }
  emit() {
    this.listeners.forEach(l => l(this));
  }
  execute() {
    this.clearTimer();
    if (this.task) {
      this.state = "executing";
      this.task(this).then(r => {
        this.messageValue = r[1];
        this.state = r[0] ? "success" : "failed";
        this.startCloseTimer();
      });
    }
    else
      this.state = "failed";
  }
  startCloseTimer() {
    this.timer = window.setTimeout(() => this.close(), 15000);
  }
  close() {
    this.clearTimer();
    this.state = "closed";
  }
  clearTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = undefined;
    }
  }
  static delay(message, task) {
    return new Notice("delayed", message, task);
  }
  static execute(message, task) {
    return new Notice("executing", message, task);
  }
  static succeded(message) {
    return new Notice("success", message);
  }
  static failed(message) {
    return new Notice("failed", message);
  }
  static warn(message) {
    return new Notice("warning", message);
  }
}

class Trigger {
  static is(value) {
    return typeof value == "object" && typeof value.name == "string";
  }
}

export { Message as M, Notice as N, Trigger as T };

//# sourceMappingURL=index-52596bb8.js.map
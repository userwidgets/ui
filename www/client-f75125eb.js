import { U as User$1 } from './index-5e02d811.js';

var Method;
(function (Method) {
    function is(value) {
        return (typeof value == "string" &&
            (value == "GET" ||
                value == "POST" ||
                value == "DELETE" ||
                value == "HEAD" ||
                value == "PATCH" ||
                value == "PUT" ||
                value == "OPTIONS" ||
                value == "TRACE" ||
                value == "CONNECT"));
    }
    Method.is = is;
    function parse(value) {
        value = value?.toUpperCase();
        return is(value) ? value : undefined;
    }
    Method.parse = parse;
})(Method || (Method = {}));

const parsers = {};
function add$1(parser, ...contentType) {
    contentType.forEach(t => (parsers[t] = parser));
}
function parse$1(request) {
    const contentType = request.headers.get("Content-Type");
    const type = contentType && contentType.split(";");
    const parser = parsers[type?.[0] ?? "plain/text"];
    return parser ? parser(request) : request.text();
}

const serializers = {};
function add(serializer, ...contentType) {
    contentType.forEach(t => (serializers[t] = serializer));
}
function serialize(body, contentType) {
    const serializer = serializers[contentType?.split(";")[0] ?? ""];
    return serializer ? serializer(body, contentType) : body;
}

function to(name) {
    return name.toLowerCase().replace(/-[a-z]/g, match => match.substring(1).toUpperCase());
}
function from(name) {
    const result = name.replace(/[A-Z]/g, match => "-" + match);
    return result[0].toUpperCase() + result.substring(1);
}

const fields$1 = [
    ["aIM", "A-IM", 1],
    ["accept", "Accept", 2],
    ["acceptCharset", "Accept-Charset", 2],
    ["acceptDatetime", "Accept-Datetime", 1],
    ["acceptEncoding", "Accept-Encoding", 2],
    ["acceptLanguage", "Accept-Language", 2],
    ["accessControlRequestMethod", "Access-Control-Request-Method", 1],
    ["accessControlRequestHeaders", "Access-Control-Request-Headers", 1],
    ["authorization", "Authorization", 1],
    ["cacheControl", "Cache-Control", 1],
    ["cfConnectionIp", "CF-Connecting-IP", 1],
    ["cfIpCountry", "CF-IPCountry", 1],
    ["connection", "Connection", 1],
    ["contentLength", "Content-Length", 1],
    ["contentMD5", "Content-MD5", 1],
    ["contentType", "Content-Type", 1],
    ["cookie", "Cookie", 1],
    ["date", "Date", 1],
    ["expect", "Expect", 1],
    ["forwarded", "Forwarded", 1],
    ["from", "From", 1],
    ["host", "Host", 1],
    ["http2Settings", "HTTP2-Settings", 1],
    ["ifMatch", "If-Match", 2],
    ["ifModifiedSince", "If-Modified-Since", 1],
    ["ifNoneMatch", "If-None-Match", 2],
    ["ifRange", "If-Range", 1],
    ["ifUnmodifiedSince", "If-Unmodified-Since", 1],
    ["maxForwards", "Max-Forwards", 1],
    ["origin", "Origin", 1],
    ["pragma", "Pragma", 1],
    ["proxyAuthorization", "Proxy-Authorization", 1],
    ["range", "Range", 1],
    ["referer", "Referer", 1],
    ["te", "TE", 2],
    ["trailer", "Trailer", 1],
    ["transferEncoding", "Transfer-Encoding", 1],
    ["userAgent", "User-Agent", 1],
    ["upgrade", "Upgrade", 2],
    ["via", "Via", 2],
    ["warning", "Warning", 1],
    ["upgradeInsecureRequests", "Upgrade-Insecure-Requests", 1],
    ["xRequestedWith", "X-Requested-With", 1],
    ["dnt", "DNT", 1],
    ["xForwardedFor", "X-Forwarded-For", 1],
    ["xForwardedHost", "X-Forwarded-Host", 1],
    ["xForwardedProto", "X-Forwarded-Proto", 1],
    ["xMsContinuation", "X-Ms-Continuation", 1],
    ["frontEndHttps", "Front-End-Https", 1],
    ["xHttpMethodOverride", "X-Http-Method-Override", 1],
    ["xAttDeviceId", "X-ATT-DeviceId", 1],
    ["xWapProfile", "X-Wap-Profile", 1],
    ["proxyConnection", "Proxy-Connection", 1],
    ["xCsrfToken", "X-Csrf-Token", 1],
    ["xCorrelationID", "X-Correlation-ID", 1],
    ["xModNonce", "x-mod-nonce", 1],
    ["xModRetry", "x-mod-retry", 1],
    ["saveData", "Save-Data", 1],
    ["xAuthToken", "X-Auth-Token", 1],
    ["xTrackingId", "x-tracking-id", 1],
];
var Header$1;
(function (Header) {
    function is(value) {
        function isString(value) {
            return value == undefined || typeof value == "string";
        }
        function isStringArray(value) {
            return value == undefined || (Array.isArray(value) && value.every(v => typeof v == "string"));
        }
        return (typeof value == "object" && fields$1.every(field => (field[2] == 1 ? isString : isStringArray)(value[field[0]])));
    }
    Header.is = is;
    function to$1(header) {
        return Object.fromEntries(Object.entries(header).map(([name, value]) => {
            const field = fields$1.find(([camelCase, n, l]) => camelCase == name);
            return [field ? field[1] : from(name), Array.isArray(value) ? value.join(", ") : value];
        }));
    }
    Header.to = to$1;
    function from$1(headers) {
        return Object.fromEntries((Array.isArray(headers)
            ? headers.map(([field, ...value]) => [field, value.join(", ")])
            : isHeaders(headers)
                ? [...headers]
                : Object.entries(headers)).map(([name, value]) => {
            const field = fields$1.find(([c, n, l]) => name.toLowerCase() == n.toLowerCase());
            return field
                ? [field[0], field[2] == 1 || typeof value != "string" ? value : value.split(",").map(v => v.trim())]
                : [to(name), value];
        }));
    }
    Header.from = from$1;
    function isHeaders(value) {
        return typeof value.entries == "function";
    }
})(Header$1 || (Header$1 = {}));

var Request;
(function (Request) {
    function is(value) {
        return (typeof value == "object" &&
            Object.keys(value).every(key => ["method", "url", "parameter", "search", "remote", "header", "body"].some(k => k == key)) &&
            Method.is(value.method) &&
            value.url instanceof URL &&
            typeof value.parameter == "object" &&
            Object.entries(value.parameter).every(([parameter, value]) => typeof parameter == "string" && typeof value == "string") &&
            typeof value.search == "object" &&
            Object.entries(value.search).every(([key, value]) => typeof key == "string" && typeof value == "string") &&
            (value.remote == undefined || typeof value.remote == "string") &&
            (value.header == undefined || Header$1.is(value.header)));
    }
    Request.is = is;
    async function to(request) {
        const r = is(request) ? request : create(request);
        return {
            url: r.url.toString(),
            method: r.method,
            headers: Header$1.to(r.header),
            body: ["GET", "HEAD"].some(v => v == r.method)
                ? undefined
                : await serialize(await r.body, r.header.contentType),
        };
    }
    Request.to = to;
    function from(request) {
        const url = new URL(request.url);
        return {
            method: Method.parse(request.method) ?? "GET",
            url,
            header: Header$1.from(request.headers),
            parameter: {},
            search: Object.fromEntries(url.searchParams.entries()),
            body: parse$1(request),
        };
    }
    Request.from = from;
    function create(request) {
        let result;
        if (typeof request == "string")
            result = create({ url: request });
        else {
            const url = typeof request.url == "string" ? new URL(request.url) : request.url;
            result = {
                method: Method.parse(request.method) ?? "GET",
                url,
                parameter: request.parameter ?? {},
                search: { ...request.search, ...Object.fromEntries(url.searchParams.entries()) },
                remote: request.remote,
                header: request.header ?? {},
                body: request.body,
            };
        }
        return result;
    }
    Request.create = create;
    let Header;
    (function (Header) {
        Header.is = Header$1.is;
        Header.from = Header$1.from;
        Header.to = Header$1.to;
    })(Header = Request.Header || (Request.Header = {}));
})(Request || (Request = {}));

const fields = [
    ["accessControlAllowOrigin", "Access-Control-Allow-Origin", 1],
    ["accessControlAllowCredentials", "Access-Control-Allow-Credentials", 1],
    ["accessControlExposeHeaders", "Access-Control-Expose-Headers", 2],
    ["accessControlMaxAge", "Access-Control-Max-Age", 1],
    ["accessControlAllowMethods", "Access-Control-Allow-Methods", 2],
    ["accessControlAllowHeaders", "Access-Control-Allow-Headers", 2],
    ["acceptPatch", "Accept-Patch", 1],
    ["acceptRanges", "Accept-Ranges", 1],
    ["age", "Age", 1],
    ["allow", "Allow", 2],
    ["altSvc", "Alt-Svc", 1],
    ["cacheControl", "Cache-Control", 1],
    ["cfConnectionIp", "CF-Connecting-IP", 1],
    ["cfIpCountry", "CF-IPCountry", 1],
    ["connection", "Connection", 1],
    ["contentDisposition", "Content-Disposition", 1],
    ["contentEncoding", "Content-Encoding", 1],
    ["contentLanguage", "Content-Language", 2],
    ["contentLength", "Content-Length", 1],
    ["contentLocation", "Content-Location", 1],
    ["contentMD5", "Content-MD5", 1],
    ["contentRange", "Content-Range", 1],
    ["contentSecurityPolicy", "Content-Security-Policy", 1],
    ["contentType", "Content-Type", 1],
    ["date", "Date", 1],
    ["deltaBase", "Delta-Base", 1],
    ["eTag", "ETag", 1],
    ["expires", "Expires", 1],
    ["iM", "IM", 1],
    ["lastModified", "Last-Modified", 1],
    ["link", "Link", 1],
    ["location", "Location", 1],
    ["p3P", "P3P", 1],
    ["pragma", "Pragma", 1],
    ["proxyAuthenticate", "Proxy-Authenticate", 1],
    ["publicKeyPins", "Public-Key-Pins", 1],
    ["refresh", "Refresh", 1],
    ["retryAfter", "Retry-After", 1],
    ["server", "Server", 1],
    ["setCookie", "Set-Cookie", 1],
    ["status", "Status", 1],
    ["strictTransportSecurity", "Strict-Transport-Security", 1],
    ["timingAllowOrigin", "Timing-Allow-Origin", 2],
    ["trailer", "Trailer", 1],
    ["transferEncoding", "Transfer-Encoding", 1],
    ["tk", "Tk", 1],
    ["upgrade", "Upgrade", 2],
    ["vary", "Vary", 2],
    ["via", "Via", 1],
    ["warning", "Warning", 1],
    ["wwwAuthenticate", "WWW-Authenticate", 1],
    ["xContentDuration", "X-Content-Duration", 1],
    ["xContentSecurityPolicy", "X-Content-Security-Policy", 1],
    ["xContentTypeOptions", "X-Content-Type-Options", 1],
    ["xCorrelationId", "X-Correlation-ID", 1],
    ["xFrameOptions", "X-Frame-Options", 1],
    ["xMsContinuation", "X-Ms-Continuation", 1],
    ["xPoweredBy", "X-Powered-By", 1],
    ["xRequestId", "X-Request-ID", 1],
    ["xUACompatible", "X-UA-Compatible", 1],
    ["xWebkitCsp", "X-WebKit-CSP", 1],
    ["xXssProtection", "X-XSS-Protection", 1],
];
var Header;
(function (Header) {
    function is(value) {
        function isString(value) {
            return value == undefined || typeof value == "string";
        }
        function isStringArray(value) {
            return value == undefined || (Array.isArray(value) && value.every(v => typeof v == "string"));
        }
        return (typeof value == "object" && fields.every(field => (field[2] == 1 ? isString : isStringArray)(value[field[0]])));
    }
    Header.is = is;
    function to$1(header) {
        return Object.fromEntries(Object.entries(header).map(([name, value]) => {
            const field = fields.find(([camelCase, ..._]) => camelCase == name);
            return [field ? field[1] : from(name), Array.isArray(value) ? value.join(", ") : value];
        }));
    }
    Header.to = to$1;
    function from$1(headers) {
        return Object.fromEntries((Array.isArray(headers)
            ? headers.map(([field, ...value]) => [field, value.join(", ")])
            : isHeaders(headers)
                ? getEntries(headers)
                : Object.entries(headers)).map(([name, value]) => {
            const field = fields.find(([c, n, l]) => name.toLowerCase() == n.toLowerCase());
            return field
                ? [field[0], field[2] == 1 || typeof value != "string" ? value : value.split(",").map(v => v.trim())]
                : [to(name), value];
        }));
    }
    Header.from = from$1;
    function isHeaders(value) {
        return typeof value.forEach == "function";
    }
    function getEntries(headers) {
        const result = [];
        headers.forEach((value, key) => result.push([key, value]));
        return result;
    }
})(Header || (Header = {}));

var Like;
(function (Like) {
    function is(value) {
        return (typeof value == "object" &&
            Object.keys(value).every(key => ["status", "header", "body"].some(property => property == key)) &&
            (value.status == undefined || typeof value.status == "number") &&
            (value.header == undefined || Header.is(value.header)) &&
            (value.status || value.header || value.body));
    }
    Like.is = is;
})(Like || (Like = {}));

var Response;
(function (Response) {
    function is(value) {
        return (typeof value == "object" &&
            Object.keys(value).every(key => ["status", "header", "body"].some(k => k == key)) &&
            (value.status == undefined || typeof value.status == "number") &&
            (value.header == undefined || Header.is(value.header)));
    }
    Response.is = is;
    async function to(request) {
        return new globalThis.Response(await serialize(await request.body, request.header.contentType), {
            status: request.status,
            headers: new globalThis.Headers(Header.to(request.header)),
        });
    }
    Response.to = to;
    function from(response) {
        return {
            status: response.status,
            header: Header.from(response.headers),
            body: parse$1(response),
        };
    }
    Response.from = from;
    function create(response, contentType) {
        const result = Like.is(response)
            ? { status: 200, header: {}, body: undefined, ...response }
            : {
                status: (typeof response == "object" && typeof response.status == "number" && response.status) || 200,
                header: typeof response == "object"
                    ? {
                        ...response.header,
                        ...((response.status == 301 || response.status == 302) && response.location
                            ? { location: response.location }
                            : {}),
                    }
                    : {},
                body: typeof response == "object" && !Array.isArray(response)
                    ? (({ header, ...body }) => body)(response)
                    : response,
            };
        if (!result.header.contentType)
            switch (typeof result.body) {
                case "undefined":
                    break;
                default:
                case "object":
                    result.header.contentType = contentType ?? "application/json; charset=utf-8";
                    break;
                case "string":
                    result.header.contentType =
                        result.body.slice(0, 9).toLowerCase() == "<!doctype"
                            ? "text/html; charset=utf-8"
                            : /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(result.body)
                                ? "application/jwt; charset=utf-8"
                                : /^<\?xml version=(.|\n)*\?>(.|\n)*<svg(.|\n)*<\/svg>$/.test(result.body)
                                    ? "image/svg+xml"
                                    : "text/plain; charset=utf-8";
                    break;
            }
        return result;
    }
    Response.create = create;
    let Header$1;
    (function (Header$1) {
        Header$1.to = Header.to;
        Header$1.from = Header.from;
    })(Header$1 = Response.Header || (Response.Header = {}));
})(Response || (Response = {}));

const fetch = create(globalThis.fetch);
fetch.create = create;
function create(fetch) {
    return async (request) => {
        const r = Request.create(request);
        return Response.from(await fetch(r.url.toString(), await Request.to(r)));
    };
}

class Client$2 {
    constructor(url, key) {
        this.url = url;
        this.key = key;
    }
    async fetch(path, method, body, header) {
        const request = await this.preProcess(Request.create({ url: `${this.url ?? ""}/${path}`, method, header, body }));
        const response = await this.postProcess(await fetch(request).catch(error => Response.create({ status: 601, body: error })));
        return (response.status == 401 && this.onUnauthorized && (await this.onUnauthorized(this))) ||
            (response.status >= 300 && this.onError && (await this.onError(request, response)))
            ? await this.fetch(path, method, body, header)
            : (await response.body);
    }
    async preProcess(request) {
        return {
            ...request,
            header: {
                contentType: request.body ? "application/json; charset=utf-8" : undefined,
                authorization: this.key ? `Bearer ${this.key}` : undefined,
                ...request.header,
            },
        };
    }
    async postProcess(response) {
        return response;
    }
    async get(path, header) {
        return await this.fetch(path, "GET", undefined, header);
    }
    async post(path, request, header) {
        return await this.fetch(path, "POST", request, header);
    }
    async delete(path, header) {
        return await this.fetch(path, "DELETE", undefined, header);
    }
    async patch(path, request, header) {
        return await this.fetch(path, "PATCH", request, header);
    }
    async put(path, request, header) {
        return await this.fetch(path, "PUT", request, header);
    }
}

function stringify(data) {
    const result = [];
    const map = (key, value) => {
        switch (typeof value) {
            default:
            case "bigint":
            case "boolean":
            case "number":
            case "string":
                result.push(`${key}=${encodeURIComponent(value.toString())}`);
                break;
            case "undefined":
                break;
            case "object":
                for (const property in value)
                    if (Object.prototype.hasOwnProperty.call(value, property))
                        map(key ? key + `[${property}]` : property, value[property]);
                break;
        }
    };
    map("", data);
    return result.join("&");
}
function parse(data) {
    const convertArrays = (target) => {
        return typeof target == "object" &&
            Object.keys(target)
                .sort()
                .every((k, i) => `${k}` == `${i}`)
            ? Object.entries(target)
                .sort()
                .map(entry => (typeof entry[1] == "object" ? convertArrays(entry[1]) : entry[1]))
            : typeof target == "object"
                ? Object.fromEntries(Object.entries(target).map(entry => [entry[0], convertArrays(entry[1])]))
                : target;
    };
    const insert = (target, key, value) => {
        target[key[0]] = key.length > 1 ? insert(target[key[0]] ?? {}, key.slice(1), value) : value;
        return target;
    };
    const entries = data
        .split("&")
        .map(d => d.split("=", 2))
        .map(([k, v]) => [
        decodeURIComponent(k)
            .split("[")
            .map(p => p.replace("]", "")),
        decodeURIComponent(v.replace(/\+/g, " ")),
    ]);
    return entries.reduce((result, [key, value]) => convertArrays(insert(result, key, value)), {});
}

add$1(async (request) => await request.text(), "text/plain", "text/html");
add$1(async (request) => await request.json(), "application/json");
add$1(async (request) => Object.fromEntries((await request.formData()).entries()), "multipart/form-data");
add$1(async (request) => parse(await request.text()), "application/x-www-form-urlencoded");
add(async (body) => (typeof body == "string" ? body : body.toString()), "text/plain", "text/html");
add(async (body) => JSON.stringify(body), "application/json");
add(async (body) => stringify(body), "application/x-www-form-urlencoded");

class Collection {
    constructor(client) {
        this.client = client;
    }
    extend(type) {
        return Object.assign(this, new type(this.client));
    }
}
(function (Collection) {
    class Creatable extends Collection {
        constructor(client, path) {
            super(client);
            this.path = path;
        }
        async create(item) {
            return await this.client.post(typeof this.path == "string" ? this.path : this.path(item), item);
        }
    }
    Collection.Creatable = Creatable;
})(Collection || (Collection = {}));

class Client$1 extends Collection {
    constructor(client) {
        super(client);
        this.client.onUnauthorized = async () => this.onUnauthorized != undefined && (await this.onUnauthorized(this));
    }
    set onError(value) {
        this.client.onError = value;
    }
    get onError() {
        return this.client.onError;
    }
    set url(value) {
        this.client.url = value;
    }
    get url() {
        return this.client.url;
    }
    set key(value) {
        this.client.key = value;
    }
    get key() {
        return this.client.key;
    }
    static create(url, key, load) {
        const client = new Client$2(url, key);
        const result = new Client$1(client);
        if (load)
            Object.assign(result, load(client));
        return result;
    }
}

class Application extends Collection {
  async create(application) {
    return await this.client.post("api/application", application);
  }
  async fetch(id) {
    return await this.client.get(`api/application/${id}`);
  }
  async changeName(id, application, entityTag = "*") {
    return await this.client.put(`api/application/${id}/name`, application, {
      ifMatch: [entityTag],
    });
  }
}

var Flaw;
(function (Flaw) {
    function is(value) {
        return (typeof value == "object" &&
            (value.property == undefined || typeof value.property == "string") &&
            typeof value.type == "string" &&
            (value.flaws == undefined || (Array.isArray(value.flaws) && value.flaws.every(Flaw.is))) &&
            (value.condition == undefined || typeof value.condition == "string"));
    }
    Flaw.is = is;
})(Flaw || (Flaw = {}));

var Result;
(function (Result) {
    function is(value) {
        return (typeof value == "object" &&
            value &&
            typeof value.status == "number" &&
            (value.header == undefined ||
                (typeof value.header == "object" && (value.header.eTag == undefined || typeof value.header.eTag == "string"))));
    }
    Result.is = is;
    function hasBody(value) {
        return (typeof value == "object" &&
            value &&
            typeof value.status == "number" &&
            value.body != undefined &&
            value.body != null);
    }
    Result.hasBody = hasBody;
    function getBody(value, fallback) {
        return hasBody(value) ? value.body : fallback;
    }
    Result.getBody = getBody;
})(Result || (Result = {}));

function flawedContent(content, error) {
    return { status: 400, type: "flawed content", content, error };
}
var FlawedContent;
(function (FlawedContent) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "flawed content" &&
            Flaw.is(value.content) &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    FlawedContent.is = is;
})(FlawedContent || (FlawedContent = {}));

function invalidContent(type, description, details, error) {
    return { status: 400, type: "invalid content", content: { type, description, details }, error };
}
var InvalidContent;
(function (InvalidContent) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "invalid content" &&
            (value.content == undefined ||
                (typeof value.content == "object" &&
                    typeof value.content.type == "string" &&
                    typeof value.content.description == "string")) &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    InvalidContent.is = is;
})(InvalidContent || (InvalidContent = {}));

function invalidPathArgument(pattern, name, type, description, error) {
    return { status: 400, type: "invalid path argument", pattern, argument: { name, type, description }, error };
}
var InvalidPathArgument;
(function (InvalidPathArgument) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "invalid path argument" &&
            typeof value.pattern == "string" &&
            typeof value.argument == "object" &&
            typeof value.argument.name == "string" &&
            typeof value.argument.type == "string" &&
            typeof value.argument.description == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    InvalidPathArgument.is = is;
})(InvalidPathArgument || (InvalidPathArgument = {}));

function invalidQueryArgument(name, type, description, error) {
    return { status: 400, type: "invalid query argument", argument: { name, type, description }, error };
}
var InvalidQueryArgument;
(function (InvalidQueryArgument) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "invalid query argument" &&
            typeof value.argument == "object" &&
            typeof value.argument.name == "string" &&
            typeof value.argument.type == "string" &&
            typeof value.argument.description == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    InvalidQueryArgument.is = is;
})(InvalidQueryArgument || (InvalidQueryArgument = {}));

function malformedContent(property, type, description, details, error) {
    return { status: 400, type: "malformed content", content: { property, type, description, details }, error };
}
var MalformedContent;
(function (MalformedContent) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "malformed content" &&
            typeof value.content == "object" &&
            typeof value.content.property == "string" &&
            typeof value.content.type == "string" &&
            typeof value.content.description == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    MalformedContent.is = is;
})(MalformedContent || (MalformedContent = {}));

function methodNotAllowed(allow, error) {
    return { status: 405, type: "method not allowed", header: { allow }, error };
}
var MethodNotAllowed;
(function (MethodNotAllowed) {
    MethodNotAllowed.methods = ["GET", "POST", "DELETE", "HEAD", "PATCH", "PUT", "OPTIONS", "TRACE", "CONNECT"];
    function is(value) {
        return (typeof value == "object" &&
            value.status == 405 &&
            value.type == "method not allowed" &&
            typeof value.header == "object" &&
            Array.isArray(value.header.allow) &&
            value.header.allow.every((m) => MethodNotAllowed.methods.includes(m)) &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    MethodNotAllowed.is = is;
})(MethodNotAllowed || (MethodNotAllowed = {}));

function missingProperty(property, type, description, error) {
    return {
        status: 400,
        type: "missing property",
        content: typeof description == "string" ? { property, type, description } : Object.assign({ property, type }, description),
        error,
    };
}
var MissingProperty;
(function (MissingProperty) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "missing property" &&
            typeof value.content == "object" &&
            typeof value.content.property == "string" &&
            typeof value.content.type == "string" &&
            Object.values(value.content).every(v => v == undefined || typeof v == "string") &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    MissingProperty.is = is;
})(MissingProperty || (MissingProperty = {}));

function missingQueryArgument(name, type, description, error) {
    return {
        status: 400,
        type: "missing query argument",
        argument: { name, type, description },
        error,
    };
}
var MissingQueryArgument;
(function (MissingQueryArgument) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "missing query argument" &&
            typeof value.argument == "object" &&
            typeof value.argument.name == "string" &&
            typeof value.argument.type == "string" &&
            typeof value.argument.description == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    MissingQueryArgument.is = is;
})(MissingQueryArgument || (MissingQueryArgument = {}));

function notFound(error) {
    return { status: 404, type: "not found", error };
}
var NotFound;
(function (NotFound) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 404 &&
            value.type == "not found" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    NotFound.is = is;
})(NotFound || (NotFound = {}));

function unauthorized(scheme, parameter) {
    const result = { status: 401, type: "not authorized" };
    if (scheme == "basic")
        result.header = {
            wwwAuthenticate: `${scheme[0].toUpperCase()}${scheme.slice(1)}${typeof parameter == "object" && parameter && Object.keys(parameter).length > 0
                ? ` ${Object.entries(parameter !== null && parameter !== void 0 ? parameter : {})
                    .map(([p, t]) => `${p}=${t}`)
                    .join(", ")}`
                : ""}`,
        };
    else
        result.error = scheme;
    return result;
}
var Unauthorized;
(function (Unauthorized) {
    function is(value) {
        return (typeof value == "object" &&
            value &&
            value.status == 401 &&
            value.type == "not authorized" &&
            (value.error == undefined || typeof value.error == "string") &&
            (value.header == undefined ||
                (typeof value.header == "object" &&
                    value.header &&
                    (value.header.wwwAuthenticate == undefined || typeof value.header.wwwAuthenticate == "string"))) &&
            Result.is(value));
    }
    Unauthorized.is = is;
})(Unauthorized || (Unauthorized = {}));

function missingHeader(header, description) {
    return {
        status: 400,
        type: "missing header",
        content: { header, description },
    };
}
var MissingHeader;
(function (MissingHeader) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "missing header" &&
            typeof value.content == "object" &&
            typeof value.content.header == "string" &&
            typeof value.content.description == "string" &&
            Result.is(value));
    }
    MissingHeader.is = is;
})(MissingHeader || (MissingHeader = {}));

function malformedHeader(header, description) {
    return {
        status: 400,
        type: "malformed header",
        content: { header, description },
    };
}
var MalformedHeader;
(function (MalformedHeader) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 400 &&
            value.type == "malformed header" &&
            typeof value.content == "object" &&
            typeof value.content.header == "string" &&
            typeof value.content.description == "string" &&
            Result.is(value));
    }
    MalformedHeader.is = is;
})(MalformedHeader || (MalformedHeader = {}));

function entityTagMismatch(description) {
    return {
        status: 412,
        type: "entity tag mismatch",
        content: { description },
    };
}
var EntityTagMismatch;
(function (EntityTagMismatch) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 412 &&
            value.type == "entity tag mismatch" &&
            typeof value.content == "object" &&
            typeof value.content.description == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    EntityTagMismatch.is = is;
})(EntityTagMismatch || (EntityTagMismatch = {}));

var Error;
(function (Error) {
    function is(value) {
        return (typeof value == "object" &&
            value &&
            typeof value.type == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value) &&
            value.status >= 400);
    }
    Error.is = is;
})(Error || (Error = {}));

function found(location) {
    return { status: 302, location };
}
(function (found) {
    function is(value) {
        return Result.is(value) && value.status == 302;
    }
    found.is = is;
})(found || (found = {}));

function notModified(eTag) {
    return { status: 304, header: { eTag: eTag } };
}
(function (notModified) {
    function is(value) {
        return (typeof value == "object" &&
            Result.is(value) &&
            value.status == 304 &&
            typeof value.header == "object" &&
            typeof value.header.eTag == "string");
    }
    notModified.is = is;
})(notModified || (notModified = {}));

function permanent(location) {
    return { status: 301, location };
}
(function (permanent) {
    function is(value) {
        return Result.is(value) && value.status == 301;
    }
    permanent.is = is;
})(permanent || (permanent = {}));

function backendFailure(backend, details, reference, error) {
    if (backend != "string" && details == undefined && reference == undefined && error == undefined) {
        details = backend;
        backend = "unknown";
    }
    return { status: 502, type: "backend failure", backend, details, reference, error };
}
var BackendFailure;
(function (BackendFailure) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 502 &&
            value.type == "backend failure" &&
            typeof value.backend == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    BackendFailure.is = is;
})(BackendFailure || (BackendFailure = {}));

function backendTimeout(error) {
    return { status: 504, type: "backend timeout", error };
}
var BackendTimeout;
(function (BackendTimeout) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 504 &&
            value.type == "backend timeout" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    BackendTimeout.is = is;
})(BackendTimeout || (BackendTimeout = {}));

function databaseFailure(details, error) {
    return { status: 502, type: "database failure", details, error };
}
var DatabaseFailure;
(function (DatabaseFailure) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 502 &&
            value.type == "database failure" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    DatabaseFailure.is = is;
})(DatabaseFailure || (DatabaseFailure = {}));

function databaseTimeout(error) {
    return { status: 504, type: "database timeout", error };
}
var DatabaseTimeout;
(function (DatabaseTimeout) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 504 &&
            value.type == "database timeout" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    DatabaseTimeout.is = is;
})(DatabaseTimeout || (DatabaseTimeout = {}));

function misconfigured(key, description, error) {
    return { status: 503, type: "missing configuration", key, description, error };
}
var Misconfigured;
(function (Misconfigured) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 503 &&
            value.type == "missing configuration" &&
            typeof value.key == "string" &&
            typeof value.description == "string" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    Misconfigured.is = is;
})(Misconfigured || (Misconfigured = {}));

function unavailable(error) {
    return { status: 503, type: "service unavailable", error };
}
var Unavailable;
(function (Unavailable) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 503 &&
            value.type == "service unavailable" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    Unavailable.is = is;
})(Unavailable || (Unavailable = {}));

function unknown(details, error) {
    return { status: 500, type: "unknown error", details, error };
}
var Unknown;
(function (Unknown) {
    function is(value) {
        return (typeof value == "object" &&
            value.status == 500 &&
            value.type == "unknown error" &&
            (value.error == undefined || typeof value.error == "string") &&
            Result.is(value));
    }
    Unknown.is = is;
})(Unknown || (Unknown = {}));

function created(body) {
    return { status: 201, body };
}
(function (created) {
    function is(value) {
        return typeof value == "object" && value.body && Result.is(value) && value.status == 201;
    }
    created.is = is;
})(created || (created = {}));

function noContent() {
    return { status: 204 };
}
(function (noContent) {
    function is(value) {
        return Result.is(value) && value.status == 204;
    }
    noContent.is = is;
})(noContent || (noContent = {}));

function ok(body, eTag) {
    return { status: 200, body, header: { eTag } };
}
(function (ok) {
    function is(value) {
        return typeof value == "object" && value.body && Result.is(value) && value.status == 200;
    }
    ok.is = is;
})(ok || (ok = {}));

class Me extends Collection {
  async login(user, password) {
    var _a;
    let result;
    const credentials = typeof user == "string" ? { user, password } : user;
    if (credentials.password == undefined)
      result = malformedContent("password", "string", "Password is required for login.");
    else {
      const token = await this.client.get("api/me", {
        authorization: User$1.Credentials.toBasic({ user: credentials.user, password: credentials.password }),
      });
      result = Error.is(token)
        ? token
        : (_a = (await User$1.Key.unpack(token))) !== null && _a !== void 0 ? _a : unauthorized("Failed to verify token.");
      if (!Error.is(result)) {
        this.client.key = result.token;
        sessionStorage.setItem("userwidget-token", JSON.stringify(result));
      }
    }
    return result;
  }
}

class Organization extends Collection {
  async create(organization, applicationId) {
    return await this.client.post("api/organization", organization, {
      application: applicationId,
    });
  }
  async fetch(id, applicationId) {
    return await this.client.get(`api/organization/${id}`, {
      application: applicationId,
    });
  }
  async changeName(id, organization, applicationId, entityTag = "*") {
    return await this.client.put(`api/organization/${id}/name`, organization, {
      ifMatch: [entityTag],
      application: applicationId,
    });
  }
}

class User extends Collection {
  async list() {
    return await this.client.get("api/user");
  }
  async create(user) {
    return await this.client.post("api/user", user);
  }
  async changePassword(email, passwords) {
    const response = await this.client.put(`api/user/${email}/password`, passwords);
    return response == "" ? noContent() : response;
  }
  async changeName(email, name) {
    return await this.client.put(`api/user/${email}/name`, name);
  }
}

class Version extends Collection {
  async fetch() {
    return await this.client.get("api/version");
  }
}

class Client extends Client$1 {
  constructor() {
    super(...arguments);
    this.version = new Version(this.client);
    this.user = new User(this.client);
    this.me = new Me(this.client);
    this.organization = new Organization(this.client);
    this.application = new Application(this.client);
  }
  static create(url, key, load) {
    const client = new Client$2(url, key);
    const result = new this(client);
    if (load)
      Object.assign(result, load(client));
    return result;
  }
  get fullKey() {
    return new Promise(resolve => this.key ? resolve(User$1.Key.unpack(this.key)) : resolve(undefined));
  }
}

var _a, _b, _c;
const appUrl = new URL(window.location.href);
let apiUrl;
try {
  apiUrl =
    (_b = (_a = appUrl.searchParams.get("userwidgetPreview")) !== null && _a !== void 0 ? _a : (appUrl.hostname == "localhost" || appUrl.hostname == "127.0.0.1"
      ? "http://localhost:8788"
      : "https://api.userwidgets.com")) !== null && _b !== void 0 ? _b : window.origin;
}
catch (e) {
  apiUrl = window.origin;
}
console.log("api url:", apiUrl);
const client = Client.create(apiUrl, (_c = window.sessionStorage.getItem("userwidget-token")) !== null && _c !== void 0 ? _c : undefined);

export { Error as E, client as c };

//# sourceMappingURL=client-f75125eb.js.map
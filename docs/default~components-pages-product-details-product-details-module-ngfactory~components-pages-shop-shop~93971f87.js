(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-pages-product-details-product-details-module-ngfactory~components-pages-shop-shop~93971f87"],{

/***/ "EaNY":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
class BreadcrumbComponent {
    constructor(languageService, router) {
        this.languageService = languageService;
        this.router = router;
        this.translations = {
            about: {
                en: 'About Us',
                hr: 'O nama',
                de: 'Über uns'
            },
            contact: {
                en: 'Contact Us',
                hr: 'Kontaktirajte nas',
                de: 'Kontaktiere üns'
            },
            products: {
                en: 'Shop',
                hr: 'Proizvodi',
                de: 'Produkte'
            }
        };
        this.titleTag = "test";
    }
    ngOnInit() {
        this.languageService.currentLanguage.subscribe((language) => {
            this.setLanguageContent(language);
        });
    }
    setLanguageContent(language) {
        var _a;
        const routeName = this.router.url.substring(1); // remove the leading '/'
        this.titleTag = ((_a = this.translations[routeName]) === null || _a === void 0 ? void 0 : _a[language]) || 'Products';
    }
}


/***/ }),

/***/ "IheW":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.js ***!
  \*******************************************************/
/*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/**
 * @license Angular v11.2.2
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
class HttpHandler {
}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = () => {
                this.headers = new Map();
                headers.split('\n').forEach(line => {
                    const index = line.indexOf(':');
                    if (index > 0) {
                        const name = line.slice(0, index);
                        const key = name.toLowerCase();
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            this.headers.get(key).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = () => {
                this.headers = new Map();
                Object.keys(headers).forEach(name => {
                    let values = headers[name];
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(update => this.applyUpdate(update));
                this.lazyUpdate = null;
            }
        }
    }
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach(key => {
            this.headers.set(key, other.headers.get(key));
            this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    }
    clone(update) {
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                let value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                const toDelete = update.value;
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(value => toDelete.indexOf(value) === -1);
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * @internal
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    encodeKey(key) {
        return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    encodeValue(value) {
        return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
function paramParser(rawParams, codec) {
    const map = new Map();
    if (rawParams.length > 0) {
        // The `window.location.search` can be used while creating an instance of the `HttpParams` class
        // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
        // may start with the `?` char, so we strip it if it's present.
        const params = rawParams.replace(/^\?/, '').split('&');
        params.forEach((param) => {
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
    constructor(options = {}) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(key => {
                const value = options.fromObject[key];
                this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return this.map.has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return this.map.get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from(this.map.keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param, value) {
        return this.clone({ param, value, op: 'a' });
    }
    /**
     * Constructs a new body with appended values for the given parameter name.
     * @param params parameters and values
     * @return A new body with the new value.
     */
    appendAll(params) {
        const updates = [];
        Object.keys(params).forEach(param => {
            const value = params[param];
            if (Array.isArray(value)) {
                value.forEach(_value => {
                    updates.push({ param, value: _value, op: 'a' });
                });
            }
            else {
                updates.push({ param, value, op: 'a' });
            }
        });
        return this.clone(updates);
    }
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param, value) {
        return this.clone({ param, value, op: 's' });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) {
        return this.clone({ param, value, op: 'd' });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString() {
        this.init();
        return this.keys()
            .map(key => {
            const eKey = this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value))
                .join('&');
        })
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(param => param !== '')
            .join('&');
    }
    clone(update) {
        const clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
    }
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
            this.updates.forEach(update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            let base = this.map.get(update.param) || [];
                            const idx = base.indexOf(update.value);
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                this.map.set(update.param, base);
                            }
                            else {
                                this.map.delete(update.param);
                            }
                        }
                        else {
                            this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    clone(update = {}) {
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((params, param) => params.set(param, update.setParams[param]), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params,
            headers,
            reportProgress,
            responseType,
            withCredentials,
        });
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * @publicApi
 */
class HttpClient {
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    request(first, url, options = {}) {
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((req) => this.handler.handle(req)));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        const res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof HttpResponse));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.body));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    get(url, options = {}) {
        return this.request('GET', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    head(url, options = {}) {
        return this.request('HEAD', url, options);
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
class NoopInterceptor {
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
class JsonpClientBackend {
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
        /**
         * A resolved promise that can be used to schedule microtasks in the event handlers.
         */
        this.resolvedPromise = Promise.resolve();
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            const callback = this.nextCallback();
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            let body = null;
            // Whether the response callback has been called.
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            const cleanup = () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            const onLoad = (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // We wrap it in an extra Promise, to ensure the microtask
                // is scheduled after the loaded endpoint has executed any potential microtask itself,
                // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
                this.resolvedPromise.then(() => {
                    // Cleanup the page.
                    cleanup();
                    // Check whether the response callback has run.
                    if (!finished) {
                        // It hasn't, something went wrong with the request. Return an error via
                        // the Observable error path. All JSONP errors have status 0.
                        observer.error(new HttpErrorResponse({
                            url,
                            status: 0,
                            statusText: 'JSONP Error',
                            error: new Error(JSONP_ERR_NO_CALLBACK),
                        }));
                        return;
                    }
                    // Success. body either contains the response body or null if none was
                    // returned.
                    observer.next(new HttpResponse({
                        body,
                        status: 200,
                        statusText: 'OK',
                        url,
                    }));
                    // Complete the stream, the response is over.
                    observer.complete();
                });
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            const onError = (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error',
                    url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    }
}
JsonpClientBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
class JsonpInterceptor {
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
class XhrFactory {
}
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
class BrowserXhr {
    constructor() { }
    build() {
        return (new XMLHttpRequest());
    }
}
BrowserXhr.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
BrowserXhr.ctorParameters = () => [];
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
class HttpXhrBackend {
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the HttpClientJsonpModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            const partialFromXhr = () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).
                const status = xhr.status === 1223 ? 204 : xhr.status;
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            const onLoad = () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                let body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            const onError = (error) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            const onDownProgress = (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            const onUpProgress = (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            xhr.addEventListener('timeout', onError);
            xhr.addEventListener('abort', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('abort', onError);
                xhr.removeEventListener('load', onLoad);
                xhr.removeEventListener('timeout', onError);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                if (xhr.readyState !== xhr.DONE) {
                    xhr.abort();
                }
            };
        });
    }
}
HttpXhrBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
HttpXhrBackend.ctorParameters = () => [
    { type: XhrFactory }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {
}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
];
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    intercept(req, next) {
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    handle(req) {
        if (this.chain === null) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientModule {
}
HttpClientModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "e/Ga":
/*!***************************************************************************************!*\
  !*** ./src/app/components/shared/breadcrumb/breadcrumb.component.css.shim.ngstyle.js ***!
  \***************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "jhVY":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/breadcrumb/breadcrumb.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_BreadcrumbComponent, View_BreadcrumbComponent_0, View_BreadcrumbComponent_Host_0, BreadcrumbComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BreadcrumbComponent", function() { return RenderType_BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_0", function() { return View_BreadcrumbComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_Host_0", function() { return View_BreadcrumbComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponentNgFactory", function() { return BreadcrumbComponentNgFactory; });
/* harmony import */ var _breadcrumb_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.component.css.shim.ngstyle */ "e/Ga");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _node_modules_angular_crumbs_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/angular-crumbs/breadcrumb.component.ngfactory */ "uy+D");
/* harmony import */ var angular_crumbs_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-crumbs/breadcrumb.component */ "Rug3");
/* harmony import */ var angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-crumbs/breadcrumb.service */ "iryk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb.component */ "EaNY");
/* harmony import */ var _language_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../language-service.service */ "2Q0+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */









var styles_BreadcrumbComponent = [_breadcrumb_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BreadcrumbComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BreadcrumbComponent, data: {} });

function View_BreadcrumbComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [["class", "page-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.titleTag; _ck(_v, 1, 0, currVal_0); }); }
function View_BreadcrumbComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "breadcrumb", [], null, null, null, _node_modules_angular_crumbs_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BreadcrumbComponent_0"], _node_modules_angular_crumbs_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BreadcrumbComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [["parent", 4]], 0, angular_crumbs_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], [angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 8, "section", [["class", "breadcrumb-section bg-img-c"], ["style", "background-image: url(assets/img/breadcrumb.jpg);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "breadcrumb-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "breadcrumb-shapes"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "one"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "two"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "three"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).breadcrumbs; _ck(_v, 6, 0, currVal_0); }, null); }
function View_BreadcrumbComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-breadcrumb", [], null, null, null, View_BreadcrumbComponent_0, RenderType_BreadcrumbComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], [_language_service_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BreadcrumbComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-breadcrumb", _breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], View_BreadcrumbComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "uy+D":
/*!***********************************************************************!*\
  !*** ./node_modules/angular-crumbs/breadcrumb.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_BreadcrumbComponent, View_BreadcrumbComponent_0, View_BreadcrumbComponent_Host_0, BreadcrumbComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BreadcrumbComponent", function() { return RenderType_BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_0", function() { return View_BreadcrumbComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_Host_0", function() { return View_BreadcrumbComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponentNgFactory", function() { return BreadcrumbComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "Rug3");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb.service */ "iryk");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */





var styles_BreadcrumbComponent = [];
var RenderType_BreadcrumbComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BreadcrumbComponent, data: {} });

function View_BreadcrumbComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["href", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, _v.parent.context.$implicit.url); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.displayName; _ck(_v, 3, 0, currVal_3); }); }
function View_BreadcrumbComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.displayName; _ck(_v, 1, 0, currVal_0); }); }
function View_BreadcrumbComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "breadcrumb"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "last": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = "breadcrumb"; var currVal_1 = _ck(_v, 2, 0, _v.context.$implicit.terminal); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = !_v.context.$implicit.terminal; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.terminal; _ck(_v, 6, 0, currVal_3); }, null); }
function View_BreadcrumbComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "nav-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.breadcrumbs; _ck(_v, 3, 0, currVal_0); }, null); }
function View_BreadcrumbComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [["template", 1]], null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0).children.length == 0); _ck(_v, 3, 0, currVal_0); }, null); }
function View_BreadcrumbComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "breadcrumb", [], null, null, null, View_BreadcrumbComponent_0, RenderType_BreadcrumbComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]], null, null)], null, null); }
var BreadcrumbComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("breadcrumb", _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], View_BreadcrumbComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "xkeV":
/*!*************************************!*\
  !*** ./src/app/data/shop/shop.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":{\"en\":\"Cups 0,2 L CE 100/1 EXCITE white\",\"hr\":\"Čaše 0,2 L CE 100/1 EXCITE bijele\",\"de\":\"Koffer 0,2 L CE 100/1 EXCITE weiß\"},\"image\":[\"assets/img/shop/0,2LCEbijele.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":{\"en\":\"Bar code:\",\"hr\":\"Bar kod:\",\"de\":\"Barcode:\"},\"text\":\"3875000651203\"},{\"title\":{\"en\":\"Material\",\"hr\":\"Materijal\",\"de\":\"Material\"},\"text\":\"Polypropylene\"},{\"title\":{\"en\":\"Color\",\"hr\":\"Boja\",\"de\":\"Farbe\"},\"text\":\"bijela\"},{\"title\":{\"en\":\"Weight (+-5%)\",\"hr\":\"Težina (+-5%)\",\"de\":\"Gewicht (+-5%)\"},\"text\":\"2,5 g\"},{\"title\":{\"en\":\"Diameter\",\"hr\":\"Promjer\",\"de\":\"Durchmesser\"},\"text\":\"69,3 mm\"},{\"title\":{\"en\":\"Height\",\"hr\":\"Visina\",\"de\":\"Höhe\"},\"text\":\"100,5 mm\"},{\"title\":{\"en\":\"A piece in a package\",\"hr\":\"Komada u pakovanju\",\"de\":\"Ein Stück in einer Packung\"},\"text\":\"100\"},{\"title\":{\"en\":\"Packaging in a box\",\"hr\":\"Komada u pakovanju\",\"de\":\"Verpackung im Karton\"},\"text\":\"30\"}]},{\"id\":2,\"title\":{\"en\":\"Cups 0,2 L CE 100/1 EXCITE transparentna\",\"hr\":\"Čaše 0,2 L CE 100/1 EXCITE transparent\",\"de\":\"Koffer 0,2 L CE 100/1 EXCITE transparent\"},\"image\":[\"assets/img/shop/0,2L CE transp.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":{\"en\":\"Bar code:\",\"hr\":\"Bar kod:\",\"de\":\"Barcode:\"},\"text\":\"3875000651234\"},{\"title\":{\"en\":\"Material\",\"hr\":\"Materijal\",\"de\":\"Material\"},\"text\":\"Polypropylene\"},{\"title\":{\"en\":\"Color\",\"hr\":\"Boja\",\"de\":\"Farbe\"},\"text\":\"Transparentna\"},{\"title\":{\"en\":\"Weight (+-5%)\",\"hr\":\"Težina (+-5%)\",\"de\":\"Gewicht (+-5%)\"},\"text\":\"2,5 g\"},{\"title\":{\"en\":\"Diameter\",\"hr\":\"Promjer\",\"de\":\"Durchmesser\"},\"text\":\"69,3 mm\"},{\"title\":{\"en\":\"Height\",\"hr\":\"Visina\",\"de\":\"Höhe\"},\"text\":\"100,5 mm\"},{\"title\":{\"en\":\"A piece in a package\",\"hr\":\"Komada u pakovanju\",\"de\":\"Ein Stück in einer Packung\"},\"text\":\"100\"},{\"title\":{\"en\":\"Packaging in a box\",\"hr\":\"Komada u pakovanju\",\"de\":\"Verpackung im Karton\"},\"text\":\"30\"}]},{\"id\":3,\"title\":{\"en\":\"Cups 200 cc 2x50 ENJOY\",\"hr\":\"Čaše 200 cc 2x50 ENJOY\",\"de\":\"Koffer 200 cc 2x50 ENJOY\"},\"image\":[\"assets/img/shop/2x50enjoy2.jpg\",\"assets/img/shop/2x50enjoy.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":{\"en\":\"Bar code:\",\"hr\":\"Bar kod:\",\"de\":\"Barcode:\"},\"text\":\"3875000651234\"},{\"title\":{\"en\":\"Material\",\"hr\":\"Materijal\",\"de\":\"Material\"},\"text\":\"Polypropylene\"},{\"title\":{\"en\":\"Color\",\"hr\":\"Boja\",\"de\":\"Farbe\"},\"text\":\"Transparentna\"},{\"title\":{\"en\":\"Weight (+-5%)\",\"hr\":\"Težina (+-5%)\",\"de\":\"Gewicht (+-5%)\"},\"text\":\"2,5 g\"},{\"title\":{\"en\":\"Diameter\",\"hr\":\"Promjer\",\"de\":\"Durchmesser\"},\"text\":\"69,3 mm\"},{\"title\":{\"en\":\"Height\",\"hr\":\"Visina\",\"de\":\"Höhe\"},\"text\":\"100,5 mm\"},{\"title\":{\"en\":\"A piece in a package\",\"hr\":\"Komada u pakovanju\",\"de\":\"Ein Stück in einer Packung\"},\"text\":\"100\"},{\"title\":{\"en\":\"Packaging in a box\",\"hr\":\"Komada u pakovanju\",\"de\":\"Verpackung im Karton\"},\"text\":\"30\"}]},{\"id\":4,\"title\":{\"en\":\"Cups 200 cc 100/1 ENJOY\",\"hr\":\"Čaše 200 cc 100/1 ENJOY\",\"de\":\"Koffer 200 cc 100/1 ENJOY\"},\"image\":[\"assets/img/shop/100x1enjoy.jpg\",\"assets/img/shop/100x1enjoy2.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":{\"en\":\"Bar code:\",\"hr\":\"Bar kod:\",\"de\":\"Barcode:\"},\"text\":\"3875000651234\"},{\"title\":{\"en\":\"Material\",\"hr\":\"Materijal\",\"de\":\"Material\"},\"text\":\"Polypropylene\"},{\"title\":{\"en\":\"Color\",\"hr\":\"Boja\",\"de\":\"Farbe\"},\"text\":\"Transparentna\"},{\"title\":{\"en\":\"Weight (+-5%)\",\"hr\":\"Težina (+-5%)\",\"de\":\"Gewicht (+-5%)\"},\"text\":\"2,5 g\"},{\"title\":{\"en\":\"Diameter\",\"hr\":\"Promjer\",\"de\":\"Durchmesser\"},\"text\":\"69,3 mm\"},{\"title\":{\"en\":\"Height\",\"hr\":\"Visina\",\"de\":\"Höhe\"},\"text\":\"100,5 mm\"},{\"title\":{\"en\":\"A piece in a package\",\"hr\":\"Komada u pakovanju\",\"de\":\"Ein Stück in einer Packung\"},\"text\":\"100\"},{\"title\":{\"en\":\"Packaging in a box\",\"hr\":\"Komada u pakovanju\",\"de\":\"Verpackung im Karton\"},\"text\":\"30\"}]},{\"id\":5,\"title\":{\"en\":\"Cups 200 cc 50/1 ENJOY\",\"hr\":\"Čaše 200 cc 50/1 ENJOY\",\"de\":\"Koffer 200 cc 50/1 ENJOY\"},\"image\":[\"assets/img/shop/200x50enjoy.jpg\",\"assets/img/shop/200x50enjoy2.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":{\"en\":\"Bar code:\",\"hr\":\"Bar kod:\",\"de\":\"Barcode:\"},\"text\":\"3875000651234\"},{\"title\":{\"en\":\"Material\",\"hr\":\"Materijal\",\"de\":\"Material\"},\"text\":\"Polypropylene\"},{\"title\":{\"en\":\"Color\",\"hr\":\"Boja\",\"de\":\"Farbe\"},\"text\":\"Transparentna\"},{\"title\":{\"en\":\"Weight (+-5%)\",\"hr\":\"Težina (+-5%)\",\"de\":\"Gewicht (+-5%)\"},\"text\":\"2,5 g\"},{\"title\":{\"en\":\"Diameter\",\"hr\":\"Promjer\",\"de\":\"Durchmesser\"},\"text\":\"69,3 mm\"},{\"title\":{\"en\":\"Height\",\"hr\":\"Visina\",\"de\":\"Höhe\"},\"text\":\"100,5 mm\"},{\"title\":{\"en\":\"A piece in a package\",\"hr\":\"Komada u pakovanju\",\"de\":\"Ein Stück in einer Packung\"},\"text\":\"100\"},{\"title\":{\"en\":\"Packaging in a box\",\"hr\":\"Komada u pakovanju\",\"de\":\"Verpackung im Karton\"},\"text\":\"30\"}]},{\"id\":6,\"title\":{\"en\":\"Cups 200 cc 50/1 ORANGE\",\"hr\":\"Čaše 200 cc 50/1 NARANČA\",\"de\":\"Koffer 200 cc 50/1 ORANGE\"},\"image\":[\"assets/img/shop/cupsORANGE.jpg\",\"assets/img/shop/cupsORANGE1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":7,\"title\":{\"en\":\"Cups 200 cc 50/1 YELLOW\",\"hr\":\"Čaše 200 cc 50/1 ŽUTA\",\"de\":\"Koffer 200 cc 50/1 GELB\"},\"image\":[\"assets/img/shop/cupsYELLOW.jpg\",\"assets/img/shop/cupsYELLOW2.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":8,\"title\":{\"en\":\"Cups 200 cc 50/1 BLUE\",\"hr\":\"Čaše 200 cc 50/1 PLAVA\",\"de\":\"Koffer 200 cc 50/1 BLAU\"},\"image\":[\"assets/img/shop/cupsBLUE.jpg\",\"assets/img/shop/cupsBLUE1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":9,\"title\":{\"en\":\"Cups 200 cc 50/1 LIME\",\"hr\":\"Čaše 200 cc 50/1 LIMETA\",\"de\":\"Koffer 200 cc 50/1 KALK\"},\"image\":[\"assets/img/shop/cupsLIME.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":10,\"title\":{\"en\":\"Cups 350 cc 50/1 BUBBLE\",\"hr\":\"Čaše 350 cc 50/1 BUBBLE\",\"de\":\"Koffer 350 cc 50/1 BUBBLE\"},\"image\":[\"assets/img/shop/cupsBUUBLE.jpg\",\"assets/img/shop/cupsBUUBLE1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":11,\"title\":{\"en\":\"Cups 350 cc 50/1 NECTAR\",\"hr\":\"Čaše 350 cc 50/1 NEKTAR\",\"de\":\"Koffer 350 cc 50/1 NEKTAR\"},\"image\":[\"assets/img/shop/cupsNECTAR.jpg\",\"assets/img/shop/cupsNECTAR1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":12,\"title\":{\"en\":\"Injected 0.2 L 10/1\",\"hr\":\"Brizgane 0.2 L 10/1\",\"de\":\"Gespritzt 0.2 L 10/1\"},\"image\":[\"assets/img/shop/brizgane10.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":13,\"title\":{\"en\":\"Cups 550 cc 25/1 FAMILY\",\"hr\":\"Čaše 550 cc 25/1 FAMILY\",\"de\":\"Koffer 550 cc 25/1 FAMILY\"},\"image\":[\"assets/img/shop/cups550FAMILY.jpg\",\"assets/img/shop/cups550FAMILY1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":14,\"title\":{\"en\":\"Cups 550 cc 25/1 FUNS\",\"hr\":\"Čaše 550 cc 25/1 FUNS\",\"de\":\"Koffer 550 cc 25/1 FUNS\"},\"image\":[\"assets/img/shop/cupsFUNS.jpg\",\"assets/img/shop/cupsFUNS1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":15,\"title\":{\"en\":\"Injected 0.02 - 0.04 l 15/1\",\"hr\":\"Brizgane 0.02 - 0.04 l 15/1\",\"de\":\"Gespritzt 0.02 - 0.04 15/1\"},\"image\":[\"assets/img/shop/brizgane15.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":16,\"title\":{\"en\":\"Injected 0.02 - 0.04 l 35/1\",\"hr\":\"Brizgane 0.02 - 0.04 l 35/1\",\"de\":\"Gespritzt 0.02 - 0.04 35/1\"},\"image\":[\"assets/img/shop/brizgane35.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":17,\"title\":{\"en\":\"Vending cups 166 cc 100/1 Antistatic\",\"hr\":\"Vending čaše 166 cc 100/1 Antistatic\",\"de\":\"Verkaufsbecher 166 cc 100/1 Antistatisch\"},\"image\":[\"assets/img/shop/antistatic.jpg\",\"assets/img/shop/antistatic1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":18,\"title\":{\"en\":\"Coffee cups 0.10 l 50/1\",\"hr\":\"Šalice za kavu 0,10 l 50/1\",\"de\":\"Kaffeetassen 0,10 l 50/1\"},\"image\":[\"assets/img/shop/salica010.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":19,\"title\":{\"en\":\"Fork 10/1\",\"hr\":\"Vilica 10/1\",\"de\":\"Gabel 10/1\"},\"image\":[\"assets/img/shop/vilica10.jpg\",\"assets/img/shop/vilica101.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":20,\"title\":{\"en\":\"Fork 20/1\",\"hr\":\"Vilica 20/1\",\"de\":\"Gabel 20/1\"},\"image\":[\"assets/img/shop/vilica20.jpg\",\"assets/img/shop/vilica201.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":21,\"title\":{\"en\":\"Fork 50/1\",\"hr\":\"Vilica 50/1\",\"de\":\"Gabel 50/1\"},\"image\":[\"assets/img/shop/salica050.jpg\",\"assets/img/shop/salica0501.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":22,\"title\":{\"en\":\"Fork 100/1\",\"hr\":\"Vilica 100/1\",\"de\":\"Gabel 100/1\"},\"image\":[\"assets/img/shop/vilica100.jpg\",\"assets/img/shop/vilica1001.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":23,\"title\":{\"en\":\"Fork 100/1 TRANSPARENT\",\"hr\":\"Vilica 100/1 TRANSPARENT\",\"de\":\"Gabel 100/1 TRANSPARENT\"},\"image\":[\"assets/img/shop/vilicatrans.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":24,\"title\":{\"en\":\"Spoon 10/1\",\"hr\":\"Žlica 10/1\",\"de\":\"Kaffeetassen 0,10 l 15/1\"},\"image\":[\"assets/img/shop/zilica10.jpg\",\"assets/img/shop/zilica101.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":25,\"title\":{\"en\":\"Spoon 20/1\",\"hr\":\"Žlica 20/1\",\"de\":\"Kaffeetassen 0,20 l 15/1\"},\"image\":[\"assets/img/shop/salica020.jpg\",\"assets/img/shop/salica0201.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":26,\"title\":{\"en\":\"Spoon 50/1\",\"hr\":\"Žlica 50/1\",\"de\":\"Kaffeetassen 0,50 l 15/1\"},\"image\":[\"assets/img/shop/salica050.jpg\",\"assets/img/shop/salica0501.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":27,\"title\":{\"en\":\"Spoon 100/1\",\"hr\":\"Žlica 100/1\",\"de\":\"Kaffeetassen 0,100 l 15/1\"},\"image\":[\"assets/img/shop/salica0100.jpg\",\"assets/img/shop/salica01001.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":28,\"title\":{\"en\":\"Žlica 10/1 TRANSPARENT\",\"hr\":\"Žlica 10/1 TRANSPARENT\",\"de\":\"Žlica 10/1 TRANSPARENT\"},\"image\":[\"assets/img/shop/zilica10trans.jpg\",\"assets/img/shop/zilica10trans1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":28,\"title\":{\"en\":\"Žlica 2/1 SALAD SET\",\"hr\":\"Žlica 2/1 SALAD SET\",\"de\":\"Löffel 2/1 SALATSET\"},\"image\":[\"assets/img/shop/saladset.jpg\",\"assets/img/shop/salatset1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":28,\"title\":{\"en\":\"Spoon 2/1 CAKE SET\",\"hr\":\"Žlica 2/1 CAKE SET\",\"de\":\"Löffel 2/1 KUCHENSET\"},\"image\":[\"assets/img/shop/cake.jpg\",\"assets/img/shop/cake1.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":29,\"title\":{\"en\":\"Dessert spoon 10/1\",\"hr\":\"Žlica desertna 10/1\",\"de\":\"Dessertlöffel 10/1\"},\"image\":[\"assets/img/shop/desert.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":30,\"title\":{\"en\":\"Espresso spoon 500/1\",\"hr\":\"Žlica za espresso 500/1\",\"de\":\"Espressolöffel 500/1\"},\"image\":[\"assets/img/shop/espresso.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":31,\"title\":{\"en\":\"Dessert spoon 10/1\",\"hr\":\"Žlica za espresso 1000/1\",\"de\":\"Dessertlöffel 10/1\"},\"image\":[\"assets/img/shop/espresso100.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":32,\"title\":{\"en\":\"Knife 10/1\",\"hr\":\"Nož 10/1\",\"de\":\"Messer 10/1\"},\"image\":[\"assets/img/shop/noz10.jpg\",\"assets/img/shop/noz101.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":33,\"title\":{\"en\":\"Knife 20/1\",\"hr\":\"Nož 20/1\",\"de\":\"Messer 20/1\"},\"image\":[\"assets/img/shop/desertna20.jpg\",\"assets/img/shop/desertna201.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":34,\"title\":{\"en\":\"Knife 50/1\",\"hr\":\"Nož 50/1\",\"de\":\"Messer 50/1\"},\"image\":[\"assets/img/shop/noz50.jpg\",\"assets/img/shop/noz501.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":35,\"title\":{\"en\":\"Knife 100/1\",\"hr\":\"Nož 100/1\",\"de\":\"Messer 100/1\"},\"image\":[\"assets/img/shop/noz100.jpg\",\"assets/img/shop/noz1001.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]},{\"id\":36,\"title\":{\"en\":\"Knife 10/1 transparent\",\"hr\":\"Nož 10/1 transparent\",\"de\":\"Messer 10/1 transparent\"},\"image\":[\"assets/img/shop/noz10trans.jpg\",\"assets/img/shop/noz101trans.jpg\"],\"category\":[1],\"shortdescription\":\"<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis</p><p> Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium, totam rem aperiaaquipsa quae ab illo</p>\",\"additional\":[{\"title\":\"Weight\",\"text\":\"6.59 kg\"},{\"title\":\"Dimensions\",\"text\":\"43.31 x 26.70 x 64.50 cm\"},{\"title\":\"Color\",\"text\":\"Red, Black, Blue\"}]}]");

/***/ })

}]);
//# sourceMappingURL=default~components-pages-product-details-product-details-module-ngfactory~components-pages-shop-shop~93971f87.js.map
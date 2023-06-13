(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-pages-about-about-module-ngfactory~components-pages-contact-contact-module-ngfact~9154038c"],{

/***/ "EaNY":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



class BreadcrumbComponent {
    constructor(languageService, router, activateRoute) {
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
                en: 'Products',
                hr: 'Proizvodi',
                de: 'Produkte'
            },
            'product-details': {
                en: 'Products',
                hr: 'Proizvodi',
                de: 'Produkte'
            }
        };
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.titleTag = "test";
    }
    ngOnInit() {
        this.languageService.currentLanguage.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroyed$)).subscribe((language) => {
            this.setLanguageContent(language);
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroyed$)).subscribe(() => {
            this.setLanguageContent(this.languageService.getCurrentLanguage());
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    setLanguageContent(language) {
        var _a;
        const url = this.router.url.split('?')[0]; // remove the query parameters
        const urlSegments = url.split('/');
        let routeName = '';
        if (urlSegments.includes('product-details')) {
            routeName = 'product-details';
        }
        else {
            routeName = urlSegments[urlSegments.length - 1] === 'shop' ? 'products' : urlSegments[urlSegments.length - 1];
        }
        this.titleTag = ((_a = this.translations[routeName]) === null || _a === void 0 ? void 0 : _a[language]) || 'Products';
    }
}


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
function View_BreadcrumbComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "breadcrumb", [], null, null, null, _node_modules_angular_crumbs_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BreadcrumbComponent_0"], _node_modules_angular_crumbs_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BreadcrumbComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [["parent", 4]], 0, angular_crumbs_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], [angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 8, "section", [["class", "breadcrumb-section bg-img-c"]], [[4, "backgroundImage", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "breadcrumb-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "breadcrumb-shapes"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "one"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "two"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "three"]], null, null, null, null, null))], function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).breadcrumbs; _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("url(" + _co.bgImageUrl) + ")"); _ck(_v, 2, 0, currVal_0); }); }
function View_BreadcrumbComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-breadcrumb", [], null, null, null, View_BreadcrumbComponent_0, RenderType_BreadcrumbComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], [_language_service_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BreadcrumbComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-breadcrumb", _breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], View_BreadcrumbComponent_Host_0, { bgImageUrl: "bgImageUrl" }, {}, []);



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



/***/ })

}]);
//# sourceMappingURL=default~components-pages-about-about-module-ngfactory~components-pages-contact-contact-module-ngfact~9154038c.js.map
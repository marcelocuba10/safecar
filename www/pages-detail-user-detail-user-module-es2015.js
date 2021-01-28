(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-user-detail-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-user/detail-user.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-user/detail-user.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>detail-user</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/detail-user/detail-user-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detail-user/detail-user-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserPageRoutingModule", function() { return DetailUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-user.page */ "./src/app/pages/detail-user/detail-user.page.ts");




const routes = [
    {
        path: '',
        component: _detail_user_page__WEBPACK_IMPORTED_MODULE_3__["DetailUserPage"]
    }
];
let DetailUserPageRoutingModule = class DetailUserPageRoutingModule {
};
DetailUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailUserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detail-user/detail-user.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-user/detail-user.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserPageModule", function() { return DetailUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-user-routing.module */ "./src/app/pages/detail-user/detail-user-routing.module.ts");
/* harmony import */ var _detail_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-user.page */ "./src/app/pages/detail-user/detail-user.page.ts");







let DetailUserPageModule = class DetailUserPageModule {
};
DetailUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailUserPageRoutingModule"]
        ],
        declarations: [_detail_user_page__WEBPACK_IMPORTED_MODULE_6__["DetailUserPage"]]
    })
], DetailUserPageModule);



/***/ }),

/***/ "./src/app/pages/detail-user/detail-user.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-user/detail-user.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC11c2VyL2RldGFpbC11c2VyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/detail-user/detail-user.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail-user/detail-user.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserPage", function() { return DetailUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetailUserPage = class DetailUserPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-user/detail-user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-user.page.scss */ "./src/app/pages/detail-user/detail-user.page.scss")).default]
    })
], DetailUserPage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-user-detail-user-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenances-maintenances-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenances/maintenances.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenances/maintenances.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Manutenções</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [routerLink]=\"['/detail-workshop']\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-item class=\"line-card\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon style=\"display: table-footer-group;color: cornflowerblue;\" name=\"build-outline\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>Compra de Pneus</h3>\r\n        <p>Comercial Continental</p>\r\n        <p>600,00 RS</p>\r\n      </ion-label>\r\n      <ion-note color=\"primary\" style=\"font-size: small;\" slot=\"end\" *ngIf=\"data\">{{ data }}</ion-note>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-item class=\"line-card\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon style=\"display: table-footer-group;color: cornflowerblue;\" name=\"build-outline\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>Chaperia Pintura</h3>\r\n        <p>Comercial San jose</p>\r\n        <p>1,200,00 RS</p>\r\n      </ion-label>\r\n      <ion-note color=\"primary\" style=\"font-size: small;\" slot=\"end\" *ngIf=\"data\">{{ data }}</ion-note>\r\n    </ion-item>\r\n  </ion-card> \r\n <ion-card>\r\n  <ion-item class=\"line-card\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-icon style=\"display: table-footer-group;color: cornflowerblue;\" name=\"build-outline\"></ion-icon>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>Chaperia Pintura</h3>\r\n      <p>Comercial San jose</p>\r\n      <p>1,200,00 RS</p>\r\n    </ion-label>\r\n    <ion-note color=\"primary\" style=\"font-size: small;\" slot=\"end\" *ngIf=\"data\">{{ data }}</ion-note>\r\n  </ion-item>\r\n </ion-card> \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/maintenances/maintenances-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/maintenances/maintenances-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MaintenancesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancesPageRoutingModule", function() { return MaintenancesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _maintenances_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenances.page */ "./src/app/pages/maintenances/maintenances.page.ts");




const routes = [
    {
        path: '',
        component: _maintenances_page__WEBPACK_IMPORTED_MODULE_3__["MaintenancesPage"]
    }
];
let MaintenancesPageRoutingModule = class MaintenancesPageRoutingModule {
};
MaintenancesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MaintenancesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/maintenances/maintenances.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/maintenances/maintenances.module.ts ***!
  \***********************************************************/
/*! exports provided: MaintenancesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancesPageModule", function() { return MaintenancesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _maintenances_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenances-routing.module */ "./src/app/pages/maintenances/maintenances-routing.module.ts");
/* harmony import */ var _maintenances_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maintenances.page */ "./src/app/pages/maintenances/maintenances.page.ts");







let MaintenancesPageModule = class MaintenancesPageModule {
};
MaintenancesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _maintenances_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaintenancesPageRoutingModule"]
        ],
        declarations: [_maintenances_page__WEBPACK_IMPORTED_MODULE_6__["MaintenancesPage"]]
    })
], MaintenancesPageModule);



/***/ }),

/***/ "./src/app/pages/maintenances/maintenances.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/maintenances/maintenances.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW50ZW5hbmNlcy9tYWludGVuYW5jZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/maintenances/maintenances.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/maintenances/maintenances.page.ts ***!
  \*********************************************************/
/*! exports provided: MaintenancesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancesPage", function() { return MaintenancesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MaintenancesPage = class MaintenancesPage {
    constructor() {
        this.data = "18/02/2021";
    }
    ngOnInit() {
    }
};
MaintenancesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maintenances',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./maintenances.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenances/maintenances.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./maintenances.page.scss */ "./src/app/pages/maintenances/maintenances.page.scss")).default]
    })
], MaintenancesPage);



/***/ })

}]);
//# sourceMappingURL=pages-maintenances-maintenances-module-es2015.js.map
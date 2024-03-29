(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workshops-workshops-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-acordion/mi-acordion.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-acordion/mi-acordion.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-item (click)=\"toggleAccordion()\" class=\"ion-padding-top\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon style=\"display: table-footer-group;color: cornflowerblue;\" name=\"car-sport-outline\"></ion-icon>\r\n      </ion-thumbnail>\r\n  <ion-label>{{ nome }}</ion-label>\r\n  <ion-icon slot=\"end\" color=\"primary\" *ngIf=\"isMenuOpen\" name=\"chevron-down-outline\"></ion-icon>\r\n  <ion-icon slot=\"end\" color=\"primary\" *ngIf=\"!isMenuOpen\" name=\"chevron-forward-outline\"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-card [ngClass]=\"this.isMenuOpen ? 'active' : 'inactive'\">\r\n  <ion-card-header>\r\n    <ion-card-subtitle><b>Responsavel:</b> {{responsavel}}</ion-card-subtitle>\r\n    <ion-card-subtitle><b>RUC:</b> {{RUC}}</ion-card-subtitle>\r\n    <ion-card-subtitle><b>Endereco:</b> {{endereco}}</ion-card-subtitle>\r\n    <ion-card-subtitle><b>Telefone:</b> {{telefone}}</ion-card-subtitle>\r\n    <ion-card-subtitle><b>Email:</b> {{email}}</ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-item class=\"line-card\">\r\n      <ion-button (click)=\"broadcastName(telefone)\" mode=\"ios\" fill=\"outline\" color=\"warning\" slot=\"end\"><ion-icon name=\"call-outline\"></ion-icon>Chamar</ion-button>\r\n      <ion-button (click)=\"broadcastName(endereco)\" mode=\"ios\" fill=\"outline\" color=\"success\" slot=\"end\"><ion-icon name=\"location-outline\"></ion-icon>Abrir Maps</ion-button>\r\n  </ion-item>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshops/workshops.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshops/workshops.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Mecanicas</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [routerLink]=\"['/detail-workshop']\">\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <app-mi-acordion *ngFor=\"let workshop of workshops\" \r\n     nome=\"{{ workshop.nome }}\" \r\n     endereco=\"{{ workshop.endereco }}\" \r\n     RUC=\"{{ workshop.RUC }}\" \r\n     telefone=\"{{ workshop.telefone }}\"\r\n     email=\"{{ workshop.email }}\"\r\n     responsavel=\"{{ workshop.responsavel }}\"\r\n     (change)=\"captureName($event)\">\r\n  </app-mi-acordion>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/components/mi-acordion/mi-acordion.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mi-acordion/mi-acordion.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\n\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n\n/* Here we define the actual 'menu' and its 'options' */\n\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\n\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\n\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\n\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n\n/* Following classes display/hide the 'menu'\r\n // based on the state change detection in the\r\n // component class */\n\n.active {\n  display: block;\n}\n\n.inactive {\n  display: none;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taS1hY29yZGlvbi9DOlxcVXNlcnNcXENvbmVjdGEtRGVzYXJyb2xsb1xcRG9jdW1lbnRzXFxhcHBzXFxzYWZlY2FyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtaS1hY29yZGlvblxcbWktYWNvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWktYWNvcmRpb24vbWktYWNvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdDQUE0QztFQUM1QyxTQUFTO0VBR1QsaURBQUE7QUNESjs7QURUQTtFQVlPLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtBQ0N4Qjs7QURJQyx1REFBQTs7QUFDQTtFQUNHLHVCQUF1QjtFQUN2QixVQUFVO0FDRGQ7O0FEREM7RUFLTSxjQUFjO0VBQ2QsWUFBWTtBQ0FuQjs7QURLQztFQUNHLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7QUNGbkI7O0FETUM7RUFDRyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFrQztFQUNsQyxnQ0FBK0M7QUNIbkQ7O0FEREM7RUFRTSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUNIbEI7O0FEUUM7O3FCQ0pvQjs7QURPcEI7RUFDRyxjQUNIO0FDTkQ7O0FEUUM7RUFDRyxhQUFhO0FDTGpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9taS1hY29yZGlvbi9taS1hY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDFlbSAwLjM1ZW07XHJcbiAgICBmb250LXNpemU6IDEuMzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLDIxMCwyMTAsMSk7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG5cclxuICAgIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXHJcbiAgICBzcGFuIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICB0b3A6IDEuMmVtO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICB9XHJcbiB9XHJcblxyXG5cclxuIC8qIEhlcmUgd2UgZGVmaW5lIHRoZSBhY3R1YWwgJ21lbnUnIGFuZCBpdHMgJ29wdGlvbnMnICovXHJcbiAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyZW0gYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiB9XHJcblxyXG5cclxuIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSk7XHJcblxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gfVxyXG5cclxuIC8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXHJcbiAvLyBiYXNlZCBvbiB0aGUgc3RhdGUgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGVcclxuIC8vIGNvbXBvbmVudCBjbGFzcyAqL1xyXG4gLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gfVxyXG5cclxuIC5pbmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4iLCJoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxZW0gMC4zNWVtO1xuICBmb250LXNpemU6IDEuMzVlbTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICBtYXJnaW46IDA7XG4gIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXG59XG5cbmgyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG4gIHRvcDogMS4yZW07XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuXG4vKiBIZXJlIHdlIGRlZmluZSB0aGUgYWN0dWFsICdtZW51JyBhbmQgaXRzICdvcHRpb25zJyAqL1xuLmltYWdlLXdyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0byAyZW0gYXV0bztcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmltYWdlLXdyYXBwZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMmVtO1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbn1cblxuZGl2IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXHJcbiAvLyBiYXNlZCBvbiB0aGUgc3RhdGUgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGVcclxuIC8vIGNvbXBvbmVudCBjbGFzcyAqL1xuLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5hY3RpdmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/mi-acordion/mi-acordion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/mi-acordion/mi-acordion.component.ts ***!
  \*****************************************************************/
/*! exports provided: MiAcordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiAcordionComponent", function() { return MiAcordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MiAcordionComponent = class MiAcordionComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMenuOpen = false;
    }
    ngOnInit() { }
    toggleAccordion() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    broadcastName(name) {
        this.change.emit(name);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MiAcordionComponent.prototype, "nome", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MiAcordionComponent.prototype, "telefone", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MiAcordionComponent.prototype, "endereco", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MiAcordionComponent.prototype, "RUC", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MiAcordionComponent.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MiAcordionComponent.prototype, "responsavel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MiAcordionComponent.prototype, "change", void 0);
MiAcordionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mi-acordion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mi-acordion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-acordion/mi-acordion.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mi-acordion.component.scss */ "./src/app/components/mi-acordion/mi-acordion.component.scss")).default]
    })
], MiAcordionComponent);



/***/ }),

/***/ "./src/app/pages/workshops/workshops-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/workshops/workshops-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WorkshopsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsPageRoutingModule", function() { return WorkshopsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _workshops_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workshops.page */ "./src/app/pages/workshops/workshops.page.ts");




const routes = [
    {
        path: '',
        component: _workshops_page__WEBPACK_IMPORTED_MODULE_3__["WorkshopsPage"]
    }
];
let WorkshopsPageRoutingModule = class WorkshopsPageRoutingModule {
};
WorkshopsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkshopsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/workshops/workshops.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/workshops/workshops.module.ts ***!
  \*****************************************************/
/*! exports provided: WorkshopsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsPageModule", function() { return WorkshopsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _workshops_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workshops-routing.module */ "./src/app/pages/workshops/workshops-routing.module.ts");
/* harmony import */ var _workshops_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workshops.page */ "./src/app/pages/workshops/workshops.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_components_mi_acordion_mi_acordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/mi-acordion/mi-acordion.component */ "./src/app/components/mi-acordion/mi-acordion.component.ts");









let WorkshopsPageModule = class WorkshopsPageModule {
};
WorkshopsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                {
                    path: '',
                    component: _workshops_page__WEBPACK_IMPORTED_MODULE_6__["WorkshopsPage"]
                }
            ]),
            _workshops_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkshopsPageRoutingModule"]
        ],
        declarations: [_workshops_page__WEBPACK_IMPORTED_MODULE_6__["WorkshopsPage"], src_app_components_mi_acordion_mi_acordion_component__WEBPACK_IMPORTED_MODULE_8__["MiAcordionComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], WorkshopsPageModule);



/***/ }),

/***/ "./src/app/pages/workshops/workshops.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/workshops/workshops.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtzaG9wcy93b3Jrc2hvcHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/workshops/workshops.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/workshops/workshops.page.ts ***!
  \***************************************************/
/*! exports provided: WorkshopsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsPage", function() { return WorkshopsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let WorkshopsPage = class WorkshopsPage {
    constructor(apiService) {
        this.apiService = apiService;
    }
    captureName(event) {
        console.log(`Captured name by event value: ${event}`);
    }
    ngOnInit() {
        this.apiService.getWorkshops()
            .subscribe(data => {
            this.workshops = data;
            console.log(this.workshops);
        });
    }
};
WorkshopsPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
WorkshopsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workshops',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workshops.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshops/workshops.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workshops.page.scss */ "./src/app/pages/workshops/workshops.page.scss")).default]
    })
], WorkshopsPage);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        //private readonly base_path = 'http://localhost:3000/';
        this.base_path = "https://safecarbot.com/api/";
        this.urldb = "http://www.omdbapi.com";
        this.apikey = "efcc451b";
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    /*
    searchData(title: string): Observable<any> {
      return this.http.get(this.urldb + `?t=${title}&apikey=${this.apikey}`).pipe(
        map(results => {
          console.log('result:', results);
          results['Search'];
        })
      );
    }
  
    getCarByIdKey(id: number) {
      return this.http.get(this.url + `?id=${id}&apikey=${this.apikey}`);
    }
    */
    //cars
    getCars() {
        return this.http.get(this.base_path + 'cars').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCarById(id) {
        return this.http
            .get(this.base_path + 'cars/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createCar(data) {
        return this.http
            .post(this.base_path + 'cars', JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateCar(id, data) {
        return this.http
            .put(this.base_path + 'cars/' + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteCar(id) {
        return this.http
            .delete(this.base_path + '/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //workshops
    getWorkshops() {
        return this.http.get(this.base_path + 'workshops').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getWorkshopById(id) {
        return this.http
            .get(this.base_path + 'workshops/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //expenses
    getExpenses() {
        return this.http.get(this.base_path + 'expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getExpenseById(id) {
        return this.http
            .get(this.base_path + 'expenses/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createExpense(data) {
        return this.http
            .post(this.base_path + 'expenses', JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateExpense(id, data) {
        return this.http
            .put(this.base_path + 'expenses/' + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteExpense(id) {
        return this.http
            .delete(this.base_path + '/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //Maintenances
    getMaintenances() {
        return this.http.get(this.base_path + 'maintenances').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMaintenanceById(id) {
        return this.http
            .get(this.base_path + 'maintenances/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createMaintenance(data) {
        return this.http
            .post(this.base_path + 'maintenances', JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateMaintenance(id, data) {
        return this.http
            .put(this.base_path + 'maintenances/' + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteMaintenance(id) {
        return this.http
            .delete(this.base_path + '/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ })

}]);
//# sourceMappingURL=pages-workshops-workshops-module-es2015.js.map
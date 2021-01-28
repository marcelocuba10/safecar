function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workshops-workshops-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-acordion/mi-acordion.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-acordion/mi-acordion.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMiAcordionMiAcordionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-item (click)=\"toggleAccordion()\" class=\"ion-padding-top\">\n      <ion-thumbnail slot=\"start\">\n        <ion-icon style=\"display: table-footer-group;color: cornflowerblue;\" name=\"car-sport-outline\"></ion-icon>\n      </ion-thumbnail>\n  <ion-label>{{ nome }}</ion-label>\n  <ion-icon slot=\"end\" *ngIf=\"isMenuOpen\" name=\"chevron-down-outline\"></ion-icon>\n  <ion-icon slot=\"end\" *ngIf=\"!isMenuOpen\" name=\"chevron-forward-outline\"></ion-icon>\n</ion-item>\n\n<ion-card [ngClass]=\"this.isMenuOpen ? 'active' : 'inactive'\">\n  <ion-card-header>\n    <ion-card-subtitle><b>Responsavel:</b> {{responsavel}}</ion-card-subtitle>\n    <ion-card-subtitle><b>RUC:</b> {{RUC}}</ion-card-subtitle>\n    <ion-card-subtitle><b>Endereco:</b> {{endereco}}</ion-card-subtitle>\n    <ion-card-subtitle><b>Telefone:</b> {{telefone}}</ion-card-subtitle>\n    <ion-card-subtitle><b>Email:</b> {{email}}</ion-card-subtitle>\n  </ion-card-header>\n  <ion-item>\n      <ion-button (click)=\"broadcastName(endereco)\" fill=\"outline\" color=\"success\" slot=\"end\">Abrir Maps<ion-icon name=\"location-outline\"></ion-icon></ion-button>\n      <ion-button (click)=\"broadcastName(telefone)\" fill=\"outline\" color=\"warning\" slot=\"end\">Chamar<ion-icon name=\"call-outline\"></ion-icon></ion-button>\n  </ion-item>\n</ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshops/workshops.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshops/workshops.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWorkshopsWorkshopsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Mecanicas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/detail-workshop']\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-mi-acordion *ngFor=\"let workshop of workshops\" \n     nome=\"{{ workshop.nome }}\" \n     endereco=\"{{ workshop.endereco }}\" \n     RUC=\"{{ workshop.RUC }}\" \n     telefone=\"{{ workshop.telefone }}\"\n     email=\"{{ workshop.email }}\"\n     responsavel=\"{{ workshop.responsavel }}\"\n     (change)=\"captureName($event)\">\n  </app-mi-acordion>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/mi-acordion/mi-acordion.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/mi-acordion/mi-acordion.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMiAcordionMiAcordionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\n\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n\n/* Here we define the actual 'menu' and its 'options' */\n\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\n\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\n\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\n\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n\n/* Following classes display/hide the 'menu'\r\n // based on the state change detection in the\r\n // component class */\n\n.active {\n  display: block;\n}\n\n.inactive {\n  display: none;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taS1hY29yZGlvbi9DOlxcVXNlcnNcXENvbmVjdGEtRGVzYXJyb2xsb1xcRG9jdW1lbnRzXFxhcHBzXFxzYWZlY2FyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtaS1hY29yZGlvblxcbWktYWNvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWktYWNvcmRpb24vbWktYWNvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdDQUE0QztFQUM1QyxTQUFTO0VBR1QsaURBQUE7QUNESjs7QURUQTtFQVlPLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtBQ0N4Qjs7QURJQyx1REFBQTs7QUFDQTtFQUNHLHVCQUF1QjtFQUN2QixVQUFVO0FDRGQ7O0FEREM7RUFLTSxjQUFjO0VBQ2QsWUFBWTtBQ0FuQjs7QURLQztFQUNHLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7QUNGbkI7O0FETUM7RUFDRyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFrQztFQUNsQyxnQ0FBK0M7QUNIbkQ7O0FEREM7RUFRTSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUNIbEI7O0FEUUM7O3FCQ0pvQjs7QURPcEI7RUFDRyxjQUNIO0FDTkQ7O0FEUUM7RUFDRyxhQUFhO0FDTGpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9taS1hY29yZGlvbi9taS1hY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDFlbSAwLjM1ZW07XHJcbiAgICBmb250LXNpemU6IDEuMzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLDIxMCwyMTAsMSk7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG5cclxuICAgIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXHJcbiAgICBzcGFuIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICB0b3A6IDEuMmVtO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICB9XHJcbiB9XHJcblxyXG5cclxuIC8qIEhlcmUgd2UgZGVmaW5lIHRoZSBhY3R1YWwgJ21lbnUnIGFuZCBpdHMgJ29wdGlvbnMnICovXHJcbiAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyZW0gYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiB9XHJcblxyXG5cclxuIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSk7XHJcblxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gfVxyXG5cclxuIC8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXHJcbiAvLyBiYXNlZCBvbiB0aGUgc3RhdGUgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGVcclxuIC8vIGNvbXBvbmVudCBjbGFzcyAqL1xyXG4gLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gfVxyXG5cclxuIC5pbmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4iLCJoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxZW0gMC4zNWVtO1xuICBmb250LXNpemU6IDEuMzVlbTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICBtYXJnaW46IDA7XG4gIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXG59XG5cbmgyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG4gIHRvcDogMS4yZW07XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuXG4vKiBIZXJlIHdlIGRlZmluZSB0aGUgYWN0dWFsICdtZW51JyBhbmQgaXRzICdvcHRpb25zJyAqL1xuLmltYWdlLXdyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0byAyZW0gYXV0bztcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmltYWdlLXdyYXBwZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMmVtO1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbn1cblxuZGl2IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXHJcbiAvLyBiYXNlZCBvbiB0aGUgc3RhdGUgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGVcclxuIC8vIGNvbXBvbmVudCBjbGFzcyAqL1xuLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5hY3RpdmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/mi-acordion/mi-acordion.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/mi-acordion/mi-acordion.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MiAcordionComponent */

  /***/
  function srcAppComponentsMiAcordionMiAcordionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiAcordionComponent", function () {
      return MiAcordionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MiAcordionComponent = /*#__PURE__*/function () {
      function MiAcordionComponent() {
        _classCallCheck(this, MiAcordionComponent);

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMenuOpen = false;
      }

      _createClass(MiAcordionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleAccordion",
        value: function toggleAccordion() {
          this.isMenuOpen = !this.isMenuOpen;
        }
      }, {
        key: "broadcastName",
        value: function broadcastName(name) {
          this.change.emit(name);
        }
      }]);

      return MiAcordionComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiAcordionComponent.prototype, "nome", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiAcordionComponent.prototype, "telefone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiAcordionComponent.prototype, "endereco", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiAcordionComponent.prototype, "RUC", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiAcordionComponent.prototype, "email", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiAcordionComponent.prototype, "responsavel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MiAcordionComponent.prototype, "change", void 0);
    MiAcordionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mi-acordion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mi-acordion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mi-acordion/mi-acordion.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mi-acordion.component.scss */
      "./src/app/components/mi-acordion/mi-acordion.component.scss"))["default"]]
    })], MiAcordionComponent);
    /***/
  },

  /***/
  "./src/app/pages/workshops/workshops-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/workshops/workshops-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: WorkshopsPageRoutingModule */

  /***/
  function srcAppPagesWorkshopsWorkshopsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkshopsPageRoutingModule", function () {
      return WorkshopsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _workshops_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./workshops.page */
    "./src/app/pages/workshops/workshops.page.ts");

    var routes = [{
      path: '',
      component: _workshops_page__WEBPACK_IMPORTED_MODULE_3__["WorkshopsPage"]
    }];

    var WorkshopsPageRoutingModule = function WorkshopsPageRoutingModule() {
      _classCallCheck(this, WorkshopsPageRoutingModule);
    };

    WorkshopsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WorkshopsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/workshops/workshops.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/workshops/workshops.module.ts ***!
    \*****************************************************/

  /*! exports provided: WorkshopsPageModule */

  /***/
  function srcAppPagesWorkshopsWorkshopsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkshopsPageModule", function () {
      return WorkshopsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _workshops_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./workshops-routing.module */
    "./src/app/pages/workshops/workshops-routing.module.ts");
    /* harmony import */


    var _workshops_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./workshops.page */
    "./src/app/pages/workshops/workshops.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_components_mi_acordion_mi_acordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/mi-acordion/mi-acordion.component */
    "./src/app/components/mi-acordion/mi-acordion.component.ts");

    var WorkshopsPageModule = function WorkshopsPageModule() {
      _classCallCheck(this, WorkshopsPageModule);
    };

    WorkshopsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{
        path: '',
        component: _workshops_page__WEBPACK_IMPORTED_MODULE_6__["WorkshopsPage"]
      }]), _workshops_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkshopsPageRoutingModule"]],
      declarations: [_workshops_page__WEBPACK_IMPORTED_MODULE_6__["WorkshopsPage"], src_app_components_mi_acordion_mi_acordion_component__WEBPACK_IMPORTED_MODULE_8__["MiAcordionComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], WorkshopsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/workshops/workshops.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/workshops/workshops.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWorkshopsWorkshopsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtzaG9wcy93b3Jrc2hvcHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/workshops/workshops.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/workshops/workshops.page.ts ***!
    \***************************************************/

  /*! exports provided: WorkshopsPage */

  /***/
  function srcAppPagesWorkshopsWorkshopsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkshopsPage", function () {
      return WorkshopsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var WorkshopsPage = /*#__PURE__*/function () {
      function WorkshopsPage(apiService) {
        _classCallCheck(this, WorkshopsPage);

        this.apiService = apiService;
      }

      _createClass(WorkshopsPage, [{
        key: "captureName",
        value: function captureName(event) {
          console.log("Captured name by event value: ".concat(event));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.getWorkshops().subscribe(function (data) {
            _this.workshops = data;
            console.log(_this.workshops);
          });
        }
      }]);

      return WorkshopsPage;
    }();

    WorkshopsPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    WorkshopsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-workshops',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./workshops.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshops/workshops.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./workshops.page.scss */
      "./src/app/pages/workshops/workshops.page.scss"))["default"]]
    })], WorkshopsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-workshops-workshops-module-es5.js.map
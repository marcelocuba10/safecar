function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expenses-expenses-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/expenses.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/expenses.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExpensesExpensesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Despesas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/detail-workshop']\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--  <ion-item *ngFor=\"let workshop of workshops\" [routerLink]=\"['/detail-workshop/', workshop.id]\">-->\n  <ion-card>\n    <ion-item class=\"line-card\">\n      <ion-thumbnail slot=\"start\">\n        <ion-icon style=\"display: table-footer-group;color: cornflowerblue;\" name=\"cash-outline\"></ion-icon>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Compra de Pneus</h3>\n        <p>Comercial Continental</p>\n        <p>600,00 RS</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/expenses/expenses-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/expenses/expenses-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ExpensesPageRoutingModule */

  /***/
  function srcAppPagesExpensesExpensesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesPageRoutingModule", function () {
      return ExpensesPageRoutingModule;
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


    var _expenses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expenses.page */
    "./src/app/pages/expenses/expenses.page.ts");

    var routes = [{
      path: '',
      component: _expenses_page__WEBPACK_IMPORTED_MODULE_3__["ExpensesPage"]
    }];

    var ExpensesPageRoutingModule = function ExpensesPageRoutingModule() {
      _classCallCheck(this, ExpensesPageRoutingModule);
    };

    ExpensesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExpensesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/expenses/expenses.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/expenses/expenses.module.ts ***!
    \***************************************************/

  /*! exports provided: ExpensesPageModule */

  /***/
  function srcAppPagesExpensesExpensesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesPageModule", function () {
      return ExpensesPageModule;
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


    var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./expenses-routing.module */
    "./src/app/pages/expenses/expenses-routing.module.ts");
    /* harmony import */


    var _expenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./expenses.page */
    "./src/app/pages/expenses/expenses.page.ts");

    var ExpensesPageModule = function ExpensesPageModule() {
      _classCallCheck(this, ExpensesPageModule);
    };

    ExpensesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensesPageRoutingModule"]],
      declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesPage"]]
    })], ExpensesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/expenses/expenses.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/expenses/expenses.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExpensesExpensesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2VzL2V4cGVuc2VzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/expenses/expenses.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/expenses/expenses.page.ts ***!
    \*************************************************/

  /*! exports provided: ExpensesPage */

  /***/
  function srcAppPagesExpensesExpensesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesPage", function () {
      return ExpensesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExpensesPage = /*#__PURE__*/function () {
      function ExpensesPage() {
        _classCallCheck(this, ExpensesPage);
      }

      _createClass(ExpensesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExpensesPage;
    }();

    ExpensesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expenses',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./expenses.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/expenses.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./expenses.page.scss */
      "./src/app/pages/expenses/expenses.page.scss"))["default"]]
    })], ExpensesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-expenses-expenses-module-es5.js.map
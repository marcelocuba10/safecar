function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/cars\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"id\">Detalhes do Veiculo</ion-title>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!id\">Adicionar Novo Veiculo</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n\n      <center>\n        <img style=\"width:70%\" src=\"../../../assets/img/no-image.png\" />\n      </center>\n\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Nome</ion-label>\n        <ion-input type=\"text\" autofocus required [(ngModel)]=\"car.nome\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)CPF</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.modelo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Nascimento</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Email</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Senha</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Telefone</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Endereço</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Bairro</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Cidade</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Estado</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Pais</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item-group class=\"ion-text-center ion-margin-top\">\n        <ion-button mode=\"ios\" color=\"medium\" routerLink=\"/cars\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button mode=\"ios\" color=\"success\" (click)=\"savedata(car)\">\n          <ion-icon class=\"m-icon\" name=\"save-outline\"></ion-icon>Salvar\n        </ion-button>\n      </ion-item-group>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/user/user-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/user/user-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppPagesUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
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


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/pages/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/user/user.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/user/user.module.ts ***!
    \*******************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppPagesUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/pages/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/pages/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/pages/user/user.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/user/user.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/user/user.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/user/user.page.ts ***!
    \*****************************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppPagesUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserPage = /*#__PURE__*/function () {
      function UserPage() {
        _classCallCheck(this, UserPage);
      }

      _createClass(UserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserPage;
    }();

    UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/pages/user/user.page.scss"))["default"]]
    })], UserPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-user-user-module-es5.js.map
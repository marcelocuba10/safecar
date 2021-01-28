function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cars-cars-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cars/cars.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cars/cars.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCarsCarsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Veiculos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/detail-car']\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let car of cars\">\n    <img src=\"https://cdn.revendamais.com.br/FC/5358/2790454_0_M_fdc3a39cc0.jpg\" />\n    <ion-card-header>\n      <ion-card-subtitle>{{ car.anho_fabricacao }}</ion-card-subtitle>\n      <ion-card-title>{{ car.nome }}</ion-card-title>\n    </ion-card-header>\n    <ion-grid>\n      <ion-row class=\"ion-text-center car-subtitle\">\n        <ion-col size=\"4\">\n          <ion-icon name=\"construct-outline\"></ion-icon>\n          21/02/2021\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon name=\"speedometer-outline\"></ion-icon>\n          {{ car.motorizacao }}\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon name=\"water-outline\"></ion-icon>\n          Nafta\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n      <ion-item>\n        <ion-button [routerLink]=\"['/detail-car/', car.id]\" fill=\"outline\" color=\"success\" size=\"small\" slot=\"end\"><ion-icon name=\"eye-outline\"></ion-icon>Detalhes</ion-button>\n        <ion-button [routerLink]=\"['/maintenances/']\" class=\"btn-spa\" fill=\"outline\" color=\"warning\" size=\"small\" slot=\"end\"><ion-icon name=\"menu-outline\"></ion-icon>Manutencoes</ion-button>\n      </ion-item>\n  </ion-card>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/cars/cars-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cars/cars-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CarsPageRoutingModule */

  /***/
  function srcAppPagesCarsCarsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarsPageRoutingModule", function () {
      return CarsPageRoutingModule;
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


    var _cars_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cars.page */
    "./src/app/pages/cars/cars.page.ts");

    var routes = [{
      path: '',
      component: _cars_page__WEBPACK_IMPORTED_MODULE_3__["CarsPage"]
    }];

    var CarsPageRoutingModule = function CarsPageRoutingModule() {
      _classCallCheck(this, CarsPageRoutingModule);
    };

    CarsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CarsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cars/cars.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cars/cars.module.ts ***!
    \*******************************************/

  /*! exports provided: CarsPageModule */

  /***/
  function srcAppPagesCarsCarsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarsPageModule", function () {
      return CarsPageModule;
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


    var _cars_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cars-routing.module */
    "./src/app/pages/cars/cars-routing.module.ts");
    /* harmony import */


    var _cars_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cars.page */
    "./src/app/pages/cars/cars.page.ts");

    var CarsPageModule = function CarsPageModule() {
      _classCallCheck(this, CarsPageModule);
    };

    CarsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cars_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarsPageRoutingModule"]],
      declarations: [_cars_page__WEBPACK_IMPORTED_MODULE_6__["CarsPage"]]
    })], CarsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cars/cars.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/cars/cars.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCarsCarsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnMvY2Fycy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cars/cars.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cars/cars.page.ts ***!
    \*****************************************/

  /*! exports provided: CarsPage */

  /***/
  function srcAppPagesCarsCarsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarsPage", function () {
      return CarsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CarsPage = /*#__PURE__*/function () {
      function CarsPage(apiService) {
        _classCallCheck(this, CarsPage);

        this.apiService = apiService;
      }

      _createClass(CarsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.getCars().subscribe(function (data) {
            _this.cars = data;
            console.log(_this.cars);
          });
        }
      }]);

      return CarsPage;
    }();

    CarsPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }];
    };

    CarsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-cars',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cars.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cars/cars.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cars.page.scss */
      "./src/app/pages/cars/cars.page.scss"))["default"]]
    })], CarsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cars-cars-module-es5.js.map
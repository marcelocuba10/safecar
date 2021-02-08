function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenances-maintenances-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenances/maintenances.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenances/maintenances.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMaintenancesMaintenancesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Manutenções</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [routerLink]=\"['/detail-maintenance']\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card *ngFor=\"let maintenance of maintenances\" [routerLink]=\"['/detail-maintenance/', maintenance.id]\">\r\n    <ion-item class=\"line-card\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon style=\"display: table-footer-group;color: cornflowerblue;\" name=\"build-outline\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2 class=\"ion-text-capitalize\">{{maintenance.manutencao}}</h2>\r\n        <p class=\"ion-text-capitalize\">{{maintenance.mecanica}}</p>\r\n        <p>{{maintenance.custo | currency :\"R$ \"}}</p>\r\n        <p>{{maintenance.data}}</p>\r\n      </ion-label>\r\n      <ion-note style=\"font-size: smaller;\" slot=\"end\">\r\n        <p style=\"color:#008000;\"><ion-icon name=\"speedometer-outline\"></ion-icon> {{maintenance.km}} Km</p>\r\n        <p style=\"color:#ff4500;\"><ion-icon name=\"speedometer-outline\"></ion-icon> {{maintenance.km_prox}} Km</p>\r\n      </ion-note>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/maintenances/maintenances-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/maintenances/maintenances-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: MaintenancesPageRoutingModule */

  /***/
  function srcAppPagesMaintenancesMaintenancesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenancesPageRoutingModule", function () {
      return MaintenancesPageRoutingModule;
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


    var _maintenances_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./maintenances.page */
    "./src/app/pages/maintenances/maintenances.page.ts");

    var routes = [{
      path: '',
      component: _maintenances_page__WEBPACK_IMPORTED_MODULE_3__["MaintenancesPage"]
    }];

    var MaintenancesPageRoutingModule = function MaintenancesPageRoutingModule() {
      _classCallCheck(this, MaintenancesPageRoutingModule);
    };

    MaintenancesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MaintenancesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/maintenances/maintenances.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/maintenances/maintenances.module.ts ***!
    \***********************************************************/

  /*! exports provided: MaintenancesPageModule */

  /***/
  function srcAppPagesMaintenancesMaintenancesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenancesPageModule", function () {
      return MaintenancesPageModule;
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


    var _maintenances_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./maintenances-routing.module */
    "./src/app/pages/maintenances/maintenances-routing.module.ts");
    /* harmony import */


    var _maintenances_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./maintenances.page */
    "./src/app/pages/maintenances/maintenances.page.ts");

    var MaintenancesPageModule = function MaintenancesPageModule() {
      _classCallCheck(this, MaintenancesPageModule);
    };

    MaintenancesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _maintenances_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaintenancesPageRoutingModule"]],
      declarations: [_maintenances_page__WEBPACK_IMPORTED_MODULE_6__["MaintenancesPage"]]
    })], MaintenancesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/maintenances/maintenances.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/maintenances/maintenances.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMaintenancesMaintenancesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW50ZW5hbmNlcy9tYWludGVuYW5jZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/maintenances/maintenances.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/maintenances/maintenances.page.ts ***!
    \*********************************************************/

  /*! exports provided: MaintenancesPage */

  /***/
  function srcAppPagesMaintenancesMaintenancesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenancesPage", function () {
      return MaintenancesPage;
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

    var MaintenancesPage = /*#__PURE__*/function () {
      function MaintenancesPage(apiservice) {
        _classCallCheck(this, MaintenancesPage);

        this.apiservice = apiservice;
      }

      _createClass(MaintenancesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiservice.getMaintenances().subscribe(function (response) {
            _this.maintenances = response;
            console.log("response:", _this.maintenances);
          });
        }
      }]);

      return MaintenancesPage;
    }();

    MaintenancesPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    MaintenancesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-maintenances',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./maintenances.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenances/maintenances.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./maintenances.page.scss */
      "./src/app/pages/maintenances/maintenances.page.scss"))["default"]]
    })], MaintenancesPage);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http; //private readonly base_path = 'http://localhost:3000/';

        this.base_path = "https://safecarbot.com/api/";
        this.urldb = "http://www.omdbapi.com";
        this.apikey = "efcc451b"; // Http Options

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // Handle API errors


      _createClass(ApiService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "getCars",

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
        value: function getCars() {
          return this.http.get(this.base_path + 'cars').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getCarById",
        value: function getCarById(id) {
          return this.http.get(this.base_path + 'cars/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "createCar",
        value: function createCar(data) {
          return this.http.post(this.base_path + 'cars', JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "updateCar",
        value: function updateCar(id, data) {
          return this.http.put(this.base_path + 'cars/' + id, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteCar",
        value: function deleteCar(id) {
          return this.http["delete"](this.base_path + '/' + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //workshops

      }, {
        key: "getWorkshops",
        value: function getWorkshops() {
          return this.http.get(this.base_path + 'workshops').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getWorkshopById",
        value: function getWorkshopById(id) {
          return this.http.get(this.base_path + 'workshops/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //expenses

      }, {
        key: "getExpenses",
        value: function getExpenses() {
          return this.http.get(this.base_path + 'expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getExpenseById",
        value: function getExpenseById(id) {
          return this.http.get(this.base_path + 'expenses/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "createExpense",
        value: function createExpense(data) {
          return this.http.post(this.base_path + 'expenses', JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "updateExpense",
        value: function updateExpense(id, data) {
          return this.http.put(this.base_path + 'expenses/' + id, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteExpense",
        value: function deleteExpense(id) {
          return this.http["delete"](this.base_path + '/' + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //Maintenances

      }, {
        key: "getMaintenances",
        value: function getMaintenances() {
          return this.http.get(this.base_path + 'maintenances').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getMaintenanceById",
        value: function getMaintenanceById(id) {
          return this.http.get(this.base_path + 'maintenances/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "createMaintenance",
        value: function createMaintenance(data) {
          return this.http.post(this.base_path + 'maintenances', JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "updateMaintenance",
        value: function updateMaintenance(id, data) {
          return this.http.put(this.base_path + 'maintenances/' + id, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteMaintenance",
        value: function deleteMaintenance(id) {
          return this.http["delete"](this.base_path + '/' + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  }
}]);
//# sourceMappingURL=pages-maintenances-maintenances-module-es5.js.map
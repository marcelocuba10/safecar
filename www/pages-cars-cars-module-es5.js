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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Veiculos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/detail-car']\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let car of cars\">\n    <center>\n      <img [routerLink]=\"['/detail-car/', car.id]\" src=\"../../../assets/img/car1.jpg\" />\n    </center>\n    <ion-card-header>\n      <ion-card-subtitle>{{ car.anho_fabricacao }}</ion-card-subtitle>\n      <ion-card-title>{{ car.nome }}</ion-card-title>\n    </ion-card-header>\n    <ion-grid>\n      <ion-row class=\"ion-text-center car-subtitle\">\n        <ion-col size=\"4\">\n          <ion-icon name=\"construct-outline\"></ion-icon>\n          21/02/2021\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon name=\"speedometer-outline\"></ion-icon>\n          {{ car.motorizacao }}\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon name=\"water-outline\"></ion-icon>\n          {{ car.combustivel }}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n      <ion-item class=\"line-card\">\n        <ion-button mode=\"ios\" [routerLink]=\"['/detail-car/', car.id]\" fill=\"outline\" color=\"success\" size=\"small\" slot=\"end\"><ion-icon name=\"eye-outline\"></ion-icon>Detalhes</ion-button>\n        <ion-button mode=\"ios\" [routerLink]=\"['/maintenances/']\" class=\"btn-spa\" fill=\"outline\" color=\"warning\" size=\"small\" slot=\"end\"><ion-icon name=\"menu-outline\"></ion-icon>Manutenções</ion-button>\n      </ion-item>\n  </ion-card>\n  \n</ion-content>\n";
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

          this.apiService.getCars().subscribe(function (response) {
            _this.cars = response;
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
//# sourceMappingURL=pages-cars-cars-module-es5.js.map
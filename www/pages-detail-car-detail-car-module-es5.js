function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-car-detail-car-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-car/detail-car.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-car/detail-car.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDetailCarDetailCarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/cars\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" *ngIf=\"id\">Detalhes do Veiculo</ion-title>\r\n    <ion-title class=\"ion-text-center\" *ngIf=\"!id\">Adicionar Novo Veiculo</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <center>\r\n        <img style=\"width:70%\" src=\"../../../assets/img/no-image.png\" />\r\n      </center>\r\n      <ion-segment mode=\"ios\" value=\"all\" style=\"margin-bottom: 16px;\">\r\n        <ion-segment-button value=\"all\">\r\n          Detalhes\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"favorites\">\r\n          Fotos\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">(*)Nome</ion-label>\r\n        <ion-input type=\"text\" autofocus required [(ngModel)]=\"car.nome\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">(*)Modelo</ion-label>\r\n        <ion-input type=\"text\" required [(ngModel)]=\"car.modelo\"></ion-input>\r\n      </ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Quilometragem</ion-label>\r\n              <ion-input type=\"text\" required [(ngModel)]=\"car.km\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Placa</ion-label>\r\n              <ion-input type=\"text\" required [(ngModel)]=\"car.placa\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid> \r\n      <ion-grid> \r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Cambio</ion-label>\r\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.cambio\">\r\n                <ion-select-option value=\"Automatico\">Automático</ion-select-option>\r\n                <ion-select-option value=\"Manual\">Manual</ion-select-option>\r\n                <ion-select-option value=\"Secuencial\">Sequencial</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Anho de Fabricação</ion-label>\r\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.anho_fabricacao\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\r\n                <ion-select-option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Marca</ion-label>\r\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.marca\">\r\n                <ion-select-option value=\"Audi\">Audi</ion-select-option>\r\n                <ion-select-option value=\"BMW\">BMW</ion-select-option>\r\n                <ion-select-option value=\"Toyota\">Toyota</ion-select-option>\r\n                <ion-select-option value=\"Nissan\">Nissan</ion-select-option>\r\n                <ion-select-option value=\"Wolkswagen\">Wolkswagen</ion-select-option>\r\n                <ion-select-option value=\"Ford\">Ford</ion-select-option>\r\n                <ion-select-option value=\"Fiat\">Fiat</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">(*)Cor</ion-label>\r\n                <ion-select interface=\"popover\" required [(ngModel)]=\"car.cor\">\r\n                  <ion-select-option value=\"Amarelo\">Amarelo</ion-select-option>\r\n                  <ion-select-option value=\"Azul\">Azul</ion-select-option>\r\n                  <ion-select-option value=\"Preto\">Preto</ion-select-option>\r\n                  <ion-select-option value=\"Branco\">Branco</ion-select-option>\r\n                  <ion-select-option value=\"Cinza\">Cinza</ion-select-option>\r\n                  <ion-select-option value=\"Verde\">Verde</ion-select-option>\r\n                  <ion-select-option value=\"Vermelho\">Vermelho</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Carroceria</ion-label>\r\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.carroceria\">\r\n                <ion-select-option value=\"Hatch\">Hatch</ion-select-option>\r\n                <ion-select-option value=\"Sedan\">Sedan</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Portas</ion-label>\r\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.portas\">\r\n                <ion-select-option value=\"2\">2</ion-select-option>\r\n                <ion-select-option value=\"3\">3</ion-select-option>\r\n                <ion-select-option value=\"4\">4</ion-select-option>\r\n                <ion-select-option value=\"5\">5</ion-select-option>\r\n                <ion-select-option value=\"6\">6</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Motorização</ion-label>\r\n              <ion-input type=\"text\" required [(ngModel)]=\"car.motorizacao\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">(*)Combustivel</ion-label>\r\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.combustivel\">\r\n                <ion-select-option value=\"Gasolina\">Gasolina</ion-select-option>\r\n                <ion-select-option value=\"Diesel\">Diesel</ion-select-option>\r\n                <ion-select-option value=\"Alcool\">Alcool</ion-select-option>\r\n                <ion-select-option value=\"Flex\">Flex</ion-select-option>\r\n                <ion-select-option value=\"Eletrico\">Elétrico</ion-select-option>\r\n                <ion-select-option value=\"Gnv\">Gnv</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">(*)Chassi</ion-label>\r\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Observações</ion-label>\r\n        <ion-textarea placeholder=\"...\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item-group class=\"ion-text-center ion-margin-top\">\r\n        <ion-button mode=\"ios\" color=\"medium\" routerLink=\"/cars\">\r\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>Voltar\r\n        </ion-button>\r\n        <ion-button mode=\"ios\" color=\"success\" (click)=\"savedata(car)\">\r\n          <ion-icon class=\"m-icon\" name=\"save-outline\"></ion-icon>Salvar\r\n        </ion-button>\r\n      </ion-item-group>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/detail-car/detail-car-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/detail-car/detail-car-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DetailCarPageRoutingModule */

  /***/
  function srcAppPagesDetailCarDetailCarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailCarPageRoutingModule", function () {
      return DetailCarPageRoutingModule;
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


    var _detail_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail-car.page */
    "./src/app/pages/detail-car/detail-car.page.ts");

    var routes = [{
      path: '',
      component: _detail_car_page__WEBPACK_IMPORTED_MODULE_3__["DetailCarPage"]
    }];

    var DetailCarPageRoutingModule = function DetailCarPageRoutingModule() {
      _classCallCheck(this, DetailCarPageRoutingModule);
    };

    DetailCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailCarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/detail-car/detail-car.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/detail-car/detail-car.module.ts ***!
    \*******************************************************/

  /*! exports provided: DetailCarPageModule */

  /***/
  function srcAppPagesDetailCarDetailCarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailCarPageModule", function () {
      return DetailCarPageModule;
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


    var _detail_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-car-routing.module */
    "./src/app/pages/detail-car/detail-car-routing.module.ts");
    /* harmony import */


    var _detail_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail-car.page */
    "./src/app/pages/detail-car/detail-car.page.ts");

    var DetailCarPageModule = function DetailCarPageModule() {
      _classCallCheck(this, DetailCarPageModule);
    };

    DetailCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailCarPageRoutingModule"]],
      declarations: [_detail_car_page__WEBPACK_IMPORTED_MODULE_6__["DetailCarPage"]]
    })], DetailCarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/detail-car/detail-car.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/detail-car/detail-car.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDetailCarDetailCarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1jYXIvZGV0YWlsLWNhci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/detail-car/detail-car.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/detail-car/detail-car.page.ts ***!
    \*****************************************************/

  /*! exports provided: DetailCarPage */

  /***/
  function srcAppPagesDetailCarDetailCarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailCarPage", function () {
      return DetailCarPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/api.service */
    "./src/app/services/api.service.ts");

    var DetailCarPage = /*#__PURE__*/function () {
      function DetailCarPage(actRoute, apiService, navCtrl, appService, loadingCtrl) {
        _classCallCheck(this, DetailCarPage);

        this.actRoute = actRoute;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.car = {};
        this.years = this.appService.getYears();
        this.id = this.actRoute.snapshot.paramMap.get("id");
      }

      _createClass(DetailCarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id) {
            this.getCarById();
          }
        }
      }, {
        key: "getCarById",
        value: function getCarById() {
          var _this = this;

          this.apiService.getCarById(this.id).subscribe(function (response) {
            console.log("page", response);
            _this.car = response;
          });
        }
      }, {
        key: "savedata",
        value: function savedata(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.formValidation();

                  case 2:
                    if (!_context.sent) {
                      _context.next = 20;
                      break;
                    }

                    _context.next = 5;
                    return this.presentLoading();

                  case 5:
                    if (!this.id) {
                      _context.next = 19;
                      break;
                    }

                    console.log(this.id);
                    console.log(this.car);
                    _context.prev = 8;
                    _context.next = 11;
                    return this.apiService.updateCar(this.id, this.car).subscribe(function (response) {
                      _this2.loading.dismiss();

                      _this2.appService.presentToast("Veiculo processado com exito!");

                      _this2.navCtrl.navigateRoot("/cars");
                    });

                  case 11:
                    _context.next = 17;
                    break;

                  case 13:
                    _context.prev = 13;
                    _context.t0 = _context["catch"](8);
                    this.appService.presentToast(_context.t0);
                    this.loading.dismiss();

                  case 17:
                    _context.next = 20;
                    break;

                  case 19:
                    try {
                      console.log(data);
                      this.apiService.createCar(data).subscribe(function (response) {
                        console.log('response:', response);

                        _this2.navCtrl.navigateRoot("/cars");
                      });
                      this.loading.dismiss();
                      this.appService.presentToast("Veiculo processado com exito!");
                      this.navCtrl.navigateRoot("/cars");
                    } catch (error) {
                      this.appService.presentToast(error);
                      this.loading.dismiss();
                      console.log(error);
                    }

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[8, 13]]);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      message: "Espere.."
                    });

                  case 2:
                    this.loading = _context2.sent;
                    return _context2.abrupt("return", this.loading.present());

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.car.nome) {
                      _context3.next = 3;
                      break;
                    }

                    this.appService.presentAlert("Insira o nome do veiculo");
                    return _context3.abrupt("return", false);

                  case 3:
                    if (this.car.anho_fabricacao) {
                      _context3.next = 6;
                      break;
                    }

                    this.appService.presentAlert("Insira o anho de fabricacao");
                    return _context3.abrupt("return", false);

                  case 6:
                    if (this.car.modelo) {
                      _context3.next = 9;
                      break;
                    }

                    this.appService.presentAlert("Insira um modelo");
                    return _context3.abrupt("return", false);

                  case 9:
                    if (this.car.cambio) {
                      _context3.next = 12;
                      break;
                    }

                    this.appService.presentAlert("Insira o cambio");
                    return _context3.abrupt("return", false);

                  case 12:
                    if (this.car.km) {
                      _context3.next = 15;
                      break;
                    }

                    this.appService.presentAlert("Insira o quilometragem");
                    return _context3.abrupt("return", false);

                  case 15:
                    if (this.car.placa) {
                      _context3.next = 18;
                      break;
                    }

                    this.appService.presentAlert("Insira a placa");
                    return _context3.abrupt("return", false);

                  case 18:
                    if (this.car.cor) {
                      _context3.next = 21;
                      break;
                    }

                    this.appService.presentAlert("Insira o color");
                    return _context3.abrupt("return", false);

                  case 21:
                    if (this.car.carroceria) {
                      _context3.next = 24;
                      break;
                    }

                    this.appService.presentAlert("Insira a carroceria");
                    return _context3.abrupt("return", false);

                  case 24:
                    if (this.car.portas) {
                      _context3.next = 27;
                      break;
                    }

                    this.appService.presentAlert("Insira o nro das portas");
                    return _context3.abrupt("return", false);

                  case 27:
                    if (this.car.motorizacao) {
                      _context3.next = 30;
                      break;
                    }

                    this.appService.presentAlert("Insira a motorizacao");
                    return _context3.abrupt("return", false);

                  case 30:
                    if (this.car.combustivel) {
                      _context3.next = 33;
                      break;
                    }

                    this.appService.presentAlert("Insira o tipo de combustivel");
                    return _context3.abrupt("return", false);

                  case 33:
                    if (this.car.chassi) {
                      _context3.next = 36;
                      break;
                    }

                    this.appService.presentAlert("Insira o nro do chassi");
                    return _context3.abrupt("return", false);

                  case 36:
                    return _context3.abrupt("return", true);

                  case 37:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return DetailCarPage;
    }();

    DetailCarPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    DetailCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-car',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-car.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-car/detail-car.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-car.page.scss */
      "./src/app/pages/detail-car/detail-car.page.scss"))["default"]]
    })], DetailCarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-detail-car-detail-car-module-es5.js.map
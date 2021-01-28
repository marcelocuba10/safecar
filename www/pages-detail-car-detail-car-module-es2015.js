(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-car-detail-car-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-car/detail-car.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-car/detail-car.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/cars\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"id\">Detalhes do Veiculo</ion-title>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!id\">Adicionar Novo Veiculo</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <center>\n        <img style=\"width:70%\" src=\"https://cdn.revendamais.com.br/FC/5358/2790454_0_M_fdc3a39cc0.jpg\" />\n      </center>\n      <ion-item>\n        <ion-label position=\"stacked\">Nome</ion-label>\n        <ion-input type=\"text\" autofocus required [(ngModel)]=\"car.nome\"></ion-input>\n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Quilometragem</ion-label>\n              <ion-input type=\"text\" required [(ngModel)]=\"car.km\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Marca</ion-label>\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.marca\">\n                <ion-select-option value=\"Audi\">Audi</ion-select-option>\n                <ion-select-option value=\"BMW\">BMW</ion-select-option>\n                <ion-select-option value=\"Toyota\">Toyota</ion-select-option>\n                <ion-select-option value=\"Nissan\">Nissan</ion-select-option>\n                <ion-select-option value=\"Wolkswagen\">Wolkswagen</ion-select-option>\n                <ion-select-option value=\"Ford\">Ford</ion-select-option>\n                <ion-select-option value=\"Fiat\">Fiat</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n      <ion-item>\n        <ion-label position=\"stacked\">Modelo</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.modelo\"></ion-input>\n      </ion-item>\n      <ion-grid> \n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Cambio</ion-label>\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.cambio\">\n                <ion-select-option value=\"Automatico\">Automatico</ion-select-option>\n                <ion-select-option value=\"Manual\">Manual</ion-select-option>\n                <ion-select-option value=\"Secuencial\">Secuencial</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Anho de Fabricacao</ion-label>\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.anho_fabricacao\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                <ion-select-option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Placa</ion-label>\n              <ion-input type=\"text\" required [(ngModel)]=\"car.placa\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Cor</ion-label>\n              <ion-input type=\"text\" required [(ngModel)]=\"car.cor\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Carroceria</ion-label>\n              <ion-input type=\"text\" required [(ngModel)]=\"car.carroceria\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Portas</ion-label>\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.portas\">\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n                <ion-select-option value=\"6\">6</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Motorizacao</ion-label>\n              <ion-input type=\"text\" required [(ngModel)]=\"car.motorizacao\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Combustivel</ion-label>\n              <ion-select interface=\"popover\" required [(ngModel)]=\"car.combustivel\">\n                <ion-select-option value=\"Gasolina\">Gasolina</ion-select-option>\n                <ion-select-option value=\"Diesel\">Diesel</ion-select-option>\n                <ion-select-option value=\"Alcool\">Alcool</ion-select-option>\n                <ion-select-option value=\"Flex\">Flex</ion-select-option>\n                <ion-select-option value=\"Eletrico\">Elétrico</ion-select-option>\n                <ion-select-option value=\"Gnv\">Gnv</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-item>\n        <ion-label position=\"stacked\">Chassi</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"car.chassi\"></ion-input>\n      </ion-item>\n      <ion-item-group class=\"ion-text-center ion-margin-top\">\n        <ion-button color=\"medium\" routerLink=\"/cars\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button color=\"success\" (click)=\"savedata(car)\">\n          <ion-icon class=\"m-icon\" name=\"save-outline\"></ion-icon>Salvar\n        </ion-button>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/detail-car/detail-car-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-car/detail-car-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailCarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCarPageRoutingModule", function() { return DetailCarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-car.page */ "./src/app/pages/detail-car/detail-car.page.ts");




const routes = [
    {
        path: '',
        component: _detail_car_page__WEBPACK_IMPORTED_MODULE_3__["DetailCarPage"]
    }
];
let DetailCarPageRoutingModule = class DetailCarPageRoutingModule {
};
DetailCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailCarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detail-car/detail-car.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail-car/detail-car.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailCarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCarPageModule", function() { return DetailCarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-car-routing.module */ "./src/app/pages/detail-car/detail-car-routing.module.ts");
/* harmony import */ var _detail_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-car.page */ "./src/app/pages/detail-car/detail-car.page.ts");







let DetailCarPageModule = class DetailCarPageModule {
};
DetailCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailCarPageRoutingModule"]
        ],
        declarations: [_detail_car_page__WEBPACK_IMPORTED_MODULE_6__["DetailCarPage"]]
    })
], DetailCarPageModule);



/***/ }),

/***/ "./src/app/pages/detail-car/detail-car.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail-car/detail-car.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1jYXIvZGV0YWlsLWNhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/detail-car/detail-car.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/detail-car/detail-car.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCarPage", function() { return DetailCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");






let DetailCarPage = class DetailCarPage {
    constructor(actRoute, apiService, navCtrl, appService, loadingCtrl) {
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.car = {};
        this.years = this.appService.getYears();
        this.id = this.actRoute.snapshot.paramMap.get("id");
        console.log(this.id);
    }
    ngOnInit() {
        if (this.id) {
            this.getCarById();
        }
    }
    getCarById() {
        this.apiService.getItem(this.id).
            subscribe(response => {
            console.log("page", response);
            this.car = response;
        });
    }
    savedata(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.formValidation()) {
                yield this.presentLoading();
                if (this.id) {
                    //update car
                    console.log(this.id);
                    console.log(this.car);
                    try {
                        yield this.apiService.updateItem(this.id, this.car).subscribe(response => {
                            this.loading.dismiss();
                            this.appService.presentToast("Veiculo procesado con exito!");
                            this.navCtrl.navigateRoot("/cars");
                        });
                    }
                    catch (error) {
                        this.appService.presentToast(error);
                        this.loading.dismiss();
                    }
                }
                else {
                    //create car
                    try {
                        console.log(data);
                        this.apiService.createItem(data).subscribe((response) => {
                            this.navCtrl.navigateRoot("/cars");
                        });
                        this.loading.dismiss();
                        this.appService.presentToast("Veiculo procesado con exito!");
                        this.navCtrl.navigateRoot("/cars");
                    }
                    catch (error) {
                        this.appService.presentToast(error);
                        this.loading.dismiss();
                        console.log(error);
                    }
                }
            }
        });
    }
    formValidation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.car.nome) {
                this.appService.presentAlert("Insira o nome do veiculo");
                return false;
            }
            if (!this.car.anho_fabricacao) {
                this.appService.presentAlert("Insira o anho de fabricacao");
                return false;
            }
            if (!this.car.modelo) {
                this.appService.presentAlert("Insira um modelo");
                return false;
            }
            if (!this.car.cambio) {
                this.appService.presentAlert("Insira o cambio");
                return false;
            }
            if (!this.car.km) {
                this.appService.presentAlert("Insira o km");
                return false;
            }
            if (!this.car.placa) {
                this.appService.presentAlert("Insira a placa");
                return false;
            }
            if (!this.car.cor) {
                this.appService.presentAlert("Insira o color");
                return false;
            }
            if (!this.car.carroceria) {
                this.appService.presentAlert("Insira a carroceria");
                return false;
            }
            if (!this.car.portas) {
                this.appService.presentAlert("Insira o nro das portas");
                return false;
            }
            if (!this.car.motorizacao) {
                this.appService.presentAlert("Insira a motorizacao");
                return false;
            }
            if (!this.car.combustivel) {
                this.appService.presentAlert("Insira o tipo de combustivel");
                return false;
            }
            if (!this.car.chassi) {
                this.appService.presentAlert("Insira o nro do chassi");
                return false;
            }
            return true;
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({ message: "Espere.." });
            return this.loading.present();
        });
    }
};
DetailCarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
DetailCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-car',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-car.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-car/detail-car.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-car.page.scss */ "./src/app/pages/detail-car/detail-car.page.scss")).default]
    })
], DetailCarPage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-car-detail-car-module-es2015.js.map
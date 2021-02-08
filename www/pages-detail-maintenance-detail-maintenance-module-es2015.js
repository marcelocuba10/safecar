(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-maintenance-detail-maintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-maintenance/detail-maintenance.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-maintenance/detail-maintenance.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/maintenances\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"id\">Detalhes da Manutenção</ion-title>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!id\">Adicionar Nova Manutenção</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <center>\n        <img style=\"width:70%\" src=\"../../../assets/img/no-image.png\" />\n      </center>\n      <ion-segment mode=\"ios\" value=\"all\" style=\"margin-bottom: 16px;\">\n        <ion-segment-button value=\"all\">\n          Detalhes\n        </ion-segment-button>\n        <ion-segment-button value=\"favorites\">\n          Fotos\n        </ion-segment-button>\n      </ion-segment>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Data</ion-label>\n        <ion-datetime (ionChange)=\"onChange($event)\" autofocus required [(ngModel)]=\"maintenance.data\" display-format=\"DD/MM/YYYY\" min=\"1970-01-01\" max=\"2021-12-31\"></ion-datetime>\n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"stacked\">(*)KM</ion-label>\n              <ion-input type=\"text\" required [(ngModel)]=\"maintenance.km\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"stacked\">(*)Próximo KM</ion-label>\n              <ion-input type=\"text\" required [(ngModel)]=\"maintenance.km_prox\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>  \n      <ion-item>\n        <ion-label position=\"stacked\">(*)Manutenção</ion-label>\n        <ion-select class=\"ion-text-capitalize\" interface=\"popover\" required [(ngModel)]=\"maintenance.manutencao\">\n          <ion-select-option value=\"Filtro de Azeite\">Filtro de Azeite</ion-select-option>\n          <ion-select-option value=\"Filtro de Aire\">Filtro de Aire</ion-select-option>\n          <ion-select-option value=\"Filtro de Combustivel\">Filtro de Combustivel</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class=\"select-placeholder\">\n        <ion-label position=\"stacked\">(*)Mecanica</ion-label>\n        <ion-select interface=\"popover\" required [(ngModel)]=\"maintenance.mecanica\" class=\"ion-text-capitalize\" placeholder=\"{{maintenance.mecanica}}\">\n          <ion-select-option *ngFor=\"let workshop of workshops\" [value]=\"workshop.nome\">{{workshop.nome}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Custo</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"maintenance.custo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Observações</ion-label>\n        <ion-textarea [(ngModel)]=\"maintenance.observacoes\" placeholder=\"...\"></ion-textarea>\n      </ion-item>\n\n      <ion-item-group class=\"ion-text-center ion-margin-top\">\n        <ion-button mode=\"ios\" color=\"medium\" routerLink=\"/maintenances\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button mode=\"ios\" color=\"success\" (click)=\"savedata(maintenance)\">\n          <ion-icon class=\"m-icon\" name=\"save-outline\"></ion-icon>Salvar\n        </ion-button>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/detail-maintenance/detail-maintenance-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/detail-maintenance/detail-maintenance-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailMaintenancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMaintenancePageRoutingModule", function() { return DetailMaintenancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_maintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-maintenance.page */ "./src/app/pages/detail-maintenance/detail-maintenance.page.ts");




const routes = [
    {
        path: '',
        component: _detail_maintenance_page__WEBPACK_IMPORTED_MODULE_3__["DetailMaintenancePage"]
    }
];
let DetailMaintenancePageRoutingModule = class DetailMaintenancePageRoutingModule {
};
DetailMaintenancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailMaintenancePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detail-maintenance/detail-maintenance.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/detail-maintenance/detail-maintenance.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailMaintenancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMaintenancePageModule", function() { return DetailMaintenancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-maintenance-routing.module */ "./src/app/pages/detail-maintenance/detail-maintenance-routing.module.ts");
/* harmony import */ var _detail_maintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-maintenance.page */ "./src/app/pages/detail-maintenance/detail-maintenance.page.ts");







let DetailMaintenancePageModule = class DetailMaintenancePageModule {
};
DetailMaintenancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailMaintenancePageRoutingModule"]
        ],
        declarations: [_detail_maintenance_page__WEBPACK_IMPORTED_MODULE_6__["DetailMaintenancePage"]]
    })
], DetailMaintenancePageModule);



/***/ }),

/***/ "./src/app/pages/detail-maintenance/detail-maintenance.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/detail-maintenance/detail-maintenance.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1tYWludGVuYW5jZS9kZXRhaWwtbWFpbnRlbmFuY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/detail-maintenance/detail-maintenance.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/detail-maintenance/detail-maintenance.page.ts ***!
  \*********************************************************************/
/*! exports provided: DetailMaintenancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMaintenancePage", function() { return DetailMaintenancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");






let DetailMaintenancePage = class DetailMaintenancePage {
    constructor(actRoute, apiService, navCtrl, appService, loadingCtrl) {
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.maintenance = {};
        this.id = this.actRoute.snapshot.paramMap.get("id");
    }
    ngOnInit() {
        if (this.id) {
            this.getMaintenanceById();
        }
        this.getWorkshops();
    }
    onChange($event) {
        this.dateFormat = this.appService.getDate($event);
        console.log(this.dateFormat);
    }
    getMaintenanceById() {
        this.apiService.getMaintenanceById(this.id).
            subscribe(response => {
            this.maintenance = response;
            console.log("response", this.maintenance);
        });
    }
    getWorkshops() {
        this.apiService.getWorkshops().subscribe(response => {
            this.workshops = response;
            console.log("response:", this.workshops);
        });
    }
    savedata(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.appService.formValidation(data)) {
                yield this.presentLoading();
                this.maintenance.data = this.dateFormat;
                if (this.id) {
                    console.log(this.id);
                    console.log(this.maintenance);
                    try {
                        yield this.apiService.updateMaintenance(this.id, this.maintenance).subscribe(response => {
                            this.loading.dismiss();
                            this.appService.presentToast("Manutenção atualizado com exito!");
                            this.navCtrl.navigateRoot("/maintenances");
                        });
                    }
                    catch (error) {
                        this.appService.presentToast(error);
                        this.loading.dismiss();
                    }
                }
                else {
                    try {
                        console.log(data);
                        this.apiService.createMaintenance(data).subscribe((response) => {
                            console.log('response:', response);
                            this.navCtrl.navigateRoot("/maintenances");
                        });
                        this.loading.dismiss();
                        this.appService.presentToast("Manutenção criado com exito!");
                        this.navCtrl.navigateRoot("/maintenances");
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
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({ message: "Espere.." });
            return this.loading.present();
        });
    }
};
DetailMaintenancePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
DetailMaintenancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-maintenance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-maintenance/detail-maintenance.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-maintenance.page.scss */ "./src/app/pages/detail-maintenance/detail-maintenance.page.scss")).default]
    })
], DetailMaintenancePage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-maintenance-detail-maintenance-module-es2015.js.map
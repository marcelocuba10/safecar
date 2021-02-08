(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-expense-detail-expense-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-expense/detail-expense.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-expense/detail-expense.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/expenses\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"id\">Detalhes Despesa</ion-title>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!id\">Adicionar Nova Despesa</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Nome</ion-label>\n        <ion-input type=\"text\" autofocus required [(ngModel)]=\"expense.nome\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">(*)Custo</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"expense.custo\"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label position=\"stacked\">(*)Data</ion-label>\n        <ion-datetime (ionChange)=\"onChange($event)\" autofocus required [(ngModel)]=\"expense.data\" display-format=\"DD/MM/YYYY\" min=\"1970-01-01\" max=\"2021-12-31\"></ion-datetime>\n      </ion-item>\n      <ion-item class=\"select-placeholder\">\n        <ion-label position=\"stacked\">(*)Veiculo</ion-label>\n        <ion-select interface=\"popover\" required [(ngModel)]=\"expense.id_veiculo\" class=\"ion-text-capitalize\" placeholder=\"{{car_name}}\">\n          <ion-select-option *ngFor=\"let car of cars\" [value]=\"car.id\">{{car.nome}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Observações</ion-label>\n        <ion-textarea [(ngModel)]=\"expense.observacoes\" placeholder=\"...\"></ion-textarea>\n      </ion-item>\n      <ion-item-group class=\"ion-text-center ion-margin-top\">\n        <ion-button mode=\"ios\" color=\"medium\" routerLink=\"/expenses\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button mode=\"ios\" color=\"success\" (click)=\"savedata(expense)\">\n          <ion-icon class=\"m-icon\" name=\"save-outline\"></ion-icon>Salvar\n        </ion-button>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/detail-expense/detail-expense-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/detail-expense/detail-expense-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailExpensePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailExpensePageRoutingModule", function() { return DetailExpensePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-expense.page */ "./src/app/pages/detail-expense/detail-expense.page.ts");




const routes = [
    {
        path: '',
        component: _detail_expense_page__WEBPACK_IMPORTED_MODULE_3__["DetailExpensePage"]
    }
];
let DetailExpensePageRoutingModule = class DetailExpensePageRoutingModule {
};
DetailExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailExpensePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detail-expense/detail-expense.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-expense/detail-expense.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailExpensePageModule", function() { return DetailExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-expense-routing.module */ "./src/app/pages/detail-expense/detail-expense-routing.module.ts");
/* harmony import */ var _detail_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-expense.page */ "./src/app/pages/detail-expense/detail-expense.page.ts");







let DetailExpensePageModule = class DetailExpensePageModule {
};
DetailExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailExpensePageRoutingModule"]
        ],
        declarations: [_detail_expense_page__WEBPACK_IMPORTED_MODULE_6__["DetailExpensePage"]]
    })
], DetailExpensePageModule);



/***/ }),

/***/ "./src/app/pages/detail-expense/detail-expense.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-expense/detail-expense.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1leHBlbnNlL2RldGFpbC1leHBlbnNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/detail-expense/detail-expense.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/detail-expense/detail-expense.page.ts ***!
  \*************************************************************/
/*! exports provided: DetailExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailExpensePage", function() { return DetailExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");






let DetailExpensePage = class DetailExpensePage {
    constructor(actRoute, apiService, navCtrl, appService, loadingCtrl) {
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.expense = {};
        this.id = this.actRoute.snapshot.paramMap.get("id");
    }
    ngOnInit() {
        if (this.id) {
            this.getExpenseById();
        }
        this.getCars();
    }
    onChange($event) {
        this.dateFormat = this.appService.getDate($event);
        console.log(this.dateFormat);
    }
    getExpenseById() {
        this.apiService.getExpenseById(this.id).
            subscribe(response => {
            this.expense = response;
            console.log("response", this.expense);
            this.getCarById();
        });
    }
    getCars() {
        this.apiService.getCars().subscribe(response => {
            this.cars = response;
            console.log("response:", this.cars);
        });
    }
    getCarById() {
        this.apiService.getCarById(this.expense.id_veiculo).
            subscribe(response => {
            this.car_name = response.nome;
            console.log("response", this.car_name);
        });
    }
    savedata(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.appService.formValidation(this.expense)) {
                yield this.appService.presentLoading(1);
                this.expense.data = this.dateFormat;
                if (this.id) {
                    try {
                        yield this.apiService.updateExpense(this.id, this.expense).subscribe(response => {
                            console.log('response:', response);
                            this.appService.presentLoading(0);
                            this.appService.presentToast("Despesa atualizada com exito!");
                            this.navCtrl.navigateRoot("/expenses");
                        });
                    }
                    catch (error) {
                        this.appService.presentToast(error);
                        this.appService.presentLoading(0);
                    }
                }
                else {
                    try {
                        console.log(data);
                        this.apiService.createExpense(data).subscribe((response) => {
                            console.log('response:', response);
                            this.navCtrl.navigateRoot("/expenses");
                        });
                        this.appService.presentLoading(0);
                        this.appService.presentToast("Despesa criada com exito!");
                        this.navCtrl.navigateRoot("/expenses");
                    }
                    catch (error) {
                        this.appService.presentToast(error);
                        this.appService.presentLoading(0);
                        console.log(error);
                    }
                }
            }
        });
    }
};
DetailExpensePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
DetailExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-expense',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-expense.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-expense/detail-expense.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-expense.page.scss */ "./src/app/pages/detail-expense/detail-expense.page.scss")).default]
    })
], DetailExpensePage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-expense-detail-expense-module-es2015.js.map
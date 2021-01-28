(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" color=\"tertiary\">\r\n    <ion-tab-button tab=\"cars\">\r\n      <ion-icon name=\"car-outline\"></ion-icon>\r\n      <ion-label>Veiculos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"workshops\">\r\n      <ion-icon name=\"location-outline\"></ion-icon>\r\n      <ion-label>Mecanicas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"expenses\">\r\n      <ion-icon name=\"cash-outline\"></ion-icon>\r\n      <ion-label>Despesas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"user\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Meu Perfil</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'cars',
                loadChildren: () => Promise.all(/*! import() | pages-cars-cars-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-cars-cars-module")]).then(__webpack_require__.bind(null, /*! ../pages/cars/cars.module */ "./src/app/pages/cars/cars.module.ts")).then(m => m.CarsPageModule)
            },
            {
                path: 'detail-car',
                loadChildren: () => Promise.all(/*! import() | pages-detail-car-detail-car-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-detail-car-detail-car-module")]).then(__webpack_require__.bind(null, /*! ../pages/detail-car/detail-car.module */ "./src/app/pages/detail-car/detail-car.module.ts")).then(m => m.DetailCarPageModule)
            },
            {
                path: 'detail-car/:id',
                loadChildren: () => Promise.all(/*! import() | pages-detail-car-detail-car-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-detail-car-detail-car-module")]).then(__webpack_require__.bind(null, /*! ../pages/detail-car/detail-car.module */ "./src/app/pages/detail-car/detail-car.module.ts")).then(m => m.DetailCarPageModule)
            },
            {
                path: 'maintenances',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-maintenances-maintenances-module */ "pages-maintenances-maintenances-module").then(__webpack_require__.bind(null, /*! ../pages/maintenances/maintenances.module */ "./src/app/pages/maintenances/maintenances.module.ts")).then(m => m.MaintenancesPageModule)
            },
            {
                path: 'detail-maintenance',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-detail-maintenance-detail-maintenance-module */ "pages-detail-maintenance-detail-maintenance-module").then(__webpack_require__.bind(null, /*! ../pages/detail-maintenance/detail-maintenance.module */ "./src/app/pages/detail-maintenance/detail-maintenance.module.ts")).then(m => m.DetailMaintenancePageModule)
            },
            {
                path: 'detail-maintenance/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-detail-maintenance-detail-maintenance-module */ "pages-detail-maintenance-detail-maintenance-module").then(__webpack_require__.bind(null, /*! ../pages/detail-maintenance/detail-maintenance.module */ "./src/app/pages/detail-maintenance/detail-maintenance.module.ts")).then(m => m.DetailMaintenancePageModule)
            },
            {
                path: 'workshops',
                loadChildren: () => Promise.all(/*! import() | pages-workshops-workshops-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workshops-workshops-module")]).then(__webpack_require__.bind(null, /*! ../pages/workshops/workshops.module */ "./src/app/pages/workshops/workshops.module.ts")).then(m => m.WorkshopsPageModule)
            },
            {
                path: 'detail-workshop',
                loadChildren: () => Promise.all(/*! import() | pages-detail-workshop-detail-workshop-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-detail-workshop-detail-workshop-module")]).then(__webpack_require__.bind(null, /*! ../pages/detail-workshop/detail-workshop.module */ "./src/app/pages/detail-workshop/detail-workshop.module.ts")).then(m => m.DetailWorkshopPageModule)
            },
            {
                path: 'detail-workshop/:id',
                loadChildren: () => Promise.all(/*! import() | pages-detail-workshop-detail-workshop-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-detail-workshop-detail-workshop-module")]).then(__webpack_require__.bind(null, /*! ../pages/detail-workshop/detail-workshop.module */ "./src/app/pages/detail-workshop/detail-workshop.module.ts")).then(m => m.DetailWorkshopPageModule)
            },
            {
                path: 'expenses',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-expenses-expenses-module */ "pages-expenses-expenses-module").then(__webpack_require__.bind(null, /*! ../pages/expenses/expenses.module */ "./src/app/pages/expenses/expenses.module.ts")).then(m => m.ExpensesPageModule)
            },
            {
                path: 'detail-expense',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-detail-expense-detail-expense-module */ "pages-detail-expense-detail-expense-module").then(__webpack_require__.bind(null, /*! ../pages/detail-expense/detail-expense.module */ "./src/app/pages/detail-expense/detail-expense.module.ts")).then(m => m.DetailExpensePageModule)
            },
            {
                path: 'detail-expense/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-detail-expense-detail-expense-module */ "pages-detail-expense-detail-expense-module").then(__webpack_require__.bind(null, /*! ../pages/detail-expense/detail-expense.module */ "./src/app/pages/detail-expense/detail-expense.module.ts")).then(m => m.DetailExpensePageModule)
            },
            {
                path: 'user',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-user-user-module */ "pages-user-user-module").then(__webpack_require__.bind(null, /*! ../pages/user/user.module */ "./src/app/pages/user/user.module.ts")).then(m => m.UserPageModule)
            },
            {
                path: 'detail-user',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-detail-user-detail-user-module */ "pages-detail-user-detail-user-module").then(__webpack_require__.bind(null, /*! ../pages/detail-user/detail-user.module */ "./src/app/pages/detail-user/detail-user.module.ts")).then(m => m.DetailUserPageModule)
            },
            {
                path: 'detail-user/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-detail-user-detail-user-module */ "pages-detail-user-detail-user-module").then(__webpack_require__.bind(null, /*! ../pages/detail-user/detail-user.module */ "./src/app/pages/detail-user/detail-user.module.ts")).then(m => m.DetailUserPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/cars',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/cars',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    },
    {
        path: 'cars',
        redirectTo: '/tabs/cars',
        pathMatch: 'full'
    },
    {
        path: 'detail-car',
        redirectTo: '/tabs/detail-car',
        pathMatch: 'full'
    },
    {
        path: 'detail-car/:id',
        redirectTo: '/tabs/detail-car/:id',
        pathMatch: 'full'
    },
    {
        path: 'workshops',
        redirectTo: '/tabs/workshops',
        pathMatch: 'full'
    },
    {
        path: 'detail-workshop',
        redirectTo: '/tabs/detail-workshop',
        pathMatch: 'full'
    },
    {
        path: 'detail-workshop/:id',
        redirectTo: '/tabs/detail-workshop/:id',
        pathMatch: 'full'
    },
    {
        path: 'maintenances',
        redirectTo: '/tabs/maintenances',
        pathMatch: 'full'
    },
    {
        path: 'detail-maintenance',
        redirectTo: '/tabs/detail-maintenance',
        pathMatch: 'full'
    },
    {
        path: 'detail-maintenance/:id',
        redirectTo: '/tabs/detail-maintenance/:id',
        pathMatch: 'full'
    },
    {
        path: 'expenses',
        redirectTo: '/tabs/expenses',
        pathMatch: 'full'
    },
    {
        path: 'detail-expense',
        redirectTo: '/tabs/detail-expense',
        pathMatch: 'full'
    },
    {
        path: 'detail-expense/:id',
        redirectTo: '/tabs/detail-expense/:id',
        pathMatch: 'full'
    },
    {
        path: 'user',
        redirectTo: '/tabs/user',
        pathMatch: 'full'
    },
    {
        path: 'detail-user',
        redirectTo: '/tabs/detail-user',
        pathMatch: 'full'
    },
    {
        path: 'detail-user/:id',
        redirectTo: '/tabs/detail-user/:id',
        pathMatch: 'full'
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map
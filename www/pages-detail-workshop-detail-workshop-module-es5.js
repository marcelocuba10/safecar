function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-workshop-detail-workshop-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-workshop/detail-workshop.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-workshop/detail-workshop.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDetailWorkshopDetailWorkshopPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/workshops\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"id\">Detalhes da mecanica</ion-title>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!id\">Adicionar Nova mecanica</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"stacked\">Nome</ion-label>\n        <ion-input type=\"text\" autofocus disabled>{{workshop.nome}}</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Telefone</ion-label>\n        <ion-input type=\"text\" disabled>{{workshop.telefone}}</ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label position=\"stacked\">RUC</ion-label>\n        <ion-input type=\"text\" disabled>{{workshop.RUC}}</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"text\" disabled>{{workshop.email}}</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Endereco</ion-label>\n        <ion-input type=\"text\" disabled>{{workshop.endereco}}</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Responsavel</ion-label>\n        <ion-input type=\"text\" disabled>{{workshop.responsavel}}</ion-input>\n      </ion-item>\n      <ion-item-group class=\"ion-text-center ion-margin-top\">\n        <ion-button color=\"medium\" routerLink=\"/workshops\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>Voltar\n        </ion-button>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/detail-workshop/detail-workshop-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/detail-workshop/detail-workshop-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: DetailWorkshopPageRoutingModule */

  /***/
  function srcAppPagesDetailWorkshopDetailWorkshopRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailWorkshopPageRoutingModule", function () {
      return DetailWorkshopPageRoutingModule;
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


    var _detail_workshop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail-workshop.page */
    "./src/app/pages/detail-workshop/detail-workshop.page.ts");

    var routes = [{
      path: '',
      component: _detail_workshop_page__WEBPACK_IMPORTED_MODULE_3__["DetailWorkshopPage"]
    }];

    var DetailWorkshopPageRoutingModule = function DetailWorkshopPageRoutingModule() {
      _classCallCheck(this, DetailWorkshopPageRoutingModule);
    };

    DetailWorkshopPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailWorkshopPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/detail-workshop/detail-workshop.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/detail-workshop/detail-workshop.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DetailWorkshopPageModule */

  /***/
  function srcAppPagesDetailWorkshopDetailWorkshopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailWorkshopPageModule", function () {
      return DetailWorkshopPageModule;
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


    var _detail_workshop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-workshop-routing.module */
    "./src/app/pages/detail-workshop/detail-workshop-routing.module.ts");
    /* harmony import */


    var _detail_workshop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail-workshop.page */
    "./src/app/pages/detail-workshop/detail-workshop.page.ts");

    var DetailWorkshopPageModule = function DetailWorkshopPageModule() {
      _classCallCheck(this, DetailWorkshopPageModule);
    };

    DetailWorkshopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_workshop_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailWorkshopPageRoutingModule"]],
      declarations: [_detail_workshop_page__WEBPACK_IMPORTED_MODULE_6__["DetailWorkshopPage"]]
    })], DetailWorkshopPageModule);
    /***/
  },

  /***/
  "./src/app/pages/detail-workshop/detail-workshop.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/detail-workshop/detail-workshop.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDetailWorkshopDetailWorkshopPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC13b3Jrc2hvcC9kZXRhaWwtd29ya3Nob3AucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/detail-workshop/detail-workshop.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/detail-workshop/detail-workshop.page.ts ***!
    \***************************************************************/

  /*! exports provided: DetailWorkshopPage */

  /***/
  function srcAppPagesDetailWorkshopDetailWorkshopPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailWorkshopPage", function () {
      return DetailWorkshopPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");

    var DetailWorkshopPage = /*#__PURE__*/function () {
      function DetailWorkshopPage(actRoute, apiService, navCtrl, appService, loadingCtrl) {
        _classCallCheck(this, DetailWorkshopPage);

        this.actRoute = actRoute;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.workshop = {};
        this.id = this.actRoute.snapshot.paramMap.get("id");
        console.log(this.id);
      }

      _createClass(DetailWorkshopPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id) {
            this.getWorkshopById();
          }
        }
      }, {
        key: "getWorkshopById",
        value: function getWorkshopById() {
          var _this = this;

          this.apiService.getWorkshop(this.id).subscribe(function (response) {
            console.log("page", response);
            _this.workshop = response;
          });
        }
      }]);

      return DetailWorkshopPage;
    }();

    DetailWorkshopPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    DetailWorkshopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-workshop',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-workshop.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-workshop/detail-workshop.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-workshop.page.scss */
      "./src/app/pages/detail-workshop/detail-workshop.page.scss"))["default"]]
    })], DetailWorkshopPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-detail-workshop-detail-workshop-module-es5.js.map
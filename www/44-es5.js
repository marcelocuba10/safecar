function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js ***!
    \**************************************************************************************/

  /*! exports provided: pwa_camera_modal_instance */

  /***/
  function node_modulesIonicPwaElementsDistEsmPwaCameraModalInstanceEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pwa_camera_modal_instance", function () {
      return PWACameraModal;
    });
    /* harmony import */


    var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-f86805ad.js */
    "./node_modules/@ionic/pwa-elements/dist/esm/core-f86805ad.js");

    var PWACameraModal = /*#__PURE__*/function () {
      function PWACameraModal(hostRef) {
        var _this = this;

        _classCallCheck(this, PWACameraModal);

        Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.noDevicesText = 'No camera found';
        this.noDevicesButtonText = 'Choose image';

        this.handlePhoto = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(photo) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this.onPhoto.emit(photo);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();

        this.handleNoDeviceError = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(photo) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this.noDeviceError.emit(photo);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }();

        this.onPhoto = Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "onPhoto", 7);
        this.noDeviceError = Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "noDeviceError", 7);
      }

      _createClass(PWACameraModal, [{
        key: "handleBackdropClick",
        value: function handleBackdropClick(e) {
          if (e.target !== this.el) {
            this.onPhoto.emit(null);
          }
        }
      }, {
        key: "handleComponentClick",
        value: function handleComponentClick(e) {
          e.stopPropagation();
        }
      }, {
        key: "handleBackdropKeyUp",
        value: function handleBackdropKeyUp(e) {
          if (e.key === "Escape") {
            this.onPhoto.emit(null);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper",
            onClick: function onClick(e) {
              return _this2.handleBackdropClick(e);
            }
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "content"
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("pwa-camera", {
            onClick: function onClick(e) {
              return _this2.handleComponentClick(e);
            },
            handlePhoto: this.handlePhoto,
            handleNoDeviceError: this.handleNoDeviceError,
            noDevicesButtonText: this.noDevicesButtonText,
            noDevicesText: this.noDevicesText
          })));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}\@media only screen and (max-width:600px){.content{width:100%;height:100%}}";
        }
      }]);

      return PWACameraModal;
    }();
    /***/

  }
}]);
//# sourceMappingURL=44-es5.js.map
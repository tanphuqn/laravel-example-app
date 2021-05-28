(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_routes_Admin_ProductList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Admin/ProductList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Admin/ProductList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isFormModalActive: false,
      selectProduct: {},
      isDisableButtonSave: false
    };
  },
  methods: {
    formatCurrency: function formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    },
    handleConfirmCustomDelete: function handleConfirmCustomDelete(row) {
      var _this = this;

      this.selectProduct = row;
      this.$buefy.dialog.confirm({
        title: "Delete",
        message: "Are you sure to delete this item?",
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this.processDelete();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onConfirm() {
            return _onConfirm.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    processDelete: function processDelete() {
      var _this2 = this;

      axios.post("/api/products/delete", this.selectProduct).then(function (response) {
        _this2.$store.commit("deleteProducts", _this2.selectProduct);

        _this2.selectProduct = {};

        _this2.$buefy.toast.open("Data deleted successfully.");
      });
    },
    handleApplyChange: function handleApplyChange() {
      var _this3 = this;

      axios.post("/api/products/add", this.selectProduct).then(function (response) {
        _this3.paymentProcessing = false;
        console.log(response);

        _this3.$store.commit("addProducts", response.data);

        _this3.$buefy.toast.open("Data updated successfully.");

        _this3.isFormModalActive = false;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    handleOpenModalEdit: function handleOpenModalEdit(row) {
      this.isFormModalActive = true;
      this.selectProduct = row;
      this.isDisableButtonSave = false;
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    },
    isNew: function isNew() {
      return !this.selectProduct.id;
    }
  }
});

/***/ }),

/***/ "./resources/js/routes/Admin/ProductList.vue":
/*!***************************************************!*\
  !*** ./resources/js/routes/Admin/ProductList.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductList_vue_vue_type_template_id_9a813bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=9a813bb4& */ "./resources/js/routes/Admin/ProductList.vue?vue&type=template&id=9a813bb4&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.vue?vue&type=script&lang=js& */ "./resources/js/routes/Admin/ProductList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductList_vue_vue_type_template_id_9a813bb4___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductList_vue_vue_type_template_id_9a813bb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Admin/ProductList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Admin/ProductList.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/routes/Admin/ProductList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Admin/ProductList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/routes/Admin/ProductList.vue?vue&type=template&id=9a813bb4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/routes/Admin/ProductList.vue?vue&type=template&id=9a813bb4& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_9a813bb4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_9a813bb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_9a813bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=template&id=9a813bb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Admin/ProductList.vue?vue&type=template&id=9a813bb4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Admin/ProductList.vue?vue&type=template&id=9a813bb4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Admin/ProductList.vue?vue&type=template&id=9a813bb4& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "text-gray-700 body-font" },
    [
      _c(
        "b-button",
        {
          staticClass: "ring-4 ring-indigo-300",
          on: { click: _vm.handleOpenModalEdit }
        },
        [_vm._v("Add Product")]
      ),
      _vm._v(" "),
      _c(
        "b-table",
        {
          attrs: {
            data: _vm.products,
            narrowed: true,
            paginated: true,
            striped: true,
            hoverable: true,
            "pagination-size": "is-small"
          }
        },
        [
          _vm._t("columns"),
          _vm._v(" "),
          _c("b-table-column", {
            attrs: {
              width: "30",
              field: "actions",
              "custom-row-key": "actions"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button is-small is-text is-action m-l-xxs m-r-xxs",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.handleOpenModalEdit(props.row)
                          }
                        }
                      },
                      [_vm._v("\n                Edit\n            ")]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("b-table-column", {
            attrs: {
              width: "30",
              field: "actions",
              "custom-row-key": "actions"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(
                      "button",
                      {
                        staticClass: "button is-small is-text is-action",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.handleConfirmCustomDelete(props.row)
                          }
                        }
                      },
                      [_vm._v("\n                Delete\n            ")]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("b-table-column", {
            attrs: { field: "name", label: "name", sortable: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _vm._v(
                      "\n            " +
                        _vm._s(props.row.name || "-") +
                        "\n        "
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("b-table-column", {
            attrs: { field: "price", label: "price", sortable: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _vm._v(
                      "\n            " +
                        _vm._s(props.row.price || "0") +
                        "\n        "
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("b-table-column", {
            attrs: { field: "description", label: "description", sortable: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _vm._v(
                      "\n            " +
                        _vm._s(props.row.description || "-") +
                        "\n        "
                    )
                  ]
                }
              }
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { active: _vm.isFormModalActive },
          on: {
            "update:active": function($event) {
              _vm.isFormModalActive = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-card", staticStyle: { width: "auto" } },
            [
              _c("header", { staticClass: "modal-card-head" }, [
                !_vm.isNew
                  ? _c(
                      "p",
                      { staticClass: "modal-card-title has-text-weight-bold" },
                      [_vm._v("\n                    Edit\n                ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isNew
                  ? _c(
                      "p",
                      { staticClass: "modal-card-title has-text-weight-bold" },
                      [_vm._v("\n                    Add\n                ")]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "section",
                { staticClass: "modal-card-body" },
                [
                  !_vm.isNew
                    ? _c(
                        "b-field",
                        { attrs: { label: "ID" } },
                        [
                          _c("b-input", {
                            attrs: { name: "id", disabled: true },
                            model: {
                              value: _vm.selectProduct.id,
                              callback: function($$v) {
                                _vm.$set(_vm.selectProduct, "id", $$v)
                              },
                              expression: "selectProduct.id"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Name" } },
                    [
                      _c("b-input", {
                        attrs: { name: "name" },
                        model: {
                          value: _vm.selectProduct.name,
                          callback: function($$v) {
                            _vm.$set(_vm.selectProduct, "name", $$v)
                          },
                          expression: "selectProduct.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Price" } },
                    [
                      _c("b-input", {
                        attrs: { name: "price" },
                        model: {
                          value: _vm.selectProduct.price,
                          callback: function($$v) {
                            _vm.$set(_vm.selectProduct, "price", $$v)
                          },
                          expression: "selectProduct.price"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Description" } },
                    [
                      _c("b-input", {
                        attrs: { name: "description" },
                        model: {
                          value: _vm.selectProduct.description,
                          callback: function($$v) {
                            _vm.$set(_vm.selectProduct, "description", $$v)
                          },
                          expression: "selectProduct.description"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "footer",
                { staticClass: "modal-card-foot" },
                [
                  _c(
                    "b-field",
                    { attrs: { grouped: "", "group-multiline": "" } },
                    [
                      _c("p", { staticClass: "control" }, [
                        _c(
                          "button",
                          {
                            staticClass: "button",
                            on: {
                              click: function($event) {
                                _vm.isFormModalActive = false
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Cancel\n                        "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      !_vm.isDisableButtonSave
                        ? _c("p", { staticClass: "control" }, [
                            _c(
                              "button",
                              {
                                staticClass: "button is-info",
                                on: {
                                  click: function($event) {
                                    return _vm.handleApplyChange()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Save\n                        "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
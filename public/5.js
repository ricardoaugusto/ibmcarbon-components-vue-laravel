(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Form/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Form/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      accordions: [],
      loadingText: "Loading data...",
      loadedText: "Data loaded.",
      loading: true,
      content: {}
    };
  },
  props: {},
  methods: {
    formSubmitted: function formSubmitted() {
      var _this = this;

      this.loading = true;
      window.axios.post("/api/form", this.content).then(function (_ref) {
        var returnedData = _ref.data;
        console.log(returnedData);
        _this.loading = false;
      });
    }
  },
  created: function created() {
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Form/Form.vue?vue&type=template&id=f1de4574&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Form/Form.vue?vue&type=template&id=f1de4574&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bx--grid bx--grid--full-width" }, [
    _c("div", { staticClass: "bx--row" }, [
      _c("div", { staticClass: "bx--col-lg-16" }, [
        _c("h1", [_vm._v("Forms")]),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "debug",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.formSubmitted($event)
              }
            }
          },
          [
            _vm.loading
              ? _c(
                  "span",
                  [
                    _c("cv-inline-loading", {
                      attrs: {
                        active: _vm.loading,
                        "loading-text": _vm.loadingText,
                        "loaded-text": _vm.loadedText
                      }
                    })
                  ],
                  1
                )
              : _c(
                  "span",
                  [
                    _c(
                      "cv-form-item",
                      [
                        _c("cv-text-input", {
                          attrs: {
                            label: "Name",
                            "helper-text": "Type your full name",
                            placeholder: "Full name"
                          },
                          model: {
                            value: _vm.content.name,
                            callback: function($$v) {
                              _vm.$set(_vm.content, "name", $$v)
                            },
                            expression: "content.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("cv-text-area", {
                      attrs: {
                        label: "Address",
                        "helper-text": "Type your address",
                        placeholder: "Address"
                      },
                      model: {
                        value: _vm.content.address,
                        callback: function($$v) {
                          _vm.$set(_vm.content, "address", $$v)
                        },
                        expression: "content.address"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "cv-dropdown",
                      {
                        staticClass: "cv-dropdown",
                        attrs: { placeholder: "Select your gender" },
                        model: {
                          value: _vm.content.gender,
                          callback: function($$v) {
                            _vm.$set(_vm.content, "gender", $$v)
                          },
                          expression: "content.gender"
                        }
                      },
                      [
                        _c("cv-dropdown-item", { attrs: { value: "f" } }, [
                          _vm._v("F")
                        ]),
                        _vm._v(" "),
                        _c("cv-dropdown-item", { attrs: { value: "m" } }, [
                          _vm._v("M")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "bx--btn bx--btn--primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("\n            Save\n          ")]
                    )
                  ],
                  1
                )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/Form/Form.vue":
/*!***************************************!*\
  !*** ./resources/views/Form/Form.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_f1de4574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=f1de4574&scoped=true& */ "./resources/views/Form/Form.vue?vue&type=template&id=f1de4574&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/views/Form/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_f1de4574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_f1de4574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f1de4574",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/Form/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/Form/Form.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/views/Form/Form.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Form/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/Form/Form.vue?vue&type=template&id=f1de4574&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/views/Form/Form.vue?vue&type=template&id=f1de4574&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f1de4574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=f1de4574&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Form/Form.vue?vue&type=template&id=f1de4574&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f1de4574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f1de4574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/views/Form/index.js":
/*!***************************************!*\
  !*** ./resources/views/Form/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./resources/views/Form/Form.vue");

/* harmony default export */ __webpack_exports__["default"] = (_Form__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
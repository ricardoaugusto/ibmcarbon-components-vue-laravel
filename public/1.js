(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Components/Components.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carbon_icons_vue_lib_person_favorite_32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/icons-vue/lib/person--favorite/32 */ "./node_modules/@carbon/icons-vue/lib/person--favorite/32.js");
/* harmony import */ var _carbon_icons_vue_lib_person_favorite_32__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_icons_vue_lib_person_favorite_32__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      accordions: [],
      loadingText: "Loading data...",
      loadedText: "Data loaded.",
      loading: true
    };
  },
  props: {},
  methods: {
    say: function say(message) {
      console.log(message);
    },
    listAccordions: function listAccordions() {
      var _this = this;

      window.axios.get("/api/accordion").then(function (_ref) {
        var returnedData = _ref.data;
        _this.accordions = returnedData;
        _this.loading = false;
      });
    }
  },
  created: function created() {
    this.listAccordions();
    Object.assign(this, {
      PersonFavorite32: _carbon_icons_vue_lib_person_favorite_32__WEBPACK_IMPORTED_MODULE_0___default.a
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import \"./carbon-overrides\";*/\n/*@import \"./mixins\";*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Components.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=template&id=6c1c2b46&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Components/Components.vue?vue&type=template&id=6c1c2b46& ***!
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
      _c(
        "div",
        { staticClass: "bx--col-lg-16" },
        [
          _c("h1", [_vm._v("Components")]),
          _vm._v(" "),
          _vm.loading
            ? _c("cv-inline-loading", {
                attrs: {
                  active: _vm.loading,
                  "loading-text": _vm.loadingText,
                  "loaded-text": _vm.loadedText
                }
              })
            : _c(
                "cv-accordion",
                [
                  _c(
                    "cv-accordion-item",
                    { attrs: { open: _vm.accordions.open1 } },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Section 1 title\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "template",
                        { slot: "content" },
                        [
                          _c("p", [
                            _vm._v(
                              "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "cv-button",
                            {
                              attrs: {
                                small: false,
                                disabled: false,
                                icon: _vm.PersonFavorite32
                              },
                              on: {
                                click: function($event) {
                                  return _vm.say("hello")
                                }
                              }
                            },
                            [_vm._v("\n              Say hello.\n            ")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "cv-accordion-item",
                    { attrs: { open: _vm.accordions.open2 } },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Section 2 title")
                      ]),
                      _vm._v(" "),
                      _c("template", { slot: "content" }, [
                        _c("p", [
                          _vm._v(
                            "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("h2", [_vm._v("Elements")]),
                        _vm._v(" "),
                        _c("h3", [_vm._v("Elements")]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("Elements")]),
                        _vm._v(" "),
                        _c("h5", [_vm._v("Elements")]),
                        _vm._v(" "),
                        _c("h6", [_vm._v("Elements")])
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "cv-accordion-item",
                    { attrs: { open: _vm.accordions.open3 } },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Section 3 title")
                      ]),
                      _vm._v(" "),
                      _c("template", { slot: "content" }, [
                        _c("p", [
                          _vm._v(
                            "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            "
                          )
                        ])
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "cv-accordion-item",
                    { attrs: { open: _vm.accordions.open4 } },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Section 4 title")
                      ]),
                      _vm._v(" "),
                      _c("template", { slot: "content" }, [
                        _c("p", [
                          _vm._v(
                            "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            "
                          )
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid\n        consectetur eius et nemo obcaecati optio provident quae quas\n        reiciendis voluptates! Asperiores deserunt excepturi harum impedit\n        labore laborum, maxime nam nisi perferendis perspiciatis quam, rem\n        similique suscipit temporibus veniam. Debitis, dignissimos ducimus\n        earum eveniet ipsum natus nemo officia pariatur quod ullam?\n      "
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/Components/Components.vue":
/*!***************************************************!*\
  !*** ./resources/views/Components/Components.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_vue_vue_type_template_id_6c1c2b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components.vue?vue&type=template&id=6c1c2b46& */ "./resources/views/Components/Components.vue?vue&type=template&id=6c1c2b46&");
/* harmony import */ var _Components_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components.vue?vue&type=script&lang=js& */ "./resources/views/Components/Components.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Components_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components.vue?vue&type=style&index=0&lang=scss& */ "./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Components_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Components_vue_vue_type_template_id_6c1c2b46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Components_vue_vue_type_template_id_6c1c2b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/Components/Components.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/Components/Components.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/views/Components/Components.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Components.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Components.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/views/Components/Components.vue?vue&type=template&id=6c1c2b46&":
/*!**********************************************************************************!*\
  !*** ./resources/views/Components/Components.vue?vue&type=template&id=6c1c2b46& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_template_id_6c1c2b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Components.vue?vue&type=template&id=6c1c2b46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Components/Components.vue?vue&type=template&id=6c1c2b46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_template_id_6c1c2b46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Components_vue_vue_type_template_id_6c1c2b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/views/Components/index.js":
/*!*********************************************!*\
  !*** ./resources/views/Components/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ "./resources/views/Components/Components.vue");

/* harmony default export */ __webpack_exports__["default"] = (_Components__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
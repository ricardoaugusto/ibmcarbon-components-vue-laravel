(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartLine/ChartLine.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/ChartLine/ChartLine.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/charts/styles.css */ "./node_modules/@carbon/charts/styles.css");
/* harmony import */ var _carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carbon_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/charts */ "./node_modules/@carbon/charts/index.js");
//
//
//
//
//
//


var lineChartData = {
  labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
  datasets: [{
    label: "Autorizadas",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][0]],
    data: [-3420, -923, 3213, -891, -2932, -248]
  }, {
    label: "Perdidas",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][3]],
    data: [2432, 1312, -1456, 1438, -734, 2841]
  }]
};
var lineChartOptions = {
  scales: {
    x: {
      title: "Faturamento 2019"
    },
    y: {
      title: "Figures",
      formatter: function formatter(axisValue) {
        return "".concat(axisValue / 1000, "k");
      },
      line: true
    }
  },
  axes: {
    left: {
      primary: true
    },
    bottom: {
      scaleType: "labels",
      secondary: true
    }
  },
  legendClickable: true,
  containerResizable: true,
  width: "100%",
  height: 300
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ChartLine",
  components: {},
  data: function data() {
    return {
      lineChartData: lineChartData,
      lineChartOptions: lineChartOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartScatter/ChartScatter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/ChartScatter/ChartScatter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/charts/styles.css */ "./node_modules/@carbon/charts/styles.css");
/* harmony import */ var _carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carbon_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/charts */ "./node_modules/@carbon/charts/index.js");
//
//
//
//
//
//


var stackedBarData = {
  labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
  datasets: [{
    label: "30mm",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][0]],
    data: [22, 38, 30, 24, 29, 36]
  }, {
    label: "36mm",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][1]],
    data: [20, 28, 22, 24, 29, 36]
  }, {
    label: "40mm",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][2]],
    data: [12, 8, 10, 7, 11, 6]
  }, {
    label: "44mm",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][3]],
    data: [6, 8, 10, 4, 9, 3]
  }]
};
var stackedBarOptions = {
  scales: {
    x: {
      title: "Faturamento 2019"
    },
    y: {
      title: "Figures"
    }
  },
  axes: {
    left: {
      primary: true
    },
    bottom: {
      scaleType: "labels",
      secondary: true
    }
  },
  legendClickable: true,
  containerResizable: true,
  width: "100%",
  height: 300
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ChartStackedBar",
  components: {},
  data: function data() {
    return {
      stackedBarData: stackedBarData,
      stackedBarOptions: stackedBarOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/charts/styles.css */ "./node_modules/@carbon/charts/styles.css");
/* harmony import */ var _carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_charts_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carbon_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/charts */ "./node_modules/@carbon/charts/index.js");
//
//
//
//
//
//


var stackedBarData = {
  labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
  datasets: [{
    label: "OPMEs",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][0]],
    data: [65000, 29123, 35213, 51213, 16932, 52348]
  }, {
    label: "Próteses Quadril",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][1]],
    data: [32432, 21312, 56456, 21312, 34234, 32841]
  }, {
    label: "Próteses Joelho",
    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][2]],
    data: [12312, 23232, 34232, 12312, 34234, 23125]
  }]
};
var stackedBarOptions = {
  scales: {
    x: {
      title: "Faturamento 2019"
    },
    y: {
      title: "Figures",
      formatter: function formatter(axisValue) {
        return "".concat(axisValue / 1000, "k");
      },
      stacked: true
    }
  },
  axes: {
    left: {
      primary: true,
      stacked: true
    },
    bottom: {
      scaleType: "labels",
      secondary: true
    }
  },
  legendClickable: true,
  containerResizable: true,
  width: "100%",
  height: 300
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ChartStackedBar",
  components: {},
  data: function data() {
    return {
      stackedBarData: stackedBarData,
      stackedBarOptions: stackedBarOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ChartStackedBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ChartStackedBar */ "./resources/components/ChartStackedBar/index.js");
/* harmony import */ var _components_ChartLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ChartLine */ "./resources/components/ChartLine/index.js");
/* harmony import */ var _components_ChartScatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ChartScatter */ "./resources/components/ChartScatter/index.js");
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
  components: {
    ChartStackedBar: _components_ChartStackedBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChartLine: _components_ChartLine__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChartScatter: _components_ChartScatter__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loadingText: "Loading data...",
      loadedText: "Data loaded.",
      loading: true,
      content: {}
    };
  },
  props: {},
  methods: {},
  created: function created() {
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartLine/ChartLine.vue?vue&type=template&id=6b5969d8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/ChartLine/ChartLine.vue?vue&type=template&id=6b5969d8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("ccv-grouped-bar-chart", {
    attrs: { data: _vm.lineChartData, options: _vm.lineChartOptions }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartScatter/ChartScatter.vue?vue&type=template&id=c40c8aa4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/ChartScatter/ChartScatter.vue?vue&type=template&id=c40c8aa4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("ccv-scatter-chart", {
    attrs: { data: _vm.stackedBarData, options: _vm.stackedBarOptions }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=template&id=c75a0f78&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=template&id=c75a0f78& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("ccv-stacked-bar-chart", {
    attrs: { data: _vm.stackedBarData, options: _vm.stackedBarOptions }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Dashboard/Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/Dashboard/Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "bx--col" },
        [
          _c("h1", [_vm._v("\n        Indicadores\n      ")]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "h2",
            { staticClass: "title", staticStyle: { "margin-bottom": "0" } },
            [
              _vm._v(
                "\n        Faturamento de Cotações autorizadas no 1º semestre 2019\n      "
              )
            ]
          ),
          _vm._v(" "),
          _c("chart-stacked-bar"),
          _vm._v(" "),
          _c("div", { staticClass: "bx--row" }, [
            _c(
              "div",
              { staticClass: "bx--col-lg-6" },
              [
                _c(
                  "h2",
                  {
                    staticClass: "title",
                    staticStyle: { "margin-top": "20px", "margin-bottom": "0" }
                  },
                  [
                    _vm._v(
                      "\n            Valor das Cotações x Diferença para a concorrência\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("chart-line"),
                _vm._v(" "),
                _c(
                  "small",
                  { staticStyle: { position: "relative", top: "20px" } },
                  [
                    _vm._v(
                      "Valores das autorizações informados pelo Plano de Saúde."
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "bx--col-lg-6" },
              [
                _c(
                  "h2",
                  {
                    staticClass: "title",
                    staticStyle: { "margin-top": "20px", "margin-bottom": "0" }
                  },
                  [
                    _vm._v(
                      "\n            Cabeça de Cerâmica (quadril) vendidas no 1º semestre 2019\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("chart-scatter")
              ],
              1
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

/***/ "./resources/components/ChartLine/ChartLine.vue":
/*!******************************************************!*\
  !*** ./resources/components/ChartLine/ChartLine.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartLine_vue_vue_type_template_id_6b5969d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartLine.vue?vue&type=template&id=6b5969d8& */ "./resources/components/ChartLine/ChartLine.vue?vue&type=template&id=6b5969d8&");
/* harmony import */ var _ChartLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartLine.vue?vue&type=script&lang=js& */ "./resources/components/ChartLine/ChartLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartLine_vue_vue_type_template_id_6b5969d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartLine_vue_vue_type_template_id_6b5969d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/ChartLine/ChartLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/ChartLine/ChartLine.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/components/ChartLine/ChartLine.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChartLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartLine/ChartLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/ChartLine/ChartLine.vue?vue&type=template&id=6b5969d8&":
/*!*************************************************************************************!*\
  !*** ./resources/components/ChartLine/ChartLine.vue?vue&type=template&id=6b5969d8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLine_vue_vue_type_template_id_6b5969d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChartLine.vue?vue&type=template&id=6b5969d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartLine/ChartLine.vue?vue&type=template&id=6b5969d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLine_vue_vue_type_template_id_6b5969d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLine_vue_vue_type_template_id_6b5969d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/ChartLine/index.js":
/*!*************************************************!*\
  !*** ./resources/components/ChartLine/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartLine */ "./resources/components/ChartLine/ChartLine.vue");

/* harmony default export */ __webpack_exports__["default"] = (_ChartLine__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/components/ChartScatter/ChartScatter.vue":
/*!************************************************************!*\
  !*** ./resources/components/ChartScatter/ChartScatter.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartScatter_vue_vue_type_template_id_c40c8aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartScatter.vue?vue&type=template&id=c40c8aa4& */ "./resources/components/ChartScatter/ChartScatter.vue?vue&type=template&id=c40c8aa4&");
/* harmony import */ var _ChartScatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartScatter.vue?vue&type=script&lang=js& */ "./resources/components/ChartScatter/ChartScatter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartScatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartScatter_vue_vue_type_template_id_c40c8aa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartScatter_vue_vue_type_template_id_c40c8aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/ChartScatter/ChartScatter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/ChartScatter/ChartScatter.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/components/ChartScatter/ChartScatter.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartScatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChartScatter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartScatter/ChartScatter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartScatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/ChartScatter/ChartScatter.vue?vue&type=template&id=c40c8aa4&":
/*!*******************************************************************************************!*\
  !*** ./resources/components/ChartScatter/ChartScatter.vue?vue&type=template&id=c40c8aa4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartScatter_vue_vue_type_template_id_c40c8aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChartScatter.vue?vue&type=template&id=c40c8aa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartScatter/ChartScatter.vue?vue&type=template&id=c40c8aa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartScatter_vue_vue_type_template_id_c40c8aa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartScatter_vue_vue_type_template_id_c40c8aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/ChartScatter/index.js":
/*!****************************************************!*\
  !*** ./resources/components/ChartScatter/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartScatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartScatter */ "./resources/components/ChartScatter/ChartScatter.vue");

/* harmony default export */ __webpack_exports__["default"] = (_ChartScatter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/components/ChartStackedBar/ChartStackedBar.vue":
/*!******************************************************************!*\
  !*** ./resources/components/ChartStackedBar/ChartStackedBar.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartStackedBar_vue_vue_type_template_id_c75a0f78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartStackedBar.vue?vue&type=template&id=c75a0f78& */ "./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=template&id=c75a0f78&");
/* harmony import */ var _ChartStackedBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartStackedBar.vue?vue&type=script&lang=js& */ "./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartStackedBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartStackedBar_vue_vue_type_template_id_c75a0f78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartStackedBar_vue_vue_type_template_id_c75a0f78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/ChartStackedBar/ChartStackedBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartStackedBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChartStackedBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartStackedBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=template&id=c75a0f78&":
/*!*************************************************************************************************!*\
  !*** ./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=template&id=c75a0f78& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartStackedBar_vue_vue_type_template_id_c75a0f78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChartStackedBar.vue?vue&type=template&id=c75a0f78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/ChartStackedBar/ChartStackedBar.vue?vue&type=template&id=c75a0f78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartStackedBar_vue_vue_type_template_id_c75a0f78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartStackedBar_vue_vue_type_template_id_c75a0f78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/ChartStackedBar/index.js":
/*!*******************************************************!*\
  !*** ./resources/components/ChartStackedBar/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartStackedBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartStackedBar */ "./resources/components/ChartStackedBar/ChartStackedBar.vue");

/* harmony default export */ __webpack_exports__["default"] = (_ChartStackedBar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/views/Dashboard/Dashboard.vue":
/*!*************************************************!*\
  !*** ./resources/views/Dashboard/Dashboard.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_45e2bef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true& */ "./resources/views/Dashboard/Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/views/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_45e2bef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_45e2bef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45e2bef0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/Dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/views/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/Dashboard/Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/views/Dashboard/Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_45e2bef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/Dashboard/Dashboard.vue?vue&type=template&id=45e2bef0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_45e2bef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_45e2bef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/views/Dashboard/index.js":
/*!********************************************!*\
  !*** ./resources/views/Dashboard/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ "./resources/views/Dashboard/Dashboard.vue");

/* harmony default export */ __webpack_exports__["default"] = (_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
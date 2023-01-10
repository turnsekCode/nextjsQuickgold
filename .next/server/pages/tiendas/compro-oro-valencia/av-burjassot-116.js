"use strict";
(() => {
var exports = {};
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 2125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AvBurjassot),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_contenedor_Contenedor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4639);
/* harmony import */ var _componentes_empe_os_Empenos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1442);
/* harmony import */ var _componentes_info_tiendas_Info_tiendas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4812);
/* harmony import */ var _componentes_invertir_Invertir__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1864);
/* harmony import */ var _componentes_rese_as_Resenas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9664);
/* harmony import */ var _componentes_precio_divisa_Precio_divisa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1714);
/* harmony import */ var _componentes_precio_oro_Precio_oro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4490);











function AvBurjassot({ data , dataIdWp , placeid  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: dataIdWp.acf.meta_titulo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: dataIdWp.acf.meta_descripcion
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "../../../../apple-icon-180x180-1.ico",
                        sizes: "32x32"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_contenedor_Contenedor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_info_tiendas_Info_tiendas__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        dataIdWp: dataIdWp,
                        placeid: placeid
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_precio_oro_Precio_oro__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: data
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_precio_divisa_Precio_divisa__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        dataDivisa: data
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_empe_os_Empenos__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_invertir_Invertir__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_rese_as_Resenas__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/*const ciudad = "elche";
export async function getStaticProps() {
  const res = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: true, // In seconds
  };
}*/ /*const ciudad = "barcelona";
const idWp = "5510";
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`
  );
  const data = await res.json();

  const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();

  // Pass data to the page via props
  return { props: { data, dataIdWp } };
}*/ const nombreTienda = "avburjassot";
const ciudad = "valencia";
const idWp = "13837";
async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`);
    const data = await res.json();
    const response = await fetch(`https://quickgold.es/wp-json/wp/v2/pages/${idWp}`);
    const dataIdWp = await response.json();
    const placeId = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${nombreTienda}.txt`);
    const placeid = await placeId.json();
    // Pass data to the page via props
    return {
        props: {
            data,
            dataIdWp,
            placeid
        },
        revalidate: 1
    };
} /*const idWp = "5510";
export async function getStaticProps() {
  const res = await fetch(`https://quickgold.es/wp-json/wp/v2/pages/${idWp}`);
  const dataWp = await res.json();
  console.log(dataWp);
  return {
    props: {
      dataWp,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: true, // In seconds
  };
}*/  // This gets called on every request


/***/ }),

/***/ 3802:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CancelRounded");

/***/ }),

/***/ 7069:
/***/ ((module) => {

module.exports = require("@mui/joy/AspectRatio");

/***/ }),

/***/ 4026:
/***/ ((module) => {

module.exports = require("@mui/joy/Box");

/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = require("@mui/joy/Card");

/***/ }),

/***/ 8104:
/***/ ((module) => {

module.exports = require("@mui/joy/Typography");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,653], () => (__webpack_exec__(2125)));
module.exports = __webpack_exports__;

})();
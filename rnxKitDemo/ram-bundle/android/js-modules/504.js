__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=function(e){var u=(0,n.default)(),f=r.useState((function(){return e(u.getState())})),a=(0,t.default)(f,2)[1],o=r.useRef(e);return r.useEffect((function(){o.current=e})),r.useEffect((function(){return u.addListener('state',(function(e){a(o.current(e.data.state))}))}),[u]),e(u.getState())};var t=e(_r(d[1])),r=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var o=f?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n})(_r(d[2])),n=e(_r(d[3]));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}}),504,[7,51,101,482]);
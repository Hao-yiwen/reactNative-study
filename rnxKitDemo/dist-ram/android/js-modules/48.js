__d((function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=void 0;var e=(function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var p=i?Object.getOwnPropertyDescriptor(e,a):null;p&&(p.get||p.set)?Object.defineProperty(o,a,p):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o})(_r(d[0]));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}_r(d[1]);var r=e.getEnforcing('ExceptionsManager'),n={reportFatalException:function(e,t,n){r.reportFatalException(e,t,n)},reportSoftException:function(e,t,n){r.reportSoftException(e,t,n)},updateExceptionMessage:function(e,t,n){r.updateExceptionMessage(e,t,n)},dismissRedbox:function(){r.dismissRedbox&&r.dismissRedbox()},reportException:function(e){r.reportException?r.reportException(e):e.isFatal?n.reportFatalException(e.message,e.stack,e.id):n.reportSoftException(e.message,e.stack,e.id)}};_e.default=n}),48,[49,56]);
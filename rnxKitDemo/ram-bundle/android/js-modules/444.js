__d((function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.SingleNavigatorContext=void 0,_e.default=function(t){var i=t.children,a=e.useRef(),u=e.useMemo((function(){return{register:function(e){var r=a.current;if(void 0!==r&&e!==r)throw new Error(n);a.current=e},unregister:function(e){e===a.current&&(a.current=void 0)}}}),[]);return(0,r.jsx)(o.Provider,{value:u,children:i})};var e=(function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o})(_r(d[0])),r=_r(d[1]);function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}var n="Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.",o=_e.SingleNavigatorContext=e.createContext(void 0)}),444,[101,208]);
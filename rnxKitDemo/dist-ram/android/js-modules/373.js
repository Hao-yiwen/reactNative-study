__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=function(e,u){var a=null!=e?e:{},i=a.color,f=a.borderless,s=a.radius,c=a.foreground;return(0,l.useMemo)((function(){if('android'===r.default.OS&&r.default.Version>=21&&(null!=i||null!=f||null!=s)){var e=(0,n.default)(i);(0,o.default)(null==e||'number'==typeof e,'Unexpected color given for Ripple color');var l={type:'RippleAndroid',color:e,borderless:!0===f,rippleRadius:s};return{viewProps:!0===c?{nativeForegroundAndroid:l}:{nativeBackgroundAndroid:l},onPressIn:function(e){var n,r,o=u.current;null!=o&&(t.Commands.hotspotUpdate(o,null!=(n=e.nativeEvent.locationX)?n:0,null!=(r=e.nativeEvent.locationY)?r:0),t.Commands.setPressed(o,!0))},onPressMove:function(e){var n,r,o=u.current;null!=o&&t.Commands.hotspotUpdate(o,null!=(n=e.nativeEvent.locationX)?n:0,null!=(r=e.nativeEvent.locationY)?r:0)},onPressOut:function(e){var n=u.current;null!=n&&t.Commands.setPressed(n,!1)}}}return null}),[f,i,c,s,u])};var n=e(_r(d[1])),r=e(_r(d[2])),t=(e(_r(d[3])),_r(d[4])),o=e(_r(d[5])),l=(function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(n);if(r&&r.has(e))return r.get(e);var t={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(t,l,a):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t})(_r(d[6]));function u(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:n})(e)}}),373,[7,66,56,204,207,9,101]);
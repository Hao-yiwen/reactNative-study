__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=function(e){var u=e.onPressIn,p=e.onPressOut,c=e.android_ripple,O=e.pressColor,v=e.pressOpacity,y=void 0===v?.3:v,P=e.style,_=(0,r.default)(e,s),b=(0,n.useTheme)().dark,j=a.useState((function(){return new o.Animated.Value(1)})),w=(0,t.default)(j,1)[0],M=function(e,t){f||o.Animated.timing(w,{toValue:e,duration:t,easing:o.Easing.inOut(o.Easing.quad),useNativeDriver:!0}).start()};return(0,i.jsx)(l,Object.assign({onPressIn:function(e){M(y,0),null==u||u(e)},onPressOut:function(e){M(1,200),null==p||p(e)},android_ripple:f?Object.assign({color:void 0!==O?O:b?'rgba(255, 255, 255, .32)':'rgba(0, 0, 0, .32)'},c):void 0,style:[{opacity:f?1:w},P]},_))};var t=e(_r(d[1])),r=e(_r(d[2])),n=_r(d[3]),a=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n})(_r(d[4])),o=_r(d[5]),i=_r(d[6]),s=["onPressIn","onPressOut","android_ripple","pressColor","pressOpacity","style"];function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}var l=o.Animated.createAnimatedComponent(o.Pressable),f='android'===o.Platform.OS&&o.Platform.Version>=21}),550,[7,51,168,428,101,8,208]);
__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=v;var t=e(_r(d[1])),i=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=o(t);if(i&&i.has(e))return i.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,i&&i.set(e,r),r})(_r(d[2])),r=_r(d[3]),n=_r(d[4]),a=_r(d[5]);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(o=function(e){return e?i:t})(e)}var l=r.Dimensions.get('window'),u=l.width,c=void 0===u?0:u,f=l.height,s=void 0===f?0:f,h='web'===r.Platform.OS||null==n.initialWindowMetrics?{frame:{x:0,y:0,width:c,height:s},insets:{top:0,left:0,right:0,bottom:0}}:n.initialWindowMetrics;function v(e){var t=e.children,o=e.style;return i.useContext(n.SafeAreaInsetsContext)?(0,a.jsx)(r.View,{style:[w.container,o],children:t}):('web'===r.Platform.OS&&(t=(0,a.jsx)(y,{initialMetrics:h,children:t})),(0,a.jsx)(n.SafeAreaProvider,{initialMetrics:h,style:o,children:t}))}var y=function(e){var o=e.initialMetrics,l=e.children,u=i.useRef(null),c=i.useState(o.frame),f=(0,t.default)(c,2),s=f[0],h=f[1];return i.useEffect((function(){if(null!=u.current){var e,t=u.current.getBoundingClientRect();h({x:t.x,y:t.y,width:t.width,height:t.height});var i=new ResizeObserver((function(t){var i=t[0];if(i){var r=i.contentRect,n=r.x,a=r.y,o=r.width,l=r.height;clearTimeout(e),e=setTimeout((function(){h({x:n,y:a,width:o,height:l})}),100)}}));return i.observe(u.current),function(){i.disconnect(),clearTimeout(e)}}}),[]),(0,a.jsxs)(n.SafeAreaFrameContext.Provider,{value:s,children:[(0,a.jsx)("div",{ref:u,style:Object.assign({},r.StyleSheet.absoluteFillObject,{pointerEvents:'none',visibility:'hidden'})}),l]})};v.initialMetrics=h;var w=r.StyleSheet.create({container:{flex:1}})}),559,[7,51,101,8,534,208]);
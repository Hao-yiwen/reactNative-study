__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=function(e){var i=e.screen,c=e.route,f=e.navigation,l=e.routeState,s=e.getState,p=e.setState,v=e.options,y=e.clearOptions,k=t.useRef(),b=t.useCallback((function(){return k.current}),[]),O=(0,a.default)({key:c.key,options:v,navigation:f}).addOptionsGetter,j=t.useCallback((function(e){k.current=e}),[]),_=t.useCallback((function(){var e=s().routes.find((function(e){return e.key===c.key}));return e?e.state:void 0}),[s,c.key]),h=t.useCallback((function(e){var t=s();p(Object.assign({},t,{routes:t.routes.map((function(t){return t.key===c.key?Object.assign({},t,{state:e}):t}))}))}),[s,c.key,p]),C=t.useRef(!0);t.useEffect((function(){C.current=!1})),t.useEffect((function(){return y}),[]);var P=t.useCallback((function(){return C.current}),[]),M=t.useMemo((function(){return{state:l,getState:_,setState:h,getKey:b,setKey:j,getIsInitial:P,addOptionsGetter:O}}),[l,_,h,b,j,P,O]),w=i.getComponent?i.getComponent():i.component;return(0,o.jsx)(r.default.Provider,{value:M,children:(0,o.jsx)(n.default,{children:(0,o.jsx)(u.default,{name:i.name,render:w||i.children,navigation:f,route:c,children:void 0!==w?(0,o.jsx)(w,{navigation:f,route:c}):void 0!==i.children?i.children({navigation:f,route:c}):null})})})};var t=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var o=u?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r})(_r(d[1])),n=e(_r(d[2])),r=e(_r(d[3])),u=e(_r(d[4])),a=e(_r(d[5])),o=_r(d[6]);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}}),492,[7,101,444,450,493,455,208]);
__d((function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.NativeScreenNavigationContainer=e.NativeScreenContainer=void 0;var n=t(r(d[1])),o=r(d[2]),s=(t(r(d[3])),r(d[4])),f=t(r(d[5])),l=t(r(d[6])),v=r(d[7]),u=["enabled","hasTwoStates"],c=e.NativeScreenContainer='web'!==o.Platform.OS?f.default:o.View,S=e.NativeScreenNavigationContainer='web'!==o.Platform.OS?l.default:o.View;e.default=function(t){var f=t.enabled,l=void 0===f?(0,s.screensEnabled)():f,b=t.hasTwoStates,j=(0,n.default)(t,u);if(l&&s.isNativePlatformSupported){if(b){var w='ios'===o.Platform.OS?S:c;return(0,v.jsx)(w,Object.assign({},j))}return(0,v.jsx)(c,Object.assign({},j))}return(0,v.jsx)(o.View,Object.assign({},j))}}),571,[7,168,8,101,564,572,573,208]);
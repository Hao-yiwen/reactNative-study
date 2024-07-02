__d((function(g,_r,_i,_a,m,_e,d){var t,e,n=_r(d[0]),a=n(_r(d[1])),r=n(_r(d[2])),l=n(_r(d[3])),o=n(_r(d[4])),u=n(_r(d[5])),i=n(_r(d[6])),c=n(_r(d[7])),s=n(_r(d[8])),f=n(_r(d[9])),p=n(_r(d[10]));function y(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(y=function(t){return t?n:e})(t)}function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(v=function(){return!!t})()}function k(t){var e,n,a=null!=(e=t.animated)&&e,r=null!=(n=t.showHideTransition)?n:'fade';return{backgroundColor:null!=t.backgroundColor?{value:t.backgroundColor,animated:a}:null,barStyle:null!=t.barStyle?{value:t.barStyle,animated:a}:null,translucent:t.translucent,hidden:null!=t.hidden?{value:t.hidden,animated:a,transition:r}:null,networkActivityIndicatorVisible:t.networkActivityIndicatorVisible}}var S=(function(t){function e(){var t,n,r,u;(0,a.default)(this,e);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=this,r=e,u=[].concat(c),r=(0,o.default)(r),(t=(0,l.default)(n,v()?Reflect.construct(r,u||[],(0,o.default)(n).constructor):r.apply(n,u)))._stackEntry=null,t}return(0,u.default)(e,t),(0,r.default)(e,[{key:"componentDidMount",value:function(){this._stackEntry=e.pushStackEntry(this.props)}},{key:"componentWillUnmount",value:function(){e.popStackEntry(this._stackEntry)}},{key:"componentDidUpdate",value:function(){this._stackEntry=e.replaceStackEntry(this._stackEntry,this.props)}},{key:"render",value:function(){return null}}],[{key:"setHidden",value:function(t,n){n=n||'none',e._defaultProps.hidden.value=t,'ios'===c.default.OS?f.default.setHidden(t,n):'android'===c.default.OS&&s.default.setHidden(t)}},{key:"setBarStyle",value:function(t,n){n=n||!1,e._defaultProps.barStyle.value=t,'ios'===c.default.OS?f.default.setStyle(t,n):'android'===c.default.OS&&s.default.setStyle(t)}},{key:"setNetworkActivityIndicatorVisible",value:function(t){'ios'===c.default.OS?(e._defaultProps.networkActivityIndicatorVisible=t,f.default.setNetworkActivityIndicatorVisible(t)):console.warn('`setNetworkActivityIndicatorVisible` is only available on iOS')}},{key:"setBackgroundColor",value:function(t,n){if('android'===c.default.OS){n=n||!1,e._defaultProps.backgroundColor.value=t;var a=(0,i.default)(t);null!=a?((0,p.default)('number'==typeof a,'Unexpected color given for StatusBar.setBackgroundColor'),s.default.setColor(a,n)):console.warn(`\`StatusBar.setBackgroundColor\`: Color ${t} parsed to null or undefined`)}else console.warn('`setBackgroundColor` is only available on Android')}},{key:"setTranslucent",value:function(t){'android'===c.default.OS?(e._defaultProps.translucent=t,s.default.setTranslucent(t)):console.warn('`setTranslucent` is only available on Android')}},{key:"pushStackEntry",value:function(t){var n=k(t);return e._propsStack.push(n),e._updatePropsStack(),n}},{key:"popStackEntry",value:function(t){var n=e._propsStack.indexOf(t);-1!==n&&e._propsStack.splice(n,1),e._updatePropsStack()}},{key:"replaceStackEntry",value:function(t,n){var a=k(n),r=e._propsStack.indexOf(t);return-1!==r&&(e._propsStack[r]=a),e._updatePropsStack(),a}}])})((function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=y(e);if(n&&n.has(t))return n.get(t);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&{}.hasOwnProperty.call(t,l)){var o=r?Object.getOwnPropertyDescriptor(t,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=t[l]}return a.default=t,n&&n.set(t,a),a})(_r(d[11])).Component);t=S,S._propsStack=[],S._defaultProps=k({backgroundColor:'android'===c.default.OS&&null!=(e=s.default.getConstants().DEFAULT_BACKGROUND_COLOR)?e:'black',barStyle:'default',translucent:!1,hidden:!1,networkActivityIndicatorVisible:!1}),S._updateImmediate=null,S._currentValues=null,S.currentHeight='android'===c.default.OS?s.default.getConstants().HEIGHT:null,S._updatePropsStack=function(){clearImmediate(t._updateImmediate),t._updateImmediate=setImmediate((function(){var e,n,a=t._currentValues,r=(e=t._propsStack,n=t._defaultProps,e.reduce((function(t,e){for(var n in e)null!=e[n]&&(t[n]=e[n]);return t}),Object.assign({},n)));if('ios'===c.default.OS)a&&a.barStyle.value===r.barStyle.value||f.default.setStyle(r.barStyle.value,r.barStyle.animated||!1),a&&a.hidden.value===r.hidden.value||f.default.setHidden(r.hidden.value,r.hidden.animated?r.hidden.transition:'none'),a&&a.networkActivityIndicatorVisible===r.networkActivityIndicatorVisible||f.default.setNetworkActivityIndicatorVisible(r.networkActivityIndicatorVisible);else if('android'===c.default.OS){s.default.setStyle(r.barStyle.value);var l=(0,i.default)(r.backgroundColor.value);null==l?console.warn(`\`StatusBar._updatePropsStack\`: Color ${r.backgroundColor.value} parsed to null or undefined`):((0,p.default)('number'==typeof l,'Unexpected color given in StatusBar._updatePropsStack'),s.default.setColor(l,r.backgroundColor.animated)),a&&a.hidden.value===r.hidden.value||s.default.setHidden(r.hidden.value),a&&a.translucent===r.translucent&&!r.translucent||s.default.setTranslucent(r.translucent)}t._currentValues=r}))},m.exports=S}),360,[7,14,15,36,38,39,66,56,361,362,9,101]);
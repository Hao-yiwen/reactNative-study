__d((function(g,_r,_i,_a,m,_e,d){var t=_r(d[0]),e=t(_r(d[1])),r=t(_r(d[2])),n=t(_r(d[3])),o=t(_r(d[4])),a=t(_r(d[5])),i=t(_r(d[6])),l=(t(_r(d[7])),t(_r(d[8]))),s=_r(d[9]),u=(function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=p(e);if(r&&r.has(t))return r.get(t);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&{}.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n})(_r(d[10])),c=_r(d[11]);function p(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(p=function(t){return t?r:e})(t)}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}var v=window.__REACT_DEVTOOLS_GLOBAL_HOOK__,h=(function(t){function l(){var t,r,a,i;(0,e.default)(this,l);for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return r=this,a=l,i=[].concat(u),a=(0,o.default)(a),(t=(0,n.default)(r,f()?Reflect.construct(a,i||[],(0,o.default)(r).constructor):a.apply(r,i))).state={inspector:null,devtoolsOverlay:null,traceUpdateOverlay:null,mainKey:1,hasError:!1},t._subscription=null,t._reactDevToolsAgentListener=null,t}return(0,a.default)(l,t),(0,r.default)(l,[{key:"mountReactDevToolsOverlays",value:function(){var t=_r(d[12]).default,e=(0,c.jsx)(t,{inspectedView:this._mainRef}),r=_r(d[13]).default,n=(0,c.jsx)(r,{});this.setState({devtoolsOverlay:e,traceUpdateOverlay:n})}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){null!=this._subscription&&this._subscription.remove(),null!=v&&null!=this._reactDevToolsAgentListener&&v.off('react-devtools',this._reactDevToolsAgentListener)}},{key:"render",value:function(){var t=this,e=(0,c.jsx)(i.default,{collapsable:!this.state.inspector&&!this.state.devtoolsOverlay,pointerEvents:"box-none",style:y.appContainer,ref:function(e){t._mainRef=e},children:this.props.children},this.state.mainKey),r=this.props.WrapperComponent;return null!=r&&(e=(0,c.jsx)(r,{initialProps:this.props.initialProps,fabric:!0===this.props.fabric,showArchitectureIndicator:!0===this.props.showArchitectureIndicator,children:e})),(0,c.jsx)(s.RootTagContext.Provider,{value:(0,s.createRootTag)(this.props.rootTag),children:(0,c.jsxs)(i.default,{style:y.appContainer,pointerEvents:"box-none",children:[!this.state.hasError&&e,this.state.traceUpdateOverlay,this.state.devtoolsOverlay,this.state.inspector,null]})})}}])})(u.Component);h.getDerivedStateFromError=void 0;var y=l.default.create({appContainer:{flex:1}});m.exports=h}),203,[7,14,15,36,38,39,204,12,210,211,101,208,212,219]);
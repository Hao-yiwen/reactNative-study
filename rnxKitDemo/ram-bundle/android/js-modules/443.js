__d((function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.NOT_INITIALIZED_ERROR=void 0,e.default=function(){var t=[].concat((0,o.default)(Object.keys(u.CommonActions)),['addListener','removeListener','resetRoot','dispatch','isFocused','canGoBack','getRootState','getState','getParent','getCurrentRoute','getCurrentOptions']),s={},f=function(t,n){s[t]&&(s[t]=s[t].filter((function(t){return t!==n})))},l=null,v=Object.assign({get current(){return l},set current(t){l=t,null!=t&&Object.entries(s).forEach((function(o){var u=(0,n.default)(o,2),c=u[0];u[1].forEach((function(n){t.addListener(c,n)}))}))},isReady:function(){return null!=l&&l.isReady()}},t.reduce((function(t,n){return t[n]=function(){for(var t=arguments.length,o=new Array(t),u=0;u<t;u++)o[u]=arguments[u];var v;if(null!=l)return(v=l)[n].apply(v,o);switch(n){case'addListener':var h=o[0],p=o[1];return s[h]=s[h]||[],s[h].push(p),function(){return f(h,p)};case'removeListener':var R=o[0],O=o[1];f(R,O);break;default:console.error(c)}},t}),{}));return v};var n=t(r(d[1])),o=t(r(d[2])),u=r(d[3]),c=e.NOT_INITIALIZED_ERROR="The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details."}),443,[7,51,25,433]);
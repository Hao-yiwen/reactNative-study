__d((function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r(d[1])),s=t(r(d[2])),u=new((function(){return(0,s.default)((function t(){(0,n.default)(this,t),this._listeners=[]}),[{key:"addListener",value:function(t){this._listeners.push(t)}},{key:"removeListener",value:function(t){var n=this._listeners.indexOf(t);n>-1&&this._listeners.splice(n,1)}},{key:"emitEvent",value:function(t){if(0!==this._listeners.length){var n=t();this._listeners.forEach((function(t){return t(n)}))}}}])})());e.default=u}),246,[7,14,15]);
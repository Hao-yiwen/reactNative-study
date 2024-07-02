__d((function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.AnimatedEvent=void 0,e.attachNativeEvent=c;var n=t(r(d[1])),s=t(r(d[2])),o=r(d[3]),f=t(r(d[4])),l=t(r(d[5])),u=t(r(d[6])),v=t(r(d[7]));function c(t,n,s,c){var _=[];(0,v.default)(s[0]&&s[0].nativeEvent,'Native driven events only support animated values contained inside `nativeEvent`.'),(function t(n,s){if(n instanceof l.default)n.__makeNative(c),_.push({nativeEventPath:s,animatedValueTag:n.__getNativeTag()});else if(n instanceof u.default)t(n.x,s.concat('x')),t(n.y,s.concat('y'));else if('object'==typeof n)for(var o in n)t(n[o],s.concat(o))})(s[0].nativeEvent,[]);var h=(0,o.findNodeHandle)(t);return null!=h&&_.forEach((function(t){f.default.API.addAnimatedEventToView(h,n,t)})),{detach:function(){null!=h&&_.forEach((function(t){f.default.API.removeAnimatedEventFromView(h,n,t.animatedValueTag)}))}}}e.AnimatedEvent=(function(){return(0,s.default)((function t(s,o){var l=this;(0,n.default)(this,t),this._listeners=[],this._callListeners=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];l._listeners.forEach((function(t){return t.apply(void 0,n)}))},this._argMapping=s,null==o&&(console.warn('Animated.event now requires a second argument for options'),o={useNativeDriver:!1}),o.listener&&this.__addListener(o.listener),this._attachedEvent=null,this.__isNative=f.default.shouldUseNativeDriver(o),this.__platformConfig=o.platformConfig}),[{key:"__addListener",value:function(t){this._listeners.push(t)}},{key:"__removeListener",value:function(t){this._listeners=this._listeners.filter((function(n){return n!==t}))}},{key:"__attach",value:function(t,n){(0,v.default)(this.__isNative,'Only native driven events need to be attached.'),this._attachedEvent=c(t,n,this._argMapping,this.__platformConfig)}},{key:"__detach",value:function(t,n){(0,v.default)(this.__isNative,'Only native driven events need to be detached.'),this._attachedEvent&&this._attachedEvent.detach()}},{key:"__getHandler",value:function(){var t=this;if(this.__isNative)return this._callListeners;return function(){for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];var f=function t(n,s){if(n instanceof l.default)'number'==typeof s&&n.setValue(s);else if(n instanceof u.default)'object'==typeof s&&(t(n.x,s.x),t(n.y,s.y));else if('object'==typeof n)for(var o in n)t(n[o],s[o])};t._argMapping.forEach((function(t,n){f(t,s[n])})),t._callListeners.apply(t,s)}}}])})()}),273,[7,14,15,19,274,277,285,9]);
__d((function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r(d[1])),s=t(r(d[2])),_=t(r(d[3])),u=t(r(d[4])),o=_.default.API,l=1;e.default=(function(){return(0,s.default)((function t(){(0,n.default)(this,t),this._listeners={}}),[{key:"__attach",value:function(){}},{key:"__detach",value:function(){this.removeAllListeners(),this.__isNative&&null!=this.__nativeTag&&(_.default.API.dropAnimatedNode(this.__nativeTag),this.__nativeTag=void 0)}},{key:"__getValue",value:function(){}},{key:"__getAnimatedValue",value:function(){return this.__getValue()}},{key:"__addChild",value:function(t){}},{key:"__removeChild",value:function(t){}},{key:"__getChildren",value:function(){return[]}},{key:"__makeNative",value:function(t){if(!this.__isNative)throw new Error('This node cannot be made a "native" animated node');this._platformConfig=t,this.hasListeners()&&this._startListeningToNativeValueUpdates()}},{key:"addListener",value:function(t){var n=String(l++);return this._listeners[n]=t,this.__isNative&&this._startListeningToNativeValueUpdates(),n}},{key:"removeListener",value:function(t){delete this._listeners[t],this.__isNative&&!this.hasListeners()&&this._stopListeningForNativeValueUpdates()}},{key:"removeAllListeners",value:function(){this._listeners={},this.__isNative&&this._stopListeningForNativeValueUpdates()}},{key:"hasListeners",value:function(){return!!Object.keys(this._listeners).length}},{key:"_startListeningToNativeValueUpdates",value:function(){var t=this;this.__nativeAnimatedValueListener&&!this.__shouldUpdateListenersForNewNativeTag||(this.__shouldUpdateListenersForNewNativeTag&&(this.__shouldUpdateListenersForNewNativeTag=!1,this._stopListeningForNativeValueUpdates()),o.startListeningToAnimatedNodeValue(this.__getNativeTag()),this.__nativeAnimatedValueListener=_.default.nativeEventEmitter.addListener('onAnimatedValueUpdate',(function(n){n.tag===t.__getNativeTag()&&t.__onAnimatedValueUpdateReceived(n.value)})))}},{key:"__onAnimatedValueUpdateReceived",value:function(t){this.__callListeners(t)}},{key:"__callListeners",value:function(t){for(var n in this._listeners)this._listeners[n]({value:t})}},{key:"_stopListeningForNativeValueUpdates",value:function(){this.__nativeAnimatedValueListener&&(this.__nativeAnimatedValueListener.remove(),this.__nativeAnimatedValueListener=null,o.stopListeningToAnimatedNodeValue(this.__getNativeTag()))}},{key:"__getNativeTag",value:function(){var t;_.default.assertNativeAnimatedModule(),(0,u.default)(this.__isNative,'Attempt to get native tag from node not marked as "native"');var n=null!=(t=this.__nativeTag)?t:_.default.generateNewNodeTag();if(null==this.__nativeTag){this.__nativeTag=n;var s=this.__getNativeConfig();this._platformConfig&&(s.platformConfig=this._platformConfig),_.default.API.createAnimatedNode(n,s),this.__shouldUpdateListenersForNewNativeTag=!0}return n}},{key:"__getNativeConfig",value:function(){throw new Error('This JS animated node type cannot be used as native animated node')}},{key:"toJSON",value:function(){return this.__getValue()}},{key:"__getPlatformConfig",value:function(){return this._platformConfig}},{key:"__setPlatformConfig",value:function(t){this._platformConfig=t}}])})()}),284,[7,14,15,274,9]);
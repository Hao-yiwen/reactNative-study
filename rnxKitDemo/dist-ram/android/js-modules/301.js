__d((function(g,r,i,_a,m,_e,d){'use strict';var t=r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=void 0;var e=t(r(d[1])),a=t(r(d[2])),u=t(r(d[3])),l=t(r(d[4])),_=t(r(d[5])),n=t(r(d[6])),f=t(r(d[7])),o=t(r(d[8]));function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}_e.default=(function(t){function o(t,a,l){var n,f,c,h;return(0,e.default)(this,o),f=this,c=o,c=(0,_.default)(c),(n=(0,u.default)(f,s()?Reflect.construct(c,h||[],(0,_.default)(f).constructor):c.apply(f,h)))._a=t,n._min=a,n._max=l,n._value=n._lastValue=n._a.__getValue(),n}return(0,n.default)(o,t),(0,a.default)(o,[{key:"__makeNative",value:function(t){this._a.__makeNative(t),(0,l.default)((0,_.default)(o.prototype),"__makeNative",this).call(this,t)}},{key:"interpolate",value:function(t){return new f.default(this,t)}},{key:"__getValue",value:function(){var t=this._a.__getValue(),e=t-this._lastValue;return this._lastValue=t,this._value=Math.min(Math.max(this._value+e,this._min),this._max),this._value}},{key:"__attach",value:function(){this._a.__addChild(this)}},{key:"__detach",value:function(){this._a.__removeChild(this),(0,l.default)((0,_.default)(o.prototype),"__detach",this).call(this)}},{key:"__getNativeConfig",value:function(){return{type:'diffclamp',input:this._a.__getNativeTag(),min:this._min,max:this._max}}}])})(o.default)}),301,[7,14,15,36,147,38,39,280,283]);
__d((function(g,r,i,_a,m,_e,d){'use strict';var e=r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=void 0;var t=e(r(d[1])),a=e(r(d[2])),n=e(r(d[3])),u=e(r(d[4])),o=e(r(d[5])),_=e(r(d[6])),l=e(r(d[7])),s=e(r(d[8])),f=e(r(d[9])),c=e(r(d[10]));function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}_e.default=(function(e){function c(e,a){var u,_,l,v;return(0,t.default)(this,c),_=this,l=c,l=(0,o.default)(l),(u=(0,n.default)(_,h()?Reflect.construct(l,v||[],(0,o.default)(_).constructor):l.apply(_,v)))._warnedAboutDivideByZero=!1,(0===a||a instanceof s.default&&0===a.__getValue())&&console.error('Detected potential division by zero in AnimatedDivision'),u._a='number'==typeof e?new f.default(e):e,u._b='number'==typeof a?new f.default(a):a,u}return(0,_.default)(c,e),(0,a.default)(c,[{key:"__makeNative",value:function(e){this._a.__makeNative(e),this._b.__makeNative(e),(0,u.default)((0,o.default)(c.prototype),"__makeNative",this).call(this,e)}},{key:"__getValue",value:function(){var e=this._a.__getValue(),t=this._b.__getValue();return 0===t?(this._warnedAboutDivideByZero||(console.error('Detected division by zero in AnimatedDivision'),this._warnedAboutDivideByZero=!0),0):(this._warnedAboutDivideByZero=!1,e/t)}},{key:"interpolate",value:function(e){return new l.default(this,e)}},{key:"__attach",value:function(){this._a.__addChild(this),this._b.__addChild(this)}},{key:"__detach",value:function(){this._a.__removeChild(this),this._b.__removeChild(this),(0,u.default)((0,o.default)(c.prototype),"__detach",this).call(this)}},{key:"__getNativeConfig",value:function(){return{type:'division',input:[this._a.__getNativeTag(),this._b.__getNativeTag()]}}}])})(c.default)}),302,[7,14,15,36,147,38,39,280,284,277,283]);
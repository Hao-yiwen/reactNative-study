__d((function(g,r,i,a,m,_e,d){'use strict';var t=r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=void 0;var e=t(r(d[1])),n=t(r(d[2])),o=t(r(d[3])),s=t(r(d[4])),l=t(r(d[5])),u=t(r(d[6])),_=t(r(d[7])),c=t(r(d[8]));function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}_e.default=(function(t){function c(t){var n,s,u,f,v,p,y;return(0,e.default)(this,c),v=this,p=c,p=(0,l.default)(p),(f=(0,o.default)(v,h()?Reflect.construct(p,y||[],(0,l.default)(v).constructor):p.apply(v,y)))._deceleration=null!=(n=t.deceleration)?n:.998,f._velocity=t.velocity,f._useNativeDriver=_.default.shouldUseNativeDriver(t),f._platformConfig=t.platformConfig,f.__isInteraction=null!=(s=t.isInteraction)?s:!f._useNativeDriver,f.__iterations=null!=(u=t.iterations)?u:1,f}return(0,u.default)(c,t),(0,n.default)(c,[{key:"__getNativeAnimationConfig",value:function(){return{type:'decay',deceleration:this._deceleration,velocity:this._velocity,iterations:this.__iterations,platformConfig:this._platformConfig}}},{key:"start",value:function(t,e,n,o,s){this.__active=!0,this._lastValue=t,this._fromValue=t,this._onUpdate=e,this.__onEnd=n,this._startTime=Date.now(),this._useNativeDriver?this.__startNativeAnimation(s):this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this))}},{key:"onUpdate",value:function(){var t=Date.now(),e=this._fromValue+this._velocity/(1-this._deceleration)*(1-Math.exp(-(1-this._deceleration)*(t-this._startTime)));this._onUpdate(e),Math.abs(this._lastValue-e)<.1?this.__debouncedOnEnd({finished:!0}):(this._lastValue=e,this.__active&&(this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this))))}},{key:"stop",value:function(){(0,s.default)((0,l.default)(c.prototype),"stop",this).call(this),this.__active=!1,g.cancelAnimationFrame(this._animationFrame),this.__debouncedOnEnd({finished:!1})}}])})(c.default)}),286,[7,14,15,36,147,38,39,274,287]);
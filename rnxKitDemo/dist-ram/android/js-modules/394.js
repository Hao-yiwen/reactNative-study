__d((function(g,r,i,a,m,e,d){var t=r(d[0]),n=t(r(d[1])),u=t(r(d[2])),s=t(r(d[3])),l=t(r(d[4])),o=t(r(d[5])),c=t(r(d[6])),p=(function(){return(0,u.default)((function t(){var u=this;if((0,n.default)(this,t),this.currentState=null,null==c.default)this.isAvailable=!1;else{this.isAvailable=!0;var p=new s.default('ios'!==o.default.OS?null:c.default);this._emitter=p,this.currentState=c.default.getConstants().initialAppState;var f=!1;p.addListener('appStateDidChange',(function(t){f=!0,u.currentState=t.app_state})),c.default.getCurrentAppState((function(t){f||u.currentState===t.app_state||(u.currentState=t.app_state,p.emit('appStateDidChange',t))}),l.default)}}),[{key:"addEventListener",value:function(t,n){var u=this._emitter;if(null==u)throw new Error('Cannot use AppState when `isAvailable` is false.');switch(t){case'change':var s=n;return u.addListener('appStateDidChange',(function(t){s(t.app_state)}));case'memoryWarning':var l=n;return u.addListener('memoryWarning',l);case'blur':case'focus':var o=n;return u.addListener('appStateFocusChange',(function(n){'blur'!==t||n||o(),'focus'===t&&n&&o()}))}throw new Error('Trying to subscribe to unknown event: '+t)}}])})();m.exports=new p}),394,[7,14,15,158,395,56,396]);
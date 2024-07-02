__d((function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]),l=(function(){return s((function t(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{viewAreaCoveragePercentThreshold:0};n(this,t),this._hasInteracted=!1,this._timers=new Set,this._viewableIndices=[],this._viewableItems=new Map,this._config=s}),[{key:"dispose",value:function(){this._timers.forEach(clearTimeout)}},{key:"computeViewableItems",value:function(t,n,s,l,h){var u=t.getItemCount(t.data),v=this._config,f=v.itemVisiblePercentThreshold,_=v.viewAreaCoveragePercentThreshold,w=null!=_,I=w?_:f;o(null!=I&&null!=f!=(null!=_),'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');var b=[];if(0===u)return b;var y=-1,p=h||{first:0,last:u-1},T=p.first,k=p.last;if(k>=u)return console.warn('Invalid render range computing viewability '+JSON.stringify({renderRange:h,itemCount:u})),[];for(var V=T;V<=k;V++){var C=l(V,t);if(C){var M=C.offset-n,P=M+C.length;if(M<s&&P>0)y=V,c(w,I,M,P,s,C.length)&&b.push(V);else if(y>=0)break}}return b}},{key:"onUpdate",value:function(t,n,s,o,l,c,h){var u=this,v=t.getItemCount(t.data);if((!this._config.waitForInteraction||this._hasInteracted)&&0!==v&&o(0,t)){var f=[];if(v&&(f=this.computeViewableItems(t,n,s,o,h)),this._viewableIndices.length!==f.length||!this._viewableIndices.every((function(t,n){return t===f[n]})))if(this._viewableIndices=f,this._config.minimumViewTime){var _=setTimeout((function(){u._timers.delete(_),u._onUpdateSync(t,f,c,l)}),this._config.minimumViewTime);this._timers.add(_)}else this._onUpdateSync(t,f,c,l)}}},{key:"resetViewableIndices",value:function(){this._viewableIndices=[]}},{key:"recordInteraction",value:function(){this._hasInteracted=!0}},{key:"_onUpdateSync",value:function(n,s,o,l){var c=this;s=s.filter((function(t){return c._viewableIndices.includes(t)}));var h=this._viewableItems,u=new Map(s.map((function(t){var s=l(t,!0,n);return[s.key,s]}))),v=[];for(var f of u){var _=t(f,2),w=_[0],I=_[1];h.has(w)||v.push(I)}for(var b of h){var y=t(b,2),p=y[0],T=y[1];u.has(p)||v.push(Object.assign({},T,{isViewable:!1}))}v.length>0&&(this._viewableItems=u,o({viewableItems:Array.from(u.values()),changed:v,viewabilityConfig:this._config}))}}])})();function c(t,n,s,o,l,c){if(u(s,o,l))return!0;var v=h(s,o,l);return 100*(t?v/l:v/c)>=n}function h(t,n,s){var o=Math.min(n,s)-Math.max(t,0);return Math.max(0,o)}function u(t,n,s){return t>=0&&n<=s&&n>t}m.exports=l}),320,[51,14,15,9]);
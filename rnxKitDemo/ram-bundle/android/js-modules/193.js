__d((function(g,r,i,a,m,e,d){var t=r(d[0]),u=t(r(d[1])),l=t(r(d[2])),n=t(r(d[3])),o=t(r(d[4])),c=t(r(d[5])),s=t(r(d[6]));function f(){_.addFileSource('react_hierarchy.txt',(function(){return r(d[7])()}))}var _=(function(){function t(){(0,l.default)(this,t)}return(0,n.default)(t,null,[{key:"_maybeInit",value:function(){t._subscription||(t._subscription=o.default.addListener('collectBugExtraData',t.collectExtraData,null),f()),t._redboxSubscription||(t._redboxSubscription=o.default.addListener('collectRedBoxExtraData',t.collectExtraData,null))}},{key:"addSource",value:function(u,l){return this._addSource(u,l,t._extraSources)}},{key:"addFileSource",value:function(u,l){return this._addSource(u,l,t._fileSources)}},{key:"_addSource",value:function(u,l,n){return t._maybeInit(),n.has(u)&&console.warn(`BugReporting.add* called multiple times for same key '${u}'`),n.set(u,l),{remove:function(){n.delete(u)}}}},{key:"collectExtraData",value:function(){var l={};for(var n of t._extraSources){var o=(0,u.default)(n,2),f=o[0],_=o[1];l[f]=_()}var x={};for(var S of t._fileSources){var v=(0,u.default)(S,2),p=v[0],b=v[1];x[p]=b()}return null!=s.default&&null!=s.default.setExtraData&&s.default.setExtraData(l,x),null!=c.default&&null!=c.default.setExtraData&&c.default.setExtraData(l,'From BugReporting.js'),{extras:l,files:x}}}])})();_._extraSources=new Map,_._fileSources=new Map,_._subscription=null,_._redboxSubscription=null,m.exports=_}),193,[7,51,14,15,12,194,195,196]);
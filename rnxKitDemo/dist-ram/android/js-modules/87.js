__d((function(g,r,i,a,m,e,d){var n=r(d[0]),o=r(d[1]),t=n(r(d[2]));function u(n){return n%2==0}var s=!0===g.RN$Bridgeless?r(d[3]):r(d[4]),f=Object.assign({},s,{measure:function(n,f){if(u(n)){var c=(0,t.default)((0,o.getFabricUIManager)()),l=c.findShadowNodeByTag_DEPRECATED(n);l?c.measure(l,f):(console.warn(`measure cannot find view with tag #${n}`),f())}else s.measure(n,f)},measureInWindow:function(n,f){if(u(n)){var c=(0,t.default)((0,o.getFabricUIManager)()),l=c.findShadowNodeByTag_DEPRECATED(n);l?c.measureInWindow(l,f):(console.warn(`measure cannot find view with tag #${n}`),f())}else s.measureInWindow(n,f)},measureLayout:function(n,f,c,l){if(u(n)){var w=(0,t.default)((0,o.getFabricUIManager)()),E=w.findShadowNodeByTag_DEPRECATED(n),T=w.findShadowNodeByTag_DEPRECATED(f);if(!E||!T)return;w.measureLayout(E,T,c,l)}else s.measureLayout(n,f,c,l)},measureLayoutRelativeToParent:function(n,f,c){if(u(n)){console.warn('RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450');var l=(0,t.default)((0,o.getFabricUIManager)()),w=l.findShadowNodeByTag_DEPRECATED(n);w&&l.measure(w,(function(n,o,t,u,s,f){c(n,o,t,u)}))}else s.measureLayoutRelativeToParent(n,f,c)},dispatchViewManagerCommand:function(n,f,c){if(u(n)){var l=(0,t.default)((0,o.getFabricUIManager)()),w=l.findShadowNodeByTag_DEPRECATED(n);w&&(f=`${f}`,l.dispatchCommand(w,f,c))}else s.dispatchViewManagerCommand(n,f,c)}});m.exports=f}),87,[7,88,89,90,92]);
__d((function(g,r,i,a,m,e,d){var n=r(d[0])(r(d[1])),t=r(d[2]),o=(r(d[3]),r(d[4])),c=r(d[5]),s=new n.default,u={Events:{interactionStart:'interactionStart',interactionComplete:'interactionComplete'},runAfterInteractions:function(n){var t=[],o=new Promise((function(o){E(),n&&t.push(n),t.push({run:o,name:'resolve '+(n&&n.name||'?')}),p.enqueueTasks(t)}));return{then:o.then.bind(o),cancel:function(){p.cancelTasks(t)}}},createInteractionHandle:function(){E();var n=++T;return l.add(n),n},clearInteractionHandle:function(n){c(!!n,'InteractionManager: Must provide a handle to clear.'),E(),l.delete(n),v.add(n)},addListener:s.addListener.bind(s),setDeadline:function(n){w=n}},f=new Set,l=new Set,v=new Set,p=new o({onMoreTasks:E}),h=0,T=0,w=-1;function E(){h||(h=w>0?setTimeout(S,0):setImmediate(S))}function S(){h=0;var n=f.size;l.forEach((function(n){return f.add(n)})),v.forEach((function(n){return f.delete(n)}));var o=f.size;if(0!==n&&0===o?s.emit(u.Events.interactionComplete):0===n&&0!==o&&s.emit(u.Events.interactionStart),0===o)for(;p.hasTasksToProcess();)if(p.processNext(),w>0&&t.getEventLoopRunningTime()>=w){E();break}l.clear(),v.clear()}m.exports=u}),278,[7,13,23,156,279,9]);
__d((function(g,r,_i,a,m,e,d){'use strict';var t=/^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/,n=/^ {4}... skipping (\d+) frames$/;function s(s){var u,i=s.match(t);if(i)return{type:'FRAME',functionName:i[1],location:'native'===i[2]?{type:'NATIVE'}:'address at '===i[3]?(u=i[4],'InternalBytecode.js'===u?{type:'INTERNAL_BYTECODE',sourceUrl:i[4],line1Based:Number.parseInt(i[5],10),virtualOffset0Based:Number.parseInt(i[6],10)}:{type:'BYTECODE',sourceUrl:i[4],line1Based:Number.parseInt(i[5],10),virtualOffset0Based:Number.parseInt(i[6],10)}):{type:'SOURCE',sourceUrl:i[4],line1Based:Number.parseInt(i[5],10),column1Based:Number.parseInt(i[6],10)}};var p=s.match(n);return p?{type:'SKIPPED',count:Number.parseInt(p[1],10)}:void 0}m.exports=function(t){for(var n=t.split(/\n/),u=[],i=-1,p=0;p<n.length;++p){var o=n[p];if(o){var c=s(o);c?u.push(c):(i=p,u=[])}}return{message:n.slice(0,i+1).join('\n'),entries:u}}}),46,[]);
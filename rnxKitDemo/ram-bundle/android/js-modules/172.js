__d((function(g,r,i,a,m,_e,d){'use strict';var t=r(d[0]),n=r(d[1]),e=r(d[2]),u=r(d[3]),o=r(d[4]);function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}var s=r(d[5]),l=r(d[6]),f=(function(s){function f(n,o,s){var h,p,v,y;return t(this,f),l(null!=n&&null!=o,'Failed to construct `File`: Must pass both `parts` and `name` arguments.'),p=this,y=[n,s],v=u(v=f),(h=e(p,c()?Reflect.construct(v,y||[],u(p).constructor):v.apply(p,y))).data.name=o,h}return o(f,s),n(f,[{key:"name",get:function(){return l(null!=this.data.name,'Files must have a name set.'),this.data.name}},{key:"lastModified",get:function(){return this.data.lastModified||0}}])})(s);m.exports=f}),172,[14,15,36,38,39,151,9]);
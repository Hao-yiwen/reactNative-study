__d((function(g,r,i,a,m,e,d){'use strict';var t,n,s,u,o=r(d[0]),f=r(d[1]).pickScale,c=r(d[2]);function l(){if(u)return u;var t=g.nativeExtensions&&g.nativeExtensions.SourceCode;return t||(t=r(d[3]).default),u=t.getConstants().scriptURL}function v(){if(void 0===n){var t=l(),s=t&&t.match(/^https?:\/\/.*?\//);n=s?s[0]:null}return n}function p(t){if(t){if(t.startsWith('assets://'))return null;(t=t.substring(0,t.lastIndexOf('/')+1)).includes('://')||(t='file://'+t)}return t}function x(n){if('object'==typeof n)return n;var u=c.getAssetByID(n);if(!u)return null;var f=new o(v(),(void 0===s&&(s=p(l())),s),u);return t?t(f):f.defaultAsset()}x.pickScale=f,x.setCustomSourceTransformer=function(n){t=n},m.exports=x}),74,[75,79,81,82]);
__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]),t=e(_r(d[1])),a=e(_r(d[2])),i=e(_r(d[3])),n=e(_r(d[4])),r=e(_r(d[5])),l=e(_r(d[6])),o=e(_r(d[7])),u=_r(d[8]),c=_r(d[9]),s=e(_r(d[10])),f=e(_r(d[11])),h=e(_r(d[12])),b=e(_r(d[13])),y=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=w(t);if(a&&a.has(e))return a.get(e);var i={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(i,r,l):i[r]=e[r]}return i.default=e,a&&a.set(e,i),i})(_r(d[14])),p=_r(d[15]),v=["height","width"];function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(w=function(e){return e?a:t})(e)}var S=1;function I(e,t){var a=S++;return t&&t(a),f.default.prefetchImage(e,a)}function j(){return(j=(0,a.default)((function*(e){return yield f.default.queryCache(e)}))).apply(this,arguments)}var z=y.forwardRef((function(e,a){var n,o,f,y,w,S,I,j,z,_,M,P,x,L,k,C,F=(0,u.getImageSourcesFromImageProps)(e)||{uri:void 0,width:void 0,height:void 0},T=(0,h.default)(e.defaultSource),W=(0,h.default)(e.loadingIndicatorSource);if(e.children)throw new Error('The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.');if(e.defaultSource&&e.loadingIndicatorSource)throw new Error('The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.');if(Array.isArray(F))k=(0,i.default)([O.base,e.style]),C=F;else{var E=F.width,q=void 0===E?e.width:E,A=F.height,B=void 0===A?e.height:A,R=F.uri;k=(0,i.default)([{width:q,height:B},O.base,e.style]),C=[F],''===R&&console.warn('source.uri should not be an empty string')}e.height,e.width;var D=(0,t.default)(e,v),H=e.onLoadStart,N=e.onLoad,G=e.onLoadEnd,J=e.onError,K=Object.assign({},D,{style:k,shouldNotifyLoadEvents:!!(H||N||G||J),src:C,headers:(null==F||null==(n=F[0])?void 0:n.headers)||(null==F?void 0:F.headers),defaultSrc:T?T.uri:null,loadingIndicatorSrc:W?W.uri:null,ref:a,accessibilityLabel:null!=(o=null!=(f=e['aria-label'])?f:e.accessibilityLabel)?o:e.alt,accessibilityLabelledBy:null!=(y=null==e?void 0:e['aria-labelledby'])?y:null==e?void 0:e.accessibilityLabelledBy,accessible:void 0!==e.alt||e.accessible,accessibilityState:{busy:null!=(w=e['aria-busy'])?w:null==(S=e.accessibilityState)?void 0:S.busy,checked:null!=(I=e['aria-checked'])?I:null==(j=e.accessibilityState)?void 0:j.checked,disabled:null!=(z=e['aria-disabled'])?z:null==(_=e.accessibilityState)?void 0:_.disabled,expanded:null!=(M=e['aria-expanded'])?M:null==(P=e.accessibilityState)?void 0:P.expanded,selected:null!=(x=e['aria-selected'])?x:null==(L=e.accessibilityState)?void 0:L.selected}}),Q=(k&&k.objectFit?(0,c.convertObjectFitToResizeMode)(k.objectFit):null)||e.resizeMode||k&&k.resizeMode||'cover';return(0,p.jsx)(l.default.Consumer,{children:function(e){var t=null!==e?Object.assign({},K,{internal_analyticTag:e}):K;return(0,p.jsx)(r.default.Consumer,{children:function(e){return e?(0,p.jsx)(b.default,{style:k,resizeMode:Q,headers:K.headers,src:C,ref:a}):(0,p.jsx)(s.default,Object.assign({},t,{resizeMode:Q}))}})}})}));null!=o.default.unstable_createImageComponent&&(z=o.default.unstable_createImageComponent(z)),z.displayName='Image',z.getSize=function(e,t,a){return f.default.getSize(e).then((function(e){t(e.width,e.height)})).catch(a||function(){console.warn('Failed to get size for image: '+e)})},z.getSizeWithHeaders=function(e,t,a,i){return f.default.getSizeWithHeaders(e,t).then((function(e){a(e.width,e.height)})).catch(i||function(){console.warn('Failed to get size for image: '+e)})},z.prefetch=I,z.prefetchWithMetadata=function(e,t,a,i){I(e,i)},z.abortPrefetch=function(e){f.default.abortRequest(e)},z.queryCache=function(e){return j.apply(this,arguments)},z.resolveAssetSource=h.default,z.propTypes=_r(d[16]).ImagePropTypes;var O=n.default.create({base:{overflow:'hidden'}});m.exports=z}),326,[7,168,327,107,210,205,328,329,332,333,330,334,74,331,101,208,248]);
__d((function(g,r,i,a,m,_e,d){var t=r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.createStringifySafeWithLimits=n,_e.default=void 0;var e=t(r(d[1]));function n(t){var n=t.maxDepth,f=void 0===n?Number.POSITIVE_INFINITY:n,u=t.maxStringLimit,o=void 0===u?Number.POSITIVE_INFINITY:u,l=t.maxArrayLimit,c=void 0===l?Number.POSITIVE_INFINITY:l,s=t.maxObjectKeysLimit,y=void 0===s?Number.POSITIVE_INFINITY:s,h=[];function I(t,n){for(;h.length&&this!==h[0];)h.shift();if('string'==typeof n){var u='...(truncated)...';return n.length>o+17?n.substring(0,o)+u:n}if('object'!=typeof n||null===n)return n;var l=n;if(Array.isArray(n))h.length>=f?l=`[ ... array with ${n.length} values ... ]`:n.length>c&&(l=n.slice(0,c).concat([`... extra ${n.length-c} values truncated ...`]));else{(0,e.default)('object'==typeof n,'This was already found earlier');var s=Object.keys(n);if(h.length>=f)l=`{ ... object with ${s.length} keys ... }`;else if(s.length>y){for(var I of(l={},s.slice(0,y)))l[I]=n[I];l['...(truncated keys)...']=s.length-y}}return h.unshift(l),l}return function(t){if(void 0===t)return'undefined';if(null===t)return'null';if('function'==typeof t)try{return t.toString()}catch(t){return'[function unknown]'}else{if(t instanceof Error)return t.name+': '+t.message;try{var e=JSON.stringify(t,I);return void 0===e?'["'+typeof t+'" failed to stringify]':e}catch(e){if('function'==typeof t.toString)try{return t.toString()}catch(t){}}}return'["'+typeof t+'" failed to stringify]'}}var f=n({maxDepth:10,maxStringLimit:100,maxArrayLimit:50,maxObjectKeysLimit:50});_e.default=f}),33,[7,9]);
__d((function(g,r,i,a,m,e,d){var n=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function n(c){var s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],f=['initialRouteName','screens'];s||f.push('path','exact','stringify','parse');var u=Object.keys(c).filter((function(n){return!f.includes(n)}));if(u.length)throw new Error(`Found invalid properties in the configuration:\n${o(u)}\n\nDid you forget to specify them under a 'screens' property?\n\nYou can only specify the following properties:\n${o(f)}\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.`);c.screens&&Object.entries(c.screens).forEach((function(o){var c=(0,t.default)(o,2),s=(c[0],c[1]);'string'!=typeof s&&n(s,!1)}))};var t=n(r(d[1])),o=function(n){return n.map((function(n){return`- ${n}`})).join('\n')}}),472,[7,51]);
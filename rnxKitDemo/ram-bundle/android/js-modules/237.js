__d((function(g,_r,_i,_a,m,_e,d){'use strict';var e=_r(d[0]),t=e(_r(d[1])),i=e(_r(d[2])),n=e(_r(d[3])),a=e(_r(d[4])),l=e(_r(d[5])),o=e(_r(d[6])),s=e(_r(d[7])),c=e(_r(d[8])),r=e(_r(d[9])),u=e(_r(d[10])),f=e(_r(d[11])),b=e(_r(d[12])),p=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=h(t);if(i&&i.has(e))return i.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,i&&i.set(e,n),n})(_r(d[13])),y=_r(d[14]);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(h=function(e){return e?i:t})(e)}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var x=(function(e){function o(){return(0,t.default)(this,o),e=this,i=o,l=arguments,i=(0,a.default)(i),(0,n.default)(e,v()?Reflect.construct(i,l||[],(0,a.default)(e).constructor):i.apply(e,l));var e,i,l}return(0,l.default)(o,e),(0,i.default)(o,[{key:"render",value:function(){var e,t,i=this.props,n=i.accessibilityLabel,a=i.accessibilityState,l=i['aria-busy'],o=i['aria-checked'],p=i['aria-disabled'],h=i['aria-expanded'],v=i['aria-label'],x=i['aria-selected'],O=i.importantForAccessibility,D=i.color,j=i.onPress,k=i.touchSoundDisabled,w=i.title,A=i.hasTVPreferredFocus,P=i.nextFocusDown,S=i.nextFocusForward,_=i.nextFocusLeft,L=i.nextFocusRight,R=i.nextFocusUp,C=i.testID,M=i.accessible,W=i.accessibilityActions,B=i.accessibilityHint,T=i.accessibilityLanguage,U=i.onAccessibilityAction,H=[F.button],I=[F.text];D&&('ios'===c.default.OS?I.push({color:D}):H.push({backgroundColor:D}));var V={busy:null!=l?l:null==a?void 0:a.busy,checked:null!=o?o:null==a?void 0:a.checked,disabled:null!=p?p:null==a?void 0:a.disabled,expanded:null!=h?h:null==a?void 0:a.expanded,selected:null!=x?x:null==a?void 0:a.selected},z=null!=this.props.disabled?this.props.disabled:null==(e=V)?void 0:e.disabled;V=z!==(null==(t=V)?void 0:t.disabled)?Object.assign({},V,{disabled:z}):V,z&&(H.push(F.buttonDisabled),I.push(F.textDisabled)),(0,b.default)('string'==typeof w,'The title prop of a Button must be a string');var q='android'===c.default.OS?w.toUpperCase():w,E='android'===c.default.OS?r.default:u.default,G='no'===O?'no-hide-descendants':O;return(0,y.jsx)(E,{accessible:M,accessibilityActions:W,onAccessibilityAction:U,accessibilityLabel:v||n,accessibilityHint:B,accessibilityLanguage:T,accessibilityRole:"button",accessibilityState:V,importantForAccessibility:G,hasTVPreferredFocus:A,nextFocusDown:P,nextFocusForward:S,nextFocusLeft:_,nextFocusRight:L,nextFocusUp:R,testID:C,disabled:z,onPress:j,touchSoundDisabled:k,children:(0,y.jsx)(f.default,{style:H,children:(0,y.jsx)(s.default,{style:I,disabled:z,children:q})})})}}])})(p.Component),F=o.default.create({button:c.default.select({ios:{},android:{elevation:4,backgroundColor:'#2196F3',borderRadius:2}}),text:Object.assign({textAlign:'center',margin:8},c.default.select({ios:{color:'#007AFF',fontSize:18},android:{color:'white',fontWeight:'500'}})),buttonDisabled:c.default.select({ios:{},android:{elevation:0,backgroundColor:'#dfdfdf'}}),textDisabled:c.default.select({ios:{color:'#cdcdcd'},android:{color:'#a1a1a1'}})});m.exports=x}),237,[7,14,15,36,38,39,210,238,56,269,270,204,9,101,208]);
__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]),n=e(_r(d[1])),l=e(_r(d[2])),t=(v(_r(d[3])),e(_r(d[4]))),o=e(_r(d[5])),i=e(_r(d[6])),s=_r(d[7]),r=e(_r(d[8])),a=e(_r(d[9])),u=_r(d[10]),c=v(_r(d[11])),p=c,b=_r(d[12]),f=["accessible","accessibilityLabel","accessibilityRole","accessibilityState","allowFontScaling","aria-busy","aria-checked","aria-disabled","aria-expanded","aria-label","aria-selected","ellipsizeMode","id","nativeID","onLongPress","onPress","onPressIn","onPressOut","onResponderGrant","onResponderMove","onResponderRelease","onResponderTerminate","onResponderTerminationRequest","onStartShouldSetResponder","pressRetentionOffset","role","suppressHighlighting"];function R(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,l=new WeakMap;return(R=function(e){return e?l:n})(e)}function v(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=R(n);if(l&&l.has(e))return l.get(e);var t={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(t,i,s):t[i]=e[i]}return t.default=e,l&&l.set(e,t),t}var y=p.forwardRef((function(e,p){var R,v,y,O,T,x,M=e.accessible,L=e.accessibilityLabel,j=e.accessibilityRole,w=e.accessibilityState,D=e.allowFontScaling,_=e['aria-busy'],k=e['aria-checked'],C=e['aria-disabled'],A=e['aria-expanded'],I=e['aria-label'],E=e['aria-selected'],W=e.ellipsizeMode,q=e.id,F=e.nativeID,G=e.onLongPress,H=e.onPress,z=e.onPressIn,N=e.onPressOut,V=e.onResponderGrant,$=e.onResponderMove,B=e.onResponderRelease,J=e.onResponderTerminate,K=e.onResponderTerminationRequest,Q=e.onStartShouldSetResponder,U=e.pressRetentionOffset,X=e.role,Y=e.suppressHighlighting,Z=(0,l.default)(e,f),ee=(0,c.useState)(!1),ne=(0,n.default)(ee,2),le=ne[0],te=ne[1];null==w&&null==_&&null==k&&null==C&&null==A&&null==E||(x={busy:null!=_?_:null==w?void 0:w.busy,checked:null!=k?k:null==w?void 0:w.checked,disabled:null!=C?C:null==w?void 0:w.disabled,expanded:null!=A?A:null==w?void 0:w.expanded,selected:null!=E?E:null==w?void 0:w.selected});var oe=null!=Z.disabled?Z.disabled:null==(R=x)?void 0:R.disabled,ie=oe!==(null==(v=x)?void 0:v.disabled)?Object.assign({},x,{disabled:oe}):x,se=(null!=H||null!=G||null!=Q)&&!0!==oe,re=S(se),ae=(0,c.useMemo)((function(){return re?{disabled:!se,pressRectOffset:U,onLongPress:G,onPress:H,onPressIn:function(e){te(!Y),null==z||z(e)},onPressOut:function(e){te(!1),null==N||N(e)},onResponderTerminationRequest_DEPRECATED:K,onStartShouldSetResponder_DEPRECATED:Q}:null}),[re,se,U,G,H,z,N,K,Q,Y]),ue=(0,t.default)(ae),de=(0,c.useMemo)((function(){return null==ue?null:{onResponderGrant:function(e){ue.onResponderGrant(e),null!=V&&V(e)},onResponderMove:function(e){ue.onResponderMove(e),null!=$&&$(e)},onResponderRelease:function(e){ue.onResponderRelease(e),null!=B&&B(e)},onResponderTerminate:function(e){ue.onResponderTerminate(e),null!=J&&J(e)},onClick:ue.onClick,onResponderTerminationRequest:ue.onResponderTerminationRequest,onStartShouldSetResponder:ue.onStartShouldSetResponder}}),[ue,V,$,B,J]),ce=null==Z.selectionColor?null:(0,i.default)(Z.selectionColor),pe=Z.style,be=Z.numberOfLines;null==be||be>=0||(console.error(`'numberOfLines' in <Text> must be a non-negative number, received: ${be}. The value will be set to 0.`),be=0);var fe,Re=(0,c.useContext)(a.default),ve=r.default.select({ios:!1!==M,default:M});'number'==typeof(null==(y=pe=(0,o.default)(pe))?void 0:y.fontWeight)&&(pe.fontWeight=null==(fe=pe)?void 0:fe.fontWeight.toString());var ge=Z.selectable;null!=(null==(O=pe)?void 0:O.userSelect)&&(ge=h[pe.userSelect],delete pe.userSelect),null!=(null==(T=pe)?void 0:T.verticalAlign)&&(pe.textAlignVertical=P[pe.verticalAlign],delete pe.verticalAlign);var ye=null!=e.onPress||null!=e.onLongPress;return Re?(0,b.jsx)(u.NativeVirtualText,Object.assign({},Z,de,{accessibilityLabel:null!=I?I:L,accessibilityRole:X?(0,s.getAccessibilityRoleFromRole)(X):j,accessibilityState:x,isHighlighted:le,isPressable:se,nativeID:null!=q?q:F,numberOfLines:be,ref:p,selectable:ge,selectionColor:ce,style:pe})):(0,b.jsx)(a.default.Provider,{value:!0,children:(0,b.jsx)(u.NativeText,Object.assign({},Z,de,{accessibilityLabel:null!=I?I:L,accessibilityRole:X?(0,s.getAccessibilityRoleFromRole)(X):j,accessibilityState:ie,accessible:null==M&&'android'===r.default.OS?ye:ve,allowFontScaling:!1!==D,disabled:oe,ellipsizeMode:null!=W?W:'tail',isHighlighted:le,nativeID:null!=q?q:F,numberOfLines:be,ref:p,selectable:ge,selectionColor:ce,style:pe}))})}));function S(e){var l=(0,c.useState)(e),t=(0,n.default)(l,2),o=t[0],i=t[1];return!o&&e&&i(e),o}y.displayName='Text',y.propTypes=_r(d[13]).TextPropTypes;var h={auto:!0,text:!0,none:!1,contain:!0,all:!0},P={auto:'auto',top:'top',bottom:'bottom',middle:'center'};m.exports=y}),238,[7,51,168,239,241,107,66,206,56,205,247,101,208,248]);
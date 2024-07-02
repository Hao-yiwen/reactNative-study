__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]),s=e(_r(d[1])),t=e(_r(d[2])),i=e(_r(d[3])),o=e(_r(d[4])),n=e(_r(d[5])),a=e(_r(d[6])),r=(e(_r(d[7])),e(_r(d[8]))),l=(_r(d[9]),_r(d[10])),p=e(_r(d[11])),c=e(_r(d[12])),u=_r(d[13]),h=e(_r(d[14])),b=(function(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=y(s);if(t&&t.has(e))return t.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(i,n,a):i[n]=e[n]}return i.default=e,t&&t.set(e,i),i})(_r(d[15])),f=(_r(d[16]),["onBlur","onFocus"]);function y(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(y=function(e){return e?t:s})(e)}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var P=(function(e){function p(){var e,s,i,a;(0,t.default)(this,p);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return s=this,i=p,a=[].concat(c),i=(0,n.default)(i),(e=(0,o.default)(s,v()?Reflect.construct(i,a||[],(0,n.default)(s).constructor):i.apply(s,a))).state={pressability:new r.default(e._createPressabilityConfig())},e}return(0,a.default)(p,e),(0,i.default)(p,[{key:"_createPressabilityConfig",value:function(){var e,s,t=this,i=null!=(e=this.props['aria-disabled'])?e:null==(s=this.props.accessibilityState)?void 0:s.disabled;return{cancelable:!this.props.rejectResponderTermination,disabled:null!=this.props.disabled?this.props.disabled:i,hitSlop:this.props.hitSlop,delayLongPress:this.props.delayLongPress,delayPressIn:this.props.delayPressIn,delayPressOut:this.props.delayPressOut,minPressDuration:0,pressRectOffset:this.props.pressRetentionOffset,android_disableSound:this.props.touchSoundDisabled,onLongPress:this.props.onLongPress,onPress:this.props.onPress,onPressIn:function(e){'android'===c.default.OS&&(t._dispatchHotspotUpdate(e),t._dispatchPressedStateChange(!0)),null!=t.props.onPressIn&&t.props.onPressIn(e)},onPressMove:function(e){'android'===c.default.OS&&t._dispatchHotspotUpdate(e)},onPressOut:function(e){'android'===c.default.OS&&t._dispatchPressedStateChange(!1),null!=t.props.onPressOut&&t.props.onPressOut(e)}}}},{key:"_dispatchPressedStateChange",value:function(e){if('android'===c.default.OS){var s=(0,l.findHostInstance_DEPRECATED)(this);null==s?console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?"):u.Commands.setPressed(s,e)}}},{key:"_dispatchHotspotUpdate",value:function(e){if('android'===c.default.OS){var s=e.nativeEvent,t=s.locationX,i=s.locationY,o=(0,l.findHostInstance_DEPRECATED)(this);null==o?console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?"):u.Commands.hotspotUpdate(o,null!=t?t:0,null!=i?i:0)}}},{key:"render",value:function(){var e,t,i,o,n,a,r,l,c,u,h,y,v,P,O,F,k,x,_,R,w,A,D=b.Children.only(this.props.children),I=[D.props.children],C=this.state.pressability.getEventHandlers(),H=(C.onBlur,C.onFocus,(0,s.default)(C,f)),L={busy:null!=(e=this.props['aria-busy'])?e:null==(t=this.props.accessibilityState)?void 0:t.busy,checked:null!=(i=this.props['aria-checked'])?i:null==(o=this.props.accessibilityState)?void 0:o.checked,disabled:null!=(n=this.props['aria-disabled'])?n:null==(a=this.props.accessibilityState)?void 0:a.disabled,expanded:null!=(r=this.props['aria-expanded'])?r:null==(l=this.props.accessibilityState)?void 0:l.expanded,selected:null!=(c=this.props['aria-selected'])?c:null==(u=this.props.accessibilityState)?void 0:u.selected};L=null!=this.props.disabled?Object.assign({},L,{disabled:this.props.disabled}):L;var U={max:null!=(h=this.props['aria-valuemax'])?h:null==(y=this.props.accessibilityValue)?void 0:y.max,min:null!=(v=this.props['aria-valuemin'])?v:null==(P=this.props.accessibilityValue)?void 0:P.min,now:null!=(O=this.props['aria-valuenow'])?O:null==(F=this.props.accessibilityValue)?void 0:F.now,text:null!=(k=this.props['aria-valuetext'])?k:null==(x=this.props.accessibilityValue)?void 0:x.text},B='off'===this.props['aria-live']?'none':null!=(_=this.props['aria-live'])?_:this.props.accessibilityLiveRegion,T=null!=(R=this.props['aria-label'])?R:this.props.accessibilityLabel;return b.cloneElement.apply(b,[D,Object.assign({},H,S(void 0===this.props.background?p.SelectableBackground():this.props.background,!0===this.props.useForeground),{accessible:!1!==this.props.accessible,accessibilityHint:this.props.accessibilityHint,accessibilityLanguage:this.props.accessibilityLanguage,accessibilityLabel:T,accessibilityRole:this.props.accessibilityRole,accessibilityState:L,accessibilityActions:this.props.accessibilityActions,onAccessibilityAction:this.props.onAccessibilityAction,accessibilityValue:U,importantForAccessibility:!0===this.props['aria-hidden']?'no-hide-descendants':this.props.importantForAccessibility,accessibilityViewIsModal:null!=(w=this.props['aria-modal'])?w:this.props.accessibilityViewIsModal,accessibilityLiveRegion:B,accessibilityElementsHidden:null!=(A=this.props['aria-hidden'])?A:this.props.accessibilityElementsHidden,hasTVPreferredFocus:this.props.hasTVPreferredFocus,hitSlop:this.props.hitSlop,focusable:!1!==this.props.focusable&&void 0!==this.props.onPress&&!this.props.disabled,nativeID:this.props.nativeID,nextFocusDown:this.props.nextFocusDown,nextFocusForward:this.props.nextFocusForward,nextFocusLeft:this.props.nextFocusLeft,nextFocusRight:this.props.nextFocusRight,nextFocusUp:this.props.nextFocusUp,onLayout:this.props.onLayout,testID:this.props.testID})].concat(I))}},{key:"componentDidUpdate",value:function(e,s){this.state.pressability.configure(this._createPressabilityConfig())}},{key:"componentWillUnmount",value:function(){this.state.pressability.reset()}}])})(b.Component);P.SelectableBackground=function(e){return{type:'ThemeAttrAndroid',attribute:'selectableItemBackground',rippleRadius:e}},P.SelectableBackgroundBorderless=function(e){return{type:'ThemeAttrAndroid',attribute:'selectableItemBackgroundBorderless',rippleRadius:e}},P.Ripple=function(e,s,t){var i=(0,p.default)(e);return(0,h.default)(null==i||'number'==typeof i,'Unexpected color given for Ripple color'),{type:'RippleAndroid',color:i,borderless:s,rippleRadius:t}},P.canUseNativeForeground=function(){return'android'===c.default.OS&&c.default.Version>=23};var S='android'===c.default.OS?function(e,s){return s&&P.canUseNativeForeground()?{nativeForegroundAndroid:e}:{nativeBackgroundAndroid:e}}:function(e,s){return null};P.displayName='TouchableNativeFeedback',m.exports=P}),269,[7,168,14,15,36,38,39,204,242,239,19,66,56,207,9,101,208]);
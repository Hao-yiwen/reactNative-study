__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]),i=e(_r(d[1])),s=e(_r(d[2])),t=e(_r(d[3])),n=e(_r(d[4])),a=e(_r(d[5])),l=e(_r(d[6])),o=(e(_r(d[7])),e(_r(d[8]))),r=(_r(d[9]),(function(e,i){if(!i&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var s=p(i);if(s&&s.has(e))return s.get(e);var t={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,s&&s.set(e,t),t})(_r(d[10]))),c=(_r(d[11]),["onBlur","onFocus"]),u=["aria-disabled"];function p(e){if("function"!=typeof WeakMap)return null;var i=new WeakMap,s=new WeakMap;return(p=function(e){return e?s:i})(e)}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var y=['accessibilityActions','accessibilityElementsHidden','accessibilityHint','accessibilityLanguage','accessibilityIgnoresInvertColors','accessibilityLabel','accessibilityLiveRegion','accessibilityRole','accessibilityValue','aria-valuemax','aria-valuemin','aria-valuenow','aria-valuetext','accessibilityViewIsModal','aria-modal','hitSlop','importantForAccessibility','nativeID','onAccessibilityAction','onBlur','onFocus','onLayout','testID'],f=(function(e){function u(){var e,i,t,l;(0,s.default)(this,u);for(var r=arguments.length,c=new Array(r),p=0;p<r;p++)c[p]=arguments[p];return i=this,t=u,l=[].concat(c),t=(0,a.default)(t),(e=(0,n.default)(i,b()?Reflect.construct(t,l||[],(0,a.default)(i).constructor):t.apply(i,l))).state={pressability:new o.default(h(e.props))},e}return(0,l.default)(u,e),(0,t.default)(u,[{key:"render",value:function(){var e,s,t,n,a,l,o,u,p,b,f,h,v=r.Children.only(this.props.children),P=[v.props.children],O=this.props['aria-live'],S={busy:null!=(e=this.props['aria-busy'])?e:null==(s=this.props.accessibilityState)?void 0:s.busy,checked:null!=(t=this.props['aria-checked'])?t:null==(n=this.props.accessibilityState)?void 0:n.checked,disabled:null!=(a=this.props['aria-disabled'])?a:null==(l=this.props.accessibilityState)?void 0:l.disabled,expanded:null!=(o=this.props['aria-expanded'])?o:null==(u=this.props.accessibilityState)?void 0:u.expanded,selected:null!=(p=this.props['aria-selected'])?p:null==(b=this.props.accessibilityState)?void 0:b.selected},I=this.state.pressability.getEventHandlers(),k=(I.onBlur,I.onFocus,(0,i.default)(I,c)),L=Object.assign({},k,{accessible:!1!==this.props.accessible,accessibilityState:null!=this.props.disabled?Object.assign({},S,{disabled:this.props.disabled}):S,focusable:!1!==this.props.focusable&&void 0!==this.props.onPress,accessibilityElementsHidden:null!=(f=this.props['aria-hidden'])?f:this.props.accessibilityElementsHidden,importantForAccessibility:!0===this.props['aria-hidden']?'no-hide-descendants':this.props.importantForAccessibility,accessibilityLiveRegion:'off'===O?'none':null!=O?O:this.props.accessibilityLiveRegion,nativeID:null!=(h=this.props.id)?h:this.props.nativeID});for(var w of y)void 0!==this.props[w]&&(L[w]=this.props[w]);return r.cloneElement.apply(r,[v,L].concat(P))}},{key:"componentDidUpdate",value:function(){this.state.pressability.configure(h(this.props))}},{key:"componentWillUnmount",value:function(){this.state.pressability.reset()}}])})(r.Component);function h(e){var s,t=e['aria-disabled'],n=(0,i.default)(e,u),a=null!=t?t:null==(s=n.accessibilityState)?void 0:s.disabled;return{cancelable:!n.rejectResponderTermination,disabled:null!==n.disabled?n.disabled:a,hitSlop:n.hitSlop,delayLongPress:n.delayLongPress,delayPressIn:n.delayPressIn,delayPressOut:n.delayPressOut,minPressDuration:0,pressRectOffset:n.pressRetentionOffset,android_disableSound:n.touchSoundDisabled,onBlur:n.onBlur,onFocus:n.onFocus,onLongPress:n.onLongPress,onPress:n.onPress,onPressIn:n.onPressIn,onPressOut:n.onPressOut}}f.displayName='TouchableWithoutFeedback',m.exports=f}),386,[7,168,14,15,36,38,39,204,242,239,101,208]);
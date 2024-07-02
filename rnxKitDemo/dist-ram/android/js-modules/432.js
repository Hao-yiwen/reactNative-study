__d((function(g,_r,_i,_a,m,_e,d){var e=_r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=void 0;var t=e(_r(d[1])),n=e(_r(d[2])),r=_r(d[3]),u=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var a=u?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r})(_r(d[4])),o=(e(_r(d[5])),e(_r(d[6])),_r(d[7])),a=e(_r(d[8])),i=e(_r(d[9])),s=e(_r(d[10])),c=e(_r(d[11])),l=e(_r(d[12])),f=e(_r(d[13])),p=e(_r(d[14])),v=e(_r(d[15])),h=e(_r(d[16])),y=e(_r(d[17])),b=e(_r(d[18])),k=e(_r(d[19])),C=_r(d[20]),O=e(_r(d[21])),j=_r(d[22]),R=["key","routeNames"];function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}var w=function e(t){if(void 0!==t){t.key,t.routeNames;var r=(0,n.default)(t,R);return Object.assign({},r,{stale:!0,routes:t.routes.map((function(t){return void 0===t.state?t:Object.assign({},t,{state:e(t.state)})}))})}},P=u.forwardRef((function(e,n){var R=e.initialState,_=e.onStateChange,P=e.onUnhandledAction,S=e.independent,I=e.children;if(!u.useContext(p.default).isDefault&&!S)throw new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");var x=(0,O.default)((function(){return w(null==R?void 0:R)})),M=(0,t.default)(x,5),N=M[0],A=M[1],E=M[2],L=M[3],D=M[4],G=u.useRef(!0),K=u.useRef(),T=u.useCallback((function(){return K.current}),[]),U=u.useCallback((function(e){K.current=e}),[]),W=(0,h.default)(),B=W.listeners,Z=W.addListener,F=(0,b.default)(),H=F.keyedListeners,q=F.addKeyedListener,z=u.useCallback((function(e){null==B.focus[0]?console.error(o.NOT_INITIALIZED_ERROR):B.focus[0]((function(t){return t.dispatch(e)}))}),[B.focus]),J=u.useCallback((function(){if(null==B.focus[0])return!1;var e=B.focus[0]((function(e){return e.canGoBack()})),t=e.result;return!!e.handled&&t}),[B.focus]),Q=u.useCallback((function(e){var t,n=null!=(t=null==e?void 0:e.key)?t:null==H.getState.root?void 0:H.getState.root().key;null==n?console.error(o.NOT_INITIALIZED_ERROR):B.focus[0]((function(t){return t.dispatch(Object.assign({},r.CommonActions.reset(e),{target:n}))}))}),[H.getState,B.focus]),V=u.useCallback((function(){return null==H.getState.root?void 0:H.getState.root()}),[H.getState]),X=u.useCallback((function(){var e=V();if(null!=e)return(0,i.default)(e)}),[V]),Y=(0,y.default)(),$=(0,k.default)({}),ee=$.addOptionsGetter,te=$.getCurrentOptions,ne=u.useMemo((function(){return Object.assign({},Object.keys(r.CommonActions).reduce((function(e,t){return e[t]=function(){return z(r.CommonActions[t].apply(r.CommonActions,arguments))},e}),{}),Y.create('root'),{dispatch:z,resetRoot:Q,isFocused:function(){return!0},canGoBack:J,getParent:function(){},getState:function(){return pe.current},getRootState:V,getCurrentRoute:X,getCurrentOptions:te,isReady:function(){return null!=B.focus[0]},setOptions:function(){throw new Error('Cannot call setOptions outside a screen')}})}),[J,z,Y,te,X,V,B.focus,Q]);u.useImperativeHandle(n,(function(){return ne}),[ne]);var re=u.useCallback((function(e,t){Y.emit({type:'__unsafe_action__',data:{action:e,noop:t,stack:ae.current}})}),[Y]),ue=u.useRef(),oe=u.useCallback((function(e){ue.current!==e&&(ue.current=e,Y.emit({type:'options',data:{options:e}}))}),[Y]),ae=u.useRef(),ie=u.useMemo((function(){return{addListener:Z,addKeyedListener:q,onDispatchAction:re,onOptionsChange:oe,stackRef:ae}}),[Z,q,re,oe]),se=u.useMemo((function(){return{scheduleUpdate:L,flushUpdates:D}}),[L,D]),ce=u.useRef(!0),le=u.useCallback((function(){return ce.current}),[]),fe=u.useMemo((function(){return{state:N,getState:A,setState:E,getKey:T,setKey:U,getIsInitial:le,addOptionsGetter:ee}}),[N,A,E,T,U,le,ee]),de=u.useRef(_),pe=u.useRef(N);u.useEffect((function(){ce.current=!1,de.current=_,pe.current=N})),u.useEffect((function(){var e=V();Y.emit({type:'state',data:{state:N}}),!G.current&&de.current&&de.current(e),G.current=!1}),[V,Y,N]);var ve=u.useCallback((function(e){}),[]),he=(0,j.jsx)(c.default.Provider,{value:ne,children:(0,j.jsx)(C.ScheduleUpdateContext.Provider,{value:se,children:(0,j.jsx)(s.default.Provider,{value:ie,children:(0,j.jsx)(p.default.Provider,{value:fe,children:(0,j.jsx)(v.default.Provider,{value:null!=P?P:ve,children:(0,j.jsx)(a.default,{children:I})})})})})});return S&&(he=(0,j.jsx)(f.default.Provider,{value:void 0,children:(0,j.jsx)(l.default.Provider,{value:void 0,children:he})})),he}));_e.default=P}),432,[7,51,168,433,101,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,208]);
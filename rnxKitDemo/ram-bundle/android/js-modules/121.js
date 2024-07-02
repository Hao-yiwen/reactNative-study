__d((function(g,r,i,a,m,_e,d){var e=r(d[0]);Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=_e.PerformanceMeasure=_e.PerformanceMark=void 0;var t=e(r(d[1])),n=e(r(d[2])),u=e(r(d[3])),l=e(r(d[4])),o=e(r(d[5])),f=e(r(d[6])),s=e(r(d[7])),c=e(r(d[8])),v=e(r(d[9])),y=e(r(d[10])),p=r(d[11]),w=r(d[12]),E=r(d[13]),P=e(r(d[14]));function T(e,t,n){return t=(0,l.default)(t),(0,u.default)(e,k()?Reflect.construct(t,n||[],(0,l.default)(e).constructor):t.apply(e,n))}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}var h=g.nativePerformanceNow?g.nativePerformanceNow:function(){return Date.now()},N=_e.PerformanceMark=(function(e){function u(e,t){var l,o;return(0,n.default)(this,u),o=T(this,u,[{name:e,entryType:'mark',startTime:null!=(l=null==t?void 0:t.startTime)?l:h(),duration:0}]),t&&(o.detail=t.detail),o}return(0,o.default)(u,e),(0,t.default)(u)})(p.PerformanceEntry),M=_e.PerformanceMeasure=(function(e){function u(e,t){var l,o;return(0,n.default)(this,u),o=T(this,u,[{name:e,entryType:'measure',startTime:0,duration:null!=(l=null==t?void 0:t.duration)?l:0}]),t&&(o.detail=t.detail),o}return(0,o.default)(u,e),(0,t.default)(u)})(p.PerformanceEntry);function S(){(0,f.default)('missing-native-performance','Missing native implementation of Performance')}_e.default=(function(){return(0,t.default)((function e(){(0,n.default)(this,e),this.eventCounts=new s.default}),[{key:"memory",get:function(){if(null!=v.default&&v.default.getSimpleMemoryInfo){var e=v.default.getSimpleMemoryInfo();if(e.hasOwnProperty('hermes_heapSize')){var t=e.hermes_heapSize,n=e.hermes_allocatedBytes;return new c.default({jsHeapSizeLimit:null,totalJSHeapSize:t,usedJSHeapSize:n})}return new c.default}return new c.default}},{key:"reactNativeStartupTiming",get:function(){return null!=v.default&&v.default.getReactNativeStartupTiming?new P.default(v.default.getReactNativeStartupTiming()):new P.default}},{key:"mark",value:function(e,t){var n=new N(e,t);return null!=v.default&&v.default.mark?v.default.mark(e,n.startTime,n.duration):S(),n}},{key:"clearMarks",value:function(e){null!=y.default&&y.default.clearEntries?null==y.default||y.default.clearEntries(E.RawPerformanceEntryTypeValues.MARK,e):(0,w.warnNoNativePerformanceObserver)()}},{key:"measure",value:function(e,t,n){var u,l,o,f=n,s=0,c=0;if('string'==typeof t)l=t;else if(void 0!==t){var y;if(u=t,void 0!==n)throw new TypeError("Performance.measure: Can't have both options and endMark");if(void 0===u.start&&void 0===u.end)throw new TypeError('Performance.measure: Must have at least one of start/end specified in options');if(void 0!==u.start&&void 0!==u.end&&void 0!==u.duration)throw new TypeError("Performance.measure: Can't have both start/end and duration explicitly in options");'number'==typeof u.start?s=u.start:l=u.start,'number'==typeof u.end?c=u.end:f=u.end,o=null!=(y=u.duration)?y:o}var p=new M(e,u);return null!=v.default&&v.default.measure?v.default.measure(e,s,c,o,l,f):S(),p}},{key:"clearMeasures",value:function(e){null!=y.default&&y.default.clearEntries?null==y.default||y.default.clearEntries(E.RawPerformanceEntryTypeValues.MEASURE,e):(0,w.warnNoNativePerformanceObserver)()}},{key:"now",value:function(){return h()}},{key:"getEntries",value:function(){return null!=y.default&&y.default.clearEntries?y.default.getEntries().map(E.rawToPerformanceEntry):((0,w.warnNoNativePerformanceObserver)(),[])}},{key:"getEntriesByType",value:function(e){return'mark'!==e&&'measure'!==e?(console.log(`Performance.getEntriesByType: Only valid for 'mark' and 'measure' entry types, got ${e}`),[]):null!=y.default&&y.default.clearEntries?y.default.getEntries((0,E.performanceEntryTypeToRaw)(e)).map(E.rawToPerformanceEntry):((0,w.warnNoNativePerformanceObserver)(),[])}},{key:"getEntriesByName",value:function(e,t){return void 0!==t&&'mark'!==t&&'measure'!==t?(console.log(`Performance.getEntriesByName: Only valid for 'mark' and 'measure' entry types, got ${t}`),[]):null!=y.default&&y.default.clearEntries?y.default.getEntries(null!=t?(0,E.performanceEntryTypeToRaw)(t):void 0,e).map(E.rawToPerformanceEntry):((0,w.warnNoNativePerformanceObserver)(),[])}}])})()}),121,[7,15,14,36,38,39,10,122,128,120,123,125,124,126,129]);
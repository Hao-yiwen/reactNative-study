__d((function(g,r,i,a,m,e,d){var t=r(d[0]),n=t(r(d[1])),s=t(r(d[2])),l=(t(r(d[3])),t(r(d[4]))),o=(r(d[5]).default,r(d[6]),r(d[7])),u=(function(){return(0,s.default)((function t(){(0,n.default)(this,t)}),null,[{key:"share",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o('object'==typeof t&&null!==t,'Content to share must be a valid object'),o('string'==typeof t.url||'string'==typeof t.message,'At least one of URL and message is required'),o('object'==typeof n&&null!==n,'Options must be a valid object'),o(l.default,'ShareModule should be registered on Android.'),o(null==t.title||'string'==typeof t.title,'Invalid title: title should be a string.');var s={title:t.title,message:'string'==typeof t.message?t.message:void 0};return l.default.share(s,n.dialogTitle).then((function(t){return Object.assign({activityType:null},t)}))}}])})();u.sharedAction='sharedAction',u.dismissedAction='dismissedAction',m.exports=u}),413,[7,14,15,390,414,66,56,9]);
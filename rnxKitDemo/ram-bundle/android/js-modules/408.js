__d((function(g,r,i,a,m,e,d){var n=r(d[0]),s=n(r(d[1])),E=n(r(d[2])),o=n(r(d[3])),A=n(r(d[4])),_=n(r(d[5])),O=n(r(d[6])),S=(r(d[7]),Object.freeze({GRANTED:'granted',DENIED:'denied',NEVER_ASK_AGAIN:'never_ask_again'})),C=Object.freeze({READ_CALENDAR:'android.permission.READ_CALENDAR',WRITE_CALENDAR:'android.permission.WRITE_CALENDAR',CAMERA:'android.permission.CAMERA',READ_CONTACTS:'android.permission.READ_CONTACTS',WRITE_CONTACTS:'android.permission.WRITE_CONTACTS',GET_ACCOUNTS:'android.permission.GET_ACCOUNTS',ACCESS_FINE_LOCATION:'android.permission.ACCESS_FINE_LOCATION',ACCESS_COARSE_LOCATION:'android.permission.ACCESS_COARSE_LOCATION',ACCESS_BACKGROUND_LOCATION:'android.permission.ACCESS_BACKGROUND_LOCATION',RECORD_AUDIO:'android.permission.RECORD_AUDIO',READ_PHONE_STATE:'android.permission.READ_PHONE_STATE',CALL_PHONE:'android.permission.CALL_PHONE',READ_CALL_LOG:'android.permission.READ_CALL_LOG',WRITE_CALL_LOG:'android.permission.WRITE_CALL_LOG',ADD_VOICEMAIL:'com.android.voicemail.permission.ADD_VOICEMAIL',READ_VOICEMAIL:'com.android.voicemail.permission.READ_VOICEMAIL',WRITE_VOICEMAIL:'com.android.voicemail.permission.WRITE_VOICEMAIL',USE_SIP:'android.permission.USE_SIP',PROCESS_OUTGOING_CALLS:'android.permission.PROCESS_OUTGOING_CALLS',BODY_SENSORS:'android.permission.BODY_SENSORS',BODY_SENSORS_BACKGROUND:'android.permission.BODY_SENSORS_BACKGROUND',SEND_SMS:'android.permission.SEND_SMS',RECEIVE_SMS:'android.permission.RECEIVE_SMS',READ_SMS:'android.permission.READ_SMS',RECEIVE_WAP_PUSH:'android.permission.RECEIVE_WAP_PUSH',RECEIVE_MMS:'android.permission.RECEIVE_MMS',READ_EXTERNAL_STORAGE:'android.permission.READ_EXTERNAL_STORAGE',READ_MEDIA_IMAGES:'android.permission.READ_MEDIA_IMAGES',READ_MEDIA_VIDEO:'android.permission.READ_MEDIA_VIDEO',READ_MEDIA_AUDIO:'android.permission.READ_MEDIA_AUDIO',WRITE_EXTERNAL_STORAGE:'android.permission.WRITE_EXTERNAL_STORAGE',BLUETOOTH_CONNECT:'android.permission.BLUETOOTH_CONNECT',BLUETOOTH_SCAN:'android.permission.BLUETOOTH_SCAN',BLUETOOTH_ADVERTISE:'android.permission.BLUETOOTH_ADVERTISE',ACCESS_MEDIA_LOCATION:'android.permission.ACCESS_MEDIA_LOCATION',ACCEPT_HANDOVER:'android.permission.ACCEPT_HANDOVER',ACTIVITY_RECOGNITION:'android.permission.ACTIVITY_RECOGNITION',ANSWER_PHONE_CALLS:'android.permission.ANSWER_PHONE_CALLS',READ_PHONE_NUMBERS:'android.permission.READ_PHONE_NUMBERS',UWB_RANGING:'android.permission.UWB_RANGING',POST_NOTIFICATIONS:'android.permission.POST_NOTIFICATIONS',NEARBY_WIFI_DEVICES:'android.permission.NEARBY_WIFI_DEVICES'}),R=(function(){return(0,o.default)((function n(){(0,E.default)(this,n),this.PERMISSIONS=C,this.RESULTS=S}),[{key:"checkPermission",value:function(n){return console.warn('"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead'),(0,O.default)(_.default,'PermissionsAndroid is not installed correctly.'),_.default.checkPermission(n)}},{key:"check",value:function(n){return(0,O.default)(_.default,'PermissionsAndroid is not installed correctly.'),_.default.checkPermission(n)}},{key:"requestPermission",value:(R=(0,s.default)((function*(n,s){return console.warn('"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead'),(yield this.request(n,s))===this.RESULTS.GRANTED})),function(n,s){return R.apply(this,arguments)})},{key:"request",value:(n=(0,s.default)((function*(n,s){return(0,O.default)(_.default,'PermissionsAndroid is not installed correctly.'),s&&(yield _.default.shouldShowRequestPermissionRationale(n))&&A.default?new Promise((function(E,o){var O=Object.assign({},s);A.default.showAlert(O,(function(){return o(new Error('Error showing rationale'))}),(function(){return E(_.default.requestPermission(n))}))})):_.default.requestPermission(n)})),function(s,E){return n.apply(this,arguments)})},{key:"requestMultiple",value:function(n){return(0,O.default)(_.default,'PermissionsAndroid is not installed correctly.'),_.default.requestMultiplePermissions(n)}}]);var n,R})(),t=new R;m.exports=t}),408,[7,327,14,15,180,409,9,56]);
__d((function(g,r,i,a,m,e,d){var t=r(d[0]),o=t(r(d[1])),n=t(r(d[2])),l=t(r(d[3])),u=t(r(d[4])),c=t(r(d[5])),f=t(r(d[6])),s=new l.default('ios'!==u.default.OS?null:c.default),v=new Map,h=(function(){function t(n){var l=this;(0,o.default)(this,t),this._data={},this._remoteNotificationCompleteCallbackCalled=!1,this._isRemote=n.remote,this._isRemote&&(this._notificationId=n.notificationId),n.remote?Object.keys(n).forEach((function(t){var o=n[t];'aps'===t?(l._alert=o.alert,l._sound=o.sound,l._badgeCount=o.badge,l._category=o.category,l._contentAvailable=o['content-available'],l._threadID=o['thread-id']):l._data[t]=o})):(this._badgeCount=n.applicationIconBadgeNumber,this._sound=n.soundName,this._alert=n.alertBody,this._data=n.userInfo,this._category=n.category)}return(0,n.default)(t,[{key:"finish",value:function(t){this._isRemote&&this._notificationId&&!this._remoteNotificationCompleteCallbackCalled&&(this._remoteNotificationCompleteCallbackCalled=!0,(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.onFinishRemoteNotification(this._notificationId,t))}},{key:"getMessage",value:function(){return this._alert}},{key:"getSound",value:function(){return this._sound}},{key:"getCategory",value:function(){return this._category}},{key:"getAlert",value:function(){return this._alert}},{key:"getContentAvailable",value:function(){return this._contentAvailable}},{key:"getBadgeCount",value:function(){return this._badgeCount}},{key:"getData",value:function(){return this._data}},{key:"getThreadID",value:function(){return this._threadID}}],[{key:"presentLocalNotification",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.presentLocalNotification(t)}},{key:"scheduleLocalNotification",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.scheduleLocalNotification(t)}},{key:"cancelAllLocalNotifications",value:function(){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.cancelAllLocalNotifications()}},{key:"removeAllDeliveredNotifications",value:function(){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.removeAllDeliveredNotifications()}},{key:"getDeliveredNotifications",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.getDeliveredNotifications(t)}},{key:"removeDeliveredNotifications",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.removeDeliveredNotifications(t)}},{key:"setApplicationIconBadgeNumber",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.setApplicationIconBadgeNumber(t)}},{key:"getApplicationIconBadgeNumber",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.getApplicationIconBadgeNumber(t)}},{key:"cancelLocalNotifications",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.cancelLocalNotifications(t)}},{key:"getScheduledLocalNotifications",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.getScheduledLocalNotifications(t)}},{key:"addEventListener",value:function(o,n){var l;(0,f.default)('notification'===o||'register'===o||'registrationError'===o||'localNotification'===o,'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events'),'notification'===o?l=s.addListener("remoteNotificationReceived",(function(o){n(new t(o))})):'localNotification'===o?l=s.addListener("localNotificationReceived",(function(o){n(new t(o))})):'register'===o?l=s.addListener("remoteNotificationsRegistered",(function(t){n(t.deviceToken)})):'registrationError'===o&&(l=s.addListener("remoteNotificationRegistrationError",(function(t){n(t)}))),v.set(o,l)}},{key:"removeEventListener",value:function(t,o){(0,f.default)('notification'===t||'register'===t||'registrationError'===t||'localNotification'===t,'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events');var n=v.get(t);n&&(n.remove(),v.delete(t))}},{key:"requestPermissions",value:function(t){var o={alert:!0,badge:!0,sound:!0};return t&&(o={alert:!!t.alert,badge:!!t.badge,sound:!!t.sound}),(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.requestPermissions(o)}},{key:"abandonPermissions",value:function(){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.abandonPermissions()}},{key:"checkPermissions",value:function(t){(0,f.default)('function'==typeof t,'Must provide a valid callback'),(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.checkPermissions(t)}},{key:"getInitialNotification",value:function(){return(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.getInitialNotification().then((function(o){return o&&new t(o)}))}},{key:"getAuthorizationStatus",value:function(t){(0,f.default)(c.default,'PushNotificationManager is not available.'),c.default.getAuthorizationStatus(t)}}])})();h.FetchResult={NewData:'UIBackgroundFetchResultNewData',NoData:'UIBackgroundFetchResultNoData',ResultFailed:'UIBackgroundFetchResultFailed'},m.exports=h}),410,[7,14,15,158,56,411,9]);
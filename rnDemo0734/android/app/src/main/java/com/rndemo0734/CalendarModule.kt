package com.rndemo0734

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

class CalendarModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        Log.d("CalendarModule", "getName called")
        return "CalendarModule"
    }

    override fun getConstants(): MutableMap<String, Any>? {
        Log.d("CalendarModule", "getConstants called")
        return hashMapOf("EVENT_NAME" to "CreateCalendarEvent")
    }

    @ReactMethod
    fun createCalendarEvent(name: String, location: String, callback: Callback) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
        val eventId = "1" // create event in calendar
        callback.invoke(null, eventId)
    }

    @ReactMethod
    fun createCalendarEventOther(
        name: String,
        location: String,
        successCallback: Callback,
        errorCallback: Callback
    ) {
        Log.d("CalendarModule", "Create event called with name: and location: ")
        errorCallback.invoke("Error occurred")
    }

    @ReactMethod
    fun createCalendarEventPromise(name: String, location: String, promise: Promise) {
        try {
            Log.d("CalendarModule", "Create event called with name: and location: ")
            if (name == "error") {
                throw Exception("Invalid name")
            }
            promise.resolve("Event created")
        } catch (e: Exception) {
            promise.reject("Error", e)
        }
    }

    private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }

    private var listenerCount = 0

    @ReactMethod
    fun addListener(eventName: String) {
        if (listenerCount == 0) {

        }
        listenerCount++
        Log.d("CalendarModule", "Listener count: $listenerCount")
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        listenerCount -= count
        if (listenerCount == 0) {

        }
        Log.d("CalendarModule", "Listener count: $listenerCount")
    }

    @ReactMethod
    fun createEvent(eventProperty: String) {
        val params: WritableMap = Arguments.createMap()
        params.putString("eventProperty", eventProperty)

        sendEvent(reactApplicationContext, "EventReminder", params)
    }
}
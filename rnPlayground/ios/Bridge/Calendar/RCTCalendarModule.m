//
//  RCTCalendarModule.m
//
//  Created by 郝宜文 on 2023/11/12.
//

#import "RCTCalendarModule.h"
//#import <React/RCTLog.h>
//
////NSInteger createCalendarEvent() {
////  return 123;
////}
//
//@implementation RCTCalendarModule
//{
//
//}
//
//
//+ (BOOL)requiresMainQueueSetup
//{
//  return NO;
//}
//
//// 导出的module名称
//RCT_EXPORT_MODULE(CalendarModuleFoo);
//
//// 回调风格
////RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location errorCallback:(RCTResponseSenderBlock)errorCallback successCallback:(RCTResponseSenderBlock)successCallback)
////{
////  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
////  @try {
////    NSNumber *eventId = [NSNumber numberWithInt:123];
////    successCallback(@[eventId]);
////  } @catch (NSException *exception) {
////    errorCallback(@[exception]);
////  }
////}
//
//// promise风格
////RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
////{
////  NSInteger eventId = createCalendarEvent();
////  if(eventId) {
////    resolve(@(eventId));
////  } else {
////    reject(@"event_failure", @"no event id returned", nil);
////  }
////}
//
//@end
//

@implementation CalendarModule
{
  BOOL hasListeners;
}

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup{
  return NO;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"EventCreated"];
}

- (NSDictionary *)constantsToExport
{
  return @{
    @"DEFAULT_EVENT_NAME": @"NEW EVENT",
    @"SOME_OTHER_CONSTANT": @"Some Other Value"
  };
}

- (void)startObserving {
  hasListeners = YES;
}

- (void)stopObserving {
  hasListeners = NO;
}

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title location:(NSString *)location)
{
  if(hasListeners) {
    [self sendEventWithName:@"EventCreated" body:@{@"title": title, @"location": location}];
  }
}

@end

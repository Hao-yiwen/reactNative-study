//
//  SwiftModuleBridge.m
//  rnDemo
//
//  Created by 郝宜文 on 2023/11/14.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SwiftModule, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end

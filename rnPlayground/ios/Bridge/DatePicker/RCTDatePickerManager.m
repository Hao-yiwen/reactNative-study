//
//  RCTDatePickerManager.m
//  rnDemo
//
//  Created by yw.hao on 2023/11/14.
//

#import "RCTDatePickerManager.h"

@implementation RCTDatePickerManager

RCT_EXPORT_MODULE(RCTDatePicker)

- (UIView *) view {
  UIDatePicker *picker = [[UIDatePicker alloc] init];
  return picker;
}

- (NSDictionary *) constantsToExport {
  return @{
    @"ComponentHeight": @(200), // 定义组件的默认高度
    @"ComponentWidth": @(300)   // 定义组件的默认宽度
  };
}

@end

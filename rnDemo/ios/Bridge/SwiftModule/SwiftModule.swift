//
//  SwiftModule.swift
//  rnDemo
//
//  Created by yw.hao on 2023/11/14.
//

import Foundation

@objc(SwiftModule)
class SwiftModule: NSObject {
  static func moduleName() -> String! {
    return "SwiftModule"
  }
  
  
 @objc
  func constantsToExport() -> [String: Any]! {
   return ["someKey": "someValue"]
 }
  
  @objc
  func addEvent(_ name: String, location: String, date: NSNumber) -> Void {
     // Date is ready to use!
    print(name + location + date.stringValue + "哈哈哈哈");
  }
}

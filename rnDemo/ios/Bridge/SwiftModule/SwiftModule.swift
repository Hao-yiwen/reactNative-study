//
//  SwiftModule.swift
//  rnDemo
//
//  Created by yw.hao on 2023/11/14.
//

import Foundation
import React

@objc(SwiftModule)
class SwiftModule: NSObject, RCTBridgeModule {
  static func moduleName() -> String! {
    return "SwiftModule"
  }
  
  
 @objc
  func constantsToExport() -> [String: Any]! {
   return ["someKey": "someValue"]
 }
  
  @objc
  func getHelloMessage(_ callback: RCTResponseSenderBlock){
    callback(["hello from swift"])
  }
}

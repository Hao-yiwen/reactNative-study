//
//  AppDelegate.swift
//  rnDemo1
//
//  Created by yw.hao on 2023/11/8.
//

import UIKit
import React

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let mockData:NSDictionary = ["scores":
          [
              ["name":"Alex", "value":"42"],
              ["name":"Joel", "value":"10"]
          ]
        ]
        
        let jsCodeLocation = URL(string: "http://127.0.0.1:8081/index.bundle?platform=ios")!
          let rootView = RCTRootView(
              bundleURL: jsCodeLocation,
              moduleName: "RNHighScores",
              initialProperties: mockData as [NSObject : AnyObject],
              launchOptions: nil
          )
          let vc = UIViewController()
          vc.view = rootView
        self.window = UIWindow(frame: UIScreen.main.bounds)
        window?.backgroundColor = .white
        window!.rootViewController = vc
        window!.makeKeyAndVisible()
        return true
    }
}


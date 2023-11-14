//
//  RNTMapView.h
//  rnDemo
//
//  Created by yw.hao on 2023/11/14.
//

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

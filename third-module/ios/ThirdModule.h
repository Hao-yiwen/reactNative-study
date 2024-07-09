
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNThirdModuleSpec.h"

@interface ThirdModule : NSObject <NativeThirdModuleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ThirdModule : NSObject <RCTBridgeModule>
#endif

@end

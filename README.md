# react-native-react-native-reachability-popup

## Getting started

`$ npm install react-native-reachability-popup --save`

### Mostly automatic installation

`$ react-native link react-native-reachability-popup`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-reachability-popup` and add `ReactNativeReachabilityPopup.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libReactNativeReachabilityPopup.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`

-   Add `import com.reactlibrary.ReachabilityPopupPackage;` to the imports at the top of the file
-   Add `new ReachabilityPopupPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
    ```
    include ':react-native-react-native-reachability-popup'
    project(':react-native-react-native-reachability-popup').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-reachability-popup/android')
    ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
    ```
      compile project(':react-native-react-native-reachability-popup')
    ```

## Usage

```javascript
import ReactNativeReachabilityPopup from "react-native-reachability-popup";

// TODO: What to do with the module?
ReactNativeReachabilityPopup;
```

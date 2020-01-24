# react-native-reachability-popup

<p align="center" style="font-size: 1.2rem;">
  <strong>Reachability Popup</strong> it is a React Native module to help you with easily handle and check internet availablility <br />
  
  <img src="https://i.imgur.com/qKurVQF.png" alt="Global Demo of Spinner Component" style="border: 0; width: 86%; min-width: 240px; max-width: 20%; height: 20%" />
</p>
## Getting started

`$ yarn add react-native-reachability-popup`

## Usage

## Basic Usage

The _Spinner component_ it's build to a global use, so you have to instance this component once in your main app screen always as a last inserted component:

```jsx
import React from "react";
import { View } from "react-native";
import Reachability { isNetworkReachable, isConnected } from "react-native-reachability-popup";

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View ref={"otherView1"} />
                <View ref={"otherView2"} />
                <View ref={"otherView3"} />
                {/* GLOBAL REACHABILITY COMPONENT INSTANCE */}
                <Reachability />
                {/* <--- here as last component */}
            </View>
        );
    }
}
```

## Common properties

| name               | description                       |     type | return  |
| :----------------- | :-------------------------------- | -------: | :------ |
| isNetworkReachable | check is network reachable        | Function | Boolean |
| isConnected        | check is connected to wifi/Lte... | Function | Boolean |

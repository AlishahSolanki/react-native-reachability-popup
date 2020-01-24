import React, { Component } from "react";
import {
	Text,
	Animated,
	TouchableWithoutFeedback,
	Easing,
	Dimensions,
	Platform
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import ReachabilityManager from "./ReachabilityManager";
const { width, height } = Dimensions.get("window");

function srid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return `${s4()}-${s4()}-${s4()}`;
}

export function isConnected() {
	const ref = ReachabilityManager.getDefault();
	if (!!ref) {
		return ref.isConnected();
	}
}
export function isNetworkReachable() {
	const ref = ReachabilityManager.getDefault();
	if (!!ref) {
		return ref.isNetworkReachable();
	}
}

class Reachability extends Component {
	constructor(props) {
		super(props);
		if (!this._id) this._id = srid();
		ReachabilityManager.register(this);
		this.unsubscribe = NetInfo.addEventListener(this.checkConnection);
	}

	state = {
		type: "",
		isConnected: true,
		isInternetReachable: true,
		offsetX: new Animated.Value(-40)
	};
	animatedValue = new Animated.Value(0);

	movingMargin = this.animatedValue.interpolate({
		inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
		outputRange: [
			width / 2 - 150,
			width / 2 - 150 - 20,
			width / 2 - 150 + 20,
			width / 2 - 150 - 20,
			width / 2 - 150 + 20,
			width / 2 - 150
		]
	});
	componentDidMount() {}
	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.isConnected !== this.state.isConnected &&
			!this.state.isConnected
		) {
			this.animatedDown();
		}
		if (
			prevState.isConnected !== this.state.isConnected &&
			this.state.isConnected
		) {
			this.animatedUp();
		}
		if (
			prevState.isInternetReachable !== this.state.isInternetReachable &&
			!this.state.isInternetReachable
		) {
			this.animatedDown();
		}
	}
	animatedDown = () => {
		Animated.timing(this.state.offsetX, {
			toValue: 88 + 10
		}).start(() => {
			setTimeout(() => {
				Animated.timing(this.state.offsetX, {
					toValue: -40
				}).start();
			}, 7000);
		});
	};
	animatedUp = () => {
		Animated.timing(this.state.offsetX, {
			toValue: -40
		}).start();
	};
	isConnected = () => {
		if (!this.state.isConnected || !this.state.isInternetReachable) {
			this.animatedDown();
		} else {
			this.animatedUp();
		}
		return this.state.isConnected;
	};
	isNetworkReachable = () => {
		return this.state.isInternetReachable;
	};
	checkConnection = state => {
		this.setState({
			type: state.type,
			isConnected: state.isConnected,
			isInternetReachable:
				state.isInternetReachable == null
					? true
					: state.isInternetReachable
		});
	};
	componentWillUnmount() {
		this.unsubscribe();
		ReachabilityManager.unregister(this);
	}
	onPress = () => {
		if (!this.state.isConnected || !this.state.isInternetReachable) {
			Animated.timing(this.animatedValue, {
				toValue: 1,
				duration: 1000,
				easing: Easing.linear
			}).start(() => {
				this.animatedValue.setValue(0);
			});
		} else {
			Animated.timing(this.state.offsetX, {
				toValue: -40
			}).start();
		}
	};
	render() {
		return (
			<TouchableWithoutFeedback onPress={this.onPress}>
				<Animated.View
					style={[
						{
							position: "absolute",
							width: 300,
							height: 40,
							backgroundColor: "#ff0000B3",
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							borderRadius: 5,
							left: this.movingMargin,
							borderWidth: 2,
							borderColor: "#ff0000",
							zIndex: 100
						},
						{ transform: [{ translateY: this.state.offsetX }] }
					]}>
					<Text style={{ color: "#fff", fontSize: 17 }}>
						{this.state.isConnected == false
							? "No Internet Connection"
							: "Network Unreachable"}
					</Text>
				</Animated.View>
			</TouchableWithoutFeedback>
		);
	}
}

export default Reachability;

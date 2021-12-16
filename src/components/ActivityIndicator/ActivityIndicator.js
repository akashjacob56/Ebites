import React from "react";
import {
  Container,
  ActivityIndicator,
  Content,
  Text,
  View,
  Image,
} from "react-native";
import Images from "../../utils/Images";
import Colors from "../../utils/Colors";

import { connect } from "react-redux";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";

const Activity = (props) => (
  <View
    style={{
      flex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    }}
  >
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primaryColor,
        opacity: 1,
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={Images.LogoApp}
      />
      <Text
        allowFontScaling={false}
        style={{
          fontSize: 16,
          color: Colors.LightBlue,
          marginTop: 20,
        }}
      >
        Loading
      </Text>

      <View
        style={{ width: "100%", height: 30, backgroundColor: "transparent" }}
      >
        <DotIndicator count={6} color="white" size={5} />
      </View>
    </View>
  </View>
);

export default Activity;

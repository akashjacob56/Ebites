import React from "react";
import {
  Container,
  ActivityIndicator,
  Content,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
import Images from "../../utils/Images";
import Colors from "../../utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Fonts from "../../utils/Fonts";

const DummySplash = (props) => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.primaryColor,
    }}
  >
    <StatusBar backgroundColor={Colors.primaryColor} barStyle="dark-content" />
    <Image
      resizeMode="contain"
      style={{ width: "100%", height: "100%" }}
      source={Images.splashScreen}
    />
  </SafeAreaView>
);

export default DummySplash;

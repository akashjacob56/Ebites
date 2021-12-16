import * as React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import Colors from "../../utils/Colors.js";
import Fonts from "../../utils/Fonts.js";
import Images from "../../utils/Images";

interface Props {
  label: string;
  onPress: () => void;
  height: int;
}

class AppButton extends React.Component<Props> {
  render() {
    const {
      label,
      onPress,
      height,
      width,
      s,
      top,
      position,
      bot,
      radius,
      backGrondColor,
      textColor,
      borderColor,
      borderWidth,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          s,
          {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: top,
            height: height,
            position: position,
            bottom: bot,
            backgroundColor: backGrondColor,
            width: width,
            borderWidth: borderWidth,
            borderRadius: 50,
            borderColor: borderColor,
          },
        ]}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 15,
            fontFamily: Fonts.rubikBold,
          }}
        >
          {label}
        </Text>
        {/* <Image
            style={{ width: 60, height: 60, position: "absolute", right: 10 }}
            resizeMode="contain"
            source={Images.ButtonArrow}
          /> */}
      </TouchableOpacity>
    );
  }
}

export default AppButton;

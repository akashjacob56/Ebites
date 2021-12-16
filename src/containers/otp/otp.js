import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Colors from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import Images from "../../utils/Images";
import AppButton from "../../components/AppButton/AppButton";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Otp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      pickerData: "",
      mCountryCode: "91",
      email: "",
      otp: "",
      code: "",
    };
    const { navigation } = props;

    this.didFocusListener = navigation.addListener(
      "didFocus",
      this.componentDidFocus
    );
  }

  componentDidFocus = (payload) => {};

  componentDidMount() {}

  verifyButtonAction() {
    this.props.navigation.navigate("Register");
  }

  sendAgainButtonAction() {}

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.gray }}>
        <View
          style={{
            height: windowHeight,
            width: windowWidth,
          }}
        >
          <View style={styles.textView}>
            <Text
              style={{
                color: Colors.textDarkColor,
                fontSize: 22,
                fontFamily: Fonts.balooBhaijaanRegular,
              }}
            >
              Check your email
            </Text>
            <Text
              style={{
                color: Colors.textLightColor,
                fontSize: 15,
                marginTop: 10,
                fontFamily: Fonts.interMedium,
              }}
            >
              We've sent the code to your email
            </Text>
          </View>
          <View
            style={{
              width: "80%",
              height: 60,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <SmoothPinCodeInput
              ref={this.pinInput}
              cellStyle={{
                borderColor: "white",
                borderRadius: 13,
                height: 60,
                width: 60,
                backgroundColor: "white",
                shadowColor: Colors.textLightColor,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 5,
                shadowRadius: 10,
                elevation: 5,
              }}
              cellSpacing={10}
              cellStyleFocused={{
                borderColor: "white",
                backgroundColor: Colors.primaryColor,
              }}
              codeLength={4}
              keyboardType="number-pad"
              textStyle={{
                fontSize: 24,
                color: Colors.textDarkColor,
              }}
              textStyleFocused={{
                color: Colors.white,
              }}
              placeholder=""
              value={this.state.code}
              onTextChange={(code) => this.setState({ code })}
              onFulfill={this._checkCode}
            />
          </View>

          <View>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 15,
                marginTop: 40,
                color: Colors.textDarkColor,
                fontFamily: Fonts.interMedium,
                alignSelf: "center",
              }}
            >
              Code expires in:{" "}
              <Text
                allowFontScaling={false}
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  color: Colors.red,
                  fontFamily: Fonts.interMedium,
                  alignSelf: "center",
                }}
              >
                03:12
              </Text>
            </Text>
          </View>

          <AppButton
            label={"Verify"}
            height={60}
            width={"90%"}
            top={"10%"}
            backGrondColor={Colors.primaryColor}
            textColor={Colors.white}
            onPress={() => this.verifyButtonAction()}
          />

          <AppButton
            label={"Send again"}
            height={60}
            width={"90%"}
            top={"5%"}
            backGrondColor={Colors.white}
            textColor={Colors.textDarkColor}
            borderColor={Colors.textLightColor}
            borderWidth={1}
            onPress={() => this.sendAgainButtonAction()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Otp;

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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      pickerData: "",
      mCountryCode: "91",
      email: "",
      eye: true,
      password: "",
    };
    const { navigation } = props;

    this.didFocusListener = navigation.addListener(
      "didFocus",
      this.componentDidFocus
    );
  }

  componentDidFocus = (payload) => {};

  componentDidMount() {}

  nextButtonAction() {
    this.props.navigation.navigate("Otp");
  }

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
              Enter Password
            </Text>
            <Text
              style={{
                color: Colors.textLightColor,
                fontSize: 15,
                marginTop: 10,
                fontFamily: Fonts.interMedium,
              }}
            >
              Please enter your new password
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: 60,
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 32,
              justifyContent: "center",
              backgroundColor: Colors.white,
              flexDirection: "row",
              shadowColor: Colors.textLightColor,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 5,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <View
              style={{
                height: "100%",
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
                source={Images.lockPassword}
              />
            </View>
            <TextInput
              placeholderTextColor={Colors.black}
              placeholder="Enter your password"
              placeholderTextColor={Colors.textLightColor}
              style={styles.textInputView}
              returnKeyType="done"
              keyboardType="default"
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              autoCapitalize={false}
              secureTextEntry={this.state.eye}
              maxLength={30}
            />
            <TouchableOpacity
              onPress={() =>
                this.setState({ eye: this.state.eye == true ? false : true })
              }
              style={{
                height: "100%",
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
                source={Images.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "80%",
              height: "5%",
              justifyContent: "center",
              alignItems: "flex-end",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: Colors.primaryColor,
                  fontSize: 14,
                  textAlign: "right",
                  fontFamily: Fonts.balooBhaijaanRegular,
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <AppButton
            label={"Next"}
            height={60}
            width={"90%"}
            top={"10%"}
            backGrondColor={Colors.primaryColor}
            textColor={Colors.white}
            onPress={() => this.nextButtonAction()}
            //onPress={() => this.props.navigation.navigate("HomeStack")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Password;

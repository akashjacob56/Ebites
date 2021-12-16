import React from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import Images from "../../utils/Images";
import Colors from "../../utils/Colors";
import styles from "./styles";
import Fonts from "../../utils/Fonts";
import CountryPicker from "rn-country-picker";
import AppButton from "../../components/AppButton/AppButton";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      pickerData: "",
      mCountryCode: "91",
      phone: "",
    };
    const { navigation } = props;

    this.didFocusListener = navigation.addListener(
      "didFocus",
      this.componentDidFocus
    );
  }

  componentDidFocus = (payload) => {};

  componentDidMount() {}

  _selectedValue = (index) => {
    this.setState({ mCountryCode: index });
    console.log("country code", index);
  };
  loginAction() {
    this.props.navigation.navigate("Password");
  }
  loginView() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            height: windowHeight,
            width: windowWidth,
          }}
        >
          <View style={styles.logoView}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              resizeMode="stretch"
              source={Images.loginTopImage}
            />
          </View>
          <View style={styles.welComeView}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 32,
                fontFamily: Fonts.rubikBold,
              }}
            >
              Welcome{" "}
              <Text
                style={{
                  color: Colors.primaryColor,
                  fontSize: 32,
                  fontFamily: Fonts.rubikBold,
                }}
              >
                food App
              </Text>
            </Text>
          </View>
          <View style={styles.loginTextView}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontFamily: Fonts.rubikMedium,
              }}
            >
              Login to your account
            </Text>
          </View>
          <View style={styles.logoView1}>
            <ImageBackground
              style={{
                width: "100%",
                height: windowWidth,
              }}
              resizeMode="cover"
              source={Images.loginBackground}
            >
              <View
                style={{
                  width: "90%",
                  height: 50,
                  alignSelf: "center",
                  marginTop: 30,
                  borderWidth: 1,
                  borderColor: "lightgray",
                  borderRadius: 20,
                  justifyContent: "center",
                  backgroundColor: Colors.white,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <CountryPicker
                    disable={false}
                    animationType={"slide"}
                    containerStyle={styles.pickerStyle}
                    pickerTitleStyle={styles.pickerTitleStyle}
                    selectedCountryTextStyle={styles.selectedCountryTextStyle}
                    countryNameTextStyle={styles.countryNameTextStyle}
                    pickerTitle={"Country Picker"}
                    searchBarPlaceHolder={"Search......"}
                    hideCountryFlag={false}
                    hideCountryCode={false}
                    searchBarStyle={styles.searchBarStyle}
                    countryCode={this.state.mCountryCode}
                    selectedValue={this._selectedValue}
                  />
                  <View
                    style={{
                      height: "80%",
                      width: 2,
                      marginLeft: 5,
                      backgroundColor: Colors.textLightColor,
                    }}
                  ></View>
                </View>
                <TextInput
                  placeholderTextColor={Colors.black}
                  placeholder="Enter your phone number"
                  style={styles.textInputView}
                  returnKeyType="done"
                  keyboardType="default"
                  value={this.state.phone}
                  onChangeText={(phone) => this.setState({ phone })}
                  autoCapitalize={false}
                  secureTextEntry={false}
                  maxLength={30}
                />
              </View>
              <AppButton
                label={"Login"}
                height={50}
                width={"80%"}
                top={"10%"}
                backGrondColor={Colors.primaryColor}
                textColor={Colors.white}
                onPress={() => this.loginAction()}
                //onPress={() => this.props.navigation.navigate("HomeStack")}
              />
              <View style={styles.socialTextView}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 15,
                    fontFamily: Fonts.rubikMedium,
                  }}
                >
                  or connect wit social
                </Text>
              </View>
              <View style={styles.socialIconView}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                    }}
                    resizeMode="contain"
                    source={Images.facebook}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                    }}
                    resizeMode="contain"
                    source={Images.google}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                    }}
                    resizeMode="contain"
                    source={Images.apple}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.gray,
        }}
      >
        <StatusBar backgroundColor={Colors.gray} barStyle="dark-content" />
        {this.state.screen == 0 ? this.loginView() : null}
      </SafeAreaView>
    );
  }
}
export default Login;

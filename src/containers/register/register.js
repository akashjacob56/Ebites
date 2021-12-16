import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Colors from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import Images from "../../utils/Images";
import AppButton from "../../components/AppButton/AppButton";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      address: "",
      eye: true,
    };
    const { navigation } = props;

    this.didFocusListener = navigation.addListener(
      "didFocus",
      this.componentDidFocus
    );
  }

  componentDidFocus = (payload) => {};

  componentDidMount() {}

  signUpAction() {
    this.props.navigation.navigate("HomeStack");
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.gray }}>
        <ScrollView>
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
                Create an account
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
            <View style={styles.outerView}>
              <View style={styles.innerView1}>
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
                placeholder="User Name"
                placeholderTextColor={Colors.textLightColor}
                style={styles.textInputView}
                returnKeyType="done"
                keyboardType="default"
                value={this.state.userName}
                onChangeText={(userName) => this.setState({ userName })}
                autoCapitalize={false}
                secureTextEntry={false}
                maxLength={30}
              />
            </View>
            <View style={styles.outerView}>
              <View style={styles.innerView1}>
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
                placeholder="Enter email Id"
                placeholderTextColor={Colors.textLightColor}
                style={styles.textInputView}
                returnKeyType="done"
                keyboardType="default"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                autoCapitalize={false}
                secureTextEntry={false}
                maxLength={30}
              />
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
                style={styles.textInputViewPassword}
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
            <View style={styles.outerView}>
              <View style={styles.innerView1}>
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
                placeholder="Address"
                placeholderTextColor={Colors.textLightColor}
                style={styles.textInputView}
                returnKeyType="done"
                keyboardType="default"
                value={this.state.address}
                onChangeText={(address) => this.setState({ address })}
                autoCapitalize={false}
                secureTextEntry={false}
                maxLength={30}
              />
            </View>

            <AppButton
              label={"Sign Up"}
              height={60}
              width={"90%"}
              top={"15%"}
              backGrondColor={Colors.primaryColor}
              textColor={Colors.white}
              onPress={() => this.signUpAction()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Register;

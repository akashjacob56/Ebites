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
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import Images from "../../utils/Images";
import Colors from "../../utils/Colors";
import styles from "./styles";
import Fonts from "../../utils/Fonts";
import AppButton from "../../components/AppButton/AppButton";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      foodDrinkItem: [
        {
          name: "Food",
          image: Images.foodBurger,
        },
        {
          name: "Juice",
          image: Images.juiceCup,
        },
        {
          name: "Dessert",
          image: Images.dessert,
        },
      ],
    };
    const { navigation } = props;

    this.didFocusListener = navigation.addListener(
      "didFocus",
      this.componentDidFocus
    );
  }

  componentDidFocus = (payload) => {};

  componentDidMount() {}

  loginAction() {
    this.props.navigation.navigate("Password");
  }

  eatingItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        // onPress={() => this.storiesAction(item)}
        style={{
          backgroundColor: Colors.white,
          height: 60,
          width: 130,
          flexDirection: "row",
          borderRadius: 30,
          justifyContent: "space-evenly",
          margin: 10,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Image source={item.image} style={{ height: 35, width: 35 }} />
        <Text
          style={{
            fontSize: 15,
            color: Colors.textExtraDrakColor,
          }}
        >
          {item.name}
        </Text>
        {/* <View style={{ position: "absolute", right: "8%", top: "5%" }}>
          <Image source={Images.crossBlack} style={{ height: 15, width: 15 }} />
        </View> */}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.gray,
        }}
      >
        <StatusBar backgroundColor={Colors.gray} barStyle="dark-content" />
        <ScrollView>
          <View
            style={{
              height: windowHeight,
              width: windowWidth,
            }}
          >
            <View
              style={{
                height: "10%",
                width: "80%",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "80%", justifyContent: "center" }}>
                <Text
                  style={{
                    color: Colors.textDarkColor,
                    fontSize: 14,
                    fontFamily: Fonts.balooBhaijaanRegular,
                  }}
                >
                  Location
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    resizeMode="contain"
                    source={Images.location}
                  />
                  <Text
                    style={{
                      color: Colors.textLightColor,
                      fontSize: 14,
                      marginLeft: 5,
                      textAlign: "center",
                      fontFamily: Fonts.interMedium,
                    }}
                  >
                    5 phase Mohali
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  resizeMode="cover"
                  source={Images.search}
                />
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: "20%",
                width: "100%",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "row",
                backgroundColor: Colors.primaryColor,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="stretch"
                source={Images.offerImage}
              />
            </TouchableOpacity>
            <View
              activeOpacity={1}
              style={{
                height: "10%",
                marginTop: 20,
                width: "100%",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <FlatList
                data={this.state.foodDrinkItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={this.eatingItem}
              />
            </View>
            <View
              activeOpacity={1}
              style={{
                height: "10%",
                marginTop: 20,
                width: "100%",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <FlatList
                data={this.state.foodDrinkItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={this.eatingItem}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Login;

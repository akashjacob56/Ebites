import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Colors from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  textView: {
    height: "20%",
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
  },
  textInputView: {
    width: "60%",
    color: Colors.white,
    fontSize: 14,
  },
  pickerStyle: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: "#000",
    textAlign: "right",
  },
  countryNameTextStyle: {
    paddingLeft: 10,
    color: "#000",
    textAlign: "right",
  },
  searchBarStyle: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 8,
    marginRight: 10,
    color: Colors.primaryColor,
  },
  socialTextView: {
    height: "15%",
    width: windowWidth,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  socialIconView: {
    height: "20%",
    width: windowWidth,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

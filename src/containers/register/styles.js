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
  outerView: {
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
  },
  innerView1: {
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  textInputView: {
    width: "80%",
    color: Colors.textDarkColor,
    fontSize: 14,
  },
  textInputViewPassword: {
    width: "60%",
    color: Colors.textDarkColor,
    fontSize: 14,
  },
});

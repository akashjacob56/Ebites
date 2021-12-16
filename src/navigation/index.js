import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Login from "../containers/login";
import Otp from "../containers/otp";
import Password from "../containers/password";
import Register from "../containers/register";
import Home from "../containers/home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Password}
          name="Password"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Otp}
          name="Otp"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Register}
          name="Register"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={TabNavigation}
          name="BeforeLogin"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={TabNavigation}
          name="HomeStack"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="OtpScreen" component={Otp} />
    </Tab.Navigator>
  );
}

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView
      style={{
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        backgroundColor: "white",
        width: widthPercentageToDP("90%"),
        marginStart: widthPercentageToDP("5%"),
        minHeight: 50,
        borderRadius: 500,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default Navigation;

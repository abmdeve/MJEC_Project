import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BottomTabBarButtonProps,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Services from "../screens/Services";
import About from "../screens/About";
import Former from "../screens/Former";
import { RootStackScreenProps } from "./RootNavigator";
import { COLORS } from "../configs/Colors";

export type TabsStackParamList = {
  Home: undefined;
  Services: undefined;
  About: undefined;
  Former: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsStackParamList, T>,
    RootStackScreenProps<"TabsStack">
  >;

const TABS = [
  {
    name: "Home",
    route: "Formation",
    component: Home,
    icon: "home",
    color: COLORS.darkRedIcon,
    white: "fff",
    alphaClr: COLORS.ligthRedIcon,
  },
  {
    name: "Services",
    component: Services,
    icon: "shopping-cart",
    color: COLORS.darkBlueIcon,
    white: "fff",
    route: "Services",
    alphaClr: COLORS.ligthBlueIcon,
  },
  {
    name: "Former",
    component: Former,
    icon: "account-balance-wallet",
    color: COLORS.darkOrangeIcon,
    white: "fff",
    route: "Formateur",
    alphaClr: COLORS.ligthOrangeIcon,
  },
  {
    name: "About",
    component: About,
    icon: "person",
    color: COLORS.darkPurpleIcon,
    white: "fff",
    route: "A propos",
    alphaClr: COLORS.ligthPurpleIcon,
  },
];

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0 },
        1: { scale: 1 },
      });
      textViewRef.current.animate({
        0: { scale: 0 },
        1: { scale: 1 },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1 },
        1: { scale: 0 },
      });
      textViewRef.current.animate({
        0: { scale: 1 },
        1: { scale: 0 },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.7 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? null : item.alphaClr },
          ]}
        >
          <MaterialIcons
            size={20}
            name={item.icon}
            color={focused ? COLORS.white : item.color}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: COLORS.white,
                  paddingHorizontal: 8,
                  fontWeight: "bold",
                }}
              >
                {item.route}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
     >
      {TABS.map((item, index) => {
        return (
          <TabsStack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props: BottomTabBarButtonProps) => (
                <TabButton {...props} item={item} />
              ),
            }}
          />
        );
      })}
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
});

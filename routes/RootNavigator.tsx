import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import TabsNavigator, { TabsStackParamList } from "./TabsNavigator";
import SingleFormation from "../screens/Home/SingleFormation";
import SingleAbout from "../screens/About/SingleAbout";
import SingleFormer from "../screens/Former/SingleFormer";
import SingleServices from "../screens/Services/SingleServices";
import SingleCarousel from "../screens/Home/SingleCarousel";
import SingleTrain from "../screens/Former/SingleFormer/SingleTrain";

export type RootStackParamList = {
  TabsStack: NativeStackScreenProps<TabsStackParamList>;
  SingleFormation: undefined;
  SingleAbout: { id: number };
  SingleFormer: { id: number };
  SingleServices: { id: number };
  SingleCarousel: { id: number };
  SingleTrain: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabsStack" component={TabsNavigator} />
      <Stack.Screen name="SingleFormation" component={SingleFormation} />
      <Stack.Screen name="SingleAbout" component={SingleAbout} />
      <Stack.Screen name="SingleFormer" component={SingleFormer} />
      <Stack.Screen name="SingleServices" component={SingleServices} />
      <Stack.Screen name="SingleCarousel" component={SingleCarousel} />
      <Stack.Screen name="SingleTrain" component={SingleTrain} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});

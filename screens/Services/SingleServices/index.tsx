import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../../../routes/RootNavigator";
import { colors, sizes, spacing } from "../../../utils/constants";
import CustomBackground from "../../../components/ServicesCard/BottomSheet/CustomBackground";
import CustomHandler from "../../../components/ServicesCard/BottomSheet/CustomHandler";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Divider from "../../../components/ServicesCard/BottomSheet/Divider";
import { COLORS } from "../../../configs/Colors";

const AnimatedDivider = Animated.createAnimatedComponent(Divider);

const SingleServices = ({
  navigation,
}: RootStackScreenProps<"SingleServices">) => {
  const snapPoints = useMemo(() => ["30%", "80%"], []);
  const animatedIndex = useSharedValue(0);

  const titleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.primary]
    ),
    marginBottom: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 10],
      Extrapolation.CLAMP
    ),
  }));

  const locationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.lightGray]
    ),
    fontSize: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [sizes.title, sizes.body],
      Extrapolation.CLAMP
    ),
  }));

  const locationIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [0, 1],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",
        }}
        style={{ flex: 1 }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 8,
          }}
        >
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: COLORS.darkRedIcon,
            }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>
          {/* <View style={{ flex: 1 }} /> */}
        </View>
      </SafeAreaView>
      {/* BOTTOMSHEET COMPONENT */}
      <BottomSheet
        index={0}
        animatedIndex={animatedIndex}
        snapPoints={snapPoints}
        backgroundComponent={CustomBackground}
        handleComponent={CustomHandler}
      >
        <Animatable.View
          animation="fadeInUp"
          delay={500}
          easing="ease-in-out"
          duration={400}
          style={styles.header}
        >
          <Animated.Text style={[styles.title, titleStyle]}>
            NAME SERVICE
          </Animated.Text>
          <View style={styles.location}>
            <Animated.Text style={[styles.locationText, locationStyle]}>
              ANNONCE SERVICE
            </Animated.Text>
            <Animated.View style={locationIconStyle}>
              <Ionicons
                name="ios-location"
                size={20}
                style={styles.locationIcon}
              />
            </Animated.View>
          </View>
          <AnimatedDivider style={contentStyle} />
          <Animated.View style={locationIconStyle}>
            <Text style={{ marginVertical: 10, }}>Description</Text>
            <Text style={{}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quisquam culpa accusantium numquam reprehenderit eum provident
              cumque excepturi, ducimus aut libero voluptate odit laborum
              voluptates? Sunt doloribus illo quis eos.
            </Text>
          </Animated.View>
        </Animatable.View>
      </BottomSheet>
    </View>
  );
};

export default SingleServices;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
  },
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: "bold",
    color: colors.white,
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  locationText: {
    fontSize: sizes.title,
    color: colors.white,
  },
  locationIcon: {
    color: colors.gray,
  },
});

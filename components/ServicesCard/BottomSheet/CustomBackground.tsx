import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { colors, sizes } from "../../../utils/constants";

const CustomBackground = ({
  style,
  animatedIndex,
}: BottomSheetBackdropProps) => {

    // const containerStyle = useAnimatedStyle(() => ({
    //     ...style,
    //     backgroundColor: colors.white,
    // }))
    const containerStyle = useAnimatedStyle(() => ({
      ...style,
      backgroundColor: colors.white,
      borderTopLeftRadius: sizes.radius,
      borderTopRightRadius: sizes.radius,
      opacity: interpolate(
        animatedIndex.value,
       [0, 0.08],
       [0, 1],
        Extrapolation.CLAMP
      ),
    }));

  return <Animated.View style={containerStyle} />;
  //   return <Animated.View style={containerStyle} />;
};

export default CustomBackground;

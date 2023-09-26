import { StyleSheet, Text, TouchableOpacity, View, PressableStateCallbackType } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export interface HeaderProps {
  style?: any;
  styleLeft?: any;
  styleCenter?: any;
  styleRight?: any;
  styleRightSecond?: any;
  title?: string;
  subTitle?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  onPressRightSecond?: () => void;
  renderLeft?: any;
//   renderLeft?: | React.ReactNode | ((state: PressableStateCallbackType) => React.ReactNode);
  renderRightSecond?: any;
  renderRight?: any;
  barStyle?: any;
}

const Header = ({
  style,
  styleCenter,
  styleLeft,
  styleRight,
  styleRightSecond,
  subTitle,
  title,
  renderLeft,
  renderRight,
  renderRightSecond,
  onPressLeft,
  onPressRightSecond,
  onPressRight,
  barStyle,
}: HeaderProps) => {
  return (
    <SafeAreaView style={{ width: "100%" }} edges={["top", "left", "right"]}>
      <View style={[styles.contain, style]}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={[styles.contentLeft, styleLeft]}
            onPress={onPressLeft}
          >
            {renderLeft}
          </TouchableOpacity>
        </View>
        <View style={[styles.contentCenter, styleCenter]}>
          <Text numberOfLines={1}>{title}</Text>
          {subTitle !== "" && <Text>{subTitle}</Text>}
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            style={[styles.contentRightSecond, styleRightSecond]}
            onPress={onPressRightSecond}
          >
            {renderRightSecond}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contentRight, styleRight]}
            onPress={onPressRight}
          >
            {renderRight}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  contain: {
    height: 45,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  contentLeft: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    width: 60,
    // backgroundColor: "red",
    // borderRadius: 10,
  },
  contentCenter: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  contentRight: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft: 10,
    paddingRight: 20,
    height: "100%",
  },
  contentRightSecond: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    height: "100%",
  },
  right: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

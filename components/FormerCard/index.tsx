import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import React, { useRef } from "react";
import Ripple from "react-native-material-ripple";
import { FORMER } from "../../utils/interfaces";
import Search from "../Search";

export interface FormerCardProps {
  data: Array<FORMER>;
  onPress: (id: number) => void;
}

const BG_IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const FormerCard = ({ data, onPress }: FormerCardProps) => {
  const { width, height } = Dimensions.get("window");
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFill}
        blurRadius={80}
      />
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          padding: SPACING,
          marginTop: StatusBar.currentHeight || 5,
        }}
        // ListHeaderComponent={() => (
        //   <Search value={value} onChange={setValue} keyboardType="name" />
        // )}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Ripple onPress={() => onPress(item.id)}>
              <Animated.View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: "rgba(225,225,225,0.8)",
                  borderRadius: 12,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: AVATAR_SIZE,
                    marginRight: SPACING / 2,
                  }}
                />
                <View>
                  <Text
                    numberOfLines={2}
                    style={{ fontSize: 22, fontWeight: "700" }}
                  >
                    {item.name.length > 35
                      ? item.name.substring(0, 35) + "..."
                      : item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{ fontSize: 18, opacity: 0.7 }}
                  >
                    {item.jobTitle.length > 35
                      ? item.jobTitle.substring(0, 35) + "..."
                      : item.jobTitle}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ fontSize: 14, opacity: 0.8, color: "#0099cc" }}
                  >
                    {item.institut}
                  </Text>
                </View>
              </Animated.View>
            </Ripple>
          );
        }}
      />
    </View>
  );
};

export default FormerCard;

const styles = StyleSheet.create({});

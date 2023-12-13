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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


// la fonction vérifie si l'image est une url en ligne ou en local en asset
const generatorSourceImage = (img:any) => {
  return typeof img ==='string' ? {uri: img} : img;
};

// const{width, height} = Dimensions.get('screen')

export interface FormerCardProps {
  data: Array<FORMER>;
  onPress: (id: number) => void;
}

// Ecran formateur 

const BG_IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const SPACING = 20;
const AVATAR_SIZE = 80;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const FormerCard = ({ data, onPress }: FormerCardProps) => {
  const { width, height } = Dimensions.get("window");
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFill}
        // opacité du fond d'écran
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
                  // source={{ uri: item.image }}
                  // source={item.image}
                  source={generatorSourceImage(item.image)}
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
                    {/* j'ai mis 18 à la place de 35 */}
                    {item.name.length > wp(5)
                      ? item.name.substring(0, wp(4.7)) + "..."
                      : item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{ fontSize: 18, opacity: 0.7 }}
                  >
                    {/* 35 wp */}
                    {item.jobTitle.length > wp(5)
                      ? item.jobTitle.substring(0, wp(5.5)) + "..."
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

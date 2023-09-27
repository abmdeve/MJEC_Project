import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import ItemCarousel from "./ItemCarousel";

const { width, height } = Dimensions.get("window");

export interface CarouselCardProps {
  data: Array<[]>;
  onPress: () => void;
}

const CarouselCard = ({ data, onPress }: CarouselCardProps) => {
  return (
    <View>
      <Carousel
      autoplay
      layout="default"
        data={data}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        // sliderWidth={600}
        // itemWidth={400} 
        slideStyle={{ display: "flex", alignItems: "center", height: 200 }}
        renderItem={({ item }) => (
          <ItemCarousel image={item.image} onPress={onPress} />
        )}
      />
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});

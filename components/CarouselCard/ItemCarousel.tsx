import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import Ripple from "react-native-material-ripple";

const { width, height } = Dimensions.get("window");

export interface ItemCarouselProps {
  image: any;
  onPress: () => void;
}

const ItemCarousel = ({ image, onPress }: ItemCarouselProps) => {
  return (
    <Ripple onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={{ width: width * 0.6, height: height * 0.4, borderRadius: 10 }}
      />
    </Ripple>
  );
};

export default ItemCarousel;

const styles = StyleSheet.create({});

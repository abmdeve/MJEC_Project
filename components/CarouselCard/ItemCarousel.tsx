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

// la fonction vérifie si l'image est une url en ligne ou en local en asset
const generatorSourceImage = (img: any) => {
  return typeof img ==='string' ? {uri: img} : img;
};

const { width, height } = Dimensions.get("window");

export interface ItemCarouselProps {
  image: any;
  onPress: () => void;
}

const ItemCarousel = ({ image, onPress }: ItemCarouselProps) => {
  return (
    <Ripple onPress={onPress}>
      <Image
        // source={{ uri: image }}
        source={generatorSourceImage(image)}
        style={{ width: width * 0.6, height: height * 0.4, borderRadius: 10 }}
      />
    </Ripple>
  );
};

export default ItemCarousel;

const styles = StyleSheet.create({});

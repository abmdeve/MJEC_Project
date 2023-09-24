import { StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../configs/Colors";

export interface CarouselProps {
  slides: Array<[]>;
}

const Carousel = ({ slides }: CarouselProps) => {
  return (
    <SliderBox
      images={slides}
      dotColor={COLORS.darkRedIcon}
      inactiveDotColor={COLORS.darkCyanIcon}
      autoplay
      circleLoop
      ImageComponentStyle={styles.container}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: "90%",
    marginTop: 15,
    height: 200,
    resizeMode: "contain",
    // paddingBottom: 15,
  },
});

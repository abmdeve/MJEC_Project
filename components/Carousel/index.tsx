import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../configs/Colors";

export interface CarouselProps {
  slides: Array<[]>;
}

const Carousel = ({ slides }: CarouselProps) => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={slides}
        dotColor={COLORS.darkRedIcon}
        inactiveDotColor={COLORS.darkCyanIcon}
        autoplay
        circleLoop
        ImageComponentStyle={styles.container}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    width: "90%",
    borderRadius: 15,
  },
  slide: {
    marginTop: 15,
    // height: 150,
    resizeMode: "contain",
    // paddingBottom: 15,
  },
});

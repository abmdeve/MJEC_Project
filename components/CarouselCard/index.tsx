import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import ItemCarousel from "./ItemCarousel";


const { width, height } = Dimensions.get("window");

export interface CarouselCardProps {
  // data: Array<[]>;
  data:{id:number, image:string; icon?: string;}[] // définir le type correct des données
  // onPress: () => void;
  onPress: (id:number) => void;
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
          //  j'ai retiré onPress={onPress} 
          <ItemCarousel image={item.image} onPress={()=> onPress(item.id)} />
        )}
      />
    </View>
  );
};

export default CarouselCard;

// const styles = StyleSheet.create({});

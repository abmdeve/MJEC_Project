import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../configs/Colors";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


// la fonction vérifie si l'image est une url en ligne ou en local en asset
const generatorSourceImage = (img: any) => {
  return typeof img ==='string' ? {uri: img} : img;
};
const width = Dimensions.get("window").width / 2.2;


export interface ServicesProps {
  onPress?: () => void;
  image?: ImageSourcePropType;
  title: string;
  subTitle: string;
  categorie: string;
}
const Services = ({
  onPress,
  image,
  title,
  subTitle,
  categorie,
}: ServicesProps) => {
  // marginHorizontal I remove 23 and I put 12
  return (
    
    // 12 to 8
    <TouchableOpacity
      onPress={onPress}
      style={{ marginHorizontal: 8, marginVertical: 10 }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={generatorSourceImage(image)}
            //   source={{uri: image}}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {subTitle}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            {categorie}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons
            name="arrow-right-bold-circle"
            size={30}
            color={COLORS.darkBlueIcon}
          />
          {/* <Ionicons name="add-circle" size={35} color={COLORS.darkBlueIcon} /> */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    // width 215 height 260
    width: width,
    height: 260,
    // marginEnd: 22,
    borderRadius: 20,
    // borderTopRightRadius: 20,
    backgroundColor: COLORS.ligthBlueIcon,
  },
  imageContainer: {
    flex: 1,
    // width 215
    width: width,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // width: 170,
    // marginLeft: 8,
    // marginTop: 8,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    // fontFamily: "bold",
    marginBottom: 2,
  },
  supplier: {
    fontSize: 13,
    // fontFamily: "bold",
    marginBottom: 2,
    // color: COLORS.textCurrent,
  },
  price: {
    fontSize: 20,
    // fontFamily: "bold",
    marginBottom: 2,
  },
  btn: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});

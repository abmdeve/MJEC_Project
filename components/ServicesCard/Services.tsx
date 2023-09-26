import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../configs/Colors";

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
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginHorizontal: 10, marginVertical: 10 }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
            }}
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
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: 10,
    backgroundColor: COLORS.ligthBlueIcon,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: 8,
    marginTop: 8,
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

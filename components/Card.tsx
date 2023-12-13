import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



// card de la section formation setrouvant sur le screen formation 
export interface CardProps {
  color?: string;
  width: number;
  aspectratio: number;
  title: string;
  // price: number;
  desc: string;
  i: number;
  image: any;
  onPress: () => void;
}
const Card = ({
  color,
  width,
  aspectratio,
  title,
  // price,
  desc,
  i,
  image,
  onPress,
}: CardProps) => {
  const { colors } = useTheme();

  return (
    <Ripple
      onPress={onPress}
      style={{
        backgroundColor: color,
        width: width,
        height: width * aspectratio,
        marginHorizontal: 5,
        marginVertical: 8,
        borderRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <View
        style={{
          //   aspectRatio: i === 0 ? 1 : 2/3,
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
          padding: 4,
        }}
      >
        <ImageBackground source={{ uri: image }} style={{ height: "100%" }}>
          <View style={[StyleSheet.absoluteFill, { padding: 10 }]}>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                padding: 4,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "900",
                  color: colors.text,
                  // I added textAlign: "center" and I changed fontWeight 600 to 900
                  textAlign: "center"
                }}
              >
                {title}
              </Text>
              {/* <View
                style={{
                  backgroundColor: colors.background,
                  borderRadius: 100,
                  height: 32,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons
                  name="favorite-border"
                  size={20}
                  color={colors.text}
                />
              </View> */}
            </View>
            {/* BLUR EFFET */}
            <View style={{ flex: 1 }} />
            <BlurView
              style={{
                flexDirection: "row",
                backgroundColor: "rgba(0,0,0,0.35)",
                alignItems: "center",
                padding: 5,
                borderRadius: 100,
                overflow: "hidden",
              }}
              intensity={20}
            >
              {/* <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#fff",
                  marginLeft: 4,
                }}
              >
                {price}XAF
              </Text> */}
              {/* J'ai ajouté le text en rétirant le prix commenté ci-dessus*/}
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#fff",
                  marginLeft: 4,
                  // textAlign: "center"
                }}
              >
                {desc}
              </Text>

              
              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  // I removed the paddingVertical from 8 to 0
                  paddingVertical: 0,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                }}
              >
                <MaterialIcons name="arrow-forward" color={"#000"} size={15} />
              </TouchableOpacity>
            </BlurView>
          </View>
        </ImageBackground>
      </View>
    </Ripple>
  );
};

export default Card;

const styles = StyleSheet.create({});

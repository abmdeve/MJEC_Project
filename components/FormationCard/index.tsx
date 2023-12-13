// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   ImageSourcePropType,
// } from "react-native";
// import { BlurView } from "expo-blur";
// import { MaterialIcons } from "@expo/vector-icons";

// export interface FormationCardProps {
//   title: string;
//   price: number;
//   index: number;
// //   image: ImageSourcePropType;
//   image: any;

// }

// const FormationCard = ({ image, index, title, price }: FormationCardProps) => {
//   return (
//     <View style={{ padding: 6 }}>
//       <View
//         style={{
//           aspectRatio: index === 0 ? 1 : 2 / 3,
//           position: "relative",
//           overflow: "hidden",
//           borderRadius: 24,
//           padding: 4,
//         }}
//       >
//         <Image
//           source={{ uri: image }}
//           // source={{ uri: AVATAR_URL }}
//           resizeMode="cover"
//           style={StyleSheet.absoluteFill}
//         />
//         <View
//           style={[
//             StyleSheet.absoluteFill,
//             {
//               padding: 12,
//             },
//           ]}
//         >
//           <View style={{ flexDirection: "row", gap: 8, padding: 4 }}>
//             <Text
//               style={{
//                 flex: 1,
//                 fontSize: 16,
//                 fontWeight: "600",
//                 color: "green",
//               }}
//             >
//               {title}
//               {/* PUMA Everyday Hussle */}
//             </Text>
//             <View
//               style={{
//                 backgroundColor: "red",
//                 borderRadius: 100,
//                 height: 32,
//                 aspectRatio: 1,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <MaterialIcons name="favorite-border" size={20} color={"black"} />
//             </View>
//           </View>
//           <View style={{ flex: 1 }} />
//           <BlurView
//             style={{
//               flexDirection: "row",
//               backgroundColor: "rgba(0,0,0,0.35)",
//               alignItems: "center",
//               padding: 5,
//               borderRadius: 100,
//               overflow: "hidden",
//             }}
//             intensity={20}
//           >
//             <Text
//               style={{
//                 flex: 1,
//                 fontSize: 16,
//                 fontWeight: "600",
//                 color: "#fff",
//                 marginLeft: 4,
//               }}
//             >
//               ${price}
//               {/* $160.00 */}
//             </Text>
//             <TouchableOpacity
//               style={{
//                 paddingHorizontal: 12,
//                 paddingVertical: 8,
//                 borderRadius: 100,
//                 backgroundColor: "#fff",
//               }}
//             >
//               <MaterialIcons
//                 name="add-shopping-cart"
//                 size={20}
//                 color={"#000"}
//               />
//             </TouchableOpacity>
//           </BlurView>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default FormationCard;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { useTheme } from "@react-navigation/native";
import MasonryList from "reanimated-masonry-list";
import Icons from "@expo/vector-icons/MaterialIcons";

// la fonction vérifie si l'image est une url en ligne ou en local en asset
const generatorSourceImage = (img: any) => {
  return typeof img ==='string' ? {uri: img} : img;
};

const AVATAR_URL =
  "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80";

const MESONARY_LIST_DATA = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",
    title: "PUMA Everyday Hustle",
    price: 160,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=986&q=80",
    title: "PUMA Everyday Hustle",
    price: 160,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
    title: "PUMA Everyday Hustle",
    price: 180,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=1020&q=80",
    title: "PUMA Everyday Hustle",
    price: 200,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
    title: "PUMA Everyday Hustle",
    price: 180,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
    title: "PUMA Everyday Hustle",
    price: 120,
  },
];

const CardMansoryList = () => {
  const { colors } = useTheme();

  return (
    <MasonryList
      data={MESONARY_LIST_DATA}
      // data={[1, 2, 3, 454, 4, 56, 44]}
      keyExtractor={(item): string => item.price}
      numColumns={2}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, i }) => {
        return (
          <View style={{ padding: 6 }}>
            <View
              style={{
                aspectRatio: i === 0 ? 1 : 2 / 3,
                position: "relative",
                overflow: "hidden",
                borderRadius: 24,
                padding: 4,
              }}
             >
              <Image
                // source={{ uri: item.imageUrl }}
                source={generatorSourceImage(item.imageUrl)}
                // source={{ uri: AVATAR_URL }}
                resizeMode="cover"
                style={StyleSheet.absoluteFill}
              />
              <View
                style={[
                  StyleSheet.absoluteFill,
                  {
                    padding: 12,
                  },
                ]}
              >
                <View style={{ flexDirection: "row", gap: 8, padding: 4 }}>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: "600",
                      color: colors.text,
                    }}
                  >
                    {item.title}
                    {/* PUMA Everyday Hussle */}
                  </Text>
                  <View
                    style={{
                      backgroundColor: colors.background,
                      borderRadius: 100,
                      height: 32,
                      aspectRatio: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icons
                      name="favorite-border"
                      size={20}
                      color={colors.text}
                    />
                  </View>
                </View>
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
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#fff",
                      marginLeft: 4,
                    }}
                  >
                    ${item.price}
                    {/* $160.00 */}
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      borderRadius: 100,
                      backgroundColor: "#fff",
                    }}
                  >
                    <Icons name="add-shopping-cart" size={20} color={"#000"} />
                  </TouchableOpacity>
                </BlurView>
              </View>
            </View>
          </View>
        );
      }}
      onEndReachedThreshold={0.1}
    />
  );
};

export default CardMansoryList;

const styles = StyleSheet.create({});


import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../configs/Colors";
import { RootStackScreenProps } from "../../../routes/RootNavigator";

const SingleFormation = ({
  navigation,
  route,
}: RootStackScreenProps<"SingleFormation">) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart" size={30} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
        }}
        style={styles.image}
      />
      {/* <Text></Text> */}
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>TITLE...</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660.88</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.raing}>
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons key={index} name="star" size={24} color={"gold"} />
              );
            })}
            <Text style={styles.ratingText}>{" "} (4.9)</Text>
          </View>
          <View style={styles.raing}>
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons key={index} name="star" size={24} color={"gold"} />
              );
            })}
            <Text style={styles.ratingText}>{" "} (4.9)</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

export default SingleFormation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 20,
    width: "90%",
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -50,
    backgroundColor: COLORS.white,
    width: "100%",
    aspectRatio: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    top: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    paddingHorizontal: 6,
    fontWeight: "bold",
    fontSize: 18,
  },
  priceWrapper: {
    backgroundColor: COLORS.ligthRedIcon,
    borderRadius: 15,
  },
  ratingRow: {
    // marginHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    top: 5,
  },
  raing: {
    top: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 15,
  },
  ratingText: {
    color: COLORS.textCurrent,
  },
});

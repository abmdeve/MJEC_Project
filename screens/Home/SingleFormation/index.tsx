import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../../../configs/Colors";
import { RootStackScreenProps } from "../../../routes/RootNavigator";

const IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const SPACING = 20;
const AVATAR_SIZE = 70;

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
        {/* <TouchableOpacity>
          <Ionicons name="heart" size={30} />
        </TouchableOpacity> */}
      </View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
        }}
        style={styles.image}
      />
      {/* <Text></Text> */}
      <View style={styles.details}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            bottom: "20%",
            left: 10,
          }}
        >
          <Image
            source={{ uri: IMG }}
            style={{
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              borderRadius: AVATAR_SIZE,
              marginRight: SPACING / 2,
            }}
          />
          <View>
            <Text>NAME...</Text>
            <Text>@FONCTION...</Text>
          </View>
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.title}>TITLE...</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660.88</Text>
          </View>
        </View>
        {/* RATING */}
        <View style={styles.ratingRow}>
          <View style={styles.raing}>
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons key={index} name="star" size={24} color={"gold"} />
              );
            })}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={[styles.raing, {}]}>
            <Text style={styles.ratingText}>duréé:</Text>
            <Text style={[styles.ratingText, { marginLeft: 5 }]}>2 mois</Text>
          </View>
        </View>
        {/* DESCRIPTION */}
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>DESCRIPTION...</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices, justo nec fringilla posuere, nunc arcu scelerisque massa,
            eget euismod tortor justo ac urna. Nullam rhoncus urna id dapibus
            malesuada. Sed bibendum feugiat odio, in suscipit ipsum lacinia eu.
            Proin condimentum vestibulum tellus, in efficitur justo tincidunt
            et. Nullam varius libero vel massa venenatis, vel egestas metus
            varius. Integer eu urna at enim sollicitudin laoreet. In fermentum
            dui vel libero ultrices, in volutpat odio eleifend. Nulla facilisi.
            Vivamus aliquam odio ac justo finibus, nec tincidunt ligula
            varius....
          </Text>
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
    opacity: .8
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
    width: "90%",
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
    width: "100%",
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
  descriptionWrapper: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  description: {
    fontWeight: "300",
    fontSize: 14,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 12,
    textAlign: "justify",
    marginBottom: 10,
  },
});

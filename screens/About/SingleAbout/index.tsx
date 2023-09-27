import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { RootStackScreenProps } from "../../../routes/RootNavigator";

const SingleAbout = ({ navigation }: RootStackScreenProps<"SingleAbout">) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",
        }}
        style={{ flex: 1 }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 8,
          }}
        >
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>
          {/* <View style={{ flex: 1 }} /> */}
        </View>
      </SafeAreaView>
      <BottomSheet
        detached
        snapPoints={[64, 400]}
        index={0}
        style={{ marginHorizontal: 20 }}
        bottomInset={insets.bottom + 20}
        backgroundStyle={{
          borderRadius: 20,
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 5,
            }}
          >
            John Doe
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "#0099cc",
              marginBottom: 5,
            }}
          >
            Directeur générale
          </Text>
          <Text
            // numberOfLines={2}
            style={{ fontSize: 15, opacity: 0.7 }}
          >
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
      </BottomSheet>
    </View>
  );
};

export default SingleAbout;

const styles = StyleSheet.create({});

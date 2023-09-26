import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { ABOUT } from "../../configs/data";
import AboutCard from "../../components/AboutCard";

const About = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{fontSize: 21, fontWeight: "700"}}>Information</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="location" size={24} color="rgb(45,156,219)" />
          <Text>
            Qtier: <Text style={{ fontWeight: "bold" }}>Mpaka 120</Text>
          </Text>
        </View>
        <View>
          <Text>
            Tel: <Text style={{ fontWeight: "bold" }}>+242 06 600 06 06</Text>{" "}
          </Text>
        </View>
      </View>
      <AboutCard data={ABOUT} onPress={(id) => console.log('id', id)} />

      <MapView style={styles.map} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "38%",
  },
});

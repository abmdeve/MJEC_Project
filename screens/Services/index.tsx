import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SERVICES, SLIDES } from "../../configs/data";
import Carousel from "../../components/Carousel";
import ServicesCard from "../../components/ServicesCard";
import Search from "../../components/Search";
import { TabsStackScreenProps } from "../../routes/TabsNavigator";


const Services = ({ navigation }: TabsStackScreenProps<"Services">) => {
  const [value, setValue] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} edges={["right", "left", "top"]}>
        <Text style={{ fontSize: 20, fontWeight: "bold" , marginLeft: 20}}>Nos services</Text>
        {/* <Carousel slides={SLIDES} />  */}
        <Search value={value} onChange={setValue} keyboardType="name" />
        <ServicesCard
          data={SERVICES}
          onPress={(id) => navigation.navigate("SingleServices", { id: id })}
        />
      </SafeAreaView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});

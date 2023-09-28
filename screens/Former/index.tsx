import { View, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormerCard from "../../components/FormerCard";
import { FORMER } from "../../configs/data";
import Search from "../../components/Search";
import { TabsStackScreenProps } from "../../routes/TabsNavigator";

const BG_IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const Former = ({ navigation }: TabsStackScreenProps<"Former">) => {
  const [value, setValue] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFill}
        blurRadius={80}
      />
      <Search value={value} onChange={setValue} keyboardType="name" />

      <FormerCard
        data={FORMER}
        onPress={(id) => navigation.navigate("SingleFormer", { id: id })}
      />
    </View>
  );
};

export default Former;

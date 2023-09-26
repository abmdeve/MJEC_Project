import { View } from "react-native";
import React from "react";
import FormerCard from "../../components/FormerCard";
import { FORMER } from "../../configs/data";

const Former = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <FormerCard data={FORMER} onPress={(id) => console.log("id", id)} />
    </View>
  );
};

export default Former;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../configs/Colors";

export interface SkillsProps {
  name: string;
}

const Skills = ({ name }: SkillsProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
      }}
    >
      <Text>{name}</Text>
      <MaterialCommunityIcons
        name="shield-check"
        size={24}
        color={COLORS.darkGreenIcon}
      />
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({});

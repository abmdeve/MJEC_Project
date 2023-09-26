import { StyleSheet, TextInput, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import Icons from "@expo/vector-icons/MaterialIcons";

interface SearchProps {
  value: string;
  keyboardType: any;
  // onChange: Dispatch<SetStateAction<string>>;
  onChange: (item: string) => void;
}

const Search = ({ value, keyboardType, onChange }: SearchProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.search, { borderColor: "#dfe3e6" }]}>
        <Icons name="search" size={24} color={"#d5dade"} />
        <TextInput
          style={{ flex: 1 }}
          value={value}
          onChangeText={onChange}
          placeholder={"Rechercher"}
          selectionColor={"#2576BC"}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    paddingVertical: 10,
  },
  search: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 12,
    flexDirection: "row",
    backgroundColor: "white",
  },
  title: {
    flex: 1,
    fontSize: 16,
    opacity: 0.5,
    color: "#d5dade",
  },
});

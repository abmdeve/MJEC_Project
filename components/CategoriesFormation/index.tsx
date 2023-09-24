import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { SetStateAction, Dispatch } from "react";
import { useTheme } from "@react-navigation/native";

export interface CategoriesFormationProps {
  data: Array<[]>;
  categoryIndex: number;
  setCategoryIndex: Dispatch<SetStateAction<number>>;
}
const CategoriesFormation = ({
  data,
  categoryIndex,
  setCategoryIndex,
}: CategoriesFormationProps) => {
  const { colors } = useTheme();

  return (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 12,
        gap: 12,
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        const isSelect = categoryIndex === index;
        return (
          <TouchableOpacity
            onPress={() => setCategoryIndex(index)}
            style={{
              backgroundColor: isSelect ? colors.primary : colors.card,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 100,
              borderWidth: isSelect ? 0 : 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{
                color: isSelect ? colors.background : colors.text,
                fontWeight: "600",
                fontSize: 15,
                opacity: isSelect ? 1 : 0.5,
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CategoriesFormation;

const styles = StyleSheet.create({});

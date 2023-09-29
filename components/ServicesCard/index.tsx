import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import Services from "./Services";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { scale } from "../../utils/scale";

export interface ServicesCardProps {
  data: Array<[]>;
  onPress: (id: number) => void;
}
const ServicesCard = ({ data, onPress }: ServicesCardProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: getBottomSpace() + scale(16) }}
        renderItem={({ item }) => {
          return (
            <Services
              onPress={() => onPress(item.id)}
              title={item.title}
              subTitle={item.subTitle}
              categorie={item.categorie}
            />
          );
        }}
      />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {},
  headerTitle: {},
});

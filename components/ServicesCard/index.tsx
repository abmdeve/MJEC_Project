import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageSourcePropType
} from "react-native";
import React from "react";
import Services from "./Services";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { scale } from "../../utils/scale";


export interface ServicesCardProps {
  // data: Array<[]>;
  // j'ai remplacé image?: ImageSourcePropType par image?: string
  data: {id: number, image: string, title: string, subTitle: string; categorie: string;}[];
  onPress: (id: number) => void;
}
const ServicesCard = ({ data, onPress }: ServicesCardProps) => {
  return (
    <View style={styles.container}>
      <FlatList
      keyExtractor={(item) => item.id.toString()}
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
              image={item.image}
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

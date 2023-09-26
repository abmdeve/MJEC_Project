import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Timeline from "react-native-timeline-flatlist";
import Ripple from "react-native-material-ripple";
import { ABOUT } from "../../utils/interfaces";

export interface AboutCardProps {
  data: Array<ABOUT>;
  onPress: (id: number) => void;
}
const SPACING = 20;
const AVATAR_SIZE = 70;

const AboutCard = ({ data, onPress }: AboutCardProps) => {
  return (
    <Timeline
      data={data}
      circleSize={15}
      circleColor={"rgb(45,156,219)"}
      lineColor={"rgb(45,156,219)"}
      showTime={false}
      separator={true}
      renderDetail={(rowData) => {
        return (
          <Ripple
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => onPress(rowData.id)}
          >
            <Image
              source={{ uri: rowData.imageUrl }}
              style={{
                width: AVATAR_SIZE,
                height: AVATAR_SIZE,
                borderRadius: AVATAR_SIZE,
                marginRight: SPACING / 2,
              }}
            />
            <View>
              <Text
                numberOfLines={2}
                style={{ fontSize: 18, fontWeight: "700" }}
              >
                {rowData.name}
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, fontWeight: "400" }}
              >
                {rowData.title}
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontSize: 15, opacity: 0.7, color: "#0099cc" }}
              >
                {rowData.description}
              </Text>
            </View>
          </Ripple>
        );
      }}
    />
  );
};

export default AboutCard;

const styles = StyleSheet.create({});

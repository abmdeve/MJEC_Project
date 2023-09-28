import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../../../routes/RootNavigator";
import { COLORS } from "../../../configs/Colors";
import { SKILLS_DATA } from "../../../configs/data";
import Skills from "../../../components/Skills";
import { StatusBar } from "expo-status-bar";

const SingleFormer = ({ navigation }: RootStackScreenProps<"SingleFormer">) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar/>
        <View style={{ width: "100%" }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",
            }}
            resizeMode="cover"
            style={{
              height: 200,
              width: "100%",
            }}
          />
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              gap: 8,
            }}
          >
            <TouchableOpacity
              style={{
                width: 52,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 52,
                borderWidth: 1,
                borderColor: "#fff",
              }}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back" size={24} color={"#fff"} />
            </TouchableOpacity>
            {/* <View style={{ flex: 1 }} /> */}
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
            }}
            resizeMode="cover"
            style={{
              width: 155,
              height: 155,
              borderRadius: 999,
              borderColor: COLORS.white,
              borderWidth: 2,
              marginTop: -80,
              marginBottom: 5,
            }}
          />
          <Text>NAME FORMATEUR</Text>
          <Text style={{ color: COLORS.darkBlueIcon }}>
            @fullstack developper
          </Text>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            Parcours
          </Text>
          <Text style={{ fontSize: 15, opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices, justo nec fringilla posuere, nunc arcu scelerisque massa,
            eget euismod tortor justo ac urna. Nullam rhoncus urna id dapibus
            malesuada. Sed bibendum feugiat odio, in suscipit ipsum lacinia eu.
            Proin condimentum vestibulum tellus, in efficitur justo tincidunt
            et. Nullam varius libero vel massa venenatis, vel egestas metus
            varius.
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            Compétences
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 20 }}
          >
            {SKILLS_DATA.map((item) => {
              return <Skills key={item.id} name={item.name} />;
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SingleFormer;

const styles = StyleSheet.create({});

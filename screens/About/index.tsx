import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { ABOUT } from "../../configs/data";
import AboutCard from "../../components/AboutCard";
import { TabsStackScreenProps } from "../../routes/TabsNavigator";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../utils/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const imageURL = require('../../assets/images/IMG_0965.jpg');
// let substr = true;
// const str = "Le Mouvement des Jeunes Entrepreneurs du Congo en sigle MJEC est une Association naissante sous la législation de la loi 1901, enregistrée à Pointe-Noire sous le numéro 0021/MID/DPN/P/SG/DDSP/SR du 18 Avril 2018. Il se définit comme une plate-forme de promotion et de défense de l\'entrepreneuriat, la culture et le sport.Le MJEC est né de la volonté des Jeunes Entrepreneurs Congolais de l\'ensemble des douze départements.L\'objectif fondamental est d\'emmener la population congolaise à prendre en mains leurs destins. La démarche consiste à défier les contraites économiques dont nous sommes confrontées, à redonner confiance aux jeunes afin de bâtir un Congo prospère basé sur l\'entrepreneuriat"

const initialText = "Le Mouvement des Jeunes Entrepreneurs du Congo en sigle MJEC est une Association naissante sous la législation de la loi 1901, enregistrée à Pointe-Noire sous le numéro 0021/MID/DPN/P/SG/DDSP/SR du 18 Avril 2018. Il se définit comme une plate-forme de promotion et de défense de l\'entrepreneuriat, la culture et le sport.Le MJEC est né de la volonté des Jeunes Entrepreneurs Congolais de l\'ensemble des douze départements.L\'objectif fondamental est d\'emmener la population congolaise à prendre en mains leurs destins. La démarche consiste à défier les contraites économiques dont nous sommes confrontées, à redonner confiance aux jeunes afin de bâtir un Congo prospère basé sur l\'entrepreneuriat."

const About = ({ navigation }: TabsStackScreenProps<"About">) => {

const [showmore, setShowmore] = useState(false);

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      {/* I chanhed Information by A propos de MJEC and I added paddingLeft*/}
      <Text style={{ fontSize: 21, fontWeight: "700", paddingLeft: 20}}>A Propos de MJEC</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        {/* I added paddingLeft */}
        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 5}}>
          <Entypo name="location" size={24} color="rgb(45,156,219)" />
          <Text>
            Qartier: <Text style={{ fontWeight: "bold" }}>Mpaka 120</Text>
          </Text>
        </View>
        <View>
          <Text>
            Tel: <Text style={{ fontWeight: "bold" }}>+242 06 600 06 06</Text>{" "}
          </Text>
        </View>
      </View>
      {/* A propos de MJEC image et description */}
      <View>
        {/* height 300 and width 100% */}
        <Image source={imageURL} style={{width: wp(100), height: hp(30), borderRadius: 15, overflow: 'hidden'}}/>
      </View>
      {/* MJEC description */}
      <View style={{marginLeft: 10, marginTop: 0,}}>
          <Text style={{fontWeight: '700', fontSize: 18}}>Desciption</Text>

          {/* <Text>{showmore ? initialText:initialText.substring(0, 422)}</Text> */}
          {showmore ? (
            <Text>{initialText}</Text>
            
          ): (
            <Text>{initialText.substring(0, 422)}</Text>
          )}
          <View>
            <TouchableOpacity onPress={() => setShowmore(!showmore)}>
                <Text style={{color: colors.bleu,}}>{showmore ? 'Voir moins' : 'Voir plus'}</Text>
            </TouchableOpacity>
            
          </View>
          
          
        </View>

      <AboutCard
        data={ABOUT}
        onPress={(id) => {
          navigation.navigate("SingleAbout", { id: id });
        }}
      />

      {/* <MapView style={styles.map} /> */}
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  // map: {
  //   width: "100%",
  //   height: "38%",
  // },
});

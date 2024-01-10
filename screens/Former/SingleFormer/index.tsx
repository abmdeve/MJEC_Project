import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  useWindowDimensions,
  ImageBackground,
  Dimensions
} from "react-native";
import React,{ useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../../../routes/RootNavigator";
import { COLORS } from "../../../configs/Colors";
import { SKILLS_DATA, formation_giving } from "../../../configs/data";
import { more } from "../../../configs/data";
import Skills from "../../../components/Skills";
import { StatusBar } from "expo-status-bar";
import {colors} from "../../../utils/constants"
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import SingleTrain from "./SingleTrain";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const{width, height} = Dimensions.get('screen')

// la fonction vérifie si l'image est une url en ligne ou en local en asset
const generatorSourceImage = (img: any) => {
  return typeof img ==='string' ? {uri: img} : img;
};

const MoreSkills={more};
const skills = {SKILLS_DATA};
// const formation_giving = [
//   {
//     id: 1,
//     image:"https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",
//     title: "PUMA Everyday Hustle",
//   },
//   {
//     id: 2,
//     image:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=986&q=80",
//     title: "PUMA Everyday Hustle",
//   },
//   {
//     id: 3,
//     image:"https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
//     title: "PUMA Everyday Hustle",
//   },
//   {
//     id: 4,
//     image:"https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=1020&q=80",
//     title: "PUMA Everyday Hustle",
//   },
//   {
//     id: 5,
//     image:"https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
//     title: "PUMA Everyday Hustle",
//   },
//   {
//     id: 6,
//     image:"https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
//     title: "PUMA Everyday Hustle",
//   },
// ]



const SingleFormer = ({ navigation }: RootStackScreenProps<"SingleFormer">) => {
  // const navigation = useNavigation();
  const {width} = useWindowDimensions()
  const size = width * 0.5
  const [showMore,setShowMore]= useState(true)
  // const [SkillLmore, setSkillmore]= useState(true)
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar/>
          {/* instead of "100%" I put wp(100) */}
          <View style={{ width: wp(100) }}>
            <Image
              // source={{
              //   uri: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",
              // }}
              source={require('../../../assets/images/Mme_KOUNDA.jpg')}
              resizeMode="cover"
              style={{
                // instead of 200 I use hp(25)
                height: hp(25),
                // instead of "100%" I use wp(100)
                width: wp(100),
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
                  // instead of 50 I use wp(10)
                  width: wp(10),
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
                // source={{
                //   uri: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80",
                // }}
                source={require('../../../assets/images/Mme_Stercia.jpg')}
                resizeMode="cover"
                style={{
                  width: 155,
                  height: 155,
                  borderRadius: 999,
                  borderColor: COLORS.white,
                  borderWidth: 2,
                  marginTop: -90,
                  marginBottom: 5,
                }}
              />
              {/* Teacher name */}
              <Text style={{fontWeight: '700'}}>Stercia KOUNDA</Text>
              <Text style={{ color: COLORS.darkBlueIcon }}>
                @fullstack Developer
              </Text>
            </View>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                contentContainerStyle={{ marginBottom: 0 }}
              >
                {/* {SKILLS_DATA.map((item) => {
                  return <Skills key={item.id} name={item.name} />;
                })} */}
                {showMore ? (
                  <View>
                      {SKILLS_DATA.map((item) => {
                  return (
                    <Skills key={item.id} name={item.name} />
                  );
                })}
                  </View>
                ):(
                  <View>
                    {SKILLS_DATA.map((item) => {
                  return (
                    <Skills key={item.id} name={item.name} />
                  );
                })}
                  {more.map((item)=>{
                    return (
                    <Skills key={item.id} name={item.name} />

                    )
                  } )}
                  </View>
                )}
                <View>
                  <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                      <Text style={{color: colors.bleu,}}>{showMore ? 'Voir plus' : 'Voir moins'}</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              {/* Formation giving */}
              <View>
                <Text style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  opacity: 0.7,}}>
                    Formations
                  </Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false}>
                      {formation_giving.map((item) => {
                        return (
                          <TouchableOpacity onPress={() => navigation.navigate("SingleTrain")}>
                            <View style={{width: size, marginRight: 10}} key={item.id}>
                              <View style={styles.imageContainer}>
                                  {/* <Image source={item.imageUrl} style={styles.image}/> */}
                                  <ImageBackground source={generatorSourceImage(item.imageUrl)} style={styles.image}>

                                    <View style={[StyleSheet.absoluteFill, { padding: 10 }]}>
                                      <View style={{flexDirection: "row", gap: 8, padding: 4, alignItems: "center",}}>
                                        <Text style={{flex: 1, fontSize: 16, fontWeight: "900", color: colors.black, textAlign: "center"}}>
                                          {item.title}
                                        </Text>
                                      </View>
                                      {/* BLUR EFFET */}
                                      <View style={{ flex: 1 }} />
                                      {/* intensity 20 or 10 to 0 */}
                                      <BlurView style={{ flexDirection: "row", backgroundColor: "rgba(0,0,0,0.35)", alignItems: "center", padding: 5, borderRadius: 100, overflow: "hidden",}} intensity={0}>
                                        <Text style={{ flex: 1, fontSize: 16, fontWeight: "600", color: "#fff", marginLeft: 4,}}>
                                          {item.title}
                                        </Text>
                                      
                                        <TouchableOpacity style={{paddingHorizontal: 12, paddingVertical: 0, borderRadius: 100, backgroundColor: "#fff",}}>
                                          <MaterialIcons name="arrow-forward" color={"#000"} size={15} />
                                        </TouchableOpacity>
                                      </BlurView>
                                    </View>
                                  </ImageBackground>
                              </View>
                            </View>
                          </TouchableOpacity>
                          
                        )
                      })}
                    </ScrollView>  
              </View>
            </View>

          </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SingleFormer;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 34,
    // 149 I use hp
    height: hp(12),
    marginTop: 10,
  },
  image:{
    // 260 I use wp
    width: wp(50),
    height: '100%',
    aspectRatio : 2.3,
  }
});

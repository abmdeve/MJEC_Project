import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image,  } from 'react-native'
import React from 'react'
import { colors } from '../../../../utils/constants'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../../configs/Colors'
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackScreenProps } from '../../../../routes/RootNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const SingleTrain = ({navigation} : RootStackScreenProps<"SingleTrain">) => {
  return (
    <View style={{flex: 1,}}>
      <Image
        source={{uri: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",}}
        style={{width: wp(100), height: 500}}
      />
      <StatusBar backgroundColor='white'/>
      <SafeAreaView style={{
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 10,
        marginLeft: 10,
        }}>
        <TouchableOpacity style={{
                width: 30,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                borderWidth: 1,
                backgroundColor:'rgba(255,255,255,0.5)'
              }} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={"#fff"} />
        </TouchableOpacity> 
      </SafeAreaView> 

      <View style={{
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 8,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: -50,
        }}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={{flexDirection: 'row',}}>
          
            <Text style={{fontSize: 25, flex: 1, fontWeight: 'bold', marginLeft: 22, textAlign: 'center'}}>
              Nom Formateur
            </Text>
            {/* <Text style={{fontSize: 25, flex: 1, fontWeight: 'bold', textAlign: 'right', marginRight: 30, color: '#fb9002'}}>
              5 000
            </Text> */}
          </View>
          <Text style={{fontSize: 15, marginTop: 15, marginLeft: 5, marginRight: 9}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Text>
          {/* <View style={{flexDirection: 'row', marginTop: 20, alignContent: 'space-between', marginHorizontal: 10, marginBottom: 20}}>
            <MaterialCommunityIcons
              name="clock"
              size={30}
              color={COLORS.darkBlueIcon}
            />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 20,}}>
                20 Jours
              </Text>
              <Text>
                Duration
              </Text>
            </View>

            <MaterialCommunityIcons
              name="map-marker-radius"
              size={30}
              color={COLORS.darkRedIcon}
            />
            <View style={{flex: 1, marginLeft: 10, justifyContent: 'flex-end', marginRight: -10}}>
              <Text style={{fontWeight: 'bold', fontSize: 20,}}>
                Adresse
              </Text>
              <Text>
                Grand marché, rond point Lumumba
              </Text>
            </View>

          </View> */}
          
        </ScrollView>

      </View>
    </View>
  )
}
export default SingleTrain;
const styles = StyleSheet.create({
  TopText:{
    fontSize: 21,
    fontWeight: 'bold',
  },
  TopDate: {
    marginTop: 10,
    fontSize: 13,
    color: colors.gray
  }
})
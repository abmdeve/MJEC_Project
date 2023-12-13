import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MasonryList from "reanimated-masonry-list";
import { TabsStackScreenProps } from "../../routes/TabsNavigator";
import {
  CAROUSEL,
  CATEGORIES_FORMATION,
  FORMATION,
  SLIDES,
} from "../../configs/data";
import FormationCard from "../../components/FormationCard";
import Card from "../../components/Card";
import CardMansoryList from "../../components/FormationCard";
import { ITEMS } from "../../configs/data";
import Carousel from "../../components/Carousel";
import CategoriesFormation from "../../components/CategoriesFormation";
import Header from "../../components/Header";
import { COLORS } from "../../configs/Colors";
import CarouselCard from "../../components/CarouselCard";

const Home = ({ navigation }: TabsStackScreenProps<"Home">) => {

  const SingleCarousel = (id:any) =>{

    // I've added another link for going to arousel singler page I added in rootNavigator file the name of singleCarousel for creating the link between them
    navigation.navigate('SingleCarousel',{id:id});
  }

  const [categoryIndex, setCategoryIndex] = useState(0);
  const width = Dimensions.get("window").width / 2.1;
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <SafeAreaView style={{ flex: 1 }} edges={["right", "left"]}>
        {/* CAROUSEL COMPONENT */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginBottom: 10,
          }}
        >
          Actualités
        </Text>
        {/*  onPress={() => SingleCarousel()} */}
        <CarouselCard data={CAROUSEL} onPress={() =>SingleCarousel()} />
        {/* <Carousel slides={SLIDES} /> */}
        {/* <View style={{marginTop: 19}}/> */}
        {/* CATEGORIES COMPONENT */}

        {/* LIST FORMATION COMPONENT */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginVertical: 10,
          }}
        >
          Formation
        </Text>
        <View style={{ marginBottom: 10 }}>
          <CategoriesFormation
            data={CATEGORIES_FORMATION}
            categoryIndex={categoryIndex}
            setCategoryIndex={setCategoryIndex}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 10 }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{}}>
              {ITEMS.filter((_, i) => i % 2 === 0).map((item, index) => {
                // console.log('item', item)
                return (
                  <Card
                    i={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    // j'ai ajouté desc
                    desc={item.desc}
                    key={item.id}
                    color={item.color}
                    aspectratio={item.aspectratio}
                    width={width}
                    onPress={() => navigation.navigate("SingleFormation")}
                  />
                );
              })}
            </View>
            <View style={{}}>
              {ITEMS.filter((_, i) => i % 2 !== 0).map((item, index) => {
                return (
                  <Card
                    i={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    // j'ai ajouté desc
                    desc={item.desc}
                    key={item.id}
                    color={item.color}
                    aspectratio={item.aspectratio}
                    width={width}
                    onPress={() => navigation.navigate("SingleFormation")}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
        {/* <CardMansoryList/> */}
        {/* <MasonryList
          data={[1, 2, 3, 454, 4, 56, 44]}
          keyExtractor={(item): string => item}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          renderItem={({ item, i }) => {
            <View
              style={{
                aspectRatio: i === 0 ? 1 : 2 / 3,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "red"
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80",
                }}
                resizeMode="cover"
                style={StyleSheet.absoluteFill}
              />
            </View>;
          }}
        /> */}
        {/* <MasonryList
          data={FORMATION}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => {
            return ( 
              <FormationCard
                key={i}
                index={i}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          }}
          onEndReachedThreshold={0.1}
        /> */}
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

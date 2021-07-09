import React, { useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { useRoute } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";

const DetailBeerScreen = ({ props }: any) => {
  const route = useRoute();
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <View style={[styles.alternativeContainer, styles.cardShadow]}>
        <Text status="success" style={styles.text} category="h1">
          {route.params.beer.name}
        </Text>
        <Text status="success" style={styles.text} category="h4">
          {route.params.beer.tagline}
        </Text>
        <Text style={styles.text} category="s1">
          {route.params.beer.first_brewed}
        </Text>
        <Text style={styles.text} category="p1">
          Description : {route.params.beer.description}
        </Text>
        <View style={[styles.alternativeContainer, styles.row]}>
          <Text category="h6"> ABV : {route.params.beer.abv}°</Text>
          <Text category="h6"> IBU : {route.params.beer.ibu}%</Text>
          <Text category="h6"> EBC : {route.params.beer.ebc}</Text>
          <Text category="h6"> PH : {route.params.beer.ph}</Text>
        </View>
        <Button style={styles.button} status="success" onPress={onOpen}>
          Show Food Pairing
        </Button>
      </View>
      <Modalize
        HeaderComponent={
          <View>
            <Text category="h2">List of foods</Text>
          </View>
        }
        snapPoint={300}
        ref={modalizeRef}
        flatListProps={{
          data: route.params.beer.food_pairing,
          renderItem: ({ item }) => {
            return (
              <View>
                <Text category="h5"> - {item}</Text>
              </View>
            );
          },
          keyExtractor: (item) => item,
          showsVerticalScrollIndicator: true,
        }}
      />
    </>
  );
};

export default DetailBeerScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    margin: 5,
  },
  alternativeContainer: {
    borderRadius: 4,
    margin: 5,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  button: {
    margin: 2,
  },
});

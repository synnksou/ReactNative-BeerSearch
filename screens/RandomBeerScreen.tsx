import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Layout, Spinner, Text } from "@ui-kitten/components";
import useRandomBeer from "./../hooks/useFetchSpecificBeer";
import DetailBeerScreen from "./DetailBeerScreen";

const RandomBeerScreen = ({ props }: any) => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  function generateBeer() {
    const { data, isLoading } = useRandomBeer();
    setShow(true);
    setItem(data);
  }

  return (
    <View style={[styles.alternativeContainer, styles.cardShadow]}>
      <Text category="h2"> Random Beer ? 🍺</Text>
      <Button onPress={generateBeer} status="succes">
        Generate
      </Button>
      {show && <DetailBeerScreen item={item} />}
    </View>
  );
};

export default RandomBeerScreen;

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

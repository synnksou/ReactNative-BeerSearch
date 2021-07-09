import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
const CardItem = ({ item }: any) => {
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>(null);

  function handlerDetail(item: any) {
    navigation.navigate("BeerDetail", { beer: item });
  }

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <React.Fragment>
      <Card
        onPress={() => handlerDetail(item)}
        appearance="filled"
        style={styles.card}
      >
        <Text category="h6">{item.name}</Text>
        <Text category="s1">{item.tagline}</Text>
      </Card>
    </React.Fragment>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cover: {
    width: 60,
    height: 60,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 2,
  },
});

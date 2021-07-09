import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Card, Text, Layout, Spinner } from "@ui-kitten/components";
import useFetchBeers from "./../hooks/useFetchBeer";
import CardItem from "../components/CardItem";
import { Modalize } from "react-native-modalize";

interface Props {}

const FeedBeersScreen = (props: Props) => {
  const { data, error, isLoading } = useFetchBeers();

  if (isLoading)
    return (
      <Layout style={styles.container} level="1">
        <View>
          <Text>Loading</Text>
          <Spinner status="danger" />
        </View>
      </Layout>
    );

  if (error) return <Text> An error has occurred: </Text>;

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <CardItem item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default FeedBeersScreen;

const styles = StyleSheet.create({
  card: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
  },
  cover: {
    width: 60,
    height: 60,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

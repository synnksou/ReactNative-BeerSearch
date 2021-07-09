/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import DetailBeerScreen from "../screens/DetailBeerScreen";
import FeedBeersScreen from "../screens/FeedBeersScreen";
import RandomBeerScreen from "../screens/RandomBeerScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          backgroundColor: Colors[colorScheme].bottomBarBackground,
        },
      }}
    >
      <BottomTab.Screen
        name="Beers"
        component={FeedBeersScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="beer" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Random"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function FeedBeersScreenNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TabOneStack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].tabBarBackground,
        },
      }}
    >
      <TabOneStack.Screen
        name="Beers"
        component={FeedBeersScreen}
        options={{ headerTitle: "List Beers" }}
      />
      <TabOneStack.Screen
        name="BeerDetail"
        component={DetailBeerScreen}
        options={{ headerTitle: "Beer" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Random"
        component={RandomBeerScreen}
        options={{ headerTitle: "Random Beer" }}
      />
    </TabTwoStack.Navigator>
  );
}

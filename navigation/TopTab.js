import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import Popular from "../screens/Popular";
import Recommended from "../screens/Recommended";
import { Platform } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator style={{ marginTop: Platform.OS === "ios" ? 50 : 30 }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name="Recommend" component={Recommended} />
    </Tab.Navigator>
  );
};
export default TopTab;

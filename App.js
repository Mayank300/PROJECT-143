import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TopTab from "./navigation/TopTab";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"TopTab"}
      >
        <Stack.Screen name="TopTab" component={TopTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

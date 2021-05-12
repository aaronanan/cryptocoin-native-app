import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import MyCoins from "./components/MyCoins";
import BottomTab from "./components/BottomTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
          <Stack.Screen name="MyCoins" component={MyCoins} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Header />
        <Tab.Navigator
          // initialRouteName="Home"
          barStyle={{ backgroundColor: "#694fad" }}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
        >
          <Tab.Screen
            name="Home"
            component={MainScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Coins"
            component={MyCoins}
            options={{
              tabBarLabel: "Coins",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="alpha-c-circle-outline"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    // <SafeAreaProvider>
    //   {/* <Header /> */}
    //   <MainScreen coins={coins} />
    // </SafeAreaProvider>
  );
}

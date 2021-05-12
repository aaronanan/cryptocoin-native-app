import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

const Head = () => {
  return (
    <Header
      backgroundColor="#694fad"
      // leftComponent={{
      //   icon: "storage",
      //   color: "#fff",
      //   onPress: () => alert("Open Drawer"),
      // }}
      centerComponent={{
        text: "CRYPTO COINS",
        style: { color: "white", fontSize: 18, fontWeight: "bold" },
      }}
      rightComponent={{
        icon: "search",
        color: "white",
        onPress: () => alert("Go Home"),
      }}
    />
  );
};

export default Head;

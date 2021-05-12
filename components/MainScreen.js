import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CoinItem from "./CoinItem";
const MainScreen = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getCoins = async () => {
      const res = await fetch(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=CAD"
      );
      const data = await res.json();
      setCoins(data.coins);
    };
    getCoins();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CoinItem coin={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
export default MainScreen;

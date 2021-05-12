import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CoinItem from "./CoinItemV2";
const MyCoins = () => {
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
  console.log(coins);

  const sellCoin = (id) => {
    const filtered = coins.filter((coin) => coin.id != id);
    setCoins(filtered);
    console.log(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CoinItem coin={item} sellCoin={sellCoin} />}
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
export default MyCoins;

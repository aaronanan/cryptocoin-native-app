import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";

const windowWidth = Dimensions.get("window").width - 10;
// const windowHeight = Dimensions.get("window").height;

const CoinItem = ({ coin, sellCoin }) => {
  let negPos = "lightgreen";
  let priceChange = coin.priceChange1d;
  if (priceChange > 0) {
    negPos = "lightgreen";
    priceChange = "+" + priceChange;
  } else {
    negPos = "red";
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert(`${coin.name} Info`)}>
        <View style={styles.card}>
          <Image style={styles.coinImg} source={{ uri: `${coin.icon}` }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {coin.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "lightgrey" }}>
                {coin.rank} {coin.symbol}
              </Text>
              <Text style={{ color: `${negPos}`, fontWeight: "bold" }}>
                {" "}
                {priceChange}
              </Text>
            </View>
          </View>
          <Button
            title="Sell"
            style={{ width: 50, marginLeft: 40 }}
            // type="s"
            onPress={() => sellCoin(coin.id)}
          />
          <View
            style={{
              marginLeft: "auto",
              alignItems: "flex-end",
              marginRight: 10,
            }}
          >
            <Text style={{ color: "white" }}>${coin.price.toFixed(2)}</Text>
            <Text style={{ color: "lightgrey" }}>
              MCap {(coin.marketCap / 1000000000).toFixed(2)} Bn
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",

    margin: 5,
  },
  card: {
    flexDirection: "row",
    width: windowWidth,
    backgroundColor: "#694fad",
    height: 60,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // justifyContent: "center",
  },
  coinImg: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default CoinItem;

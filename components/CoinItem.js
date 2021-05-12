import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
const CoinItem = ({ coin }) => {
  let negPos = "green";
  let priceChange = coin.priceChange1d;
  if (priceChange > 0) {
    negPos = "green";
    priceChange = "+" + priceChange;
  } else {
    negPos = "red";
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert(`${coin.name} Info`)}>
        <View style={styles.card}>
          <View style={styles.content}>
            <Text>
              {coin.name} ({coin.symbol})
            </Text>
            <Image style={styles.coinImg} source={{ uri: `${coin.icon}` }} />
            <Text>${coin.price.toFixed(2)}</Text>
            <Text style={{ color: `${negPos}` }}>{priceChange}</Text>
          </View>
          <Button
            title="Buy"
            style={{ marginTop: 10, width: 60 }}
            type="outline"
            onPress={() => alert(`Bought ${coin.name}`)}
          />
          {/* <Text style={{ marginTop: "auto", marginBottom: 5 }}>
            {coin.availableSupply.toFixed(0)}
          </Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  card: {
    backgroundColor: "white",
    width: 175,
    height: 175,
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 20,
    borderColor: "lightgrey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    // justifyContent: "center",
  },
  content: {
    marginTop: 10,
    alignItems: "center",
  },
  coinImg: {
    width: 50,
    height: 50,
  },
});

export default CoinItem;

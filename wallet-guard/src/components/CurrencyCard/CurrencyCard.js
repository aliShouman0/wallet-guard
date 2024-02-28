import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import fontSize from "../../themes/fontSize";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { AntDesign } from "@expo/vector-icons";

const CurrencyCard = ({ data, onClick }) => {
  return (
    <>
      <TouchableOpacity style={styles.root} onPress={onClick}>
        <View>
          <Text style={styles.mainText}>{data.currency}</Text>
          <Text style={styles.subText}>{data.currencyCountry}</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>

      <HorizontalLine borderStyle={"solid"} opacity={0.1} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 17,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    elevation: 2,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  mainText: { fontSize: fontSize.XLarge, fontWeight: "bold" },
  subText: { fontSize: fontSize.small, fontWeight: "400" },
});

CurrencyCard.propTypes = {
  data: PropTypes.shape({
    currency: PropTypes.string,
    currencyCountry: PropTypes.string,
  }),
};

// defaultProps
export default CurrencyCard;

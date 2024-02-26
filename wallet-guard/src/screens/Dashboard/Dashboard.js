import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

import colors from "../../themes/colors";
import fontSize from "../../themes/fontSize";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";

const Dashboard = (props) => {
  const [allCurrency, setAllCurrency] = useState([]);

  useEffect(() => {
    getAllCurrency();
  }, []);

  const getAllCurrency = () => {
    const data = [
      { currency: "USD", currencyCountry: "United States Dollar" },
      { currency: "EUR", currencyCountry: "Euro" },
      { currency: "JPY", currencyCountry: "Japanese Yen" },
    ];
    setAllCurrency(data);
    // return
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.white, flex: 1, padding: 17 }}
    >
      <StatusBar barStyle={"light-content"} backgroundColor={colors.appBlue} />
      <Text
        style={{
          fontSize: fontSize.XXLarge,
          fontWeight: "bold",
        }}
      >
        Select currency
      </Text>
      <ScrollView style={{}}>
        {allCurrency.map((item) => (
          <CurrencyCard data={item} onClick={() => {}} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

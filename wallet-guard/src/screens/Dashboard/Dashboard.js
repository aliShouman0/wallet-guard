import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";

import colors from "../../themes/colors";
import fontSize from "../../themes/fontSize";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";

const Dashboard = ({ navigation }) => {
  const [allCurrency, setAllCurrency] = useState([]);

  useEffect(() => {
    getAllCurrency();
  }, []);

  const getAllCurrency = () => {
    const data = [
      { id: 1, currency: "USD", currencyCountry: "United States Dollar" },
      { id: 1, currency: "EUR", currencyCountry: "Euro" },
      { id: 1, currency: "JPY", currencyCountry: "Japanese Yen" },
      { id: 1, currency: "USD", currencyCountry: "United States Dollar" },
      { id: 1, currency: "EUR", currencyCountry: "Euro" },
      { id: 1, currency: "JPY", currencyCountry: "Japanese Yen" },
    ];
    setAllCurrency(data);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.appBlue} />
      <Text style={styles.text}>Select currency</Text>
      <ScrollView style={{ flex: 1, gap: 2 }}>
        {allCurrency.map((item, index) => (
          <CurrencyCard
            data={item}
            onClick={() => {
              navigation.navigate("MainDashboard", { id: index });
            }}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 0,
  },
  text: {
    fontSize: fontSize.XXLarge,
    fontWeight: "bold",
    padding: 10,
  },
});
Dashboard.propTypes = {};

export default Dashboard;

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

import colors from "../../themes/colors";
import fontSize from "../../themes/fontSize";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";

const Dashboard = (props) => {
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
        <CurrencyCard data={data} onClick={() => {}} />
        {/* <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

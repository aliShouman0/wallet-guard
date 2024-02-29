import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../../themes/colors";
import fontSize from "../../themes/fontSize";

const MainDashboard = (props) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.appBlue} />
      <ScrollView style={{ flex: 1, gap: 2 }}>
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.text}>Account Balance</Text>
            <Text style={styles.boldText}>5,943$</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
  },
  balanceContainer: {},
  text: { fontWeight: "500", fontSize: fontSize.mid },
  boldText: {
    fontWeight: "bold",
    fontSize: fontSize["3XLarge"],
    marginTop: 10,
  },
});
MainDashboard.propTypes = {};

export default MainDashboard;

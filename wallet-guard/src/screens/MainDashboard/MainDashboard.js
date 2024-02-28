import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";

import colors from "../../themes/colors";

const MainDashboard = (props) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.appBlue} />
      {/* <Text style={styles.text}>Select currency</Text> */}
      <ScrollView style={{ flex: 1, gap: 2 }}></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 0,
  },
});
MainDashboard.propTypes = {};

export default MainDashboard;

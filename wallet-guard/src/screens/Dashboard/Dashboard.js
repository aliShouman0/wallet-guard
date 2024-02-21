import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Dashboard = (props) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} backgroundColor={"#195CE5FF"} />
    </SafeAreaView>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

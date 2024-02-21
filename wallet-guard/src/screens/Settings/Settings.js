import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, StatusBar, Text } from "react-native";

const Settings = (props) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} backgroundColor={"#195CE5FF"} />
    </SafeAreaView>
  );
};

Settings.propTypes = {};

export default Settings;

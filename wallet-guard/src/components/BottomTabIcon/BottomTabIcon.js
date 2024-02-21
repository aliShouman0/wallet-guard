import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const BottomTabIcon = ({ icon, backgroundColor }) => {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius: 50,
        width: 38,
        height: 38,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon && icon()}
    </View>
  );
};

BottomTabIcon.propTypes = {
  icon: PropTypes.func,
};

export default BottomTabIcon;

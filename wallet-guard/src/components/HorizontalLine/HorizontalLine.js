import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, View } from "react-native";

import colors from "../../themes/colors";

const HorizontalLine = ({ borderStyle, opacity, style }) => {
  const isIOS = Platform.OS === "ios";
  return (
    <View style={[isIOS && { overflow: "hidden" }, style]}>
      <View
        style={[
          styles.line,
          isIOS && {
            borderWidth: 1,
            margin: -1,
          },
          { borderStyle: borderStyle, opacity },
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderColor: colors.gray,
    opacity: 0.1,
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 0.8,
    marginBottom: 0,
    borderRadius: 1,
    // borderTopColor: 'white',
  },
});

export default HorizontalLine;

HorizontalLine.propTypes = {
  borderStyle: PropTypes.oneOf(["solid", "dotted", "dashed", undefined]),
};

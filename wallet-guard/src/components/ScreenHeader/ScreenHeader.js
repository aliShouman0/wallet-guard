import React from "react";
import PropTypes from "prop-types";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ScreenHeader = ({ screenName, appIcon }) => {

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          {appIcon && (
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.img}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{screenName}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F7FAFC",
    height: 70,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  text: {
    fontSize: 18,
    backgroundColor: "#195CE5",
    color: "#FFF",
    alignSelf: "center",
    padding: 5,
    paddingLeft: 35,
    paddingRight: 35, 
    borderRadius: 20,
    fontWeight:'bold'
  },
  textContainer: {
    flex: 1,
    marginRight: 45,
  },
  imgContainer: {
  },
  img: { width: 45, height: 45 },
});

ScreenHeader.propTypes = {
  screenName: PropTypes.string,
  appIcon: PropTypes.bool,
};

ScreenHeader.defaultProps = {
  screenName: "",
  appIcon: true,
};

export default ScreenHeader;

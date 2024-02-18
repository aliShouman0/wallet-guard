import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const DashboardStack = (props) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
  );
};

DashboardStack.propTypes = {};

export default DashboardStack;

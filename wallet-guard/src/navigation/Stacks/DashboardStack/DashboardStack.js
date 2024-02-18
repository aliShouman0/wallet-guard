import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../../../screens/Dashboard/Dashboard";

const Stack = createStackNavigator();

const DashboardStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Dashboard} />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
  );
};

DashboardStack.propTypes = {};

export default DashboardStack;

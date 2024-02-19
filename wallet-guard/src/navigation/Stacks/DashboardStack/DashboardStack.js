import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../../../screens/Dashboard/Dashboard";
import ScreenHeader from "../../../components/ScreenHeader/ScreenHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const DashboardStack = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        cardStyle: {
          paddingTop: insets.top,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{
          header: () => (
            <ScreenHeader screenName={"Dashboard"} appIcon={true} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

DashboardStack.propTypes = {};

export default DashboardStack;

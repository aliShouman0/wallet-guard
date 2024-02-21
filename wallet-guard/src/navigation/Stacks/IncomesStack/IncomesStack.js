import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenHeader from "../../../components/ScreenHeader/ScreenHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Incomes from "../../../screens/Incomes/Incomes";

const Stack = createStackNavigator();

const IncomesStack = (props) => {
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
        component={Incomes}
        options={{
          header: () => <ScreenHeader screenName={"Incomes"} appIcon={true} />,
        }}
      />
    </Stack.Navigator>
  );
};

IncomesStack.propTypes = {};

export default IncomesStack;

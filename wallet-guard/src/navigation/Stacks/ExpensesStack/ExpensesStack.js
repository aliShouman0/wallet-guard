import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenHeader from "../../../components/ScreenHeader/ScreenHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Expenses from "../../../screens/Expenses/Expenses";

const Stack = createStackNavigator();

const ExpensesStack = (props) => {
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
        component={Expenses}
        options={{
          header: () => (
            <ScreenHeader screenName={"Expenses"} appIcon={true} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

ExpensesStack.propTypes = {};

export default ExpensesStack;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../themes/colors";
import DashboardStack from "../Stacks/DashboardStack/DashboardStack";
import BottomTabIcon from "../../components/BottomTabIcon/BottomTabIcon";
import ExpensesStack from "../Stacks/ExpensesStack/ExpensesStack";
import IncomesStack from "../Stacks/IncomesStack/IncomesStack";
import Settings from "../../screens/Settings/Settings";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const screenOptions = (
    tabBarLabel,
    icon,
    headerShown = false,
    header = null
  ) => {
    return {
      tabBarLabel,
      headerShown,
      header: header ? header : () => {},
      tabBarIcon: ({ color, size, focused }) => (
        <BottomTabIcon
          backgroundColor={focused && colors.appBlue}
          icon={() => icon(focused)}
        />
      ),
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: "#195CE5FF",
          tabBarInactiveTintColor: colors.black,
          tabBarStyle: [
            {
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          ],
          tabBarLabelStyle: {
            paddingBottom: 5,
            fontWeight: "bold",
            fontSize: 12,
          },
          tabBarIconStyle: {
            marginBottom: -5,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={screenOptions("Dashboard", (focused) => (
            <Entypo
              name="bar-graph"
              size={20}
              color={focused ? "#fff" : "#000"}
              style={{}}
            />
          ))}
        />
        <Tab.Screen
          name="Expenses"
          component={ExpensesStack}
          options={screenOptions("Expenses", (focused) => (
            <FontAwesome6
              name="money-bill-trend-up"
              size={20}
              color={focused ? "#fff" : "#000"}
            />
          ))}
        />
        <Tab.Screen
          name="Incomes"
          component={IncomesStack}
          options={screenOptions("Incomes", (focused) => (
            <MaterialCommunityIcons
              name="wallet-plus"
              size={20}
              color={focused ? "#fff" : "#000"}
            />
          ))}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={screenOptions(
            "Settings",
            (focused) => (
              <Ionicons
                name="settings-sharp"
                size={20}
                color={focused ? "#fff" : "#000"}
              />
            ),
            true,
            () => (
              <ScreenHeader screenName={"Settings"} appIcon={true} />
            )
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;

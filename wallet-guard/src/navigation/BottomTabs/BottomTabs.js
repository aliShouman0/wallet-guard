import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons"; 

import DashboardStack from "../Stacks/DashboardStack/DashboardStack"; 
import BottomTabIcon from "../../components/BottomTabIcon/BottomTabIcon";
import colors from "../../themes/colors";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: "#195CE5FF",
          tabBarStyle: [
            {
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          ],
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            tabBarLabel: "Dashboard",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <BottomTabIcon
                backgroundColor={colors.appBlue}
                icon={() => (
                  <Entypo
                    name="bar-graph"
                    size={25}
                    color={focused ? "#fff" : "#fff"}
                    style={{}}
                  />
                )}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;

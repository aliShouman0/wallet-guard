import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// import DashboardStack from "../Stacks/DashboardStack/DashboardStack";
import Dashboard from "../../screens/Dashboard/Dashboard";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: "Dashboard",
            // tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}
        />
        {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          // tabBarIcon: ({ color, size }) => (
          // <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
          tabBarBadge: 3,
        }}
      />  */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;

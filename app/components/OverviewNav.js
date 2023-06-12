import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OverviewStack from "../routes/overviewStack";

const Stack = createStackNavigator();

export default function OverviewNav() {
    return (
        <Stack.Navigator>
      {/* Add other screens and options as needed */}
      <Stack.Screen
        name="Overview"
        component={OverviewStack}
        options={{
          headerShown: false, // Hide the header for this screen if desired
        }}
      />
    </Stack.Navigator>
    )
}
import * as React from "react";
import { BottomTabs, MyStatusBar } from "../components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../theme";
import { LogBox, useColorScheme } from "react-native";
import Search from "../screens/Search";
import Upcoming from "../screens/Upcoming";
import Detail from "../screens/Detail";
import { NAVIGATION } from "../constant/navigation";

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const MainStack = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      <MyStatusBar backgroundColor={"transparent"} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={NAVIGATION.upcoming} component={Upcoming} />
        <Stack.Screen name={NAVIGATION.search} component={Search} />
        <Stack.Screen name={NAVIGATION.detail} component={Detail} />
      </Stack.Navigator>
      <BottomTabs />
    </NavigationContainer>
  );
};
export default MainStack;

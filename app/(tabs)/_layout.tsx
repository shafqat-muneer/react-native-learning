import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
// import { useFonts } from "expo-font";
// import { Text } from "react-native";

import { Tabs } from "expo-router";
import { UserProvider } from "../../src/state-management/context-api-experiment";

export default function TabsLayout() {
  // const [fontsLoaded] = useFonts({
  //   PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  //   PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>; // or return null
  // }

  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#f5f5f5" },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: "#f5f5f5",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: "#6200ee",
          tabBarInactiveTintColor: "#666666",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Today's Habits",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-today"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="streaks"
          options={{
            title: "Streaks",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-line"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="add-habit"
          options={{
            title: "Add Habit",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="experiment"
          options={{
            title: "Experiment",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="experiment" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="offline-mode"
          options={{
            title: "Offline",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="save" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </UserProvider>
  );
}

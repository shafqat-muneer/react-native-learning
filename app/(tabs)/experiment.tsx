// src/screens/HomeScreen.tsx
import App from "@/src/state-management/redux-experiment";
import { Button, Text, View } from "react-native";
import { useUser } from "../../src/state-management/context-api-experiment";

// By using Redux
// By using Context API
export default function HomeScreen() {
  const { user, setUser } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* By using Context API */}
      <Text>Hello {user}</Text>
      <Button title="Change User" onPress={() => setUser("New User")} />

      {/* By using Redux */}
      <App />
    </View>
  );
}

/*
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HelloWorld() {
  const [fruit, setFruit] = useState("Apple");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is {fruit}!</Text>
      <Button title="Change Fruit" onPress={() => setFruit("Banana")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // center vertically
    alignItems: "center", // center horizontally
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
*/

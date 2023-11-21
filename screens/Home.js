import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { getAuth, signOut } from "firebase/auth";

export default function Home(props) {
  // Get the authentication instance
  const auth = getAuth();

  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Text>My ID is: {props.user.uid}</Text>
      <Button onPress={() => signOut(auth)} title="Sign out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

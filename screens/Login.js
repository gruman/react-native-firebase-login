import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  // Get the authentication instance
  const auth = getAuth();

  // State for user information, input fields, and login credentials
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  // Function to handle the creation of a new user account
  function handleCreate() {
    if (email && password) {
      // Create a new user with the provided email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User account created successfully
          console.log(userCredential.user);
        })
        .catch((error) => {
          // Handle errors during account creation
          alert(error.message);
        });
    } else {
      // Alert the user if fields are missing
      alert("Please fill out both fields.");
    }
  }

  // Function to handle user login
  function handleLogin() {
    if (logEmail && logPassword) {
      // Sign in with the provided email and password
      signInWithEmailAndPassword(auth, logEmail, logPassword)
        .then((userCredential) => {
          // User successfully signed in
          setUser(userCredential.user);
        })
        .catch((error) => {
          // Handle errors during login
          alert(error.message);
        });
    }
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style={{ marginBottom: 20 }}
        value={logEmail}
        onChangeText={(e) => setLogEmail(e)}
        placeholder="Email"
      />
      <TextInput
        style={{ marginBottom: 20 }}
        secureTextEntry={true}
        value={logPassword}
        onChangeText={(e) => setLogPassword(e)}
        placeholder="Password"
      />
      
      <Button onPress={() => handleLogin()} title="Login" />

      <TextInput
        style={{ marginBottom: 20, marginTop: 20 }}
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
      />
      <TextInput
        style={{ marginBottom: 20 }}
        secureTextEntry={true}
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder="Password"
      />
      <Button onPress={() => handleCreate()} title="Create account">
        Create Account
      </Button>
    </View>
  );
}

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

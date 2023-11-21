import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Home from './screens/Home';
import Login from './screens/Login';

import './constants/firebase';

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to retrieve user from AsyncStorage on app start
    const retrieveUser = async () => {
      try {
        // Retrieve user data from AsyncStorage
        const storedUser = await AsyncStorage.getItem('user');

        // If user data exists, set the user state with the retrieved data
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving user from AsyncStorage:', error);
      } finally {
        // Set loading state to false once user data retrieval is complete
        setLoading(false);
      }
    };

    // Listen for authentication state changes using Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, async (userCredential) => {
      if (userCredential) {
        // User is signed in
        setUser(userCredential);

        // Save user to AsyncStorage for persistent storage
        try {
          await AsyncStorage.setItem('user', JSON.stringify(userCredential));
        } catch (error) {
          console.error('Error saving user to AsyncStorage:', error);
        }
      } else {
        // User is signed out
        setUser(null);
      }

      // Set loading state to false once authentication state changes are handled
      setLoading(false);
    });

    // Retrieve user from AsyncStorage on app start
    retrieveUser();

    // Clean up the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  // If the app is still loading, return null (or a loading screen)
  if (loading) return null;

  // Render the Home or Login component based on the user state
  return (
    <>
      {user ? <Home user={user} /> : <Login />}
    </>
  );
}

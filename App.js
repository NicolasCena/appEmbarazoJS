
import 'react-native-gesture-handler';
import React from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './src/navigator/drawerNavigation'

const App = () => {
  // const auth = getAuth()
  console.log(auth.currentUser)

  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );
};


export default App;

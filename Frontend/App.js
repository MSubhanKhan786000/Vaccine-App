import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import Navigation from './components/Navigation';

export default function App() {
  return (
      <>
        <Navigation />
        <StatusBar style="auto" />    
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

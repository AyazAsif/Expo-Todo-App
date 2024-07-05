import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Components/Splash';
import { useEffect, useState } from 'react';
import StackNavigation from './Components/NavigationScreens/StackNavigation';

export default function App() {
  const[splashShow, setSplashShow]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setSplashShow(false)
    },2000)
  },[])
  return (
    <NavigationContainer>
      {splashShow?<Splash/>:<StackNavigation/>}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

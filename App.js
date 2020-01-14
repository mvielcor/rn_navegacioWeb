/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import {PrimeraScreen} from './screens/PrimeraScreen';
import {SegonaScreen} from './screens/SegonaScreen';
import {TerceraScreen} from './screens/TerceraScreen';
import {StyleSheet, View, Text, Button} from 'react-native';

// 1r Importem els components que necessitem per a la navegació
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//2n Creem el Navigation Stack
export const NavegadorDeLApp = createStackNavigator(
  {
    Primera: PrimeraScreen,
    Segona: SegonaScreen,
    Tercera: TerceraScreen,
  },
  {initialRoutename: 'Primera'},
);
//3r creem el contenidor de l'app per a suportar el botó back
const AppContainer = createAppContainer(NavegadorDeLApp);

export default class App extends React.Component {
  render() {
    //El component AppContainer genera una barra de capçalera amb un botó 
    // per tornar a la pantalla anterior, tal i com fariem amb un navegador web. 
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({});

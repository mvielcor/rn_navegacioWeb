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
import {StyleSheet,Image,  View, Text, Button} from 'react-native';

// 1r Importem els components que necessitem per a la navegació
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
/*
  // UTILITZAT PER A LA NAVEGACIÓ WEB
  import {createStackNavigator} from 'react-navigation-stack';
*/
//Opcional creem un objecte amb icones
const icons = {
  home: require("./images/home.png"),
}

//2n Creem el Drawer Navigation
export const ElMeuDrawer = createDrawerNavigator(
  {
    Primera: {screen: PrimeraScreen,
    navigationOptions: ({navigation})=>({
      title:'Primera Pantalla Manel',
      drawerIcon: ({item})=> (
        <Image source={icons.home} style={{width:20, height:20}} />
      )
    })},
    Segona: {screen: SegonaScreen},
    Tercera: {screen: TerceraScreen},
  },
  {
    // Altres opcions del Drawer Navigator
    title: 'Menu de Manel',
  }
);
/*
 export const NavegadorDeLApp = createStackNavigator(
  {
    Primera: {screen: PrimeraScreen},
    Segona: {screen: SegonaScreen},
    Tercera: {screen: TerceraScreen},
  },
  {initialRoutename: 'Primera',},
);
*/

//3r creem el contenidor de l'app per a suportar el drawerNavigator
const AppContainer = createAppContainer(ElMeuDrawer);

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

import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Button} from 'react-native';

export class TerceraScreen extends React.Component {
    paginaAnterior = () => {
      console.log('vaig a carregar la pàgina anterior');
      this.props.navigation.goBack(); //Tornem a la pàgina anterior
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'green'}}>
          <Text> Tercera Screen </Text>
          <Button title="Tornar" onPress={this.paginaAnterior} />
        </View>
      );
    }
  }
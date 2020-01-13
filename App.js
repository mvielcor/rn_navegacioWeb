/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';

import {StyleSheet, View, Text, Button} from 'react-native';

export default class App extends React.Component {
  paginaSeguent = () => {
    console.log('vaig a carregar la pàgina següent');
  };

  render() {
    return (
      <View>
        <Text>Hola Manel</Text>
        <Button title="Pagina Següent" onPress={this.paginaSeguent} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

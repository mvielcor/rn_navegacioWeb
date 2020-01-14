import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Button} from 'react-native';

export class SegonaScreen extends React.Component {
    paginaSeguent = () => {
      console.log('vaig a carregar la pàgina següent');
      this.props.navigation.navigate('Tercera');
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'yellow'}}>
          <Text> Segona Screen </Text>
          <Button title="Pagina Següent" onPress={this.paginaSeguent} />
        </View>
      );
    }
  }
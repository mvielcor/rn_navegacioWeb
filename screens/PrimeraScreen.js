import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Button} from 'react-native';

export class PrimeraScreen extends React.Component {
  
    paginaSeguent = () => {
      console.log('vaig a carregar la pàgina següent');
      this.props.navigation.navigate('Segona');
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red'}}>
          <Text> Primera Screen </Text>
          <Button title="Pagina Següent" onPress={this.paginaSeguent} />
        </View>
      );
    }
  }
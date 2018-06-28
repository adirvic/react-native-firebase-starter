import React from 'react';
import { View, Text } from 'react-native';

export class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../img/fundo.jpg')}
        style={{
          flex:1,
          width: '100%',
          height:'100%',
          // alignItems: 'center',
          // justifyContent: 'center'
        }}
        >

        <Button
          title='Inicio'
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Login', {
              itemId: 86,
              // otherParam: 'Seus últimos cortes',
            });
          }}
        />

        </ImageBackground>
    );
  }
}

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading} from 'expo';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Badge,  Fab, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

	
	 
	 
	 
function FloatView({ navigation }) {
 
 const [active, setActive] = useState(false);
  
  return (
     <View style={{ flex: 1 }}>
    <Fab
      active={active}
      direction="up"
      containerStyle={{ }}
      style={{ backgroundColor: '#5067FF' }}
      position="bottomRight"
      onPress={() => setActive(!active)}>
      <Icon name="share" />
      <Button style={{ backgroundColor: '#34A34F' }}>
        <Icon name="logo-whatsapp" />
      </Button>
      <Button style={{ backgroundColor: '#3B5998' }}>
        <Icon name="logo-facebook" />
      </Button>
      <Button disabled style={{ backgroundColor: '#DD5144' }}>
        <Icon name="mail" />
      </Button>
    </Fab>
	</View>
  );
}



export default FloatView



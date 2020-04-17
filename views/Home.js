import React,{ useState, useEffect }from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Notifications } from 'expo';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Badge, Fab, Button, Form, Item, Input, Label} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import FloatView from "./Floating.js";
import Avatar from 'avataaars'
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import bugsnag from '@bugsnag/expo';
import {db} from './config.js';


const bugsnagClient = bugsnag();

// import { Translate } from '@google-cloud/translate';
import registerForPushNotificationsAsync from './Notifications.js';

async function checkMultiPermissions() {
  const { status, expires, permissions } = await Permissions.getAsync(
    Permissions.CALENDAR,
    Permissions.CONTACTS
  );
  if (status !== 'granted') {
    alert('Hey! You have not enabled selected permissions');
  }
}


function Home ({ navigation }){
	 const [active, setActive] = useState(false);
	 const [phone, setPhone] = useState('');
	 const [device, setDevice] = useState('');
	 const [showToast, setShowToast]= useState(true);
	 const [notify, setNotify] = useState('');
	
	
     useEffect(() => {
		 bugsnagClient.notify(new Error('Test error'))
		 registerForPushNotificationsAsync();
		 checkMultiPermissions();
		 
		
		 
		 
       // Update the document title using the browser API
		 
		 // axios.post(`https://api.getsonarcloud.com/r/register/code`)
 // 		      .then(res => {
 // 		        const persons = res.data;
 // 		        this.setState({ persons });
 // 		      })
 //
		 // SecureStore.setItemAsync(key, value, options)
 //         SecureStore.getItemAsync(key, options)
 console.log(`This is a constant ${Constants.installationId}`);
 setDevice(Device.osName);
 
console.log(`device is ${device}`)
 //
 
 const _notificationSubscription = Notifications.addListener(_handleNotification);
     
     },[]);
	 
	 
	
	
	function _handleNotification(notification){
	    // do whatever you want to do with the notification
	   setNotify(notification);
	  };
	
 
  return (
	  
   
      <Container>

        
	 
        
        <Content padder>
<Image
         style={{ width: 50, height: 50 }}
         source={{ uri: 'https://avataaars.io/png?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' }}
       />
	
          <Card>
           <CardItem header bordered>
	      
              <Text>Menu </Text> 
	  <Right>
	  <Button bordered danger onPress={() => navigation.navigate('Settings')}><Text>Verify Account now</Text></Button> 
	  </Right>

            </CardItem>
            <CardItem button onPress={() => navigation.navigate('Feed')}>
              <Icon active name="chatbubbles" />
              <Text>Feed</Text>
	        <Text>   </Text>
           <Badge>
            <Text>2</Text>
          </Badge>
              <Right>

                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             
			 <CardItem button onPress={() => navigation.navigate('Card')}> 
              <Icon active name="link" />
              <Text>Resources</Text>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
             </CardItem>
	  
              <CardItem button onPress={() => navigation.navigate('Settings')}>
              <Icon active name="settings" />
              <Text>Settings</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
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
      </Container>
	  
	  
	  
	     
  );
}



export default Home

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Font, Video, Audio,Permissions,Notifications } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import SettingView from "./views/Settings.js";
import ResourceView from "./views/Resource.js";
import FeedView from "./views/Feed.js";
import CardView from "./views/Cards.js";
import Home from "./views/Home.js";
import axios from 'axios';





// async function getToken() {
//   // Remote notifications do not work in simulators, only on device
//   // if (!Expo.Constants.isDevice) {
//   //   return;
//   // }
//   // let { status } = await Permissions.askAsync(
//   //     Permissions.NOTIFICATIONS,
//   // );
//   // if (status !== 'granted') {
//   //   return;
//   // }
//   // let value = await Notifications.getExpoPushTokenAsync();
//   // console.log('Our token', value);
//   /// Send this to a server
//   const { status: existingStatus } = await Permissions.getAsync(
//       Permissions.NOTIFICATIONS
//   );
//   let finalStatus = existingStatus;
//
//   // only ask if permissions have not already been determined, because
//   // iOS won't necessarily prompt the user a second time.
//   if (existingStatus !== 'granted') {
//     // Android remote notification permissions are granted during the app
//     // install, so this will only ask on iOS
//     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//     finalStatus = status;
//   }
//
//   // Stop here if the user did not grant permissions
//   if (finalStatus !== 'granted') {
//     return;
//   }
//
//   // Get the token that uniquely identifies this device
//   let token = await Notifications.getExpoPushTokenAsync();
//  console.log(token);
// }






const Stack = createStackNavigator();



function App() {
	
	
	
	

	
	
	
	
	
  return (
	
    // static navigationOptions =({navigation}) => {
 //      const { params = {}} = navigation.state;
 //      let headerTitle = "Featured";
 //      let headerLeft = (<Ionicons name='ios-list' size={20} style={{paddingLeft: 10}} onPress={() => params.getFeeds() } color='white' />);
 //      let headerRight = (<Ionicons name="ios-settings" size={20} style={{paddingRight: 10}} onPress={() => params.getSettings() } color='white'/>);
 //
 //      return {headerLeft, headerTitle, headerRight}
 //
 //    };
	
  
	
	
    // state = {
  //      theme: null,
  //      currentTheme: null,
  //      isReady: false,
  //    };
  //
  // 	 changeTheme = (theme, currentTheme) => {
  //      this.setState({ theme, currentTheme });
  //    }
  //
     // async this.componentDidMount() {
     //   await Font.loadAsync(
     //     'antoutline',
     //     // eslint-disable-next-line
     //     require('@ant-design/icons-react-native/fonts/antoutline.ttf')
     //   );
     //
     //   await Font.loadAsync(
     //     'antfill',
     //     // eslint-disable-next-line
     //     require('@ant-design/icons-react-native/fonts/antfill.ttf')
     //   );
     //   // eslint-disable-next-line
     //   this.setState({ isReady: true });
     // }
	
	
	
	
	
 
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Resources" component={ResourceView} />
	  <Stack.Screen name="Settings" component={SettingView} />
	  <Stack.Screen name="Feed" component={FeedView} />
	 <Stack.Screen name="Card" component={CardView} />
      </Stack.Navigator>
    </NavigationContainer>
	  
  );
   
}






export default App;



import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
import bugsnag from '@bugsnag/expo';
import {db} from './config.js';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

const bugsnagClient = bugsnag();

export default async function registerForPushNotificationsAsync() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  // only asks if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  // On Android, permissions are granted on app installation, so
  // `askAsync` will never prompt the user

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    alert('Enable Notifications!');
    return;
  }
  
const token = await Notifications.getExpoPushTokenAsync();  
  
  
  
  
 db.ref(`/users/${Constants.installationId}`).on('value', snapshot => {
	  console.log(`snapshot is ${JSON.stringify(snapshot.val())}`);
	  
	  if(snapshot.val() == null){
	  	
		  db.ref(`users/${Constants.installationId}`).set({verified: false});
 
		
	  }else{
		  
		  if(token){
		  	
			  db.ref(`users/${Constants.installationId}`).update({
				 token: `${token}`, 
				  device: `${Device.osName}`,
				  verified: false
	 
			  });
			
			
		  }else{
		  	
			
			  db.ref(`users/${Constants.installationId}`).update({
				  device: `${Device.osName}`,
				  verified: false
	 
			  });
			
			
		  }
	  	
			
	  }
	  
  });
  
  
 // async function setData(data){
 //    try {
 //      await AsyncStorage.setItem('@token', data)
 //    } catch (e) {
 //     console.log(e)
 //    }
 //  }firebase.database().ref(`users/${Constants.installationId}`).update({
		
  
  // POST the token to your backend server from where you can retrieve it to send push notifications.
 
}




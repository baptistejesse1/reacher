import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AppLoading } from 'expo';
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Badge, Fab} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Avatar from 'avataaars'
import FloatView from "./Floating.js";
import {db} from './config.js';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as WebBrowser from 'expo-web-browser'
import axios from 'axios';
// import { Translate } from '@google-cloud/translate';
//
// const translate = new Translate();




class FeedView extends React.Component{
	state = {
	    messages: [],
		image: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
	  }
	  
	  
	  
  handleUrlPress(url, matchIndex /*: number*/) {
     WebBrowser.openBrowserAsync(url)
   }
	  
	
	 
	  
	  componentDidMount() {
		  
	 	 
		  
		  db.ref(`/users/${Constants.installationId}`).once('value').then((snapshot) => 
		  
	     
	  
		  axios.get(`https://api.getsonarcloud.com/r/message/?authToken=${snapshot.val().authToken}`)
 		      .then(res => {
				  console.log(JSON.stringify(res.data.shortys));
				  let shortys= res.data.shortys;
		         
				 let get_shorts = shortys.map((short,key) =>{
					  
					  // console.log(short.message.org);
				      let container = {};
					  container['_id'] = Math.floor(Math.random() * Math.floor(10000000000000000));
					  container['text']=`Message from ${short.message.org.name}: ${short.long_url}`;
					  container['createdAt'] = new Date();
					  container['user._id'] =  short.message.org.id;
                      container['user.name'] = short.message.org.name;
					  container['image']= 'https://s3.amazonaws.com/assetsparent/Sonarcloud%2BCommunication.jpg';
				      container['avatar']='https://avataaars.io/png?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
					  
					
					  return container;
				
					
				  });//map
				  
				  
		           console.log(get_shorts)
				  
			  
		  
				 this.setState({messages: get_shorts})
		  
			 
		  
			  }) //axios
		
		
			
	       ); //firebase
		 

		 
	
		 
		// https://api.getsonarcloud.com/r/messages/?authToken= 
		  
		  
		  
		   //      this.setState({
	   //     messages: [
	   //       {
	   //         _id: 1,
	   //         text: 'Hello developer',
	   //         createdAt: new Date(),
	   //         user: {
	   //           _id: 2,
	   //           name: 'React Native',
	   //           avatar: 'https://avataaars.io/png?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
	   //         },
	   //       },
	   //     ],
	   //   })
	   }
	   //
	  
	  // const texty = 'Are you surviving? Have fun with your kids';
	  // const target = 'ru'; https://api.adorable.io/avatars/285/abott@adorable.png

	  //.png
	  // async function translateText() {
	  //   // Translates the text into the target language. "text" can be a string for
	  //   // translating a single piece of text, or an array of strings for translating
	  //   // multiple texts.
	  //   let [translations] = await translate.translate(text, target);
	  //   translations = Array.isArray(translations) ? translations : [translations];
	  //   console.log('Translations:');
	  //   translations.forEach((translation, i) => {
	  //     console.log(`${texty[i]} => (${target}) ${translation}`);
	  //   });
	  // }
	 
	
	  onSend(messages = []) {
	    this.setState(previousState => ({
	      messages: GiftedChat.append(previousState.messages, messages),
	    }))
	  }

	  render() {
	    return (
		<View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
	      <GiftedChat
			showAvatarForEveryMessage={true}
	        messages={this.state.messages}
	        onSend={messages => this.onSend(messages)}
			parsePatterns={() =>
			            [
			              {type: 'url', style: styles.url, onPress: this.handleUrlPress},
			              {type: 'phone', style: styles.phone, onPress: this.handlePhonePress},
						  {type: 'email', style: styles.email, onPress: this.handleEmailPress}
			            ]
			          }
	        user={{
	          _id: 1,
				name: "Parent",
				avatar: "https://api.adorable.io/avatars/233444444/343553s5.png"
	        }}
	      />
		</View>
			
	    )
	  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  url: {
    color: '#0000EE',
    textDecorationLine: 'underline',
  },

  email: {
    textDecorationLine: 'underline',
  },

  text: {
    color: 'black',
    fontSize: 15,
  },

  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  name: {
    color: 'red',
  },

  username: {
    color: 'green',
    fontWeight: 'bold'
  },

  magicNumber: {
    fontSize: 42,
    color: 'pink',
  },

  hashTag: {
    fontStyle: 'italic',
  },

});


export default FeedView 
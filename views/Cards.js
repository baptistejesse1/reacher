


import React,{ useState, useEffect }from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Notifications } from 'expo';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Badge, Fab, Button, Form, Item, Input, Label, Left, Thumbnail, Body} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import FloatView from "./Floating.js";
import Avatar from 'avataaars'
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import * as moment from 'moment';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import {db} from './config.js';




function Cards ({ navigation }){
	  const [messages, setMessages] = useState([]);
	
	
     useEffect(() => {
		 
 	 
	  
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
				  container['visits']= short.message.visits;
				  conatainer['url']= short.long_url;
				  container['createdAt'] = moment(short.createdAt).calendar();
				  container['_id'] =  short.message.org.id;
                  container['name'] = short.message.org.name;
				  container['image']= 'https://s3.amazonaws.com/assetsparent/Sonarcloud%2BCommunication.jpg';
			      container['avatar']='https://avataaars.io/png?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
				  
				
				  return container;
			
				
			  });//map
			  
			  
	           console.log(get_shorts)
			  
		  
	  
			 setMessages(get_shorts)
	  
		 
	  
		  }) //axios
	
	
		
       ); //firebase
	 
		

     },[]);
	 
	 
	

 
  return (
	  
   
      <Container>
        <Content padder>
	  <Header />
	{messages.map((park, key )=> (
           
 
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: park.avatar}} />
                <Body>
                  <Text>{ park.name }</Text>
                  <Text note>{ park.createdAt}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: park.image}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
    <Button transparent
      
        onPress={() => WebBrowser.openBrowserAsync({park.url})}
><Icon name="megaphone"/><Text>Listen now</Text></Button>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="people" />
                  <Text>{park.visits}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
	  
	  
	   ))}
	  
	  
	  
	  </Content>
	</Container>
	  
	  
	  
	     
  );
}



export default Cards


















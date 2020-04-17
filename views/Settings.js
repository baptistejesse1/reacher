import React, { useState, useRef, createRef } from 'react';
import { StyleSheet, View,Alert, ScrollView } from 'react-native';
import { AppLoading} from 'expo';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, ListItem, Button, Body, Switch, Fab, Item, Input, Form, Label, Picker, Badge} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import FloatView from "./Floating.js";
import * as WebBrowser from 'expo-web-browser'
import axios from 'axios';
import {db} from './config.js';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Device from 'expo-device';

function SettingView() {
	
 const [active, setActive] = useState(false);
 const [valu, setValu] = useState();
 const [nummy, setNummy] = useState('');
 const [code, setCode] = useState(false);
 const [coder, setCoder] = useState('');
 const [verified, setVerified] = useState(false);
let codeEl = useRef(null);
let inputEl = useRef(null);
  
  
function handleChange(e){
    setValu(e)
	setCode(true);
  }
	
	
  function getNumber(e){
	
	setNummy(e)
	console.log(nummy)

  }
  
 
  function settingCode(e){
	
	setCoder(e)
	console.log(coder)

  } 
  
  
  ///r/messages/?authToken=
  
  ///r/setToken { token, authToken }
  
  
  
  function handleCode(){
	// send phone, code , platform
	 
	  const authcode = coder;

	  db.ref(`/users/${Constants.installationId}`).on('value', snapshot => {
	  	 	  console.log(`snapshot is ${JSON.stringify(snapshot.val())}`);


	  		  const {device, phone } = snapshot.val();

	  		    axios.post(`https://api.getsonarcloud.com/r/register/device`,{platform: device.toLowerCase(), phone: phone, code: authcode}).then(res => {
	  		        console.log(res);
	  		        console.log(res.data);

	  			    if(res.data.success == true){
	  			    	setVerified(true);
	  		       	 db.ref(`users/${Constants.installationId}`).update({
	  		       		 verified: true,
	  					 authToken: res.data.authToken

	  		       	  });





	  				}









	  		      });



	  		  });
	
	
  }
	
	
  function getCode(){
  	
	 axios.post(`https://api.getsonarcloud.com/r/register/code`)
		      .then(res => {
		       console.log(res)
		      })

		}	
	
	function handleTest(){
		setCode(true);
		

		console.log(nummy);
	    	 db.ref(`users/${Constants.installationId}`).update({
	    		 phone: nummy
	    	  }).then(() => console.log('Data updated.'));



										    axios.post(`https://api.getsonarcloud.com/r/register/code`, {
	    		    								'phone': nummy }).then(res => {
	    		    						        console.log(res);
	    		    						        console.log(res.data);
												setCode(true);

	    		    						      })
	//
			
						  }

	
  return (
	  

	  
 <Container>
       
        <Content padder>
          
		
	  
          <ListItem>
          <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down"/>}
                placeholder="Language"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={valu}
                onValueChange={handleChange}>
                <Picker.Item label="English" value="key0" />
                <Picker.Item label="Spanish" value="key1" />
                <Picker.Item label="French" value="key2" />
                <Picker.Item label="French Creole" value="key3" />
                <Picker.Item label="Mandarin" value="key4" />
              </Picker>
            </Item>
          </Form>
        </Content>
          </ListItem>
	 
	  
          <ListItem>
				 <Content>
	         <Button primary
	           
	             onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/sonarcloud/')}
	     ><Icon name="logo-facebook"/><Text>Facebook Page</Text></Button>
				 </Content>
        
          </ListItem>
				 
          <ListItem>
 				 <Content>
 	         <Button success
 	           onPress={() => MailComposer.composeAsync({recipients:["support@getsonarcloud.com"], subject:"Parent Support", body:"Parent Support: I need help with..."}) }><Text>Support</Text></Button>
 				 </Content>
         
          </ListItem>
				   </Content>
	
   <Content padder scrollEnabled={false}>
				 <Form>
          
			{ code ? <Badge><Text>Verify Code</Text></Badge> : <Badge>
            <Text>Verify Account</Text>
          </Badge>}	
			{ verified ? <Badge success><Text>Verified</Text></Badge> : null }	
				 <Text></Text>
          
            { code ? <Item regular><Input type="text" placeholder="Enter Code" value={coder}  onChangeText={text => setCoder(text)} keyboardType={'phone-pad'} enablesReturnKeyAutomatically={true} dataDetectorTypes={'phoneNumber'}/><Button transparent onPress={() => handleCode()}><Icon name='arrow-forward' /></Button></Item> : 
		
		<Item regular><Input type="text" placeholder="Enter Mobile Number" value={nummy}  onChangeText={text => setNummy(text)} keyboardType={'phone-pad'} enablesReturnKeyAutomatically={true} dataDetectorTypes={'phoneNumber'}/><Button transparent onPress={() => handleTest()}><Icon name='arrow-forward' /></Button></Item> 
		
		
		}
			
          
				 </Form>
        </Content>
 
      
	 <FloatView/> 
      </Container>

				
  );
}



export default SettingView
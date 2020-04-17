import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading} from 'expo';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, ListItem, Button, Body, Switch, Fab} from 'native-base';
import FloatView from "./Floating.js";



function ResourceView() {
	
	
	


	
  return (
 <Container style={{ backgroundColor: "#DFE6E9"}}>
       
        <Content padder>
          <Card>
	  <CardItem header button bordered onPress={() =>alert("This is Card Body") }>
              <Text>FREE FOOD</Text>
            </CardItem>
            <CardItem button bordered onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Click on any carditem
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button   bordered onPress={() => alert("This is Card Footer")}>
              <Text>Learning website</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}



export default ResourceView



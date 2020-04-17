import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC08obT6NnKJs15JurtG-wPy_l8Y1lDoUs",
  databaseURL: "https://community-12e30.firebaseio.com/"
};

const appDb = firebase.initializeApp(firebaseConfig);

export const db = appDb.database();


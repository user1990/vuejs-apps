import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDAe2tUJ7kk35AVGLALSsgQtLe7XzvkXq8',
  authDomain: 'speedy-post-161906.firebaseapp.com',
  databaseURL: 'https://speedy-post-161906.firebaseio.com',
  projectId: 'speedy-post-161906',
  storageBucket: 'speedy-post-161906.appspot.com',
  messagingSenderId: '270737722704'
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');

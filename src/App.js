import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import firebase from 'firebase';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC4lnlYyR9OnMdVSgLwyeiEiFBfTWBEBBU',
      authDomain: 'manager-889ca.firebaseapp.com',
      databaseURL: 'https://manager-889ca.firebaseio.com',
      storageBucket: '',
      messagingSenderId: '716102442226'
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;

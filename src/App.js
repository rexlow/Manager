import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'

import Router from './Router';

import firebase from 'firebase';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  };
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/bookshelve_app';

// SETTING UP REDUX STORE
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from './store/reducers';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import firebase from "./services/firebase";
import 'firebase/auth';
import 'firebase/database';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk))

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

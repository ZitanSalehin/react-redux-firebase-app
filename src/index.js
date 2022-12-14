import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from './config/firebaseConfig';
import { createFirestoreInstance } from 'redux-firestore';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))
const rrfProps = {
  firebase,
  config:{},
  dispatch: store.dispatch,
  createFirestoreInstance
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      </ReactReduxFirebaseProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);



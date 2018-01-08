import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';
import firebaseConfig from './constants/firebaseConfig';

const fb = firebase.initializeApp(firebaseConfig).database().ref();

fb.on('value', snapshot => {
    const store = snapshot.val();
    ReactDOM.render(<App data={store} />, document.getElementById('root'));
    registerServiceWorker();
})


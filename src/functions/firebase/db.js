import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import config from './key.js';



firebase.initializeApp(config);
const DB = firebase.firestore();
const storage = firebase.storage();
// window.db = DB;
DB.settings({});

export default{ DB, storage};
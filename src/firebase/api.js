import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
// import 'firebase/firestore';
import fireBaseConfig from './fireBaseConfig';

const firebaseApp = firebase.initialize(fireBaseConfig);

export default { firebase, firebaseApp };

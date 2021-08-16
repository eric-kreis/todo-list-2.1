import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
// import 'firebase/firestore';
import fireBaseConfig from './fireBaseConfig';

firebase.initialize(fireBaseConfig);

// export default {
//   createUser: firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//     // Signed in
//       var user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//     }),
// };

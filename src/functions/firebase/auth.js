import m from 'mithril';
import store from '../../data/store';

import { getMygroupicks } from '../firebase/groupicks'
import { constants } from 'http';



// firebase.auth().signInAnonymously().catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.error('On anonymous login:', errorMessage)

// });

// firebase.auth().signOut().then(function () {
//     console.log('Sign-out successful.')
// }).catch(function (error) {
//     // An error happened.
// });






firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
        console.log('user is login in')
        console.dir(user);
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        if (isAnonymous) {
            console.log('User is loged anonymously:', uid)
            store.user = user;
        } else

            //log user to DB
            DB.child('users/' + user.uid).once('value', (userDB) => {
                if (userDB.exists()) {
                    console.log('user exists')
                } else {
                    console.log('user don   t exists')
                    let userObj = {
                        displayName: user.displayName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        isAnonymous: user.isAnonymous,
                        uid: user.uid
                    }
                    DB.child('users/' + user.uid).set(userObj);

                }
            })


    } else {
        console.log('User is signed out.')
        store.user = {};

        // m.route.set('/splash')

    }
});
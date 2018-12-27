import m from 'mithril';
import store from '../../data/store';




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
                    console.log('user dont exists')
                    let userObj = {
                        displayName: user.displayName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        isAnonymous: user.isAnonymous,
                        uid: user.uid
                    }
                    DB.child('users/' + user.uid).set(userObj);

                }
                m.route.set('/main');
            })


    } else {
        console.log('User is signed out.')
        store.user = {};

        // m.route.set('/splash')

    }
});
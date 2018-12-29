import m from 'mithril';
import store from '../../data/store';
import settings from '../../data/settings';


firebase.auth().onAuthStateChanged(function (user) {
    console.log('route is', m.route.get())

    if (user) {
        console.log('user is login in')
        console.dir(user);
        var isAnonymous = user.isAnonymous;
        !isAnonymous ? user.isLogged = true : user.isLogged = false;
        var uid = user.uid;
        store.user = user;
        if (isAnonymous) {
            console.log('User is loged anonymously:', uid)
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

            })

        //check if restrcted (after user is logged in)
        let routeString = m.route.get();
        routeString = routeString.slice(1, 5);
        let restricted = settings.auth.restricted;
        for (let i in restricted) {
            if (restricted[i].search(routeString) > -1) {
                m.route.set('/main');
            }
        }


    } else {
        console.log('User is signed out.')
        store.user = {};
        m.route.set('/login');
        // m.route.set('/splash')

    }
});


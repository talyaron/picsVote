import m from "mithril";
import './Login.css';
import store from '../../data/store';
import { setTimeout } from "timers";

const Splash = {
    view: function (vnode) {
        if (store.user.isLogged) {
            m.route.set('/main')
        }
        else {
            return (
                <div id='splashScreen' class='splashMain colorBckStrong' >
                    <div class='splashCenter'>
                        <div class='splashTitle colorTxtWhiteStrong'>
                            דליב - בחירת תמונות
                    </div>
                        <div class='splashSubTitle colorTxtWhiteStrong'>
                            בואו נשפר ביחד
                    </div>
                        <div id='loginButton' class='buttons accent' onclick={() => { googleLogin() }}>
                            התחברות
                    </div>
                    </div>
                </div >
            )
        }
    }
}


function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        flipPage();
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
}


var flipPage = function (vnode) {
    var screen = document.getElementById(vnode.dom.id);
    screen.classList.add("flipLeft");
    setTimeout(() => {
        console.log('route', '/main')
        m.route.set('/main')
    }, 500)

}

module.exports = Splash 
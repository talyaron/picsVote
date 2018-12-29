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
                        <div class='splashSubTitle'>
                            בואו נשפר ביחד
                    </div>
                        <div id='loginButtonWrapper'>
                            <div id='loginButton' class='buttons accent' onclick={() => { googleLogin() }}>
                                התחברות
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
    }
}




module.exports = Splash 
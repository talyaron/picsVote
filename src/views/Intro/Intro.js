import m from "mithril";
import './Intro.css';
import store from '../../data/store';


const Intro = {
    view: function (vnode) {

        return (
            <div id='splashScreen' class='splashMain colorBckStrong' >
                <div class='splashCenter'>
                    <div class='splashTitle'>
                        דליב - בחירת תמונות
                    </div>
                    <div class='splashSubTitle'>
                        <div>הי</div>
                        <div>אנא עזרו לי לשפר את העיצובים</div>
                        <div>בבקשה, בחרו את העיצוב הטוב יותר, ותנו לי הערות בונות כיצד לשפר </div>
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


module.exports = Intro 
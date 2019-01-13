import m from "mithril";
import './GoodBye.css';

const GoodyBye = {
    oninit: vnode => {
        document.title = 'דליב - להתראות'
    },
    view: vnode => {
        return (
            <div id='splashScreen' class='splashMain colorBckStrong' >
                <div class='splashCenter'>
                    <div class='splashTitle colorTxtWhiteStrong'>
                        דליב
                    </div>
                    <div class='splashSubTitle'>
                        תודה על העזרה :-)
                    </div>
                    <div id='loginButtonWrapper'>
                        <a id='goodByeButton' class='buttons accent linkButton' href='http://delib.org'>
                            מוזמנים לראות מי מפתח את התוכנות הללו
                        </a>
                    </div>
                </div>
            </div >
        )
    }

}




module.exports = GoodyBye; 
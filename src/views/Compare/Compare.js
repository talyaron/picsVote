import m from "mithril";
import './Compare.css';
import store from '../../data/store';


const Compare = {
    oninit: vnode => {
        //get pictures and uplad to store
        getImages(vnode);

        firebase.auth().signInAnonymously().catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorMessage)
        });
    },
    view: vnode => {
        return (
            <div id='splashScreen' class='splashMain colorBckStrong' >
                <div class='splashCenter'>
                    <div class='splashTitle'>
                        דליב<br></br>בחירת תמונות
                    </div>
                    <div class='splashSubTitle'>
                        <div>הי</div>
                        <div>אנא עזרו לי לשפר את העיצובים</div>
                        <div>בבקשה, בחרו את העיצוב הטוב יותר, ותנו לי הערות בונות כיצד לשפר </div>
                    </div>
                    <div id='loginButtonWrapper'>
                        <div id='loginButton' class='buttons accent' onclick={() => { m.route.set('/compareview/' + vnode.attrs.id) }}>
                            המשך
                            </div>
                    </div>
                </div>
            </div >
        )
    }
}

//functions

function getImages(vnode) {
    DB.child('votesIndex/' + vnode.attrs.id).once('value').then(votesIndexDB => {

        var voteUser = votesIndexDB.val();
        var voteUid = vnode.attrs.id;


        DB.child('votes').child(voteUser).child(voteUid).child('options').once('value').then(optionsDB => {

            let optionsArr = optionsDB.val();
            //random
            let randomStart = Math.floor(Math.random() * 2)
            if (randomStart == 0) {
                store.options[0] = { img: optionsArr[0], option: 0 };
                store.options[1] = { img: optionsArr[1], option: 1 };
            } else {
                store.options[1] = { img: optionsArr[0], option: 0 };
                store.options[0] = { img: optionsArr[1], option: 1 };
            }
            store.askingUser = voteUser;
        }).catch(err => {
            console.error(err)
        })



    })
}


module.exports = Compare 
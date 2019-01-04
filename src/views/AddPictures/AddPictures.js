import m from "mithril";
import './AddPictures.css';
import store from '../../data/store';
import { isPageRestricted, randomUid } from '../../functions/functions';



const Main = {
    oninit: vnode => {
        isPageRestricted(true);
        const sessionUid = randomUid();
        vnode.state = {
            sessionUid,
            picsLoaded: { 0: { loaded: false }, 1: { loaded: false } },
            goNext: false
        }
    },
    onbeforeupdate: vnode => {
        if (vnode.state.picsLoaded[0].loaded && vnode.state.picsLoaded[1].loaded) {
            vnode.state.goNext = true;
            DB.child('votes/' + store.user.uid + '/' + vnode.state.sessionUid).set({
                options: {
                    0: vnode.state.picsLoaded[0].imgSrc,
                    1: vnode.state.picsLoaded[1].imgSrc
                },
            })
            DB.child('users/' + store.user.uid + '/compares/' + vnode.state.sessionUid + '/votes').set(vnode.state.sessionUid)
        }
    },
    view: function (vnode) {

        return (

            <div class='pageContainer'>
                <header>
                    דליב - הוספת תמונות
                </header>
                <div class='newPicturesWrapper'>
                    <div class='addPicturesPanel' onclick={() => { addPicture(0) }}>
                        <input type='file' class='addPicture' id='firstPicAdd' onclick={() => { }} onchange={(event => { getImage(event, vnode.state.sessionUid, 0, vnode) })}></input>
                        {(vnode.state.picsLoaded[0].loaded) ?
                            <img src={vnode.state.picsLoaded[0].imgSrc} class='imgOption' /> :
                            < span > הוסיפו תמונה</span>
                        }
                    </div>
                    <div class='addPicturesPanel' onclick={() => { addPicture(1) }}>
                        <input type='file' class='addPicture' id='secondPicAdd' onclick={() => { }} onchange={(event => { getImage(event, vnode.state.sessionUid, 1, vnode) })}></input>
                        {(vnode.state.picsLoaded[1].loaded) ?
                            <img src={vnode.state.picsLoaded[1].imgSrc} class='imgOption' /> :
                            < span > הוסיפו תמונה</span>
                        }
                    </div>
                </div>
                {vnode.state.goNext ?
                    <div id='linkOutputWrapper'>
                        <textarea id='linkOutput'>localserver:votes/{vnode.state.sessionUid}</textarea>
                    </div>
                    :
                    <div />
                }
                <div class='bottomMenu'>
                    {(vnode.state.goNext) ?
                        <div class='sendLink' onclick={() => { m.route.set('/send') }}>
                            <i class="material-icons">
                                link
                            </i>
                        </div>
                        :
                        <div />
                    }
                    <div class='back' onclick={() => { m.route.set('/main') }}>
                        <i class="material-icons">
                            backspace
                        </i>
                    </div>
                </div>
            </div >
        )
    }
}


// functions

function addPicture(pictureNumber) {
    console.log('add pic', pictureNumber);
    if (pictureNumber == 0) {
        document.getElementById('firstPicAdd').click();
    } else {
        document.getElementById('secondPicAdd').click();
    }
}

// functions

function getImage(event, sessionUid, picIndex, vnode) {

    // imageToUpload = image.target.files[0];
    const ref = firebase.storage().ref('/sites/beauty/users/' + store.user.uid);
    const image = event.target.files[0];
    // const name = image.name;
    const metadata = {
        contentType: image.type
    };
    const uid = randomUid();
    const task = ref.child(uid).put(image, metadata);
    task
        .then(snapshot => {
            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                DB.child('users/' + store.user.uid + '/compares/' + sessionUid + '/' + picIndex).set({ imgSrc: downloadURL, id: uid })

                vnode.state.picsLoaded[picIndex] = { loaded: true, imgSrc: downloadURL };
                m.redraw();


            });
        })
        .catch(console.error);
}
module.exports = Main 
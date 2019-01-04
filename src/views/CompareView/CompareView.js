import m from "mithril";
import './CompareView.css';
import store from '../../data/store';
import { userInfo } from "os";




const CompareView = {
    oninit: vnode => {
        if (store.options.length == 0) { m.route.set('/compare/' + vnode.attrs.id) }
    },
    onbeforeupdate: vnode => {

    },
    view: function (vnode) {
        return (
            <div class='compareImgsWrapper'>
                <div class='compareImgDiv' onclick={() => setImageSelection(0)}>
                    <img class='compareImg' src={store.options[0].img}></img>
                    <div class='compareButton'>מי יפה יותר?</div>
                </div>
                <div class='compareImgDiv' onclick={() => setImageSelection(1)}>
                    <img class='compareImg' src={store.options[1].img}></img>
                    <div class='compareButton'>מי יפה יותר?</div>
                </div>
            </div>
        )
    }
}

function setImageSelection(imageSelection) {
    DB.child('votes/' + store.askingUser + '/' + vnode.attrs.id + '/votes/' + store.user.uid).update({ option: imageSelection })
}

// functions


module.exports = CompareView 
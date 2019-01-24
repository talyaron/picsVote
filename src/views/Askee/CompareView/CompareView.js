import m from "mithril";
import './CompareView.css';
import store from '../../../data/store';





const CompareView = {
    oninit: vnode => {

        //check if images were brought by the "compare" component, if not, go back to "compare"
        if (store.options.length == 0) { m.route.set('/compare/' + vnode.attrs.id) };
        document.title = 'דליב - השוואה'

    },
    view: function (vnode) {
        if (store.options.length > 0) {
            return (
                <div class='compareImgsWrapper'>
                    {
                        store.options.map((option, key) => {

                            return (
                                <div class='compareImgDiv' key={key} onclick={() => setImageSelection(store.options[key].option, vnode)}>
                                    <img class='compareImg' src={store.options[key].img}></img>
                                    <div class='compareButton'>איזו תמונה יפה יותר?</div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}

// functions

function setImageSelection(imageSelection, vnode) {

    DB.child(`votersVote/${store.askingUser}/${vnode.attrs.id}/votes/${store.user.uid}`).update({ option: imageSelection });

    store.selectedOption = {
        img: store.options[imageSelection].img,
        option: store.options[imageSelection].option
    }

    m.route.set('/summery/' + vnode.attrs.id);
}




module.exports = CompareView 
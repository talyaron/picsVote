import m from "mithril";
import './CompareSummery.css';
import store from '../../data/store';


const CompareSummery = {
    oninit: vnode => {
        if (store.options.length == 0) { m.route.set('/compare/' + vnode.attrs.id) }
    },
    onbeforeupdate: vnode => {

    },
    view: function (vnode) {
        return (
            <div class='pageContainer'>
                <header>
                    דליב -  משוב
                </header>
                <div class='feedbackConteiner'>
                    <div class='explain'>
                        אשמח אם תוכלו לסייע לי ולהציע דרכים לשפר את התמונה
                    </div>
                    <img class='selectedOption' src={store.selectedOption.img}></img>
                    <textarea rows="4" cols="50" id='commentsInput' class="commentsInput" placeholder="אנא כתבו כאן את הצעות השיפור שלכם">

                    </textarea>
                    <div id='loginButtonWrapper'>
                        <div id='goodByeButton' class='buttons accent linkButton' onclick={() => { setComment(vnode) }}>
                            אישור
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


function setComment(vnode) {

    let comments = document.getElementById('commentsInput').value;
    DB.child('votersVote/' + store.askingUser + '/' + vnode.attrs.id + '/votes/' + store.user.uid + '/comments/' + store.selectedOption.option).update({ comments: comments });
    m.route.set('/goodbye')
}



module.exports = CompareSummery 
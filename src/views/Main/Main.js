import m from "mithril";
import Card from '../Common/Card/Card';
import store from '../../data/store';
const isPageRestricted = require('../../functions/functions').isPageRestricted


const Main = {
    oninit: (vnode) => {
        console.log('init', store.user.uid)
        vnode.state = {
            questions: []
        }
        isPageRestricted(true);
        if (store.user.uid != undefined) {
            getVotes(vnode);
        }
    },
    onupdate: vnode => {
        console.log('update')

    },
    view: function (vnode) {

        return (
            <div class='pageContainer'>
                <header>
                    דליב - בחירת תמונות
                </header>
                <div class='cardsWrapper'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div class='fav accent' onclick={() => { m.route.set('/add') }}>
                    <i class="material-icons">
                        add
                    </i>
                </div>
            </div>
        )
    }
}

function getVotes(vnode) {
    console.log('votersVote/' + store.user.uid)
    DB.child('votersVote/' + store.user.uid).once('value').then(questionsDB => {
        vnode.state.questions = []
        console.dir(questionsDB.val())
        var option0 = 0, option1 = 0;
        questionsDB.forEach(questionDB => {
            // vnode.state.questions.push({ questionId: questionDB.key, })

            let optionSelections = questionDB.val().votes;
            let questionId = questionDB.key;
            var option0 = 0, option1 = 0;
            for (let i in optionSelections) {
                (optionSelections[i].option == 0) ? option0++ : option1++;
            }
            vnode.state.questions.push({ questionId, option0, option1 })
        })
        console.log(vnode.state.questions)
    })
}

module.exports = Main 
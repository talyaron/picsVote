import m from "mithril";
import Card from '../Common/Card/Card';
import store from '../../data/store';
const isPageRestricted = require('../../functions/functions').isPageRestricted;
import { set } from 'lodash';


const Main = {
    oninit: (vnode) => {

        vnode.state = {
            questions: {},
            questionsArray: []
        }
        isPageRestricted(true);
        if (store.user.uid != undefined) {
            getVotes(vnode);

        }
    },
    onbeforeupdate: vnode => {
        let questionsArray = [];
        for (let i in vnode.state.questions) {
            questionsArray.push(vnode.state.questions[i]);
        }

        //sort by date (new first)
        questionsArray.sort((a, b) => { return b.time - a.time });

        vnode.state.questionsArray = questionsArray


    },
    view: function (vnode) {

        return (
            <div class='pageContainer'>
                <header>
                    דליב - בחירת תמונות
                </header>
                <div class='cardsWrapper'>
                    {
                        vnode.state.questionsArray.map((question, key) => {

                            return (
                                <Card
                                    questionId={question.questionId}
                                    image0={question.imgs.option0}
                                    image1={question.imgs.option1}
                                    key={key}
                                    option0={question.option0}
                                    option1={question.option1}
                                />
                            )
                        })

                    }
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

    DB.child('votersVote/' + store.user.uid).once('value')
        .then(questionsDB => {
            var questions = {}

            var option0 = 0, option1 = 0;
            questionsDB.forEach(questionDB => {


                let optionSelections = questionDB.val().votes;
                let questionId = questionDB.key;
                var option0 = 0, option1 = 0;
                for (let i in optionSelections) {
                    (optionSelections[i].option == 0) ? option0++ : option1++;
                }

                questions[questionId] = { questionId, option0, option1 }

            })

            vnode.state.questions = questions;
            getImages(vnode, questions);

        })
        .catch(error => {
            console.erro(error)
        })

}

function getImages(vnode, questions) {

    DB.child('votes/' + store.user.uid).once('value')
        .then(questionsDB => {
            questionsDB.forEach(questionDB => {
                let questionId = questionDB.key;

                if (questions.hasOwnProperty(questionId)) {
                    questions[questionId].imgs = {
                        option0: questionDB.val().options[0],
                        option1: questionDB.val().options[1]
                    }
                    questions[questionId].time = questionDB.val().time
                }
            })
            vnode.state.questions = questions;
            m.redraw();
        })
        .catch(error => {
            console.error(error)
        })
}

function getImagesVotes(vnode) {
    getVotes(vnode)
    getImages(vnode)

}

module.exports = Main 
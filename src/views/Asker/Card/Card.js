import m from "mithril";
import './Card.css'

const Card = {

    view: vnode => {

        return (
            <div class='card'>
                <div class='compareWrapper'>
                    <img src={vnode.attrs.image0} />
                    <img src={vnode.attrs.image1} />
                </div>
                <hr class='cardHorizLine'></hr>
                <div class='compareWrapper'>
                    <div class='compareScores'>{vnode.attrs.option0}</div>
                    <div class='compareScores'>{vnode.attrs.option1}</div>
                </div>
                <hr class='cardHorizLine'></hr>
                <input class='linkInput' type='text' value={`${window.location.host}/picsVote/?/compare/${vnode.attrs.questionId}`} />
                <hr class='cardHorizLine'></hr>
                <div class='compareWrapper'>
                    {(vnode.attrs.comments0.length > 0) ?
                        <details>
                            <summary>הארות</summary>
                            {
                                vnode.attrs.comments0.map((comment, key) => {
                                    return <div class='comment' key={key}>{comment}</div>
                                })
                            }
                        </details>
                        :
                        <div />
                    }
                    {(vnode.attrs.comments1.length > 0) ?
                        <details>
                            <summary>הארות</summary>
                            {

                                vnode.attrs.comments1.map((comment, key) => {
                                    return <div class='comment' key={key}>{comment}</div>
                                })
                            }
                        </details>
                        :
                        <div />
                    }
                </div>

            </div>
        )
    }
}

module.exports = Card 
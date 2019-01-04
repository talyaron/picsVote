import m from "mithril";
import './Card.css'

const Card = {

    view: function (vnode) {

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
                <div class='compareWrapper'>
                    <div class='links'>
                        <i class="material-icons">
                            link
                        </i>
                    </div>
                    <div class='links'>
                        <i class="material-icons">
                            call_made
                        </i>
                    </div>
                </div>
                <hr class='cardHorizLine'></hr>
                <div class='compareWrapper'>
                    <details>
                        <div class='comment'>חג דחלכי דגחלכ לדגכדלחגכלדחחגיכ לדחגכ לדחג כידלחגכ דחלי כלדחגחגיכ לחדחגכי לחדחגכי לדחגיכ</div>
                        <div class='comment'>חג דחלכי דגחלכ לדגכדלחגכלדחחגיכ לדחגכ לדחג כידלחגכ דחלי כלדחגחגיכ לחדחגכי לחדחגכי לדחגיכ</div>
                        <div class='comment'>חג דחלכי דגחלכ לדגכדלחגכלדחחגיכ לדחגכ לדחג כידלחגכ דחלי כלדחגחגיכ לחדחגכי לחדחגכי לדחגיכ</div>
                    </details>
                    <details>
                        <div class='comment'>חג דחלכי דגחלכ לדגכדלחגכלדחחגיכ לדחגכ לדחג כידלחגכ דחלי כלדחגחגיכ לחדחגכי לחדחגכי לדחגיכ</div>
                    </details>

                </div>

            </div>
        )
    }
}

module.exports = Card 
import m from "mithril";
import './Card.css'

const Card = {

    view: function (vnode) {

        return (
            <div class='card'>
                <div class='compareWrapper'>
                    <img src='https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/birth_month_flowers-primary-1920x1280px_pixabay.jpg' />
                    <img src='http://sashiageru.com/upload_img/0701104007.jpg' />
                </div>
                <hr class='cardHorizLine'></hr>
                <div class='compareWrapper'>
                    <div class='compareScores'>3.2</div>
                    <div class='compareScores'>3.2</div>
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
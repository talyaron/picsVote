import m from "mithril";
import Card from '../Common/Card/Card';
const isPageRestricted = require('../../functions/functions').isPageRestricted


const Main = {
    oninit: () => {
        isPageRestricted(true)
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

module.exports = Main 
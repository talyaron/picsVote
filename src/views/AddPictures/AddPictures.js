import m from "mithril";
import './AddPictures.css';
const isPageRestricted = require('../../functions/functions').isPageRestricted


const Main = {
    oninit: () => {
        isPageRestricted(true)
    },
    view: function (vnode) {

        return (

            <div class='pageContainer'>
                <header>
                    דליב - הוספת תמונות
                </header>
                <div class='newPicturesWrapper'>
                    <div class='addPicturesPanel' onclick={() => { addPicture(1) }}>
                        <input type='file' class='addPicture' id='firstPicAdd'></input>
                        <span>הוסיפו תמונה</span>
                    </div>
                    <div class='addPicturesPanel' onclick={() => { addPicture(2) }}>
                        <input type='file' class='addPicture' id='secondPicAdd'></input>
                        <span>הוסיפו תמונה</span>
                    </div>
                </div>
            </div>
        )
    }
}


// functions

function addPicture(pictureNumber) {
    console.log('add pic', pictureNumber);
    if (pictureNumber == 1) {
        document.getElementById('firstPicAdd').click();
    } else {
        document.getElementById('secondPicAdd').click();
    }
}
module.exports = Main 
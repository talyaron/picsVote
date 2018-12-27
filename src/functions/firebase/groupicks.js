import m from 'mithril';
import store from '../../data/store';

// function getMygroupicks() {

//     DB.child('users/' + store.user.uid + '/groupicks/owned').limitToLast(20).orderByChild('dates/startMill').on('value', (myGroupicksDB) => {

//         let myGroupicksArray = [];
//         myGroupicksDB.forEach(myGroupicDB => {
//             let myGroupickObj = myGroupicDB.val();
//             myGroupickObj.id = myGroupicDB.key;
//             myGroupickObj.link = '/' + myGroupicDB.val().type + '/#!/' + myGroupicDB.val().type + '/' + myGroupickObj.id;

//             myGroupicksArray.unshift(myGroupickObj);
//         })
//         store.groupicks.my = myGroupicksArray;
//         m.redraw();
//     })
// }

// module.exports = { getMygroupicks };
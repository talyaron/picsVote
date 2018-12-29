const m = require('mithril');
var store = require('../data/store');
const get = require('lodash').get;

function isPageRestricted(isPageRestricted) {

    if (isPageRestricted) {
        let isAnonym = get(store.user, 'isAnonymous', true);
        if (isAnonym) {
            m.route.set('login');
            console.log('Error: user is not authorized to view this page')
        } else {
            console.log('user is authrized')
        }
    } else {
        console.log('page is unrestricted')
    }

}




function randomUid() {
    // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    //     return v.toString(16);
    // });

    // return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);

    let length = 9;
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
}

module.exports = {
    isPageRestricted,
    randomUid
}
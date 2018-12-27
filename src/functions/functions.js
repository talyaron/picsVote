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

module.exports = {
    isPageRestricted
}
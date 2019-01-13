var store = {
    user: {},
    authorization: {
        pages: {
            logged: ['main'],
            unlogged: []
        }
    },
    options: [],
    selectedOption: {
        option: '',
        img: ''
    },
    askingUser: ''
}

window.store = store;

module.exports = store; 
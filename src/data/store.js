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

module.exports = store; 
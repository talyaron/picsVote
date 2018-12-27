const m = require('mithril');
const root = document.body;
import './style.css';

//Views
import Login from "./views/Login/Login";
import Main from "./views/Main/Main";

import './functions/firebase/auth';


m.route(root, "/login", {
    "/login": Login,
    "/main": Main
})
const m = require('mithril');
const root = document.body;
import './style.css';

//Views
import Login from "./views/Login/Login";
import Main from "./views/Main/Main";
import AddPictures from "./views/AddPictures/AddPictures";

import './functions/firebase/auth';


m.route(root, "/login", {
    "/login": Login,
    "/main": Main,
    "/add": AddPictures
})
const m = require('mithril');
const root = document.body;
import './style.css';

//Views
import Login from "./views/Login/Login";
import Main from "./views/Main/Main";
import AddPictures from "./views/AddPictures/AddPictures";
import Intro from './views/Intro/Intro';
import Compare from './views/Compare/Compare';

import './functions/firebase/auth';


m.route(root, "/login", {
    "/login": Login,
    "/main": Main,
    "/add": AddPictures,
    "/intro/:id": Intro,
    "/compare/:id": Compare
})
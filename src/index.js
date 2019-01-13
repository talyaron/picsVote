const m = require('mithril');
const root = document.body;
import './style.css';

//Views
import Login from "./views/Login/Login";
import Main from "./views/Asker/Main";
import AddPictures from "./views/Asker/AddPictures/AddPictures";
import Intro from './views/Askee/Intro/Intro';
import Compare from './views/Askee/Compare/Compare';
import CompareView from './views/Askee/CompareView/CompareView';
import CompareSummery from './views/Askee/CompareSummery/CompareSummery';
import GoodyBye from './views/Askee/GoodBye/GoodBye';

import './functions/firebase/auth';

m.route.prefix('?');

m.route(root, "/login", {
    "/login": Login,
    "/main": Main,
    "/add": AddPictures,
    "/intro/:id": Intro,
    "/compare/:id": Compare,
    "/compareview/:id": CompareView,
    "/summery/:id": CompareSummery,
    "/goodbye": GoodyBye
})
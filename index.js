import switchPage from "./modules/switcher.js";
import homePageData from "./modules/home.js";
import loginPageData from "./modules/login.js";
import headerPageData from "./modules/header.js";
import clickEvents from "./modules/clickEvents.js";
import { getComments } from "./modules/posts.js";


homePageData();
loginPageData();
headerPageData();
clickEvents();
switchPage();
getComments(19)



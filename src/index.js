import Header from "./header.js";
import Login from "./login.js";
import Sidebar from "./sidebar.js";
import List from "./list.js";
import Gutters from "./gutters.js";
import Split from "split-grid";
import "./style.css";

Header();
Login();
Sidebar();
List();
Gutters();

Split({
    columnGutters: [{
        track: 1,
        element: document.getElementById("gutter-col")
    }],
    rowGutters: [{
        track: 1,
        element: document.getElementById("gutter-row")
    }]
});
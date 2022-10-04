import Header from "./header.js";
import Sidebar from "./sidebar.js";
import Content from "./content.js";
import Gutters from "./gutters.js";
import Split from "split-grid";
import Project from "./project.js";
import "../dist/css/main.css";

const userData = [];
const projectData = [];

Header(userData);
Sidebar();
Content(projectData);
Gutters();
Split({
    maxSize: 200,
    columnGutters: [{
        track: 1,
        element: document.getElementById("gutter-col")
    }],
    rowGutters: [{
        track: 1,
        element: document.getElementById("gutter-row")
    }]
});
Project(projectData);
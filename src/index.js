import Header from "./header.js";
import Login from "./login.js";
import Sidebar from "./sidebar.js";
import Content from "./content.js";
import Gutters from "./gutters.js";
import Split from "split-grid";
import Project from "./project.js";

const projectData = [{
    title: "", 
    description: "", 
    selected: true, 
    tasks: []
}];

const userData = [];

Header();
Login(userData);
Sidebar();
Content(projectData);
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
Project(projectData);
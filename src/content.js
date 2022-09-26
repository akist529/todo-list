import Inbox from "./inbox.js";
import Today from "./today.js";
import Calendar from "./calendar.js";
import Task from "./task.js";

export default function Content(projectData) {
    const contentWrap = document.createElement("div");
    contentWrap.setAttribute("id", "content-wrapper");

    const resetLayout = document.createElement("button");
    resetLayout.setAttribute("id", "reset-layout");
    resetLayout.setAttribute("title", "Reset Layout");
    const resetPic = document.createElement("img");
    resetPic.setAttribute("src", "../src/images/team_dashboard.png");
    resetLayout.appendChild(resetPic);
    contentWrap.appendChild(resetLayout);
    document.getElementById("content").appendChild(contentWrap);

    Inbox(projectData);

    document.getElementById("sidebar-inbox").addEventListener("click", function() {
        Inbox(projectData);
    });

    document.getElementById("sidebar-today").addEventListener("click", function() {
        Today(projectData);
    });

    document.getElementById("sidebar-calendar").addEventListener("click", function() {
        Calendar(projectData);
    });

    document.getElementById("reset-layout").addEventListener("click", function() {
        document.getElementById("content").style.gridTemplateColumns = "";
        document.getElementById("content").style.gridTemplateRows = "";
    });

    document.getElementById("add-task").addEventListener("click", function() {
        Task(projectData);
    });
}
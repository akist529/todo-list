export default function Sidebar() {
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");

    const inbox = document.createElement("button");
    inbox.setAttribute("id", "sidebar-inbox");
    inbox.setAttribute("class", "sidebar-line");
    inbox.setAttribute("class", "sidebar-link");

    const inboxPic = document.createElement("img");
    inboxPic.setAttribute("src", "../src/images/inbox.png");
    inbox.appendChild(inboxPic);

    const inboxText = document.createElement("h3");
    inboxText.textContent = "Inbox";
    inbox.appendChild(inboxText);
    sidebar.appendChild(inbox);

    const today = document.createElement("button");
    today.setAttribute("id", "sidebar-today");
    today.setAttribute("class", "sidebar-line");
    today.setAttribute("class", "sidebar-link");

    const todayPic = document.createElement("img");
    todayPic.setAttribute("src", "../src/images/today.png");
    today.appendChild(todayPic);

    const todayText = document.createElement("h3");
    todayText.textContent = "Today";
    today.appendChild(todayText);
    sidebar.appendChild(today);

    const calendar = document.createElement("button");
    calendar.setAttribute("id", "sidebar-calendar");
    calendar.setAttribute("class", "sidebar-line");
    calendar.setAttribute("class", "sidebar-link");

    const calendarPic = document.createElement("img");
    calendarPic.setAttribute("src", "../src/images/calendar.png");
    calendar.appendChild(calendarPic);

    const calendarText = document.createElement("h3");
    calendarText.textContent = "Calendar";
    calendar.appendChild(calendarText);
    sidebar.appendChild(calendar);

    const projects = document.createElement("button");
    projects.setAttribute("id", "sidebar-projects");
    projects.setAttribute("class", "sidebar-line");

    const projectsPic = document.createElement("img");
    projectsPic.setAttribute("src", "../src/images/expand_circle_down.png");
    projectsPic.setAttribute("id", "projects-pic");
    projects.appendChild(projectsPic);

    const projectsText = document.createElement("h3");
    projectsText.textContent = "Projects";
    projects.appendChild(projectsText);
    sidebar.appendChild(projects);

    const projectsList = document.createElement("div");
    projectsList.setAttribute("id", "sidebar-list");
    sidebar.appendChild(projectsList);

    const addProj = document.createElement("button");
    addProj.setAttribute("id", "sidebar-add");
    addProj.setAttribute("class", "sidebar-line");

    const addProjPic = document.createElement("img");
    addProjPic.setAttribute("src", "../src/images/folder_new.png");
    addProj.appendChild(addProjPic);

    const addProjText = document.createElement("h3");
    addProjText.textContent = "Add Project";
    addProj.appendChild(addProjText);
    sidebar.appendChild(addProj);

    document.getElementById("content").appendChild(sidebar);

    document.getElementById("sidebar-projects").addEventListener("click", function() {
        const state = document.getElementById("projects-pic").src;
        const regEx = /arrow_circle_right.png$/;

        if (regEx.test(state)) {
            document.getElementById("sidebar-list").classList.remove("projects-closed");
            document.getElementById("projects-pic").setAttribute("src", "../src/images/expand_circle_down.png");
        } else {
            document.getElementById("sidebar-list").classList.add("projects-closed");
            document.getElementById("projects-pic").setAttribute("src", "../src/images/arrow_circle_right.png");
        }
    });
}
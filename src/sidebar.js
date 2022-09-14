export default function Sidebar() {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const inbox = document.createElement("button");
    inbox.className = "sidebar-line";
    const inboxPic = document.createElement("img");
    inboxPic.setAttribute("src", "../src/images/timeline.png");
    inbox.appendChild(inboxPic);
    const inboxText = document.createElement("h3");
    inboxText.textContent = "Inbox";
    inbox.appendChild(inboxText);
    sidebar.appendChild(inbox);

    const today = document.createElement("button");
    today.className = "sidebar-line";
    const todayPic = document.createElement("img");
    todayPic.setAttribute("src", "../src/images/today.png");
    today.appendChild(todayPic);
    const todayText = document.createElement("h3");
    todayText.textContent = "Today";
    today.appendChild(todayText);
    sidebar.appendChild(today);

    const calendar = document.createElement("button");
    calendar.className = "sidebar-line";
    const calendarPic = document.createElement("img");
    calendarPic.setAttribute("src", "../src/images/calendar.png");
    calendar.appendChild(calendarPic);
    const calendarText = document.createElement("h3");
    calendarText.textContent = "Calendar";
    calendar.appendChild(calendarText);
    sidebar.appendChild(calendar);

    const projects = document.createElement("button");
    projects.className = "sidebar-line";
    const projectsPic = document.createElement("img");
    projectsPic.setAttribute("src", "../src/images/chevron_right.png");
    projects.appendChild(projectsPic);
    const projectsText = document.createElement("h3");
    projectsText.textContent = "Projects";
    projects.appendChild(projectsText);
    sidebar.appendChild(projects);

    const addProj = document.createElement("button");
    addProj.className = "sidebar-line";
    const addProjPic = document.createElement("img");
    addProjPic.setAttribute("src", "../src/images/folder.png");
    addProj.appendChild(addProjPic);
    const addProjText = document.createElement("h3");
    addProjText.textContent = "Add Project";
    addProj.appendChild(addProjText);
    sidebar.appendChild(addProj);

    document.getElementById("content").appendChild(sidebar);
}
export default function Sidebar() {
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");

        const inbox = document.createElement("button");
        inbox.setAttribute("id", "sidebar-inbox");
        inbox.setAttribute("class", "sidebar-line");
        inbox.setAttribute("class", "sidebar-link");

            const inboxPic = document.createElement("img");
            inboxPic.setAttribute("src", "../src/images/inbox.png");

            const inboxText = document.createElement("h3");
            inboxText.textContent = "Inbox";

        inbox.appendChild(inboxPic);
        inbox.appendChild(inboxText);

        const today = document.createElement("button");
        today.setAttribute("id", "sidebar-today");
        today.setAttribute("class", "sidebar-line");
        today.setAttribute("class", "sidebar-link");

            const todayPic = document.createElement("img");
            todayPic.setAttribute("src", "../src/images/today.png");

            const todayText = document.createElement("h3");
            todayText.textContent = "Today";

        today.appendChild(todayPic);
        today.appendChild(todayText);

        const calendar = document.createElement("button");
        calendar.setAttribute("id", "sidebar-calendar");
        calendar.setAttribute("class", "sidebar-line");
        calendar.setAttribute("class", "sidebar-link");

            const calendarPic = document.createElement("img");
            calendarPic.setAttribute("src", "../src/images/calendar.png");

            const calendarText = document.createElement("h3");
            calendarText.textContent = "Calendar";

        calendar.appendChild(calendarPic);
        calendar.appendChild(calendarText);

        const projects = document.createElement("button");
        projects.setAttribute("id", "sidebar-projects");
        projects.setAttribute("class", "sidebar-line");

            const projectsPic = document.createElement("img");
            projectsPic.setAttribute("src", "../src/images/expand_circle_down.png");
            projectsPic.setAttribute("id", "projects-pic");

            const projectsText = document.createElement("h3");
            projectsText.textContent = "Projects";

        projects.appendChild(projectsPic);
        projects.appendChild(projectsText);

        const projectsList = document.createElement("div");
        projectsList.setAttribute("id", "sidebar-list");

        const addProj = document.createElement("button");
        addProj.setAttribute("id", "sidebar-add");
        addProj.setAttribute("class", "sidebar-line");

            const addProjPic = document.createElement("img");
            addProjPic.setAttribute("src", "../src/images/folder_new.png");

            const addProjText = document.createElement("h3");
            addProjText.textContent = "Add Project";

        addProj.appendChild(addProjPic);
        addProj.appendChild(addProjText);

    sidebar.appendChild(inbox);
    sidebar.appendChild(today);
    sidebar.appendChild(calendar);
    sidebar.appendChild(projects);
    sidebar.appendChild(projectsList);
    sidebar.appendChild(addProj);
    document.getElementById("content").appendChild(sidebar);

    document.getElementById("sidebar-projects").addEventListener("click", function() {
        const state = projectsPic.src;
        const regEx = /arrow_circle_right.png$/;

        if (regEx.test(state)) {
            document.getElementById("sidebar-list").classList.remove("projects-closed");
            projectsPic.setAttribute("src", "../src/images/expand_circle_down.png");
        } else {
            document.getElementById("sidebar-list").classList.add("projects-closed");
            projectsPic.setAttribute("src", "../src/images/arrow_circle_right.png");
        }
    });
}
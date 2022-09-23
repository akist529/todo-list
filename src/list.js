export default function List() {
    const listWrapper = document.createElement("div");
    listWrapper.setAttribute("id", "list-wrapper");

    const list = document.createElement("div");
    list.setAttribute("id", "list");

    const listTitle = document.createElement("h1");
    listTitle.setAttribute("id", "list-title");
    listTitle.textContent = "Inbox";
    list.appendChild(listTitle);
    listWrapper.appendChild(list);

    const resetLayout = document.createElement("button");
    resetLayout.setAttribute("id", "reset-layout");
    resetLayout.setAttribute("title", "Reset Layout");
    const resetPic = document.createElement("img");
    resetPic.setAttribute("src", "../src/images/team_dashboard.png");
    resetLayout.appendChild(resetPic);
    listWrapper.appendChild(resetLayout);

    document.getElementById("content").appendChild(listWrapper);

    document.getElementById("sidebar-inbox").addEventListener("click", function() {
        document.getElementById("list-title").textContent = "Inbox";
    });

    document.getElementById("sidebar-today").addEventListener("click", function() {
        document.getElementById("list-title").textContent = "Today";
    });

    document.getElementById("sidebar-calendar").addEventListener("click", function() {
        document.getElementById("list-title").textContent = "Calendar";
    });

    document.getElementById("reset-layout").addEventListener("click", function() {
        document.getElementById("content").style.gridTemplateColumns = "";
        document.getElementById("content").style.gridTemplateRows = "";
    });
}
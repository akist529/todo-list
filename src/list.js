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
}
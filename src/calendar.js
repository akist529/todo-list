export default function Calendar(projectData) {
    if (document.getElementById("list-content")) {
        document.getElementById("content-wrapper").firstChild.remove();
    }

    const calendar = document.createElement("div");
    calendar.setAttribute("id", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Calendar";
    calendar.appendChild(title);

    const list = document.getElementById("content-wrapper");
    list.insertBefore(calendar, list.children[0]);
}
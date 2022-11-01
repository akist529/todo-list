export default function Today(projectData) {
    const today = document.createElement("div");
    today.setAttribute("id", "today");
    today.setAttribute("class", "list-content");

        const title = document.createElement("h1");
        title.setAttribute("id", "list-title");
        title.textContent = "Today";
        
    today.appendChild(title);

    const list = document.getElementById("content-wrapper");
    list.insertBefore(today, list.children[0]);
}
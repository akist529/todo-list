export default function List() {
    const list = document.createElement("div");
    list.id = "list";
    const listTitle = document.createElement("h1");
    listTitle.textContent = "LIST";
    list.appendChild(listTitle);
    document.getElementById("content").appendChild(list);
}
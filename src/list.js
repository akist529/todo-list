export default function List() {
    const listWrapper = document.createElement("div");
    listWrapper.id = "list-wrapper";
    const list = document.createElement("div");
    list.id = "list";
    const listTitle = document.createElement("h1");
    listTitle.textContent = "LIST";
    list.appendChild(listTitle);
    listWrapper.appendChild(list);
    document.getElementById("content").appendChild(listWrapper);
}
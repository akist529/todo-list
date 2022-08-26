export default function Sidebar() {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    const sidebarTitle = document.createElement("h1");
    sidebarTitle.textContent = "SIDEBAR";
    sidebar.appendChild(sidebarTitle);
    document.getElementById("content").appendChild(sidebar);
}
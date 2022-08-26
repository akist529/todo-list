export default function Header() {
    const header = document.createElement("div");
    header.id = "header";
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "HEADER";
    header.appendChild(headerTitle);
    document.getElementById("content").appendChild(header);
}
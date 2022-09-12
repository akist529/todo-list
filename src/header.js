export default function Header() {
    const header = document.createElement("div");
    header.id = "header";
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "HEADER";
    header.appendChild(headerTitle);

    const headerButtons = document.createElement("div");

    const loginButton = document.createElement("button");
    loginButton.id = "login-button";
    loginButton.innerHTML = "Sign In";
    headerButtons.appendChild(loginButton);
    header.appendChild(headerButtons);

    document.getElementById("content").appendChild(header);
}
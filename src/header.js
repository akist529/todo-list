import Login from "./login.js";

export default function Header(userData) {
    const header = document.createElement("div");
    header.setAttribute("id", "header");

        const headerTitles = document.createElement("div");
        headerTitles.setAttribute("id", "header-titles");

            const headerTitle = document.createElement("h1");
            headerTitle.setAttribute("id", "header-title");
            headerTitle.textContent = "DO_IT";

        headerTitles.appendChild(headerTitle);

            const subTitle = document.createElement("h2");
            subTitle.textContent = "The to-do app for managing your life";

        headerTitles.appendChild(subTitle);

    header.appendChild(headerTitles);

        const headerButtons = document.createElement("div");
        headerButtons.setAttribute("id", "header-buttons");

            const loginButton = document.createElement("button");
            loginButton.setAttribute("id", "login-button");
            loginButton.setAttribute("class", "header-button");
            loginButton.addEventListener("click", () => Login(userData));

                const loginPic = document.createElement("img");
                loginPic.setAttribute("src", "../src/images/account_circle.png");
                
            loginButton.appendChild(loginPic);

                const loginText = document.createElement("p");
                loginText.textContent = "Sign In";

            loginButton.appendChild(loginText);

        headerButtons.appendChild(loginButton);

            const menuButton = document.createElement("button");
            menuButton.setAttribute("id", "menu-button");
            menuButton.setAttribute("class", "header-button");

                const menuImg = document.createElement("img");
                menuImg.setAttribute("src", "../src/images/menu.png");

            menuButton.appendChild(menuImg);
            
        headerButtons.appendChild(menuButton);

    header.appendChild(headerButtons);
    document.getElementById("content").appendChild(header);
}
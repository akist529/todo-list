import Account from "./account.js";

export default function Login(userData) {
    // Shorthand function for document.getElementById()
    const $ = function(id) {
        return document.getElementById(id);
    };

    function loginDOM() {
        const loginScreen = document.createElement("div");
        loginScreen.setAttribute("id", "login-screen");
        loginScreen.setAttribute("class", "popup-screen");
    
            const loginPrompt = document.createElement("div");
            loginPrompt.setAttribute("id", "login-prompt");
            loginPrompt.setAttribute("class", "popup-prompt");
    
                const loginHeader = document.createElement("h1");
                loginHeader.setAttribute("id", "login-header");

                const form = document.createElement("form");

                    const logName = document.createElement("div");
                    logName.className = "input-field";

                        const nameLabel = document.createElement("label");
                        nameLabel.setAttribute("id", "name-label");
                        nameLabel.setAttribute("for", "login-name");

                        const nameField = document.createElement("input");
                        nameField.setAttribute("id", "login-name");
                        nameField.setAttribute("name", "login-name");

                    logName.appendChild(nameLabel);
                    logName.appendChild(nameField);

                    const logPass = document.createElement("div");
                    logPass.className = "login-field";

                        const passLabel = document.createElement("label");
                        passLabel.setAttribute("id", "pass-label");
                        passLabel.setAttribute("for", "login-pass");

                        const passField = document.createElement("input");
                        passField.setAttribute("id", "login-pass");
                        passField.setAttribute("name", "login-pass");

                    logPass.appendChild(passLabel);
                    logPass.appendChild(passField);

                    const loginSubmit = document.createElement("input");
                    loginSubmit.setAttribute("id", "login-submit");
                    loginSubmit.setAttribute("type", "submit");
                    loginSubmit.setAttribute("value", "LOG IN");

                form.appendChild(logName);
                form.appendChild(logPass);
                form.appendChild(loginSubmit);

                const accountLink = document.createElement("a");
                accountLink.setAttribute("id", "account-link");
                accountLink.setAttribute("href", "");
                accountLink.setAttribute("target", "_blank");

                const createAccount = document.createElement("p");
                createAccount.innerHTML = "New user? Create an account ";
                createAccount.appendChild(accountLink);
                accountLink.addEventListener("click", function(e) {
                    e.preventDefault();
                    Account();
                });

                const close = document.createElement("button");
                close.setAttribute("id", "close-login");
                close.setAttribute("class", "button-close");

            loginPrompt.appendChild(loginHeader);
            loginPrompt.appendChild(form);
            loginPrompt.appendChild(createAccount);
            loginPrompt.appendChild(close);

        loginScreen.appendChild(loginPrompt);
        document.body.appendChild(loginScreen);
    }

    function loginText() {
        $("login-header").innerText = "Sign in to Do_It";
        $("name-label").innerText = "Name:";
        $("pass-label").innerText = "Password:";
        $("account-link").innerText = "here";
        $("close-login").innerText = "X";
    }

    function loginEvents() {
        $("login-button").addEventListener("click", function() {
            $("login-submit").addEventListener("click", function(e) {
                e.preventDefault();
    
                let userCheck = false;
    
                for (const user of userData) {
                    if (user.name === $("login-name").value) {
                        $("login-button").children[1].textContent = `Hello, ${userEntered}`;
                        $("login-screen").remove();
                        userCheck = true;
                        break;
                    }
                }
    
                if (!userCheck) {
                    const error = document.createElement("p");
                    error.innerText = "This user does not exist";
                    loginPrompt.insertBefore(error, $("login-prompt").children[2]);
                }
    
                $("login-name").value = "";
                $("login-pass").value = "";
            });
    
            $("close-login").addEventListener("click", function() {
                $("login-name").value = "";
                $("login-pass").value = "";
                $("login-screen").remove();
            });
        });
    }

    (() => {
        loginDOM();
        loginText();
        loginEvents();
    })();
}
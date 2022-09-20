export default function Project() {
    const projScreen = document.createElement("div");
    projScreen.setAttribute("id", "proj-screen");

    const projPrompt = document.createElement("div");
    projPrompt.setAttribute("id", "proj-prompt");

    const form = document.createElement("form");
    form.setAttribute("action", "");

    const logProj = document.createElement("div");
    logProj.className = "input-field";

    const projLabel = document.createElement("label");
    projLabel.textContent = "Project Name:";
    projLabel.setAttribute("for", "proj-name");
    logProj.appendChild(projLabel);

    const projField = document.createElement("input");
    projField.setAttribute("name", "proj-name");
    logProj.appendChild(projField);
    form.appendChild(logProj);

    const projSubmit = document.createElement("input");
    projSubmit.setAttribute("id", "proj-submit");
    projSubmit.setAttribute("type", "submit");
    projSubmit.setAttribute("value", "ADD PROJECT");
    form.appendChild(projSubmit);
    projPrompt.appendChild(form);

    const close = document.createElement("button");
    close.innerHTML = "X";
    close.id = "close-proj";
    close.className = "button-close";
    projPrompt.appendChild(close);

    projScreen.appendChild(projPrompt);

    document.getElementById("sidebar-add").addEventListener("click", function() {
        document.body.appendChild(projScreen);

        document.getElementById("proj-submit").addEventListener("click", function() {
            document.getElementById("proj-screen").remove();
        });

        document.getElementById("close-proj").addEventListener("click", function() {
            document.getElementById("proj-screen").remove();
        });
    });
}
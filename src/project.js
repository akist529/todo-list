export default function addProject(projectData) {
    const projScreen = document.createElement("div");
    projScreen.setAttribute("id", "proj-screen");
    projScreen.setAttribute("class", "popup-screen");

    const projPrompt = document.createElement("div");
    projPrompt.setAttribute("id", "proj-prompt");
    projPrompt.setAttribute("class", "popup-prompt");

    const form = document.createElement("form");

    const logProj = document.createElement("div");
    logProj.setAttribute("class", "input-field");

    const projLabel = document.createElement("label");
    projLabel.setAttribute("for", "proj-name");
    projLabel.textContent = "Project Name:";
    logProj.appendChild(projLabel);

    const projField = document.createElement("input");
    projField.setAttribute("id", "proj-name");
    projField.setAttribute("name", "proj-name");
    projField.setAttribute("placeholder", "New Project");
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

        document.getElementById("proj-submit").addEventListener("click", function(e) {
            e.preventDefault();

            let projName = document.getElementById("proj-name").value;

            if (!projName) {
                const projNum = document.getElementById("sidebar-list").childElementCount;
                projName = `Project ${projNum + 1}`;
            }

            projectData.push(new Project(projName));

            const newProj = document.createElement("button");
            newProj.setAttribute("id", projName);
            newProj.setAttribute("class", "proj-item");

            const newProjPic = document.createElement("img");
            newProjPic.setAttribute("src", "../src/images/folder.png")
            newProjPic.setAttribute("class", "proj-pic");
            newProj.appendChild(newProjPic);

            const newProjName = document.createElement("h4");
            newProjName.innerHTML = projName;
            newProj.appendChild(newProjName);

            newProj.addEventListener("click", function() {
                const activeProj = new RegExp("proj-selected");
                
                if (!activeProj.test(newProj.classList)) {
                    newProj.classList.add("proj-selected");
                    const projName = newProj.childNodes[1].textContent;

                    for (const project of projectData) {
                        if (project.title === newProj.id) {
                            project.selected = true;
                        }
                    }
                } else {
                    newProj.classList.remove("proj-selected");

                    for (const project of projectData) {
                        if (project.title === newProj.id) {
                            project.selected = false;
                        }
                    }
                }
            });

            const projectsList = document.getElementById("sidebar-list");
            projectsList.appendChild(newProj);

            document.getElementById("proj-screen").remove();
        });

        document.getElementById("close-proj").addEventListener("click", function() {
            document.getElementById("proj-screen").remove();
        });
    });

    class Project {
        constructor(title) {
            this.title = title;
            this.description = "";
            this.selected = false;
            this.tasks = [];
        }
    }

    return projectData;
}
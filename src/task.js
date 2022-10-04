export default function Task(projectData) {
    const taskScreen = document.createElement("div");
    taskScreen.setAttribute("id", "task-screen");
    taskScreen.setAttribute("class", "popup-screen");

        const taskPrompt = document.createElement("div");
        taskPrompt.setAttribute("id", "task-prompt");
        taskPrompt.setAttribute("class", "popup-prompt");

            const form = document.createElement("form");

                const logTask = document.createElement("div");
                logTask.setAttribute("class", "input-field");

                    const taskLabel = document.createElement("label");
                    taskLabel.setAttribute("for", "task-name");
                    taskLabel.textContent = "Task:";

                    const taskField = document.createElement("input");
                    taskField.setAttribute("id", "task-name");
                    taskField.setAttribute("name", "task-name");
                    taskField.setAttribute("placeholder", "New Task");

                logTask.appendChild(taskLabel);
                logTask.appendChild(taskField);

                const logDate = document.createElement("div");
                logDate.setAttribute("class", "input-field");

                    const dateLabel = document.createElement("label");
                    dateLabel.setAttribute("for", "date-name");
                    dateLabel.textContent = "Due Date:";

                    const dateField = document.createElement("input");
                    dateField.setAttribute("id", "date-name");
                    dateField.setAttribute("name", "date-name");
                    dateField.setAttribute("type", "date");
                    dateField.setAttribute("value", "2022-10-03");

                logDate.appendChild(dateLabel);
                logDate.appendChild(dateField);

                const logProj = document.createElement("div");
                logProj.setAttribute("class", "input-field");

                    const projLabel = document.createElement("label");
                    projLabel.setAttribute("for", "proj-name");
                    projLabel.textContent = "Project:";

                    const projField = document.createElement("select");
                    projField.setAttribute("id", "proj-name");
                    projField.setAttribute("name", "proj-name");

                        for (const project of projectData) {
                            const option = document.createElement("option");
                            option.value = project.title;
                            option.textContent = project.title;

                            projField.appendChild(option);
                        }

                logProj.appendChild(projLabel);
                logProj.appendChild(projField);

                const taskSubmit = document.createElement("input");
                taskSubmit.setAttribute("id", "task-submit");
                taskSubmit.setAttribute("type", "submit");
                taskSubmit.setAttribute("value", "ADD TASK");

            form.appendChild(logTask);
            form.appendChild(logDate);
            form.appendChild(logProj);
            form.appendChild(taskSubmit);

            const close = document.createElement("button");
            close.setAttribute("id", "close-task");
            close.setAttribute("class", "button-close");
            close.innerHTML = "X";
            close.addEventListener("click", function() {
                taskScreen.remove();
            });

        taskPrompt.appendChild(form);
        taskPrompt.appendChild(close);

    taskScreen.appendChild(taskPrompt);
    document.body.appendChild(taskScreen);

    document.getElementById("task-submit").addEventListener("click", function(e) {
        e.preventDefault();

        let task = taskField.value;
        let date = dateField.value;
        let taskProj = projField.value;

        if (!task) {
            task = "New Task";
        }

        const newTask = new Task(task, date, taskProj);

        for (const project of projectData) {
            if (project.title === taskProj) {
                project["tasks"].push(newTask);
                break;
            }
        }

        taskScreen.remove();
    });

    class Task {
        constructor(task, date, project) {
            this.task = task;
            this.date = date;
            this.project = project;
        }
    }
}
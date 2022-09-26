export default function Inbox(projectData) {
    if (document.getElementById("list-content")) {
        document.getElementById("content-wrapper").firstChild.remove();
    }

    const inbox = document.createElement("div");
    inbox.setAttribute("id", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Inbox";
    inbox.appendChild(title);

    const taskContent = document.createElement("div");
    taskContent.setAttribute("class", "tasks");

    for (const project of projectData) {
        if (project.selected) {
            for (const task of project.tasks) {
                const taskDiv = document.createElement("div");
                taskDiv.setAttribute("class", "task");
                
                const taskText = document.createElement("p");
                taskText.textContent = task;
                taskDiv.appendChild(taskText);

                taskContent.appendChild(taskDiv);
            }
        }
    }

    inbox.appendChild(taskContent);

    const addTask = document.createElement("button");
    addTask.setAttribute("id", "add-task");

    const addTaskPic = document.createElement("img");
    addTaskPic.setAttribute("src", "../src/images/add_task.png");
    addTask.appendChild(addTaskPic);

    const addTaskText = document.createElement("p");
    addTaskText.textContent = "Add New Task";
    addTask.appendChild(addTaskText);
    inbox.appendChild(addTask);

    const content = document.getElementById("content-wrapper");
    content.insertBefore(inbox, content.children[0]);
}
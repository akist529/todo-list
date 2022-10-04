export default function Calendar(projectData) {
    let currentMonth = new Date().getMonth() + 1;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    function newDay(dayNum) {
        const day = document.createElement("button");
        day.setAttribute("class", "calendar-day");
        const dayText = document.createElement("h4");
        dayText.textContent = dayNum;
        day.appendChild(dayText);
        return day;
    }

    function setMonth(month) {
        document.getElementById("month-text").textContent = months[month];
        setDays(month);
    }

    function setDays(month) {
        let numDays = (() => {
            // All months that consist of 30 days
            const months = [3, 5, 8, 10];

            // February
            if (month === 1) {
                return 28;
            }
            // April, June, September, November
            else if (months.includes(month)) {
                return 30;
            }
            // January, March, May, July, August, October, December
            else {
                return 31;
            }
        })();
    
        for (let i = 1; i <= numDays; i++) {
            document.getElementById("calendar-days").appendChild(newDay(i));
            // Highlight all days within the month (not previous/subsequent months)
            document.getElementById("calendar-days").lastChild.classList.add("active-day");
        }

        // Add previous month's days to fill the calendar
        let newDate = new Date();
        newDate.setMonth(month);

        const dayOffsetBefore = (newDate.getDay() + 1) - (newDate.getDate() % 7);
        newDate.setDate(0);
        let prevOffset = newDate.getDate();

        for (let i = 0; i < dayOffsetBefore; i++) {
            document.getElementById("calendar-days").prepend(newDay(prevOffset));
            document.getElementById("calendar-days").firstChild.style.backgroundColor = "darkgrey";
            prevOffset--;
        }

        // Add next month's days to fill the calendar
        const dayOffsetAfter = 42 - document.getElementById("calendar-days").childElementCount;
        
        for (let i = 0; i < dayOffsetAfter; i++) {
            document.getElementById("calendar-days").append(newDay(i + 1));
            document.getElementById("calendar-days").lastChild.style.backgroundColor = "darkgrey";
        }

        setButtons();
    }

    function selectDay(month, day) {
        const daySelected = document.createElement("div");
        daySelected.setAttribute("id", "day-selected");
        const dayNum = document.createElement("h4");
        dayNum.setAttribute("id", "day-num-selected");
        dayNum.textContent = `${months[month - 1]} ${day}`;
        daySelected.appendChild(dayNum);

        const close = document.createElement("button");
        close.innerHTML = "X";
        close.id = "close-day";
        close.className = "button-close";
        daySelected.appendChild(close);

        for (const project of projectData) {
            for (const projTask of project.tasks) {
                const taskMonth = Number(projTask.date.split("-")[1]);
                const taskDay = projTask.date.split("-")[2];

                if (month === taskMonth && day === taskDay) {
                    const task = document.createElement("div");
                    task.setAttribute("class", "calendar-task");

                    const taskInfo = document.createElement("div");
                    taskInfo.setAttribute("class", "task-info");

                    const taskText = document.createElement("h5");
                    taskText.setAttribute("class", "task-text");
                    taskText.textContent = projTask.task;
                    taskInfo.appendChild(taskText);

                    const projInput = document.createElement("select");
                    projInput.setAttribute("class", "proj-input");

                    for (const project of projectData) {
                        const option = document.createElement("option");
                        option.value = project.title;
                        option.textContent = project.title;
                
                        projInput.appendChild(option);
                    }

                    projInput.addEventListener("change", function() {
                        for (const project of projectData) {
                            for (const task of project.tasks) {
                                console.log(task);
                                console.log(taskText.textContent);

                                if (task.task === taskText.textContent) {
                                    console.log("Match!");
                                }
                            }
                        }
                    });

                    projInput.value = projTask.project;
                    taskInfo.appendChild(projInput);
                    task.appendChild(taskInfo);

                    const taskButtons = document.createElement("div");
                    taskButtons.setAttribute("class", "task-buttons");

                    const taskEdit = document.createElement("button");
                    taskEdit.setAttribute("class", "task-edit");
                    taskEdit.setAttribute("title", "Edit task");
                    const taskEditPic = document.createElement("img");
                    taskEditPic.setAttribute("src", "../src/images/edit.png");
                    taskEdit.appendChild(taskEditPic);

                    taskEdit.addEventListener("click", function() {
                        const prevTask = document.querySelector(".task-text").textContent;
                        document.querySelector(".task-text").remove();

                        const taskInput = document.createElement("input");
                        taskInput.setAttribute("class", "task-input");
                        taskInput.setAttribute("placeholder", prevTask);
                        taskInput.setAttribute("value", prevTask);
                        document.querySelector(".task-info").prepend(taskInput);
                        document.querySelector(".task-input").focus();

                        document.querySelector(".task-input").addEventListener("blur", function() {
                            const newTask = document.querySelector(".task-input").value;
                            const projVal = document.querySelector(".proj-input").value;

                            document.querySelector(".task-input").remove();
                            
                            const task = document.createElement("h5");
                            task.setAttribute("class", "task-text");
                            task.textContent = newTask;
                            document.querySelector(".task-info").prepend(task);

                            for (const project of projectData) {
                                for (const task of project.tasks) {
                                    if (task.task === prevTask) {
                                        if (project.title = projVal) {
                                            task.task = newTask;
                                        }
                                    }
                                }
                            }
                        });
                    });

                    taskButtons.appendChild(taskEdit);

                    const taskTime = document.createElement("button");
                    taskTime.setAttribute("class", "task-time");
                    taskTime.setAttribute("title", "Change due date");
                    const taskTimePic = document.createElement("img");
                    taskTimePic.setAttribute("src", "../src/images/edit_calendar.png");
                    taskTime.appendChild(taskTimePic);
                    taskButtons.appendChild(taskTime);

                    const taskDel = document.createElement("button");
                    taskDel.setAttribute("class", "task-delete");
                    taskDel.setAttribute("title", "Delete task");
                    const taskDelPic = document.createElement("img");
                    taskDelPic.setAttribute("src", "../src/images/delete.png");
                    taskDel.appendChild(taskDelPic);
                    taskButtons.appendChild(taskDel);

                    task.appendChild(taskButtons);
                    daySelected.appendChild(task);
                }
            }
        }

        document.getElementById("days-wrapper").appendChild(daySelected);

        document.getElementById("close-day").addEventListener("click", function() {
            document.getElementById("day-selected").remove();
        });
    }

    // Show events of a given day if clicked on
    function setButtons() {
        for (const button of document.querySelectorAll(".active-day")) {
            button.addEventListener("click", function() {
                const selectedDay = button.firstChild.textContent;
                selectDay(currentMonth, selectedDay);
            });
        }
    }

    // Append calendar to DOM
    const calendarWrap = document.createElement("div");
    calendarWrap.setAttribute("id", "calendar");
    calendarWrap.setAttribute("class", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Calendar";
    calendarWrap.appendChild(title);

    const calendar = document.createElement("div");
    calendar.setAttribute("id", "calendar-grid");

    // Append calendar month to DOM
    const calMonthWrap = document.createElement("div");
    calMonthWrap.setAttribute("id", "calendar-month");

    const monthArrowLeft = document.createElement("button");
    monthArrowLeft.setAttribute("id", "calendar-left");
    monthArrowLeft.setAttribute("class", "month-toggle");
    const arrowLeftPic = document.createElement("img");
    arrowLeftPic.setAttribute("src", "../src/images/keyboard_arrow_left.png");
    monthArrowLeft.appendChild(arrowLeftPic);
    calMonthWrap.appendChild(monthArrowLeft);

    const calMonth = document.createElement("h2");
    calMonth.setAttribute("id", "month-text");
    calMonthWrap.appendChild(calMonth);

    const monthArrowRight = document.createElement("button");
    monthArrowRight.setAttribute("id", "calendar-right");
    monthArrowRight.setAttribute("class", "month-toggle");
    const arrowRightPic = document.createElement("img");
    arrowRightPic.setAttribute("src", "../src/images/keyboard_arrow_right.png");
    monthArrowRight.appendChild(arrowRightPic);
    calMonthWrap.appendChild(monthArrowRight);

    calendar.appendChild(calMonthWrap);

    // Append calendar weekday headers to DOM
    const calHeaders = document.createElement("div");
    calHeaders.setAttribute("id", "calendar-headers");

    for (const weekday of weekdays) {
        const header = document.createElement("h3");
        header.setAttribute("class", "calendar-header");
        header.textContent = weekday;
        calHeaders.appendChild(header);
    }

    calendar.appendChild(calHeaders);

    // Append space for calendar days to DOM
    const calDayWrap = document.createElement("div");
    calDayWrap.setAttribute("id", "days-wrapper");

    const calDays = document.createElement("div");
    calDays.setAttribute("id", "calendar-days");

    calDayWrap.appendChild(calDays);
    calendar.appendChild(calDayWrap);
    calendarWrap.appendChild(calendar);
    const list = document.getElementById("content-wrapper");
    list.insertBefore(calendarWrap, list.children[0]);

    // Set initial calendar month
    setMonth(new Date().getMonth());

    // Allow arrow buttons to control the visible calendar month
    for (const button of document.querySelectorAll(".month-toggle")) {
        button.addEventListener("click", function(e) {
            while (document.getElementById("calendar-days").firstChild) {
                document.getElementById("calendar-days").firstChild.remove();
            }

            if (e.currentTarget.id === "calendar-right") {
                currentMonth = ((currentMonth + 1) + 12) % 12;
                setMonth(currentMonth - 1);
            } else {
                currentMonth = ((currentMonth - 1) + 12) % 12;
                setMonth(currentMonth - 1);
            }
        });
    }
}
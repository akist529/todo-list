export default function Calendar(projectData) {
    let currentMonth = new Date().getMonth();

    // Adds a new day to the calendar
    function newDay(dayNum) {
        const day = document.createElement("button");
        day.setAttribute("class", "calendar-day");
        const dayText = document.createElement("h4");
        dayText.textContent = dayNum;
        day.appendChild(dayText);
        return day;
    }

    function setMonth(month) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        document.getElementById("month-text").textContent = months[month];

        setDays(month);
    }

    function setDays(month) {
        let numDays = (() => {
            const months = [3, 5, 8, 10];

            if (month === 1) {
                return 28;
            } else if (months.includes(month)) {
                return 30;
            } else {
                return 31;
            }
        })();
    
        for (let i = 1; i <= numDays; i++) {
            document.getElementById("calendar-days").appendChild(newDay(i));
            document.getElementById("calendar-days").lastChild.classList.add("active-day");
        }

        // Add the previous month's final days to fill the calendar
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

        // Add the next month's beginning days to fill the calendar
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
        dayNum.textContent = day;
        daySelected.appendChild(dayNum);

        const close = document.createElement("button");
        close.innerHTML = "X";
        close.id = "close-day";
        close.className = "button-close";
        daySelected.appendChild(close);

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

    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

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

            const target = (e.target.tagName === "IMG" ? e.target.parentElement.id : e.target.id);

            if (target === "calendar-left") {
                currentMonth = ((currentMonth - 1) + 12) % 12;
                setMonth(currentMonth);
            } else {
                currentMonth = ((currentMonth + 1) + 12) % 12;
                setMonth(currentMonth);
            }
        });
    }
}
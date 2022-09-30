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
        let numDays;

        if (month === 1) {
            numDays = 28;
        } else if (month === 3 
            || month === 5 
            || month === 8 
            || month === 10) {
            numDays = 30;
        } else {
            numDays = 31;
        }
    
        for (let i = 1; i <= numDays; i++) {
            document.getElementById("calendar-days").appendChild(newDay(i));
        }

        // Add the previous month's final days to fill the calendar
        let date = new Date();
        date.setMonth(month);

        const dayOffsetBefore = (date.getDay() + 1) - (date % 7);
        date.setDate(0);
        let prevOffset = date.getDate();

        for (let i = 0; i < dayOffsetBefore; i++) {
            document.getElementById("calendar-days").prepend(newDay(prevOffset));
            prevOffset--;
        }

        // Add the next month's beginning days to fill the calendar
        const dayOffsetAfter = 35 - document.getElementById("calendar-days").childElementCount;
        
        for (let i = 0; i < dayOffsetAfter; i++) {
            document.getElementById("calendar-days").append(newDay(i + 1));
        }
    }

    const calendarWrap = document.createElement("div");
    calendarWrap.setAttribute("id", "calendar-wrapper");
    calendarWrap.setAttribute("class", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Calendar";
    calendarWrap.appendChild(title);

    const calendar = document.createElement("div");
    calendar.setAttribute("id", "calendar");

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

    const calHeaders = document.createElement("div");
    calHeaders.setAttribute("id", "calendar-headers");

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (const weekday of weekdays) {
        const header = document.createElement("h3");
        header.setAttribute("class", "calendar-header");
        header.textContent = weekday;
        calHeaders.appendChild(header);
    }

    calendar.appendChild(calHeaders);

    const calDays = document.createElement("div");
    calDays.setAttribute("id", "calendar-days");

    calendar.appendChild(calDays);
    calendarWrap.appendChild(calendar);
    const list = document.getElementById("content-wrapper");
    list.insertBefore(calendarWrap, list.children[0]);

    // Set initial calendar month
    setMonth(new Date().getMonth());

    // Allow arrow buttons to control the visible calendar month
    for (const button of document.querySelectorAll(".month-toggle")) {
        button.addEventListener("click", function(e) {
            const target = (e.target.tagName === "IMG" ? e.target.parentElement.id : e.target.id);

            if (target === "calendar-left") {
                const prevMonth = months[new Date().getMonth() - 1];
                setMonth(prevMonth);
            } else {
                const nextMonth = months[new Date().getMonth() + 1];
                setMonth(nextMonth);
            }
        });
    }
}
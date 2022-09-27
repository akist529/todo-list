export default function Calendar(projectData) {
    function calDay(currDay) {
        const day = document.createElement("div");
        day.setAttribute("class", "calendar-day");
        const dayNum = document.createElement("h4");
        dayNum.textContent = currDay;
        day.appendChild(dayNum);
        calendar.appendChild(day);
    }


    const calendarWrap = document.createElement("div");
    calendarWrap.setAttribute("id", "calendar-wrapper");
    calendarWrap.setAttribute("class", "list-content");

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMon = months[currDate.getMonth()];
    const currDay = currDate.getDate();
    const weekDay = days[currDate.getDay()];

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Calendar";
    calendarWrap.appendChild(title);

    const calendar = document.createElement("div");
    calendar.setAttribute("id", "calendar");

    const calMonth = document.createElement("h2");
    calMonth.setAttribute("id", "calendar-month");
    calMonth.textContent = currMon;
    calendar.appendChild(calMonth);

    for (const day of days) {
        const header = document.createElement("h3");
        header.setAttribute("class", "calendar-header");
        header.textContent = day;
        calendar.appendChild(header);
    }

    let numDays;

    if (currMon === "February") {
        numDays = 28;
    } else if (currMon === "April" || currMon === "June" || currMon === "September" || currMon === "November") {
        numDays = 30;
    } else {
        numDays = 31;
    }

    for (let i = 1; i <= numDays; i++) {
        calDay(i);
    }

    calendarWrap.appendChild(calendar);
    const list = document.getElementById("content-wrapper");
    list.insertBefore(calendarWrap, list.children[0]);
}
import Inbox from "./inbox.js";
import Today from "./today.js";
import Calendar from "./calendar.js";

export default function Content(projectData) {
    const contentWrap = document.createElement("div");
    contentWrap.setAttribute("id", "content-wrapper");

        const resetLayout = document.createElement("button");
        resetLayout.setAttribute("id", "reset-layout");
        resetLayout.setAttribute("title", "Reset Layout");
        resetLayout.addEventListener("click", function() {
            document.getElementById("content").style.gridTemplateColumns = "";
            document.getElementById("content").style.gridTemplateRows = "";
        });

            const resetPic = document.createElement("img");
            resetPic.setAttribute("src", "../src/images/team_dashboard.png");

        resetLayout.appendChild(resetPic);

    contentWrap.appendChild(resetLayout);
    document.getElementById("content").appendChild(contentWrap);

    Inbox(projectData);

    for (const link of document.querySelectorAll(".sidebar-link")) {
        link.addEventListener("click", function(e) {
            const eventTarget = e.currentTarget;
            let currentContent = contentWrap.firstChild;

            if (eventTarget !== currentContent) {
                currentContent.style.animation = "content-despawn";
                currentContent.style.animationDuration = "0.25s";
                currentContent.style.animationFillMode = "forwards";
                
                setTimeout(() => {
                    currentContent.remove();
                }, 250);

                setTimeout(() => {
                    switch(eventTarget.textContent) {
                        case 'Inbox':
                            Inbox(projectData);
                            break;
                        case 'Today':
                            Today(projectData);
                            break;
                        case 'Calendar':
                            Calendar(projectData);
                            break;
                        default: // Do nothing
                    }

                    currentContent = contentWrap.firstChild;
                    currentContent.style.animation = "content-respawn";
                    currentContent.style.animationDuration = "0.25s";
                    currentContent.style.animationFillMode = "forwards";
                }, 250);
            }
        });
    }
}
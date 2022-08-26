import Header from "./header.js";
import Sidebar from "./sidebar.js";
import List from "./list.js";
import "./style.css";

Header();
Sidebar();
List();

document.getElementById("sidebar").addEventListener("mouseenter", function(enter) {
    document.getElementById("sidebar").addEventListener("mousemove", function(move) {
        if ((document.getElementById("sidebar").offsetWidth - move.clientX) < 5) {
            document.getElementById("sidebar").classList.add("border-active");

            window.addEventListener("mousedown", function(click) {
                window.addEventListener("mousemove", function(move) {
                    document.getElementById("sidebar").style.width = move.clientX;
                });
            });
        } else {
            document.getElementById("sidebar").classList.remove("border-active");
        }
    });
});

document.getElementById("sidebar").addEventListener("mouseleave", function(leave) {
    document.getElementById("sidebar").classList.remove("border-active");
});
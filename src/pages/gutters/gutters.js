export default function Gutters() {
    const gutterCol = document.createElement("div");
    gutterCol.setAttribute("id", "gutter-col");
    document.getElementById("content").appendChild(gutterCol);

    const gutterRow = document.createElement("div");
    gutterRow.setAttribute("id", "gutter-row");
    document.getElementById("content").appendChild(gutterRow);
}
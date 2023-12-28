
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div",{ id: "parent" },
    React.createElement("div",{ id: "child" },[
        React.createElement("h1", {}, "I'm h1 Tag"),
        React.createElement("h2", {}, "I'm h2 Tag"),
    ]),
    React.createElement("div",{ id: "child2" },[
        React.createElement("h1", {}, "I'm h1 Tag"),
        React.createElement("h2", {}, "I'm h2 Tag"),
    ])
    );
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
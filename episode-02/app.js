import React from "react";
import ReactDOM from "react-dom/client";

//install react and react-dom inside our project
let heading1 = React.createElement("h1",
    {id:"heading1"},
    "Heading 1"
);
let heading2 = React.createElement("h1",
    {id:"Heading 2"},
    "Heading 2"
);
let container = React.createElement("div",
    {id:"container"},
    [heading1,heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

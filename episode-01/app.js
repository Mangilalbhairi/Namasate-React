// Using JS to manipulate the DOM 

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World JavaScript!!";
// const root = document.getElementById("root");
// root.appendChild(heading);

// create element using react and render inside html document
/*let element = React.createElement("h1",{id:"heading"},"Namasate React");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);*/

// Create nested Element using React 


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
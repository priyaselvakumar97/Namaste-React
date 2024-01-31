// const heading=React.createElement("h1",{id:"heading"},"Namaste Javascript from React");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const create1=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am a h1 tag")));
// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root.render(create1);


// const nest=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Im a h1 tag of the child"),React.createElement("h2",{},"Im the h2 tag of the child")]));

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(nest);

const nested=React.createElement("div",{id:parent},[
    React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"Im child 1"),
    React.createElement("h2",{},"im from child 1"),
]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"im from child 2"),
    React.createElement("h2",{},"Im from child2"),
]),
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(nested)





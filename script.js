const rootElement = document.getElementById("root");

// const greetingElement = document.createElement("span");

// const textNode = document.createTextNode("Hello World");

// greetingElement.appendChild(textNode);

// rootElement.appendChild(greetingElement);

// const innerSpan = React.createElement("span", {
//   children: ", How are you?",
// });

// const greetingElement = React.createElement("span", {
//   children: ["Hello World", innerSpan],
//   className: "color-red",
// });

const greetingElement = <span> Hello India</span>;

ReactDOM.render(greetingElement, rootElement);

// rootElement
// -- greetingElement
//     -- "Hello World"
//     -- innerSpan

// Dummy data placeholder. Replace with array of actual data objects
const data = [
{
  project: "Simple Calculator",
  stack: ["JavaScript", "HTML5", "CSS"],
  description:
  "The code used in this project is available in a GitHub repository and is free for you to use under the MIT license. If you want to have a look at a live version of this project, you can check out it's demo/preview. ",
  website: "./calc.html",
  github: "../error.html",
  image:
  "./clc.png",
  needs: "People with super powers",
  status: "Live" },
{
  project: "Javascript minify",
  stack: ["JavaScript", "HTML5", "CSS"],
  description:
  "You may see bug's/errors in this project, The code used in this project is available in a GitHub repository and is free for you to use under the MIT license. If you want to have a look at a live version of this project, you can check out it's demo/preview. ",
  website: "../error.html",
  github: "../error.html",
  image:
  "./minify.png",
  needs: "People with super powers",
  status: "In Development" },
];



const Layout = ({ children }) => {
  return /*#__PURE__*/React.createElement("div", { className: "row" }, children);
};

const Card = ({
  data: { status, description, needs, project, image, stack, website, github } }) =>
{
  const style = {
    img: {
      maxWidth: "400px" } };


  return /*#__PURE__*/(
    React.createElement("div", { className: "col m4" }, /*#__PURE__*/
    React.createElement("div", { className: "card hoverable" }, /*#__PURE__*/
    React.createElement("div", { className: "card-image waves-effect waves-block waves-light" }, /*#__PURE__*/
    React.createElement("img", { style: style.img, className: "activator", src: image })), /*#__PURE__*/

    React.createElement("div", { className: "card-content" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(StackIcons, { data: stack })), /*#__PURE__*/

    React.createElement("span", { className: "card-title activator grey-text text-darken-4" },
    project, /*#__PURE__*/
    React.createElement("i", { className: "material-icons right" }, "more_vert")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/
    React.createElement("a", { href: website }, "Preview")), /*#__PURE__*/

    React.createElement("span", null, /*#__PURE__*/
    React.createElement("a", { className: "github", href: github }, "Code")))), /*#__PURE__*/





    React.createElement("div", { className: "card-reveal" }, /*#__PURE__*/
    React.createElement("span", { className: "card-title grey-text text-darken-4" },
    project, /*#__PURE__*/
    React.createElement("i", { className: "material-icons right" }, "close")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", { className: "status" }, status)), /*#__PURE__*/

    React.createElement("p", null, description), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("strong", null, "Need:")), /*#__PURE__*/

    React.createElement("p", null, needs)))));




};

// Note: Empty span tag on line 140 is there as placeholder for
// the custom CSS to inject text based on stack item.
const StackIcons = ({ data }) => {
  const icons = data.map(item => {
    return /*#__PURE__*/(
      React.createElement("div", { key: item, className: "icon" }, /*#__PURE__*/
      React.createElement("span", { className: item }, /*#__PURE__*/
      React.createElement("span", null))));



  });
  return /*#__PURE__*/React.createElement("div", null, " ", icons, " ");
};

const Projects = ({ data }) => {
  const projects = [];
  data.forEach((item, idx) => {
    projects.push( /*#__PURE__*/React.createElement(Card, { key: idx, data: item }));
  });
  return /*#__PURE__*/React.createElement("div", null, projects);
};

const App = () => /*#__PURE__*/
React.createElement(Layout, null, /*#__PURE__*/
React.createElement(Projects, { data: data }));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));
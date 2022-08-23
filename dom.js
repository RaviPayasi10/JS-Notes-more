
// DOM - Document Object Model

// How browser works - 
// 1. It parses and renders html code top to bottom.
// 2. While parsing, if it encounters a script file, it executes it.
// 3. Now, javascript is a hosted language, i.e. browser provides the environment a javascript engine
//      which parses js script and runs it.
//      Browser also provides some API's so through which js can tap into the html code
// The browser exposes a functionality through which js can interact with the parsed html code.
// This functionality is called DOM.
// DOM - It is an object representation of the parsed and rendered html code created by the browser.
// These objects would be javascript objects, hence js can work with it.
// Now, js has tools which it can use to tap, interact and change the html code
// document.querySelector("h1"); = is an example of it.

// In DOM, there are mainly two global objects- 1. Document object      2. Window object
// Both are entry point, i.e. top level objects through which other objects can be reached
// Document is below Window, hence window is even bigger object than document

// DOCUMENT - 1. Root DOM node
//            2. Provide access to querying elements, DOM content etc
// WINDOW - 1. The active browser window/tab.
//          2. Acts as global storage for script, also provides access to windows-specific 
//              properties and methods which document object cannot provide.

// The model created by DOM of an html page is sort of tree structure with document at top and
// html and other html elements as child nodes.
// The DOM contains 2 types of nodes - 1. Element nodes 2. Text nodes
// Along with all the elements, the text part of html is also converted into object (even the whitespaces)

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Querying Elements/ Nodes

// Single element selectors - querySelector(), getElementById() - returns single element
// Multiple element selectors - querySelectorAll(),getElementByTagName(),getXbyY - Returns an array like 
// o/p consisting of all the multiple elements
// querySelectorAll() returns a non-live list while getXbyY() returns a live list

// NODES - Entire DOM is made up of nodes. These nodes can be element type, text node type, attribute type
// ELEMENT NODES - The html elements nodes are called element nodes. They are mostly used and have special
// properties and methods that allow us to change and tap into them

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ways to query objects inside the DOM
// 1. getElementById = Returns a single element of that particular ID, null if no element exists
//      document.getElementById("id1");         Give ID name in brackets
//  console.dir(document.getElementById("id1"));    Returns the entire object of that id


// const id1 = document.getElementById("id1");      
// We can store the returned object in a const variable, then we can use the variable name to
// access the child nodes (elements) of the returned element.
// id1.querySelector("some-property");

// 2. document.getElementsByClassName("classname");
// It returns a live HTML-collection consisting of all the elements that have the class-name
// mentioned in query. We can iterate through it by using for loop.
// Returns empty HTML-collection if none found

// 3. document.querySelector("element");
// Returns the first matching element of that element/class/id specified
// Returns null if no element is found
// Previous commands are lesser used, mostly this is used 
// In this, inside the bracket we can specify the element as well as classes and ID's
// But for classes and ID's, CSS style selections have to be used.
// document.querySelector("#class-name");  = For selecting class
// document.querySelector(".id-name");      = For selecting id's

// 4. document.querySelectorAll("element");
// Returns all the elements in an array like structure (object like)
// Returns an empty nodeList if no matching element is found
// Can loop through it using for loops or [] bracket notation

// 5. document.getElementByTagName("tag-name");
// Returns a live HTML-collection of matched elements
// Returns an empty HTML-collection if none found
// We can also use complex queries to be more specific =
// document.querySelector("ul li:firstChild");

//////////////////////////////////////////////////////////////////////////////////////////////

// Using DOM, we can read and write element properties
// const h1 = document.querySelector("h1");
// h1.textContent;          = Returns the content of the h1 tag
// h1.className;            = Returns the name of the class

// Write data
// h1.textContent = "New content";      = Old content would be changed  by this new content
// This works by removing the text node of h1 tag and replacing it with new text node.

// Adding classes or id's to tag
// h1.className = "title";          = This will add the class named "title" to out h1 tag

// We can also handle the CSS properties of tags by using add "style" and then respective property
// h1.style.color = "red";
// Also, for CSS properties having space/hyphen in between their names, i.e. "background-color","margin-top" etc
// we instead of passing them as it is, we remove space and hyphen, and combine the two words in 
// camel casing. 
// h1.style.backgroundColor = "blue";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Attributes and Properties

// Attribute - Attributes are the things we write in html code
// <input class="className" id="idname" value="value1">
// Here, the class, id, value are the attributes, hence the things we write in html code are called
// attributes

// Properties - Now, using those attributes and some other settings, browser creates a DOM object of
// that tag and this dom object now comprises of properties. There are many such properties other than the
// attributes which are present in the DOM object.
// These properties refer to the positioning, values, configurations, additional default settings of the tag
// Properties are automatically added with some default settings while attributes are added by user in html code

// Its important to note that properties and attributes not necessarily have one-to-one mapping.
// For ex: h1.id has 1:1 mapping, i.e. if attribute is changed, property will also change and vice-versa
// h1.className has n:1 mapping, i.e. if attribute is changed, property will also change and vice-versa but
// since there could be multiple classes in a tag, we don;t have 1:1 mapping


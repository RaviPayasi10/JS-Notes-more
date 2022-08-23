
// After choosing a node (tag/element), we can then traverse its child nodes, and descendants etc
// This is called traversing a node

// Child/Children - It is the direct descendant or direct child of the current node
// For ex: <div>
//              <p>Some <em> content </em></p>
//          </div
// Here, <p> is the child node of <div> tag, but <em> is not

// Descendant - It is the direct and indirect node of current node
// For ex: <div>
//              <p>Some <em> content </em></p>
//              <ul>
//                  <li> </li>
//              </ul>
//          </div

// Here, all direct and indirect child nodes of <div> are descendants(p,ul,em)

// Parent Node - It is the direct parent node of current node
// For ex: <div>
//              <p>Some <em> content </em></p>
//          </div
// Here, <div> is the parent node of <p> tag, but not for <em>.

// Ancestor - Any direct/indirect parent of current node is ancestor
// For ex: <div>
//              <p>Some <em> content </em></p>
//              <ul>
//                  <li> </li>
//              </ul>
//          </div
// Here, p is the ancestor of all, (p,ul,em)


////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Selecting Children -
// const ul = document.querySelector('ul');
// ul.children      = Returns a HTML-collection list consisting of all the element children through which 
//                      we can traverse. Text nodes are ignored here.
// ul.children[1]   = Returns the second child of the list

// ul.childNodes    = Returns a node list consisting of all the child nodes, text and element nodes both
// ul.firstChild    = Returns the first child of the ul node (including text and element)
// ul.lastChild     = Returns the last child of the ul node (including text and element)
// ul.firstElementChild = Returns the first element child of current node, and ignores text nodes
// ul.lastElementChild  = Returns the last element child of current node, and ignores text nodes

// 2. Selecting Parent-
// const li = document.querySelector('li);
// li.parentNode = Returns the first node (parent) of current node
// li.parentElement = Returns the first node (parent) of current node
// Note that a node whether text or element can have only one parent, also only element nodes can
// have child nodes and text nodes can't have child nodes. Hence, both of these above commands
// produce the same result.

// The only exception for it is -
// document.documentElement.parentElement = returns null
// document.documentElement.parentNode = returns document object
// It is rarely used

// ul.closest('body');  = Returns the closest ancestor of specified type of the current node


// 3. Selecting Sibling node-
// ul.previousSibling   = Returns previous sibling (text and element both)
// ul.previousElementSibling = Returns previous sibling (element only)
// ul.nextSibling = Returns next sibling (text and element both)
// ul.nextElementSibling = Returns next sibling (element only)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Styling DOM - 
// 1. Via style property = Can directly target CSS styles
// Controls styles as inline styling, hence has highest priority
// const sect = document.querySelector('section');
// sect.style.backgroundColor = "red";      = Changes bg color to red


// 2. Via className = We can create classes in CSS stylesheet and have different properties in them,
// then depending on the need, we can add or remove these classes and thereby changing the properties
// sect.className = "newClass";     // If it already exists, replaces old class with this newclass 
// else if it doesn't, adds this new class to sect.
// sect.className = "";         // Removes any class present in sect
// But the problem with this is that we need to keep track of all the classes in sect if we want to add
// or remove one class as it completely replaces previous string of class containing more than one classes
// and replaces it with new class name provided.

// 3. Via classList = It is an array-like object containing all the classes and hence is better at 
// controlling the properties than className
// It is used instead of className as this helps in better control of classes
// sect.classList.contains("classname");    = Returns if a class exists in given class list.
// sect.classList.add("classname");     = Adds the new class in already present class list
// sect.classList.remove("classname");  = Removes only the class provided in the class list
// sect.classList.replace("replace class","class to be replaced with");
// sect.classList.toggle("classname");  = Adds class if not present already and removes if present already

// Creating Elements - We can add or create new elements to any element using js

// 1. InnerHTML - Using this, we can add new html code inside any tag or at any place.
// section.innerHTML("<h1> New heading h1 </h1>");
// NOTE - It will replace all previous HTML code that was present there, all child nodes as well as
// descendant nodes will be replaced by new html content added
// Swaps all nested HTML nodes with new HTML node given in innerHTML

// 2. InsertAdjacentHTML - We can add HTML nodes using this. It has 4 options to choose from.
// a. 'beforebegin', b. 'afterbegin, c. 'beforeend, d. 'afterend'

// a. div.insertAdjacentHTML('beforebegin','<h1>New h1 heading</h1>');
// Adds the specified html node just before the beginning of the div node

// b. div.insertAdjacentHTML('afterbegin','<h1>New h1 heading</h1>');
// Adds the specified html node just after the beginning of the div node

// c. div.insertAdjacentHTML('beforeend','<h1>New h1 heading</h1>');
// Adds the specified html node just before the ending of the div node

// d. div.insertAdjacentHTML('afterend','<h1>New h1 heading</h1>');
// Adds the specified html node just after the ending of the div node

// Still both the above methods are not considered very good as both are tedious and do not give access
// to newly created dom or any nested dom inside the newly created dom directly

// 3. CreateElement - Creates an element and returns it
// Always applied to document and not to any html element or html node
// In parameters, pass the html tag element you want to create as a normal string(without <> brackets)
// const newList = document.createElement('li');

// Above command will simply create a new html item, but it still needs to be added
// Under whichever html dom, you wish to add it, add it using appendChild(), appendElement() or append().
// const list1 = document.querySelector('ul');
// list1.appendChild(newList);

// Above command will add the HTML dom where required but it will be empty, we can fill it using textContent
// newList.textContent = "New Item added";
// It will set the text content of that element as mentioned

// A big advantage here is that we have access to the newly added HTML DOM
// We can also add multiple nodes here sepearted by commas.
// Along with these, there are many other sub-methods availble with it which we can use to 
// add nodes more precisely
// Hence, we can do many other things we wish to do

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Copy a Node - 
// newList.cloneNode(true or false);
// const newList2 = newList.cloneNode(true);
// Does deep clone, i.e. all child node and nested nodes are also copied

// const newList2 = newList.cloneNode(false);  
// Doesn't do deep clone, only that node is cloned

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Live Node Lists and Static Node Lists

// const list = document.querySelector('ul');

// const list1 = document.querySelectorAll('li');
// Above command returns a NodeList of array like object consisting of all the list nodes

// const list2 = document.getElementByTagName('li);
// It also returns a HTML collection consisting of all the list items

// const newListItem = document.createElement('li');
// list.append(newListItem);

// The above action of adding a new list item to 'list' will add only at browser
// This addition will not be reflected at list1 which returns a nodelist at browser
// Hence, it is a static node list
// Whereas, it will be reflected in list2 which returns a HTML collection at browser
// Hence, it is a live node list 

// document.querySelector is preferred method for this

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Remove Elements 

// 1. remove() - 
// const list = document.querySelector('ul');
// list.remove();
// Removes the selected List

// 2. removeChild()-
// const list = document.querySelector('ul');
// list.parentElement.removeChild(list);
// Removes element by going to its parent and then using removeChild() method


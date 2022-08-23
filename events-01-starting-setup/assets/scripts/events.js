const btn = document.querySelector('button');

// Adding event listener
// const btnClickHandler = () => {
//     alert('Button was clicked');
// }
// btn.addEventListener('click',btnClickHandler);


// Removing event listener
// setTimeout(() => {
//     btn.removeEventListener('click',btnClickHandler);
// },2000);

// Event listeners also have data with them, we can also get that data

const btnClickHandler = (event) => {
    console.log(event);
}
// btn.addEventListener('click',btnClickHandler);
btn.addEventListener('mouseenter',btnClickHandler);

// Registering scroll event
window.addEventListener('scroll', (event) => {
    console.log(event);
});

// Forms as event listener 
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
});

// Forms when gets submitted, they refresh the page and hence console.log of event is gone.
// To prevent that, event.preventDefault() is used which then prevents the browser from doing the
// default action for any event

// Bubbling and Capturing of events - 
// There are basically 2 phases through a browser checks which element has event and 
// which event was triggered
// Imagine a button inside a section inside a div ( button --> section --> div) and all 3 have
// different event listeners associated with them
// Which element will be registered when a click is done ?

// For above question, there are 2 ways to solve -
// 1. Bubbling - Browser starts checking from inside i.e. innermost element and starts executing 
// event listeners going outside

// 2. Capturing - Browser here starts from outermost element and goes inside, opposite of bubbling

// The default way is capturing occurs first and then bubbling but in capturing phase the 
// browser doesn't do anything and in bubbling phase only it starts executing events
// element.addEventListener() = It uses Bubbling by default

// So if a button --> section --> div (button inside section inside div) is present,
// if we click on the button, first eventlistener associated with button will be executed
// and then event listener associated with section and then event listener associated
// with div. Hence, from inside to outside

//////////////////////////////////////////////////////////////////////////////////

// How to switch to capturing phase - 

// eventA.addEventListener('click', () => {some function ...}, false);
// Above, the third argument is true by default which makes it bubbling by default
// But when given false, it will switch back to capturing, hence that particular event
// eventA will become capturing type event and if clcik is made anywhere in its region
// during captuirng phase itself, this event will be executed


// Propagation - 
// The property of of event listeners due to which when an element is clicked, the browser 
// starts listening from clicked element and then goes to listen to its ancestors and executes
// its events. This is called propagation.
// NOTE - Not all events propagate, click event propagates but hover and drag don't

// How to stop propagation - 
// eventA.addEventListener('click', (event) => {
//        event.stopPropagation(); = This stops the propagation, browser only listens to 
//                                     clicked element and does not goes through all ancestors
//        event.stopImmeadiatePropagation(); = If multiple events are associated with an
//                                      element, then using this, propagation would stop just 
//                                      execution of first event
// });

///////////////////////////////////////////////////////////////////////////////////////////////////

// Drag and Drop - 

// How to make drag and drop event - 
// 1. Mark the element which has to dragged as 'Draggable'. This will add the capability
// of dragging in that element.

// 2. Add event which listens to drag start event - This event also includes data related
// to the dragged element etc

// 3. Add drag acceptence event that makes an element accept the dragged content/data
// 'DragEnter' or 'DragOver' are two events which can be added to elements which can accept
// dragged data/content
// Also, we have to preventDefault() here as the default way of browser is to not allow
// any drag and drop opertions, hence to make it work, we have to prevent default behaviour
// Optional Event - We can add dragLeave event which helps us to leave a drag event and change UI
// styles based on it

// 4. Listen to Drop event - Add event which listens to drop event and changes UI based on it.
// Also moves data from one place to another

// To add one - 
// In html file, add draggable = 'true' as attribute to the element which has to be draggable
// This will allow dragging of that element and also provide visual UI to show that only
// But it is only showing UI, to make content/data move, we have to start dragstart event

// Add dragstart event to element to get actual drag function to start - 
// element.addEventListener('dragstart', (event) => {
//    event.dataTransfer.setData('text/plain',this,id); = Sets what is being moved from where
//    event.dataTransfer.effectAllowed = 'move'     = Sets what is effect of dragging, move,copy,
//                                                      append, delete etc
// });

// Adding event listener where the drop has to occur - This only sets the element and changes UI
// eventB.addEventListener('dragenter', (event) => {});
// eventC.addEventListener('dragover', (event) = > {});

// Adding data to dropped area - 
// eventD.addEventListener('drop' , (event) => { 
//      const data = event.dataTransfer.getData('text/plain');   
// });

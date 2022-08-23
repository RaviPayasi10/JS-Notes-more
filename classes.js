
 // CSS - 
// A > B will only select B that are direct children to A (that is, there are no other elements inbetween).

// A B will select any B that are inside A, even if there are other elements between them.

<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>

// We have two elements with the subsection class that have some sort of unique styles, 
// but what if we only want to apply a separate rule to the element that also has header 
// as a second class? Well, we could chain both the class selectors together in our CSS like -
// .subsection.header {
//     color: red;
//   }

// What .subsection.header does is it selects any element that has both the subsection 
// and header classes. Notice how there isn’t any space between the .subsection 
// and .header class selectors. 

/////////////////////////////////////////////////////////////////

// Classes - Blueprint of real life objects

// Defining a class - 
// class Product {
//     title;
//     description;
//     price;
// }

// Creating object of that class-
// const newProd1 = new Product();
// console.log(newProd1);

// Constructor of class = Allows us to initialize an object as soon as we declare it
// class Product {
//     title;
//     description;
//     price;

//     constructor(title,description,price){
//          this.title = title;
//          this.description = description;
//          this.price = price;
//      }
// }
// 
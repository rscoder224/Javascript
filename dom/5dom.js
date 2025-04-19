

let navitems = document.getElementsByTagName("a");
// console.log(navitems);


// for(let i = 0; i < navitems.length; i++) {
//     console.log(navitems[i]);
//   navitems.style.backgroundColor = "blue";

// }

// navitems[0].style.color = "red";



navitems = Array.from(navitems);

navitems.forEach((item) => {
  item.style.color = "red";
});

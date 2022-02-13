const laCatch = document.querySelectorAll("li");
let numb = 20;

// for (let i = 0; i < laCatch.length; i++) {
//     let element = laCatch[i];
//     console.log(element);
//     numb += 10;
//     element.style.fontSize = `${numb}px`
// }
laCatch.forEach((liItem) => {
    numb += 5;
    liItem.style.fontSize = `${numb}px`;

})
let counter = 1;
document.querySelector("button").addEventListener("click", function () {
    const divElem = document.createElement("div");

    divElem.id = "square";
    divElem.textContent = counter;

    document.body.appendChild(divElem);


    if (counter % 5 == 0) {
        divElem.id = "square";
    } else {
        divElem.id = "circle";
    }
    counter += 1;
})
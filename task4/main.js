let size = 10;
let elem =1;

init =()=>{
const butt = document.createElement("button");
const buttRemove = document.createElement("button");
butt.textContent ="PUSH";
buttRemove.textContent ="REMOVE";

document.body.appendChild(butt);
document.body.appendChild(buttRemove);

const ulEl = document.createElement("ul");
document.body.appendChild(ulEl);

butt.addEventListener("click", createLiElements)
buttRemove.addEventListener("click", removeLiElements)
}


        createLiElements =()=>{
        for (let i = 1; i <= 10; i++) {
            const liEl = document.createElement("li");
            liEl.textContent =`element ${elem++}`;
            liEl.style.fontSize = `${size++}px`;
            document.querySelector("ul").appendChild(liEl);
            console.log(liEl);
        }
    }


 
    removeLiElements =()=>{
            document.querySelector("ul").textContent="";
            elem = 1;
            size = 10;
    }  
       
init();


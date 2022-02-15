const button = document.querySelector("button");
const ulElem = document.createElement("ul");

let element = 1;
//const liElem = document.querySelectorAll("li");

const liElem = document.createElement("li");

createFun = () => {
  const ulist = document.body.appendChild(ulElem);

  for (let i = 1; i <= 10; i++) { 

    ulist.textContent = `element ${i}`;
    document.querySelector("ul").appendChild(ulist);
    console.log(ulist);
  }

  liElem.style.fontSize = "30px";
  liElem.style.color = "red";
  liElem.style.backgroundColor = "black";
  console.log(ulElem);
}

button.addEventListener("click", function () {
  createFun();
  for (let i = 0; i < ulElem.length; i++) {
    const element = ulElem[i];
    console.log(element);
  }


})
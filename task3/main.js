


const div = document.createElement("div");
let size = 50;
div.className = "square";
div.style.height = `${size}px`;
div.style.width = `${size}px`;
// div.style.color = "white";
let flag = true;
div.style.backgroundColor = "black";
document.body.appendChild(div);


window.addEventListener("scroll", function(){

  
  if(flag == true){
    div.style.width =size+"px";
    div.style.height =size+"px";
    size++;
    if (size >= window.innerWidth/2) flag = false;
  }else
  if (flag == false) {
    div.style.width =size+"px";
    div.style.height =size+"px";
    size--;
    if (size == window.innerWidth*0) flag = true;
  }
    
    
})
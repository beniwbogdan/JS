const divE = document.createElement("div");
divE.className = "square";
divE.style.backgroundColor = "black";
divE.style.height = "50px";
divE.style.width = "50px";
document.body.appendChild(divE);


divE.addEventListener("mousedown",function(){
   divE.style.backgroundColor = "gray";
     divE.style.transform=`translate(${+50}% ${+50}%)`;
   window.addEventListener("mousemove", function(e){
      divE.style.marginTop = `${e.clientY}px`;
      divE.style.marginLeft = `${e.clientX}px`;
      console.log(e.clientY);
      // divE.style.backgroundColor="blue";
   })
})
divE.addEventListener("mouseup",function(){
   divE.style.backgroundColor = "black";
   
   divE.addEventListener("mouseleave", function(e){
     
   })
})
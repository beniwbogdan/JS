


window.document.addEventListener("mousemove", function(e){
   const divElem =  document.querySelector("div");
   
   let dataY = e.clientY;
   let dataX = e.clientX;
   if (dataX>=255)dataX=1;
   if (dataY>=255)dataY=1;
   divElem.textContent = `(${e.offsetX} ${e.offsetY})`;
   this.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientY * e.clientX})`;
})

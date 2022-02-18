let white = 265;
window.addEventListener("keydown", function (event) {
   if (event.defaultPrevented) {
     return; // Do nothing if the event was already processed
   }
   switch (event.key) {
      case "ArrowDown":
         console.log("DOWN");
        break;
      
      case "ArrowUp":
        console.log("UP");
        if(white == 0)white = 256;
        this.document.body.style.backgroundColor = `rgb(${white}, ${white}, ${white--})`;;
        break;
      case "ArrowLeft":
         console.log("left");
        break;
      case "ArrowRight":
         console.log("right");
        break;
      case "Enter":
         console.log("ENTER");
        break;
  
      case "Escape":
        // Do something for "esc" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
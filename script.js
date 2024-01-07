
//Removing the image by using click event and EventListner
document.querySelector("#images").addEventListener("click",function(e) {
     console.log(e.target.display)
     if(e.target.nodeName=="IMG")
        e.target.parentNode.remove();
})

//Prevent the google link using PREVENTINGDEFAULT()  method
document.getElementById("earth").addEventListener("click",function(e) {
      e.preventDefault();
})


document.getElementById("earth").addEventListener("click",function() {
    const para = document.createElement("p");
    para.id = "message";
    const text = document.createTextNode("PLEASE SAVE THE EARTH");
    para.appendChild(text);
    document.querySelector("div").appendChild(para);
   
})

let y = document.getElementById("message");
console.log(y);
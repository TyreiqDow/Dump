function description(image) {
    var popup = document.getElementById("popup");

    popup.textContent = "Image " + image;

    popup.style.visibility="visible";

    document.addEventListener("click", toggel, 1000);
    
  }


function toggel() {
  var popup = document.getElementById("popup");
  popup.style.visibility='hidden'; 
}

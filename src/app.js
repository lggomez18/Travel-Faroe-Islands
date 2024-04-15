//accesibility contrast
function changeContrast(){
    let body =document.querySelector("body");
     body.classList.toggle("dark");
    
    }
    
    let contrastButton = document.querySelector(".contrast");
    contrastButton.addEventListener("click", changeContrast);
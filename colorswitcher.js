const btn =document.querySelectorAll(".button");
const body= document.querySelector("body")


btn.forEach(function(allbtn){
allbtn.addEventListener("mouseover",function(event){
    if (event.target.id ==="grey"){
        body.style.backgroundColor= event.target.id;
    }
    if (event.target.id ==="yellow"){
        body.style.backgroundColor= event.target.id;
    }
    if (event.target.id ==="white"){
        body.style.backgroundColor= event.target.id;
    }
    if (event.target.id ==="pink"){
        body.style.backgroundColor= event.target.id;
    }
    if (event.target.id ==="blue"){
        body.style.backgroundColor= event.target.id;
    }
    if (event.target.id ==="red"){
        body.style.backgroundColor= event.target.id;
    }
})
})





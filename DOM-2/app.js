
let rasm=document.querySelector("#image_1")
let tugma=document.querySelector("#btn")
let title=document.getElementById("title")

tugma.addEventListener("click",
    ()=>{
        // let rasmBormi=rasm.hasAttribute("src");
        // title.textContent=rasmBormi;

        rasm.setAttribute("src","aaa.jpg")
    }
)
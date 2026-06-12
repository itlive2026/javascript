// let sarlavha=document.getElementById("card-title")
// console.log(sarlavha.textContent);
// sarlavha.textContent="salom";

// let narxi=document.getElementById("p-1");
// narxi.textContent="Narxi 15000 so'm";

// let sarlavha=document.querySelector("span")
// alert(sarlavha.textContent)

// let spanlar=document.querySelectorAll("span")
// console.log(spanlar[2].textContent)

// console.log("Barcha spanlar")
// spanlar.forEach((name)=>{
//     console.log(name.textContent)
// })

// let sarlavha=document.getElementById("card-title")

const tugma=document.querySelector("#checkout-btn");
let sarlavha=document.querySelector("#card-title");
tugma.addEventListener(
    "click",()=>{
        alert("Buyurtmangiz qabul qilindi");
        sarlavha.textContent="Buyurtma rasmiylashtirildi";
        sarlavha.style.color="violet";
        sarlavha.style.backgroundColor="blue";
        tugma.textContent="rasmiylashtirildi";
        tugma.disabled=true;
    }
)
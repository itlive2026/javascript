const main_img=document.getElementById("main-img")
const title_img=document.getElementById("desc")
const photos=document.querySelectorAll(".photo")

photos.forEach(function(photo)
{
    photo.addEventListener("click",
        ()=>{

            let url=photo.getAttribute("src");
            let dddd=photo.getAttribute("alt");
            title_img.textContent=dddd;
            main_img.setAttribute("src",url);
            photos.forEach(p=>p.classList.remove("active"));
            photo.classList.add("active");
        }
    )
})
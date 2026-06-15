// const user={
//     name:"Alisher",
//     surnama:"Turdiyev",
//     age:27,
//     skills:["HTML","Python","AI"],
//     isadmin:true
// }
// console.log(user.skills[1])

// const user_string=JSON.stringify(user) //stringga
// console.log(user_string)

// const user_object=JSON.parse(user_string)  //objectga
// console.log(user_object)

// // localStorage.setItem("login","Admin")

// const log=localStorage.getItem("login")

// console.log(log)

// const ball={
//     ism:"ALi",
//     natija:12
// }

// const ball_string=JSON.stringify(ball)
// localStorage.setItem("ball",ball_string)

// const natija=localStorage.getItem("ball")
// console.log(natija)

// const natija_object=JSON.parse(natija)
// console.log(natija_object.ism)

// localStorage.removeItem("login")
// localStorage.removeItem("ball")
// localStorage.clear()



// const token =sessionStorage.getItem("token")
// console.log(token)


const taskInput=document.getElementById("taskInput")
const moodSelect=document.getElementById("moodSelect")
const addBtn=document.getElementById("addBtn")
const taskList=document.getElementById("taskList")
const clearAllBtn=document.getElementById("clearAllBtn")

let myTasks=JSON.parse(localStorage.getItem("savedTasks")) || []

function renderTasks(){
    taskList.innerHTML=""
    myTasks.forEach((task)=>
    {
        const li =document.createElement("li")
        li.innerHTML=`<span> ${task.mood} ${task.text} </span>
        <button class="delete-btn" onclick="deleteTask(${task.id})">
        O'chirish</button>`;
        taskList.appendChild(li);
    })
}

addBtn.addEventListener("click",
    ()=>{
        const taskText=taskInput.ariaValueMax.trim();
        const selectedMood=moodSelect.value;
        if (taskText==="")
            alert("Iltimos rejangni kiriting")
        else
        {
            const newTask={
                id:Date.now(),
                text:taskText,
                mood:selectedMood
            }
        }
    }
)
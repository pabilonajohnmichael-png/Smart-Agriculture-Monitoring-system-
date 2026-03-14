let taskList=document.getElementById("taskList")
let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

displayTasks()

function addTask(){

let input=document.getElementById("taskInput")

if(!input || input.value===""){
alert("Enter activity")
return
}

tasks.push(input.value)

localStorage.setItem("tasks",JSON.stringify(tasks))

input.value=""

displayTasks()

}

function displayTasks(){

if(!taskList) return

taskList.innerHTML=""

for(let i=0;i<tasks.length;i++){

let li=document.createElement("li")

li.innerText=tasks[i]

li.onclick=function(){

tasks.splice(i,1)

localStorage.setItem("tasks",JSON.stringify(tasks))

displayTasks()

}

taskList.appendChild(li)

}

}

let search=document.getElementById("searchInput")

if(search){

search.addEventListener("keyup",function(){

let filter=search.value.toLowerCase()

let items=document.querySelectorAll("#tipsList li")

items.forEach(function(item){

let text=item.innerText.toLowerCase()

if(text.includes(filter)){
item.style.display="list-item"
}else{
item.style.display="none"
}

})

})

}

function toggleMode(){
document.body.classList.toggle("dark")
}
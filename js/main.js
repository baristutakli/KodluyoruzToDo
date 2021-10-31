
let addBtn = document.querySelector("#liveToastBtn")
let taskList = document.querySelector("#list")
let taskElements = []

addBtn.addEventListener("click",addTask)
function addTask(event){

    const newTask = document.querySelector("#task")
    
    if (newTask.value && newTask.value != " ") {
        let arr = newTask.value.split(" ")
        console.log(arr)
        console.log(arr.lenght)
        const result = arr.every(function(s) {
            return s == "";
        });
        console.log(result)
        if (!result) {
            let liDom = document.createElement("li")// in this section, i created list elements and added new functionalty to them.
          
            liDom.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
            let closeBtn = document.createElement("button")
            closeBtn.className = "close"
            closeBtn.ariaLabel = "Close"
            let xSpan = document.createElement("span")
            xSpan.ariaHidden = "true"
            xSpan.innerHTML = "&times"
            closeBtn.appendChild(xSpan)
            
            liDom.innerHTML = `${newTask.value}`

            liDom.append(closeBtn)
            taskList.append(liDom)
            taskElements.push(newTask.value)
            
            window.localStorage.setItem("elements",taskElements)

            closeBtn.addEventListener("click", function(){
                taskList.removeChild(liDom)
                taskList.removeChild(closeBtn)
                taskElements.splice(newTask.value,taskElements.indexOf(newTask.value))
                
            })
        }

        
       
       
        
            
    }else{
        alert("You can not add a new task withoout typing any charcters")
    }

       
    console.log(task.value)
}


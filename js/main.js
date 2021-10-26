
let addBtn = document.querySelector("#liveToastBtn")
let taskList = document.querySelector("#list")

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
            let closeBtn = document.createElement("button")
            closeBtn.className = "close"
            closeBtn.ariaLabel = "Close"
            let xSpan = document.createElement("span")
            xSpan.ariaHidden = "true"
            xSpan.innerHTML = "&times"
            closeBtn.append(xSpan)
    
            liDom.innerHTML = 
                
            `
            ${newTask.value}
            `
            taskList.append(liDom)
            taskList.append(closeBtn)
            closeBtn.addEventListener("click", function(){
                taskList.removeChild(closeBtn)
                taskList.removeChild(liDom)
            })
        }

        
       
       
        
            
    }else{
        alert("You can not add a new task withoout typing any charcters")
    }

       
    console.log(task.value)
}

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask(){
    if(inputBox.value.trim() === ""){
        alert("You Must Write Something..");
        return;
    }else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.setAttribute("title", "Delete task");
        list.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
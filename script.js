const InputBox = document.getElementById("input-box")
const Tasks = document.getElementById("tasks")

function addTask(){
    if (InputBox.value === ''){
        alert("Você precisa escrever algo")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = InputBox.value
        Tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    InputBox.value = '';
}
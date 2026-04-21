var getul=document.getElementById("ul");

function send(){
    var a=document.getElementById("inp")
    if(a.value.trim() === "") return; // Don't add empty tasks
    
    var li=document.createElement("li");
    var span=document.createElement("span");
    span.className = "task-text";
    var litext=document.createTextNode(a.value);
    span.appendChild(litext);
    li.appendChild(span);
    getul.appendChild(li);
    a.value="";
    
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "task-buttons";
    
    var delbtn=document.createElement("button");
    delbtn.className = "delete-btn";
    var deltext=document.createTextNode("Delete");
    delbtn.appendChild(deltext);
    buttonContainer.appendChild(delbtn);
    delbtn.setAttribute("onclick","del(this)");
    
    var editbtn=document.createElement("button");
    editbtn.className = "edit-btn";
    var edittext=document.createTextNode("Edit");
    editbtn.appendChild(edittext);
    buttonContainer.appendChild(editbtn);
    editbtn.setAttribute("onclick","edit(this)");
    
    li.appendChild(buttonContainer);
}

function delall(){
    getul.innerHTML="";
}

function del(e){
    e.parentNode.parentNode.remove();
}

function edit(e){
    var taskSpan = e.parentNode.previousElementSibling;
    var val=prompt("Enter Updated Value", taskSpan.textContent);
    if(val !== null && val.trim() !== "") {
        taskSpan.textContent = val;
    }
}

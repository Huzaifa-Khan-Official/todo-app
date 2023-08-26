var getul = document.getElementById("list");

function addLi(){
    var inputLi = document.getElementById("inp");
    var listLi = document.createElement("li");
    var listText = document.createTextNode(inputLi.value);
    var liDiv = document.createElement("div");
    var editbtn = document.createElement("button");
    var editbtnText = document.createTextNode("EDIT");
    var deletebtn = document.createElement("button");
    var deletebtnText = document.createTextNode("DELETE");

    editbtn.setAttribute("class", "btn btn-success");
    editbtn.setAttribute("onclick", "editLi(this.parentNode)")
    deletebtn.setAttribute("class", "btn btn-danger float-end ms-3");
    deletebtn.setAttribute("onclick", "delLi(this)")
    listLi.setAttribute("class", "list-group-item pt-2")
    liDiv.setAttribute("class", "listbtn float-end");


    editbtn.appendChild(editbtnText)
    deletebtn.appendChild(deletebtnText);
    listLi.appendChild(listText);
    getul.appendChild(listLi);
    listLi.appendChild(liDiv)
    liDiv.appendChild(editbtn);
    liDiv.appendChild(deletebtn);

    inputLi.value = "";
}

function delAll(){
    getul.innerHTML = "";
}

function delLi(n) {
    n.parentNode.parentNode.remove();
}

function editLi(e) {
    var editinputLi = prompt("Enter Edit value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editinputLi;
}
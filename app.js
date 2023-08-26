var getul = document.getElementById("list");

function addLi(){
    var inputLi = document.getElementById("inp");
    var listLi = document.createElement("li");
    var listText = document.createTextNode(inputLi.value);
    var listTextDiv = document.createElement("div");
    var divP = document.createElement("p");
    var liDiv = document.createElement("div");
    var editbtn = document.createElement("button");
    var editbtnText = document.createTextNode("EDIT");
    var deletebtn = document.createElement("button");
    var deletebtnText = document.createTextNode("DELETE");

    listTextDiv.setAttribute("class", "w-50 h-auto d-inline-block");
    editbtn.setAttribute("class", "btn btn-success");
    editbtn.setAttribute("onclick", "editLi(this)")
    deletebtn.setAttribute("class", "btn btn-danger float-end ms-3");
    deletebtn.setAttribute("onclick", "delLi(this)")
    listLi.setAttribute("class", "list-group-item pt-2")
    liDiv.setAttribute("class", "listbtn float-end");


    divP.appendChild(listText);
    listTextDiv.appendChild(divP);
    listLi.appendChild(listTextDiv);
    editbtn.appendChild(editbtnText)
    deletebtn.appendChild(deletebtnText);
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
    var editinputLi = prompt("Enter Edit value", e.parentNode.parentNode.firstChild.firstChild.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.firstChild.firstChild.nodeValue = editinputLi;
}
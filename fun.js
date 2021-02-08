var listcopy = [];
var len = 0;

function lists() {

    var link = document.getElementById("email").value;


    var node = document.createElement("LI");

    var textnode = document.createTextNode(link);
    var button = document.createElement("button");
    button.innerHTML = 'delete';
    node.appendChild(textnode);
    node.appendChild(button);
    document.getElementById("myList").appendChild(node);
    var ulist = document.getElementById("myList");
    listcopy.push(link);

    button.addEventListener("click", function() {
        var ulist = document.getElementById("myList");
        ulist.removeChild(node);
    });


}
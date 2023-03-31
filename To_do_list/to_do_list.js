
function myFunction()
{
    var userInput= document.getElementById("value").value;
    var list= document.getElementById("list");
    var li =document.createElement("li");
    var checkbox= document.createElement("input")
    
    checkbox.type="checkbox"
    list.appendChild(li);
    li.innerHTML=userInput;
    li.appendChild(checkbox)
    
}

list.addEventListener("change",function(e)
{
    e.target.parentElement.remove(); 
})

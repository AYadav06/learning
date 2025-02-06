

let currentIndex=1;
function addTodo(){
    const inp=document.querySelector('input');
    const todoText=inp.value.trim();

    if(todoText ==''){
        alert('Please enter a todo item.');
        return;
    }
// creating todo div
   const parentEl=document.getElementById('container');
   const newTodo=document.createElement("div");
   newTodo.setAttribute("id",'todo-'+currentIndex);

 // creating the heading
    const newHeading=document.createElement('h3');
      newHeading.textContent = currentIndex + '. ' + todoText;

      // creating the button
      const newButton = document.createElement('button');
      newButton.textContent = 'Delete';
      newButton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")");


      // Append elements to the new todo div
      newTodo.appendChild(newHeading);
      newHeading.style.backgroundColor="#27283b" ;
      newHeading.style.borderRadius="20px" ;
      newHeading.style.width="50%" ;
      newHeading.style.textAlign="center" ;
      newHeading.style.fontSize="1.4em" ;





      newTodo.appendChild(newButton);
      newButton.style.backgroundColor="#27283b" ;
      newButton.style.borderRadius="20px" ;
      newButton.style.width="50%" ;
      newButton.style.textAlign="center" ;
      newButton.style.color="#5e840b" ;
      newButton.style.border="0px solid" ;
      newButton.style.fontSize="1.4em" ;
       newButton.addEventListener("mouseout",function(){
        newButton.style.border="1px solid white";
       })





      


      // Append new todo to the parent element
      parentEl.appendChild(newTodo);
      newTodo.style.display="flex" ;
      newTodo.style.justifyContent="space-between" ;
      newTodo.style.gap="5px";
      newTodo.style.margin="10px";



      // Increment the index for the next todo item
      currentIndex++;

      // Clear the input field
      inp.value = '';
}
function deleteTodo(index){
    const element = document.getElementById("todo-" + index);
      if (element) {
        element.parentNode.removeChild(element);
      }
}
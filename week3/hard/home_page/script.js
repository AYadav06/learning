
   let currentIndex=1;
function addTodo(){
const inp=document.getElementById('inp');
const inpText=inp.value.trim();

if(inpText ===''){
    alert('Enter the text ..');
    return;
}
// fetching the todolist
const parentEl=document.getElementById('toDolist');

// creating a new div
const newDiv=document.createElement('div');
newDiv.setAttribute("id","Todo-"+currentIndex);
   // styling the div
newDiv.style.justifyContent="space-between" ;
newDiv.style.backgroundColor="#043d6c";
newDiv.style.borderRadius="20px" ;
newDiv.style.margin="5px" ;
newDiv.style.padding="10px" ;
newDiv.addEventListener("mouseenter",function(){
    btnDiv.style.display="grid";
})
newDiv.addEventListener("mouseleave",function(){
    btnDiv.style.display="none";
})

// creating a new div for button 
const btnDiv=document.createElement('div');
btnDiv.style.display="grid";
btnDiv.style.gridTemplateColumns="1fr 1fr 1fr";
btnDiv.style.gap="8px"
btnDiv.style.marginTop="10px";
btnDiv.style.padding="2px";
btnDiv.style.display="none";

// creating a heading 
const newHeading=document.createElement('h2');
newHeading.innerHTML= currentIndex +"."+inpText;
newHeading.style.fontSize="1.6em" ;
newHeading.style.fontWeight="500" ;

// creating a pending button 
const pendingBtn=document.createElement('button');
 pendingBtn.textContent='InProgress';
pendingBtn.setAttribute("onclick", "pendingTodos(" + currentIndex + ")");

// creating done button 
const doneBtn=document.createElement('button');
 doneBtn.textContent='Done';
doneBtn.setAttribute("onclick", "doneTodos(" + currentIndex + ")");

// creating a delete button 
const delBtn=document.createElement('button');
delBtn.textContent='Delete';
delBtn.setAttribute("onclick", "deleteTodos(" + currentIndex + ")");

// delete button style
delBtn.style.padding="auto";
delBtn.style.borderRadius="20px" ;
delBtn.style.backgroundColor="#023256";
delBtn.style.color="#DDE0E2" ;
delBtn.style.border="0px solid" ;
delBtn.style.fontSize="1.2em" ;
delBtn.style.fontWeight="500" ;

// Pending button style
pendingBtn.style.borderRadius="20px" ;
pendingBtn.style.backgroundColor="#023256";
pendingBtn.style.padding="0";
pendingBtn.style.color="#DDE0E2" ;
pendingBtn.style.border="0px solid" ;
pendingBtn.style.fontSize="1.2em" ;
pendingBtn.style.fontWeight="500" ;

//done button style
doneBtn.style.borderRadius="20px" ;
doneBtn.style.backgroundColor="#023256";
doneBtn.style.padding="auto";
doneBtn.style.color="#DDE0E2" ;
doneBtn.style.border="0px solid" ;
doneBtn.style.fontSize="1.2em" ;
doneBtn.style.fontWeight="500" ;

// appending the element to parent
newDiv.appendChild(newHeading);
btnDiv.appendChild(pendingBtn);
btnDiv.appendChild(doneBtn);
btnDiv.appendChild(delBtn);
newDiv.appendChild(btnDiv);
parentEl.appendChild(newDiv);

currentIndex++;
inp.value="";

}
function deleteTodos(index){
    const element =document.getElementById('Todo-'+index);
    if (element) {
        element.parentNode.removeChild(element);
      }
}

function pendingTodos(index){
    const element =document.getElementById('Todo-'+index);
    if (element) {
        document.getElementById('inProgress').appendChild(element);
      }
}

function doneTodos(index){
    const element =document.getElementById('Todo-'+index);
    if (element) {
        document.getElementById('done').appendChild(element);
      }
}
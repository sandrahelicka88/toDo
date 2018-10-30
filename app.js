//Create UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();
//DOM load event
document.addEventListener('DOMContentLoaded', getTasks)
//Creat function loadEventListeners
function loadEventListeners(){
  //add Task event
  form.addEventListener('submit', addTask);
  //remove Task event
  taskList.addEventListener('click',removeTask);
  //clear to do list event
  clearBtn.addEventListener('click', clearList);
  //filter task event
  filter.addEventListener('keyup', filterTasks);
//create function getTasks
function getTasks(){
  let tasks;
  if(localStorage.getItem(tasks)===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem(tasks));
  }

  tasks.forEach(function(task){
    //create li
  const li = document.createElement('li');
  //add className
  li.className = 'collection-item';
  //create textNode and append it to li
  li.appendChild(document.createTextNode(task));
  //create link element
  const link = document.createElement('a');
  //add className
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML='<i class="fa fa-remove"></i>';
  //append li to ul
  li.appendChild(link);
  
  })

}

//create function addTask
function addTask(e){
  if (taskInput.value === ''){
    alert('Enter your task');
  }
  //create li
  const li = document.createElement('li');
  //add className
  li.className = 'collection-item';
  //create textNode and append it to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create link element
  const link = document.createElement('a');
  //add className
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML='<i class="fa fa-remove"></i>';
  //append li to ul
  li.appendChild(link);
  taskList.appendChild(li);
  //store in Local Storage
  storeTaskInLocalStorage(taskInput.value);
  //clear input
  taskInput.value='';
  e.preventDefault();
}
}
//create function storeTaskInLocalStorage
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem(tasks)===null){
    tasks = [];
  }else{
    task = JSON.parse(localStorage.getItem(tasks));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

}




//create function removeTask
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if (confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove();
    }
    }
  }
//create function clearList
function clearList(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}
//create function filterTasks
function filterTasks(e){
  const text= e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!=-1){
      task.style.display='block';
    }else{
      task.style.display='none';
    }
  })
}




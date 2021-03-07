//to do APP
let tasks = [
  {
    name: 'eat',
    status: 'pending',
  },
  {
    name: 'code',
    status: 'pending',
  },
  {
    name: 'sleep',
    status: 'pending',
  },
  {
    name: 'washing',
    status: 'done',
  },
  {
    name: 'jogging',
    status: 'done',
  },
];
//code to display the array starts here:
let pendingUl = document.querySelector('#pending');
let doneUl = document.querySelector('#done');

tasks.forEach(function (task) {
  let li = document.createElement('li');
  li.textContent = task.name;
  //
  let divForDoneBtn = document.createElement('div');
  divForDoneBtn.className = 'div-ForDoneBtn';
  //
  let btnDone = document.createElement('button');
  btnDone.className = 'btn-done';
  btnDone.textContent = 'Done';
  //
  let icon = document.createElement('i');
  icon.className = 'fa fa-thumbs-o-up';
  //

  if (task.status == pendingUl.id) {
    pendingUl.append(li);
    pendingUl.append(divForDoneBtn);
    divForDoneBtn.append(btnDone);
  } else {
    doneUl.append(li);
    doneUl.append(divForDoneBtn);
    divForDoneBtn.append(icon);
    icon.addEventListener('click', moveTaskDone);
  }
});
console.log(tasks);

//code for click starts here:
let btnCreate = document.querySelector('#btn-create');
btnCreate.addEventListener('click', function () {
  let inputTask = document.querySelector('#input-task');
  let li = document.createElement('li');
  li.textContent = inputTask.value;
  let divForDoneBtn = document.createElement('div');
  divForDoneBtn.className = 'div-ForDoneBtn';
  let btnDone = document.createElement('button');
  btnDone.className = 'btn-done';
  btnDone.textContent = 'Done';
  if (inputTask.value.trim() == '') {
    inputTask.value = '';
    return alert('Please input new task !');
  }

  let pendingUl = document.querySelector('#pending');
  pendingUl.append(li);
  pendingUl.append(divForDoneBtn);
  divForDoneBtn.append(btnDone);
  btnDone.addEventListener('click', moveTask); //calling "moveTask" finction

  let arr = inputTask.value.trim().split(' ');
  tasks.push({
    name: arr.join(' '),
    status: pendingUl.id,
  });
  inputTask.value = '';
  console.log(tasks);
});

//for small btndone will supply this function to all small btn done
let btnDoneClick = document.querySelectorAll('.btn-done');
btnDoneClick.forEach(function (btn) {
  btn.addEventListener('click', moveTask);
});

// function to remove pending tasks
function moveTask() {
  let taskName = this.parentElement.previousSibling.textContent;
  let divForDoneBtn = document.createElement('div');
  divForDoneBtn.className = 'div-ForDoneBtn';
  //
  let icon = document.createElement('i');
  icon.className = 'fa fa-thumbs-o-up';
  //
  doneUl.append(this.parentElement.previousSibling); //move li to done
  doneUl.append(divForDoneBtn);
  divForDoneBtn.append(icon);
  icon.addEventListener('click', moveTaskDone); //calling moveTaskDone func
  //
  this.parentElement.remove();
  tasks.forEach(function (task) {
    //enter to tasks array change status of pending to done
    if (taskName == task.name && task.status == 'pending') {
      task.status = doneUl.id;
      console.log(tasks);
    }
  });
}

// function to remove donetasks
function moveTaskDone() {
  let taskName = this.parentElement.previousSibling.textContent;
  this.parentElement.previousSibling.remove();
  this.parentElement.remove();

  tasks.forEach(function (task, index) {
    // enter to tasks array to delete array

    if (taskName == task.name) {
      console.log(task);
      console.log(index);
      // if (index == 0) {
      //   tasks.splice(0, 1);
      // } else {
      tasks.splice(index, 1);
      // }
    }
  });
  console.log(tasks);
}

//function delete all

// function moveAll() {
//   tasks.forEach(function (task, index) {
//     // enter to tasks array to delete array

//     if (task.status == doneUl.id) {
//       if (index == 0) {
//         tasks.splice(0, 1);
//       } else {
//         tasks.splice(index, index);
//       }
//     }
//   });
//   console.log(tasks);
//   loopAgain();
// }

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');
// let ul = document.querySelector('ul');

// btn.addEventListener('click', function () {
//     let li = document.createElement('li');
//     let delBtn = document.createElement('button');

//     delBtn.classList.add('delete');
//     delBtn.innerHTML ="&minus;";
//     li.innerText = inp.value;
//     inp.value = "";
    
//     li.appendChild(delBtn);
//     ul.appendChild(li);
// });

// ul.addEventListener("click", function (event) {
//     if(event.target.nodeName == 'BUTTON') {
//         let delBtn = event.target;
//         let par = delBtn.parentElement;
//         par.remove();
//     }

// });

// let delBtns = document.querySelectorAll('.delete');
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

/////////////////////////////////// TRYING BY MYSELF ///////////////////////////////////
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');
let spns = document.querySelectorAll('span');

btn.addEventListener("click", function () {
    let task = document.createElement('li');
    if(inp.value == '') {
        alert("You must write something"); 
    } else {
        task.innerText = inp.value;
        inp.value = "";
        ul.appendChild(task);
    }
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    task.appendChild(span);
});

ul.addEventListener("click", function (event) {
    let listItem = event.target;

    if(listItem.nodeName == 'SPAN') {
        let par = listItem.parentElement;
        par.remove();
    } else if(listItem.classList.contains("checked")) {
        listItem.classList.remove("checked");
    } else {
        listItem.classList.add("checked");
    }
});
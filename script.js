const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addTask();
    }
});

function addTask(){
    if(inputBox.value.trim() === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        li.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                saveData();
            }
        });

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.addEventListener("click", function(e) {
            e.target.parentElement.remove();
            saveData();
        });

        li.appendChild(span);
        listContainer.appendChild(li);
    }

    inputBox.value = '';
    saveData();
}



function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

   
    const listItems = listContainer.querySelectorAll("li");
    listItems.forEach(li => {
      
        li.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                saveData();
            }
        });

       
        const span = li.querySelector("span");
        if (span) {
            span.addEventListener("click", function(e) {
                e.target.parentElement.remove();
                saveData();
                e.stopPropagation(); 
            });
        }
    });
}


showTask();
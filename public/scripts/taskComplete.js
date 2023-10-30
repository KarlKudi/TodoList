let listOfTasks = document.querySelectorAll(".task");

console.log(listOfTasks);

for (let i = 0; i < listOfTasks.length; i++) {
    const element = listOfTasks[i];

    element.querySelector("label").addEventListener("click", () =>{
        element.querySelector("label").classList.toggle("taskCompleted");
        element.querySelector('input[type="checkbox"]').checked = !element.querySelector('input[type="checkbox"').checked;
    });

    //Adds event listener to the checkbox, when it's pressed toggles the taskCompleted class on the label
    element.querySelector('input[type="checkbox"]').addEventListener("click", () =>{
        element.querySelector("label").classList.toggle("taskCompleted");
    });
}

// listOfTasks.forEach(element => {
//     //Adds event listener to label, when pressed it toggles the taskCompleted class on the label. It also toggles the checked state of the relevant checkbox to true/false
//     element.addEventListener("click", () =>{
//         element.classList.toggle("taskCompleted");
//         document.querySelector("#" + element.innerText + ' input[type="checkbox"]').checked = !document.querySelector("#" + element.innerText + ' input[type="checkbox"').checked;
//     });

//     //Adds event listener to the checkbox, when it's pressed toggles the taskCompleted class on the label
//     document.querySelector("#" + element.innerText + ' input[type="checkbox"]').addEventListener("click", () =>{
//         element.classList.toggle("taskCompleted");
//     });
// });
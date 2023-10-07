console.log("hello")

let listOfTasks = document.querySelectorAll(".task");

listOfTasks.forEach(element => {
    element.addEventListener("click", () =>{
        element.classList.toggle("taskCompleted");
    });
});
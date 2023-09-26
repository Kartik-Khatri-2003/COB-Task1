// Get references to the input field and task list
let inp = document.querySelector("input");
let list = document.querySelector(".task-list ul");

// Add an event listener to the input field for the "Enter" key press
inp.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        // Check if the input field is empty
        if(inp.value == ""){
            alert("Please write a task");
        }
        else {
            // Create elements for the task, delete button, and checkbox
            let task = document.createElement("ul");
            let dlt = document.createElement("button");
            let checkbox = document.createElement("button");

            // Set the task text and delete button text
            task.innerHTML = inp.value;
            dlt.innerHTML = "X";

            // Append the task, checkbox, and delete button to the task list
            list.appendChild(task);
            task.appendChild(checkbox);
            task.appendChild(dlt);

            // Add CSS classes to style the elements
            checkbox.classList.add("task-checkbox");
            dlt.classList.add("dlt");
            task.classList.add("task");

            // Clear the input field
            inp.value = "";

            // Add a click event listener to the delete button
            dlt.addEventListener("click", function(){
                // Remove the task when the delete button is clicked
                dlt.parentElement.remove();
            });

            // Add a click event listener to the task to mark it as complete
            task.addEventListener("click", function(){
                task.classList.toggle("task-complete");
                checkbox.classList.toggle("task-checkbox-tick");
            });
        }
    }
});

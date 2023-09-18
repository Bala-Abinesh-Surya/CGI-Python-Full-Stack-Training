allTasks = []

class Task{
    constructor(text, completed, id){
        this.text = text;
        this.completed = completed;
        this.id = id;
    }
}

function addNote(){
    text = document.getElementById('text-field').value;

    if (text.length == 0){
        alert('Note cannot be empty!')
    }
    else{
        var task = new Task(text, false, allTasks.length + 1)
        allTasks.push(task)

        displayTasks()

        // resetting the text field value
        document.getElementById('text-field').value = ''
    }
}

// setting the completed status of a note to true
function complete(id){
    if(allTasks[id-1].completed){
        // task is already completd
        alert('Task is already completed!')
    }
    else{
        // asking the user whether the task is completed
        var result = confirm('Change the status of the task?')

        if(result){
            // if the user selects OK
            allTasks[id-1].completed = true
        }
    }

    displayTasks()
}

function displayTasks(){
    // displaying the note
    list = document.getElementById('notes')

    // removing all the child nodes and displaying it once again
    const all = document.querySelectorAll('.note')
    all.forEach((element) => element.remove())

    allTasks.forEach((task) => {
        let li = document.createElement('li')
        li.innerHTML = task.text
        li.onclick = () => complete(task.id)

        if(task.completed){
            li.className = 'note completed'
        }
        else{
            li.className = 'note not-completed'
        }

        list.appendChild(li);
    })
}
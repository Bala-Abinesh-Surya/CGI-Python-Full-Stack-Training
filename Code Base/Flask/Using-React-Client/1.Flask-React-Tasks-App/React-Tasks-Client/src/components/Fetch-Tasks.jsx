export default function FetchTasks({tasks}){
    return (
        <div className="text-center">
            <h1>Tasks</h1>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </div>
    )
}
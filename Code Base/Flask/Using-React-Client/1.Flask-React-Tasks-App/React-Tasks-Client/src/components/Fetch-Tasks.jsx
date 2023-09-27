export default function FetchTasks({tasks}){
    return (
        <div className="text-center mt-3">
            {tasks.length != 0 && (
                <table className="table table-hover table-striped table-bordered caption-top">
                    <caption>All the tasks</caption>
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Update / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>Update</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
import TaskItem from './TaskItem';

export default function TaskList({ tasks, search, concludeTask, confirmEdit, confirmDelete }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
        {
            tasks.length ? (
                tasks.map((task) => (
                <TaskItem
                    task={task}
                    key={task.id}
                    concludeTask={concludeTask}
                    confirmEdit={confirmEdit}
                    confirmDelete={confirmDelete}
                />
                ))
            ) : (
                <h1 className="text-lg font-semibold text-center text-gray-700">
                    {
                        search.length ?
                            `Sua busca por "${search}" não obteve resultados` :
                            'Ainda não há tarefas'
                    }
                </h1>
            )
        }
    </div>
  );
}
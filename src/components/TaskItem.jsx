import { MinusCircleIcon, CheckCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function TaskList({ task, concludeTask, confirmEdit, confirmDelete }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 mx-4 my-2 bg-white rounded shadow-md">
      <div className="flex items-center w-full sm:w-auto">
        <button
          className="flex-shrink-0 p-2 text-white bg-gray-300 rounded hover:bg-blue-700"
          onClick={() => concludeTask(task.id)}
        >
          {task.done ? (
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
          ) : (
            <MinusCircleIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
        
        <h1 className={`flex-grow text-lg ml-4 ${task.done ? 'text-green-500' : 'text-gray-700'}`}>
          {task.name}
        </h1>
      </div>
      
      <div className="flex justify-end mt-2 sm:mt-0 w-full sm:w-auto space-x-2">
        <button
          className="p-2 text-white bg-gray-300 rounded hover:bg-blue-700"
          onClick={() => confirmEdit(task.id)}
        >
          <PencilSquareIcon className="w-6 h-6 text-gray-700" />
        </button>
        <button
          className="p-2 text-white bg-gray-300 rounded hover:bg-blue-700"
          onClick={() => confirmDelete(task.id)}
        >
          <TrashIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

import { PlusIcon } from '@heroicons/react/24/outline'

export default function Modal({ modalDetails, task, setTask, taskHandler, isOpen, confirmCreate, closeModal }) {

    return (
        <div>
            <div className="flex justify-center items-center mt-2">
                <button
                    onClick={confirmCreate}
                    className="flex justify-center items-center px-4 py-2 my-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    <PlusIcon className="w-5 h-5 mr-2 text-white" />
                    Nova tarefa
                </button>
            </div>

            {
                isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
                        <div className="relative w-full max-w-lg p-4 mx-4 sm:mx-auto bg-white rounded-lg shadow-lg">
                            <div className="flex items-center justify-between pb-3">
                                <h3 className="text-lg font-medium">{modalDetails.title}</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    X
                                </button>
                            </div>
                            {
                                modalDetails.operation !== 'delete' && (
                                    <div className="p-2">
                                        <input
                                            className="w-80 p-2 m-4 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Digite o nome da tarefa..."
                                            type="text"
                                            onChange={(e) => setTask(e.target.value)}
                                            value={task}
                                        />
                                    </div>

                                )
                            }

                            <div className="flex justify-end pt-2">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => taskHandler(modalDetails.operation)}
                                    className="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                                >
                                    {modalDetails.buttonLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

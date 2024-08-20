export default function Header({ completedTasks, totalTasks }) {
    return (
      <header className="flex items-center justify-center p-4 bg-blue-500 text-white rounded shadow-md">
        <h1 className="text-xl font-semibold">
          Tarefas ({completedTasks}/{totalTasks})
        </h1>
      </header>
    );
}
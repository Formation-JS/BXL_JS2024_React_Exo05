import { nanoid } from "nanoid";
import { useState } from "react";
import TaskForm from "../../components/task-form/task-form.jsx";
import TaskList from "../../components/task-list/task-list.jsx";

export default function TodoApp() {

    const [tasks, setTasks] = useState([]);

    const handleNewTask = (task) => {
        const taskToAdd = {
            id: nanoid(),
            ...task,
            isDone: false
        };
        
        setTasks(tasks => [taskToAdd, ...tasks]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    const handleFinishTask = (id) => {
        setTasks(tasks => tasks.map(task => task.id !== id ? task : {...task, isDone: true}))
    }

    return (
        <>
            <h1>Todo App !</h1>

            <h2>Ajouter une tache</h2>
            <TaskForm onTaskSubmit={handleNewTask} />

            <h2>Liste des taches</h2>
            <TaskList tasks={tasks}
                onTaskFinish={handleFinishTask}
                onTaskDelete={handleDeleteTask} />
        </>
    )
}
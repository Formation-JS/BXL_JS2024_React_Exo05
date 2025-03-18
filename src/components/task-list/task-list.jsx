import clsx from 'clsx';
import style from './task-list.module.css';

export default function TaskList({
    tasks = [],
    onTaskFinish = () => { },
    onTaskDelete = () => { }
}) {

    return (
        <ul className={style['task-list']}>
            {tasks.map(task => (
                <TaskItem key={task.id} {...task}
                    onFinish={onTaskFinish}
                    onDelete={onTaskDelete} />
            ))}
        </ul>
    );
};

function TaskItem({
    id, name, desc, prio, isDone,
    onFinish, onDelete
}) {

    return (
        <li className={clsx(style['task-item'], isDone && style['is-done'])}>
            <div className={style['task-info'] }>
                <p>{name} {prio === 'high' && <span className={style['urgent']}>(Urgent)</span>}</p>
                {desc && (
                    <p>{desc}</p>
                )}
            </div>
            <div className={style['task-btn']}>
                <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </li>
    );
}
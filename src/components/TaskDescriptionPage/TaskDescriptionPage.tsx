import './style.css';
import iconCross from '../../icons/cross.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { ITask } from '../../types/interfaces';
import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../types/TasksContext';

function TaskDescriptionPage() {
    let { id } = useParams();
    const {tasks, saveTasks } = useContext(TasksContext);

    const [description, setDescription] = useState<string>('');
    const [taskToEdit, setTaskToEdit] = useState<ITask | null>(null);
    const navigate = useNavigate();
    const regExpID = new RegExp(/^(0|[1-9]\d*)$/);

    const checkIfValidID = (idStr: string | undefined): boolean => {
        if (idStr === undefined || !regExpID.test(idStr))
            return false;
        let parsedID = parseInt(idStr);
        const taskFromExisting = tasks.find(
            (value) => value.id === parsedID);
        setTaskToEdit(taskFromExisting ? taskFromExisting : null);
        setDescription(taskFromExisting ? taskFromExisting.description : '');
        return taskFromExisting !== undefined;
    };

    useEffect((): void => {
        checkIfValidID(id);
     }, [id])

    useEffect((): void => {
        checkIfValidID(id);
    }, [tasks]);

    if (taskToEdit) {
        return (
            <main className='task-description-page'>
                <div className='task-description-page-container'>
                    <div className='task-description'>
                        <div className='task-description-header'>
                            <h1 className='text task-description-header__title'>
                                {taskToEdit?.title}
                            </h1>
                            <button className='button task-description-header__button-close' 
                                onClick={() => {
                                    navigate('../');
                                }}
                            >
                                <img className='task-description-header__icon-cross' src={iconCross} alt='Arrow' />
                            </button>
                        </div>
                        <textarea className='text task-description__textarea-description' 
                            placeholder='This task has no description'
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                                taskToEdit.description = event.target.value;
                                saveTasks();
                            }}
                        >
                        </textarea>
                    </div>
                </div>
            </main>
        );
    } else {
        return (
            <main className='task-description-page'>
                <div className='task-description-page-container'>
                    No task found with this ID.
                </div>
            </main>
        );
    }
}

export default TaskDescriptionPage;
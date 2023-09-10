import '../../index.css';
import './style.css';
import iconPlus from '../../icons/task-folder-plus.svg';

import TaskItem from '../TaskItem/TaskItem';
import { IFolderProps, ITask } from '../../types/interfaces';
import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../types/TasksContext';

enum FolderState {
    Idle,
    AddNewCard,
    ChangeFolderOfExisiting
};

function TaskFolder(folderProps: IFolderProps) {
    const { addTask } = useContext(TasksContext);
    const [folderState, setFolderState] = useState<FolderState>(FolderState.Idle);
    const [addCardTask, setAddCardTask] = useState<ITask | null>(null);
    const [addCardTitle, setAddCardTitle] = useState<string>('');

    useEffect((): void => {
        setAddCardTask(folderProps.potentialTasks.length === 0
            ? null :
            folderProps.potentialTasks[0]);
    }, [folderProps.potentialTasks]);

    const getUniqueID = (): number => {
        return Math.round((Date.now() + Math.random()) * 1000);
    };

    const displayControlItemsByState = (): JSX.Element[] => {
        const items: JSX.Element[] = [];
        switch(folderState) {
            case FolderState.Idle: {
                items.push(
                    <button 
                        disabled={folderProps.isInitialTab 
                            ? false : folderProps.potentialTasks.length === 0} 
                        className='button task-folder__button-add-card'
                        key={11}
                        onClick={() => {
                            setFolderState(folderProps.isInitialTab 
                                ? FolderState.AddNewCard 
                                : FolderState.ChangeFolderOfExisiting);
                        }}
                    >
                        <img className='task-folder__icon-plus' src={iconPlus} alt='Plus' />
                        <span className='text task-folder__button-text'>
                            Add card
                        </span>
                    </button>
                );
                break;
            }
            case FolderState.AddNewCard: {
                items.push(
                    <input className='text task-folder__input-card-name'
                        value={addCardTitle}
                        key={12}
                        placeholder='______________________________'
                        onChange={(event) => {
                            setAddCardTitle(event.target.value);
                        }}
                    >
                    </input>
                );
                items.push(
                    <button className='text button task-folder__button-submit'
                        disabled={addCardTitle.trim() === ''}
                        key={13}
                        onClick={() => {
                            const task: ITask = {
                                id: getUniqueID(),
                                group: folderProps.group,
                                description: '',
                                title: addCardTitle.trim()
                            };
                            addTask(task);
                            setAddCardTitle('');
                            setFolderState(FolderState.Idle);
                        }}
                    >
                        Submit
                    </button>
                );
                break;
            }
            case FolderState.ChangeFolderOfExisiting: {
                items.push(
                    <select className='text task-folder__select-existing-card'
                        key={14}
                        onChange={(event) => {
                            const index = event.target.selectedIndex;
                            setAddCardTask(folderProps.potentialTasks[index]);
                        }}
                    >
                        {folderProps.potentialTasks.map(
                            (task) => <option>{task.title}</option>
                            )}
                    </select>
                );
                items.push(
                    <button className='text button task-folder__button-submit'
                        key={15}
                        disabled = {addCardTask === null}
                        onClick = {() => {
                            if (!addCardTask)
                                return;
                            addCardTask.group = folderProps.group;
                            addTask(addCardTask);
                            setFolderState(FolderState.Idle);
                        }}
                    >
                        Submit
                    </button>
                );
                break;
            }
        };
        return items;
    }

    return (
        <div className='task-folder'>
            <p className='text task-folder__header'>
                {folderProps.title}
            </p>
            <div className='task-folder__tasks'>
                {
                    folderProps.tasks.map((task: ITask) => (
                        <TaskItem 
                            id = {task.id}
                            title = {task.title}
                            key = {task.id}
                        />
                    ))
                }
                {displayControlItemsByState()}
            </div>
        </div>
    );
}

export default TaskFolder;
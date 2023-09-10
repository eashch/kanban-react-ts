import { useContext } from 'react';
import { EFolders, ITask } from '../../types/interfaces';
import TaskFolder from '../TaskFolder/TaskFolder';
import './style.css';
import { TasksContext } from '../../types/TasksContext';

function Kanban() {
    const { tasks } = useContext(TasksContext);

    const getFolderTasks = (folderType: EFolders): ITask[] => {
        return (
            tasks.filter((task) => task.group === folderType)
        );
    };

    return (
        <main className='kanban'>
            <div className='kanban-container'>
                <TaskFolder 
                    group = {EFolders.Backlog}
                    title = 'Backlog'
                    tasks = {getFolderTasks(EFolders.Backlog)}
                    potentialTasks = {[]}
                    key = {0}
                    isInitialTab = {true}
                />
                <TaskFolder
                    group = {EFolders.Ready}
                    title = 'Ready'
                    tasks = {getFolderTasks(EFolders.Ready)}
                    potentialTasks = {getFolderTasks(EFolders.Backlog)}
                    key = {1}
                    isInitialTab = {false}
                />
                <TaskFolder 
                    group = {EFolders.InProgress}
                    title = 'In Progress'
                    tasks = {getFolderTasks(EFolders.InProgress)}
                    potentialTasks = {getFolderTasks(EFolders.Ready)}
                    key = {2}
                    isInitialTab = {false}
                />
                <TaskFolder
                    group = {EFolders.Finished}
                    title = 'Finished'
                    tasks = {getFolderTasks(EFolders.Finished)}
                    potentialTasks = {getFolderTasks(EFolders.InProgress)}
                    key = {3}
                    isInitialTab = {false}
                />
            </div>
        </main>
    );
}

export default Kanban;
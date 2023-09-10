import { render, screen } from '@testing-library/react';
import TaskDescriptionPage from './TaskDescriptionPage';
import { TasksContext } from '../../types/TasksContext';
import { EFolders, ITask } from '../../types/interfaces';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('TaskDescriptionPage', () => {
    const task: ITask = {
        id: 1,
        title: 'task1',
        description: 'description',
        group: EFolders.Backlog
    };

    const {container} = render(
        <TasksContext.Provider value={{ 
            tasks: [
                task,
                task,
                task
            ], 
            addTask: () => {}, 
            loadTasks: () => {}, 
            saveTasks: () => {} 
        }}>
            <MemoryRouter initialEntries={['/tasks/1']}>
                <Routes>
                    <Route path='/tasks/:id' 
                        element={<TaskDescriptionPage />} 
                    />
                </Routes> 
            </MemoryRouter>
        </TasksContext.Provider>
    );

    const title = screen.getByText(task.title);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(task.description);
    expect(description).toBeInTheDocument();
});
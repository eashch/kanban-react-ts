import { fireEvent, render, screen } from '@testing-library/react';
import TaskFolder from './TaskFolder';
import { EFolders, ITask } from '../../types/interfaces';
import { BrowserRouter } from 'react-router-dom';

test('TaskFolder', () => {
    const titleBacklog = 'Backlog';
    const titleReady = 'Ready';
    const task: ITask = {
        id: 1,
        title: 'task1',
        description: 'description',
        group: EFolders.Backlog
    };
    const {container} = render(
        <BrowserRouter>
            <TaskFolder 
                group={EFolders.Backlog}
                title={titleBacklog}
                tasks={[task]}
                potentialTasks={[]}
                isInitialTab={true}
            />
            <TaskFolder 
                group={EFolders.Ready}
                title={titleReady}
                tasks={[]}
                potentialTasks={[task]}
                isInitialTab={false}
            />
        </BrowserRouter>
    );
    const titleFolder1 = screen.getByText(titleBacklog);
    expect(titleFolder1).toBeInTheDocument();

    const tasksContainers = container.getElementsByClassName(
        'task-folder__tasks');
    expect(tasksContainers.length).toBe(2);

    const addCardButtons = container.getElementsByClassName(
        'task-folder__button-add-card');

        
    expect(tasksContainers[0].childNodes.length).toBe(2);
    expect(addCardButtons.length).toBe(2);
    fireEvent.click(addCardButtons[0]);

    const submitButtons = container.getElementsByClassName(
        'task-folder__button-submit');
    expect(submitButtons.length).toBe(1);
    expect(submitButtons[0]).toBeDisabled();
    const inputTaskNames = container.getElementsByClassName(
        'task-folder__input-card-name');
    expect(inputTaskNames.length).toBe(1);
    
    const testTaskTitle = 'testTask';
    fireEvent.change(inputTaskNames[0], { target: { value: testTaskTitle } });
    expect(submitButtons[0]).toBeEnabled();
    fireEvent.click(submitButtons[0]);    


    const titleFolder2 = screen.getByText(titleReady);
    expect(titleFolder2).toBeInTheDocument();
    expect(tasksContainers[1].childNodes.length).toBe(1);
    fireEvent.click(addCardButtons[1]);

    const selectElems = container.getElementsByClassName(
        'task-folder__select-existing-card');
    expect(selectElems.length).toBe(1);
    expect(selectElems[0].childNodes.length).toBe(1);
    expect(selectElems[0].childNodes[0].textContent).toBe(task.title);
    const submitButtons2 = container.getElementsByClassName(
        'task-folder__button-submit');
    expect(submitButtons2.length).toBe(1);
    expect(submitButtons2[0]).toBeEnabled();
    fireEvent.click(submitButtons2[0]);
});

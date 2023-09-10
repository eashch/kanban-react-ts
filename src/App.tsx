import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Kanban from './components/Kanban/Kanban';
import Layout from './components/Layout/Layout';
import TaskDescriptionPage from './components/TaskDescriptionPage/TaskDescriptionPage';
import { useEffect, useState } from 'react';
import { EFolders, ITask } from './types/interfaces';
import { TasksContext } from './types/TasksContext';

function App() {
    const localStorageKey = 'tasks';
    const [activeTasks, setActiveTasks] = useState<number>(0);
    const [finishedTasks, setFinishedTasks] = useState<number>(0);
    const [allTasks, setAllTasks] = useState<ITask[]>([]);

    const addTaskToTasks = (task: ITask): void => {
        const foundTask = findTaskByID(task.id);
        if (foundTask !== undefined) {
            setAllTasks(allTasks => [...(allTasks.filter(taskFromAll => taskFromAll.id !== task.id)), task]);
        } else {
            setAllTasks(allTasks => [...allTasks, task]);
        }
    };

    const getNumberOfFinishedTasks = (): number => {
        return allTasks.reduce(
            (accumulator, task) => accumulator + Number(task.group === EFolders.Finished), 
            0);
    }

    const getNumberOfActiveTasks = (): number => {
        return (allTasks.length - getNumberOfFinishedTasks());
    }

    const findTaskByID = (id: number) : ITask | undefined => {
        return allTasks.find((value) => value.id === id);
    }

    const updateStatistics = (): void => {
        setActiveTasks(getNumberOfActiveTasks());
        setFinishedTasks(getNumberOfFinishedTasks());
    };

    const setMockData = (): void =>  {
        setAllTasks([
            {
                id: 0,
                title: 'Login page – performance issues',
                description: '',
                group: EFolders.Backlog,
            },
            {
                id: 100,
                title: 'Sprint bugfix',
                description: 'Something...',
                group: EFolders.Backlog
            },
            {
                id: 200,
                title: 'Shop page – performance issues',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 300,
                title: 'Checkout bugfix',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 400,
                title: 'Shop bug1',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 500,
                title: 'Shop bug2',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 600,
                title: 'Shop bug3',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 700,
                title: 'Shop bug4',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 800,
                title: 'Shop bug5',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 900,
                title: 'Shop bug6',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 1000,
                title: 'Shop page – performance issues',
                description: '',
                group: EFolders.Ready
            },
            {
                id: 1100,
                title: 'User page – performance issues',
                description: '',
                group: EFolders.InProgress
            },
            {
                id: 1200,
                title: 'Auth bugfix',
                description: '',
                group: EFolders.InProgress
            },
            {
                id: 1300,
                title: 'Main page – performance issues',
                description: '',
                group: EFolders.Finished
            },
            {
                id: 1400,
                title: 'Main page bugfix',
                description: '',
                group: EFolders.Finished
            }
        ]);
    }

    const loadAllTasks = (): void => {
        const loadedTasksStr = localStorage.getItem(localStorageKey);
        if (loadedTasksStr !== null) {
            const parsedTasks = JSON.parse(loadedTasksStr);
            if (parsedTasks.length !== 0)
                setAllTasks(parsedTasks);
            else
                setMockData();
        } else
            setMockData();
    }

    const saveAllTasks = (): void => {
        if (allTasks.length === 0)
            return;
        localStorage.setItem(localStorageKey, 
            JSON.stringify(allTasks));
    }

    useEffect((): void => {
        loadAllTasks();
    }, []);

    useEffect((): void => {
        updateStatistics();
        saveAllTasks();
    }, [allTasks]);

    return (
        <BrowserRouter>
            <TasksContext.Provider value={{ 
                tasks: allTasks, 
                addTask: addTaskToTasks, 
                loadTasks: loadAllTasks, 
                saveTasks: saveAllTasks 
            }}>
                <Layout 
                    HeaderComponent = {() => <Header />}
                    ContentComponent = {() => {
                        return (
                            <Routes>
                                <Route path='/' 
                                    element = {<Kanban />}
                                >
                                </Route>
                                <Route path='/tasks/:id' 
                                    element = {<TaskDescriptionPage />}
                                >
                                </Route>
                            </Routes>
                        );

                    }}
                    FooterComponent = {() => <Footer 
                        activeTasks = {activeTasks}
                        finishedTasks = {finishedTasks}
                        author = 'eashch'
                        year = {2023}
                    />}
                />
            </TasksContext.Provider>
        </BrowserRouter>
    );
}

export default App;

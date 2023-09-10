import { createContext } from "react";
import { ITask } from "./interfaces";

type TasksContext = {
    tasks: ITask[];
    addTask: (newTask: ITask) => void;
    loadTasks: () => void;
    saveTasks: () => void;
}

const defaultValue: TasksContext = {
    tasks: [],
    addTask: () => {},
    loadTasks: () => {},
    saveTasks: () => {}
}

export const TasksContext = createContext<TasksContext>(defaultValue);
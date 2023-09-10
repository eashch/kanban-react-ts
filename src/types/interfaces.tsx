import { ReactNode } from "react";

export interface ILayoutProps {
    HeaderComponent: () => ReactNode;
    ContentComponent: () => ReactNode;
    FooterComponent: () => ReactNode;
}

export enum EFolders {
    Backlog,
    Ready,
    InProgress,
    Finished
}

export interface ITask {
    id: number,
    title: string,
    description: string
    group: EFolders
}

export interface ITaskFolderItem {
    id: number,
    title: string
}

export interface IFolderProps {
    group: EFolders,
    title: string,
    tasks: ITask[],
    potentialTasks: ITask[],
    isInitialTab: boolean
}

export interface IFooterProps {
    activeTasks: number,
    finishedTasks: number,
    author: string,
    year: number
}

export {}
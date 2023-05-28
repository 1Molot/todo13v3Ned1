import axios from 'axios';
import {CreateTasks, DeleteTasks, GetTasks, UpdateTasksTitle} from "../stories/tasks-api.stories";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})



export const tasksApi = {
    getTasks(todoId:string){
        return instance.get<TaskType>(`/todo-lists/${todoId}/tasks`)
    },
    createTasks(title:string,todoId:string){
        return instance.post<ResponseType<{item: TaskType}>>(`/todo-lists/${todoId}/tasks`, {title})
    },
    deleteTasks(todoId:string,taskId:string){
        return instance.delete<ResponseType>(`/todo-lists/${todoId}/tasks/${taskId}`)
    },
    updateTasks(todoId:string,taskId:string,title:string){
        return instance.put<ResponseType>(`/todo-lists/${todoId}/tasks/${taskId}`,{title})
    }
}

type TaskType = {
    resultCode: number
    messages:  string []
    data: {}
}
type ResponseType<T = {}> = {
    resultCode: number
    // fieldErrors: []
    messages: string[]
    data: {
        item: T
    }
}


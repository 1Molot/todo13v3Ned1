import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistsApi} from '../api/todolists-api';
import {tasksApi} from "../api/tasks-api";

export default {
    title: 'API'
}


//withCredentials, для того чтобы при запросе мы отправляли куки с нашими запросом
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'a430dbb3-ea4e-4b78-acc2-443c3587ca64'
        tasksApi.getTasks(todoId).then((res)=> {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'a430dbb3-ea4e-4b78-acc2-443c3587ca64'
        const title='Js'
        tasksApi.createTasks(title,todoId).then((res)=> {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'a430dbb3-ea4e-4b78-acc2-443c3587ca64'
        const tasksId = '34c13e1d-b0d2-4b8d-b58e-707526ac2372'
        tasksApi.deleteTasks(todoId,tasksId).then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTasksTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const tasksId = '34c13e1d-b0d2-4b8d-b58e-707526ac2372'
        const title = 'Milk'
        const todoId = 'a430dbb3-ea4e-4b78-acc2-443c3587ca64'
        tasksApi.updateTasks(todoId,tasksId,title).then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
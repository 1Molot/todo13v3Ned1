import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistsApi} from '../api/todolists-api';

export default {
    title: 'API'
}


//withCredentials, для того чтобы при запросе мы отправляли куки с нашими запросом
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.gettodolists().then((res)=> {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title='Js'
        todolistsApi.createTodolist(title).then((res)=> {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '6a0a00b4-758f-4877-a6f1-bd2f9ce3e63a'
        todolistsApi.deleteTodolist(todoId).then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '123b5027-7ca1-4a84-b2de-fda924751b0e'
        const title = 'Milk'
        todolistsApi.updateTodolist(todoId,title).then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
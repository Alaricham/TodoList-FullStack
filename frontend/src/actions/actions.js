import axios from 'axios';
const url = process.env.REACT_APP_DBURL;

// Actions

const add = (data) => ({
    type: 'ADD',
    payload: data
})

const remove = (id) => ({
    type: 'REMOVE',
    payload: id
})

const check = (data) => ({
    type: 'CHECK',
    payload: data
})

const clearField = () => ({
    type: 'CLEAR'
})

const update = () => ({
    type: 'UPDATE'
})

const getTodos = (list) => ({
    type: 'GET',
    payload: list
})

export const filter = (filter) => ({
    type: 'FILTER',
    payload: filter
})


//Async Functions

export const startGet = () => {
    return (dispatch) => (
        axios.get(url).then(response => {
            dispatch(getTodos(response.data));
        }).then(() => dispatch(update()))
    )
}

export const startAdd = (data) => {
    const payload = {
        description: data,
        completed: false
    };
    return (dispatch) => {
        axios.post(url, payload).then(response => {
            dispatch(add(response.data));
        }).then(() => dispatch(update()));
    }
}

export const startRemove = (id) => {
    return (dispatch) => {
        axios.delete(url, {
            data: [{
                id
            }]
        }).then(response => {
            dispatch(remove(id))
        }).then(() => dispatch(update()));
    }
}

export const startCheck = (data) => {
    let payload = { ...data,
        completed: !data.completed
    }
    return (dispatch) => {
        axios.put(url, {
            data: {
                payload
            }
        }).then(response => {
            dispatch(check(payload));
        }).then(() => dispatch(update()));
    }
}

export const startClear = (items) => {
    let newList = items.filter(x => x.completed === true)
    return (dispatch) => {
        axios.delete(url, {
            data: newList
        }).then(response => {
            dispatch(clearField())
        }).then(() => dispatch(update()));
    }
}
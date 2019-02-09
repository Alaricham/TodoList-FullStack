const initialState = {
    items: [],
    completed: 0,
    pending: 0,
    total: 0,
    filter: "Total"
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state,
                items: state.items.concat(action.payload)
            }
        case 'GET':
            return { ...state,
                items: action.payload
            }
        case 'REMOVE':
            let newList = state.items.filter(item => item.id !== action.payload);
            return { ...state,
                items: newList
            }
        case 'UPDATE':
            let counter = 0,
                newTotal = state.items.length;
            state.items.forEach(x => x.completed ? counter += 1 : counter);
            return { ...state,
                total: newTotal,
                completed: counter,
                pending: newTotal - counter
            }
        case 'CHECK':
            let newItems = state.items;
            let found = newItems.findIndex(todo => todo.id === action.payload.id);
            newItems[found].completed = !newItems[found].completed;
            return { ...state,
                items: newItems
            }
        case 'CLEAR':
            let items = state.items.filter(x => x.completed !== true)
            return { ...state,
                items
            }
        case 'FILTER':
            return { ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;
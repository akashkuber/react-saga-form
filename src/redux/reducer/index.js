import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCT } from '../action'
const reducer = (state = [], action) => {
    switch (action.type) {

        case ADD_PRODUCT: 
            state.push(action.value);
            return [...state];
        case DELETE_PRODUCT:
            let indexValue = null;
            state.forEach((item, index) => {
                indexValue = (item.id === action.value) ? index : null;
            })
            state.splice(indexValue, 1);
            return [...state];
        case FETCH_PRODUCT:
            return [...state];
        default:
            return [...state];
    }
}

export default reducer;
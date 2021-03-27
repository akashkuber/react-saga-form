export const ADD_PRODUCT = 'ADD_PRODUCT';
export const  DELETE_PRODUCT = 'DELETE_PRODUCT';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export const fetchProductAction = () =>{
    return {
        type: FETCH_PRODUCT
    }
}

export const addProductAction = product => {
    return {
        type: ADD_PRODUCT,
        value: product
    }
}

export const deleteProductAction = id => {
    return {
        type: DELETE_PRODUCT,
        value: id
    }
}
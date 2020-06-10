
import { createStore } from 'redux';

// -------------------- Actions --------------------- //

const ADD_MATRIX    = 'ADD_MATRIX';
const DELETE_MATRIX = 'DELETE_MATRIX';

// ----------------- Action creators ---------------- //

export const addMatrix = (matrixObj) => {
    return {
        type : ADD_MATRIX,
        matrixObj
    };
};

export const deleteMatrix = (matrixObj) => {
    return {
        type : DELETE_MATRIX,
        matrixObj
    };
};

// -------------------- Reducers -------------------- //

const matrixLibrary = (state = [], action) => {
    const { matrixObj, type } = action;

    switch(type) {
        case ADD_MATRIX : 
            return state.concat(matrixObj);
        case DELETE_MATRIX : 
            return state.filter(mtx => mtx !== matrixObj)
        default :
            return state;
    }
};

export default createStore(matrixLibrary);

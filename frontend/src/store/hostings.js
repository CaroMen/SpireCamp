import { csrfFetch } from './csrf';

const GET_HOSTINGS = "hostings/GET_HOSTINGS";

const findHostings = (list) => {
    return {
        type: GET_HOSTINGS,
        list
    }
};

// for the list of hostings
export const getHostings = () => async (dispatch) => {
    const res = await csrfFetch('/api/hostings');
    if (res.ok) {
        let hostings = await res.json();
        dispatch(findHostings(hostings));
    }
};

let initialState = {
    list: []
};

const hostingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOSTINGS:
            let allHostings = [];
            action.list.forEach(hosting => {
                allHostings[hosting.id] = hosting;
            });
            return {
                allHostings,
                ...state,
                list: action.list
            };

        default:
            return state;
    }
};


export default hostingReducer;

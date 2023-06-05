export const INITIAL_SATATE = {
    loading: false,
    Error: false,
    Data: [],
}



export const ACTIONS = {
    GET_DATA: "GET",
}


export const Inforadiuse = (state,action) => {
    switch (action.type) {
        case ACTIONS.GET_DATA:
            return {
                loading: true,
                Data: action.Data,
                Error: true
            }
        default:
            return state;
    }
}
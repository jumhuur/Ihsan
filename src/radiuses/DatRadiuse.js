export const INITIAL_SATATE = {
    loading: false,
    Error: false,
    Data: []
}



export const ACTIONS = {
    "GET_DATA": "GET",
    "REGISTER": "REGISTER",
    "lOGOUT": "LOGOUT",
    "SETDATA": "SETDATA"
}


export const DataRadiuse = (state,action) => {
    switch (action.type) {
        case ACTIONS.GET_DATA:
            return {
                loading: true,
                Data: action.payload,
                Error: true
            }
        default:
            return state;
    }

}
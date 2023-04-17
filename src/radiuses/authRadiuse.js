export const INITIAL_SATATE = {
    loading: false,
    Error: false,
    Data: null,
    Caafimaad: [],
    Waxbarsho: [],
    Cunto: [],
    Hoy: [],
    Daryeel: [],
}



export const ACTIONS = {
    "LOGIN": "LOGIN",
    "REGISTER": "REGISTER",
    "lOGOUT": "LOGOUT",
    "SETDATA": "SETDATA",
    GET_DATA: "GET"
}


export const AuthRadiuse = (state,action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                loading: true,
                Data: action.payload,
                Error: true
            }

        case ACTIONS.lOGOUT:
            return {
                loading: true,
                Data: null,
                Error: true
            }

        case ACTIONS.REGISTER:
            return {
                loading: true,
                Data: action.payload,
                Error: true
            }
        case ACTIONS.GET_DATA:
            return {
                loading: true,
                Caafimaad: action.Caafimaad,
                Waxbarsho: action.Waxbarsho,
                Cunto: action.Cunto,
                Hoy: action.Hoy,
                Daryeel: action.Daryeel,
                Error: true
            }
    
        default:
            return state;
    }

}
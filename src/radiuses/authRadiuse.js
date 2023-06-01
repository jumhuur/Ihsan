export const INITIAL_SATATE = {
    loading: false,
    Error: false,
    Data: null,
    Caafimaad: [],
    Waxbarasho: [],
    Cunto: [],
    Hoy: [],
    Daryeel: [],
    CountTabaruc: 0,
    CountUsres: 0,
    TotalTabaruc: 0,
    OneProject: []
}



export const ACTIONS = {
    "LOGIN": "LOGIN",
    "REGISTER": "REGISTER",
    "lOGOUT": "LOGOUT",
    "SETDATA": "SETDATA",
    GET_DATA: "GET",
    GET_ONE: "GET_ONE"
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
                Waxbarasho: action.Waxbarasho,
                Cunto: action.Cunto,
                Hoy: action.Hoy,
                Daryeel: action.Daryeel,
                CountTabaruc: action.CountTabaruc,
                CountUsres: action.CountUsres,
                TotalTabaruc:action.TotalTabaruc,
                Error: true
            }

        case ACTIONS.GET_ONE :
            return {
                loading: true,
                OneProject: action.OneProject,
                Error: true
            }
        
        default:
            return state;
    }

}
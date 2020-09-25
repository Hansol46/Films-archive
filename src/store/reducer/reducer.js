export const initialState ={
    loading: true,
    movies: [],
    error: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'SEARCH_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case 'SEARCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state
    }
}
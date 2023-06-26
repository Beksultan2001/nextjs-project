export const movieReducer = (state, action) => {
    var movieId=action.movie.id;
    if (!state[movieId]){
        state = {
            ...state,
            [movieId]: {
                ...action.movie,
                count: 0
            }
        };
    }
    switch (action.type) {
      case 'INCREMENT':
        let amount=state[movieId].count;
        if (amount>=30){
            return state;
        }
        return {
            ...state,
            [movieId]: {
                ...state[movieId],
                count: state[movieId].count + 1
            }
        };
      case 'DECREMENT':
        if (state[movieId].count > 0) {
            return {
                ...state,
                [movieId]: {
                    ...state[movieId],
                    count: state[movieId].count - 1
                }
            };
        } else {
            return state;
        }
      case 'REMOVE':
        const newState = {...state};
        delete newState[movieId];
        return newState;
      default:
        return state;
    }
};

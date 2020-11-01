export const initialState = {
  term: null,
}

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
}

const searchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      }

    default:
      break
  }
}

export default searchReducer

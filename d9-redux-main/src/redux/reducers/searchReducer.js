import { SAVE_RESULTS, SEARCH_VALUE } from '../actions'

const initialState = {
  results: [],
  value: '',
}

const searchReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case SAVE_RESULTS: {
      return {
        ...currentState,
        results: action.payload,
      }
    }
    case SEARCH_VALUE: {
      return {
        ...currentState,
        value: action.payload,
      }
    }
    default: {
      return currentState
    }
  }
}

export default searchReducer

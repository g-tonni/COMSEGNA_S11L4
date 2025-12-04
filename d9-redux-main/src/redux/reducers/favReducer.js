import { ADD_TO_FAVLIST, REMOVE_FROM_FAVLIST } from '../actions'

const initialState = {
  content: [],
}

const favReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVLIST: {
      return {
        ...currentState,
        content: [...currentState.content, action.payload],
      }
    }
    case REMOVE_FROM_FAVLIST: {
      return {
        ...currentState,
        content: currentState.content.filter((element) => {
          if (element === action.payload) {
            return false
          } else {
            return true
          }
        }),
      }
    }
    default: {
      return currentState
    }
  }
}

export default favReducer

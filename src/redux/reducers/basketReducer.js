const initialState = {
    items: [],
  };
  
  const basketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      // Add more cases for other actions if needed
      default:
        return state;
    }
  };
  
  export default basketReducer;
  
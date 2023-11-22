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
      case 'REMOVE_FROM_BASKET':
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          items: updatedItems,
        };
      default:
        return state;
    }
  };
  
  export default basketReducer;
  
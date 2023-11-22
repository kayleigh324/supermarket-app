const initialState = {
  items: [],
  totalItems: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingItem = state.items.find((item) => item.id === action.payload.id);
    //check if item already exists in basket, add quantity
      if (existingItem) {
        return {
          ...state,
          //updating UI basket
          totalItems: state.totalItems + 1,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          //updating UI basket with -1
          totalItems: state.totalItems + 1,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
//reducer to remove from basket, reducing quantity, then item once it is 1
    case 'REMOVE_FROM_BASKET':
      const updatedItems = state.items.reduce((acc, item) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        } else if (item.id !== action.payload.id) {
          acc.push(item);
        }
        return acc;
      }, []);

      return {
        ...state,
        totalItems: Math.max(0, state.totalItems - 1),
        items: updatedItems,
      };

    default:
      return state;
  }
};

export default basketReducer;

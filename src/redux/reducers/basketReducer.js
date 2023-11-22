const initialState = {
  items: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

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
        items: updatedItems,
      };

    // Add more cases for other actions if needed
    default:
      return state;
  }
};

export default basketReducer;
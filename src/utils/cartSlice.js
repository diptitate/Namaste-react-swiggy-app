import { createSlice } from "@reduxjs/toolkit";

//const initialState = { items: [] };

const cartSlice = createSlice({     //
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {     //action-addItem, reducer function will modify slice of ur store. 

            //mutating the state here.RTK uses immer BTS(behind the seen)
            state.items.push(action.payload);

        }, 
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            //RTK - either Mutate the existing  state or return a new State
            // state.items.length = 0; // originalState = []
      
            return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
          },
    },

});

export const { addItem, removeItem,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
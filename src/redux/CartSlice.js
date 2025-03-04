import { createSlice } from "@reduxjs/toolkit";

// this is a state(main state which modify by their slice)
const initialState = {
	cart:[]
}

const cartSlice = createSlice({
	name: "myCart",
	initialState,
	reducers:{
		// this method use for payload(the value which we get by any event)
		addToCart:(state,action)=>{
			// we take two parameters 1.state 2. action in "action object there is property which name is payload and in payload there is a value we get".
			state.cart.push(action.payload)
		}
	}
})

export const {addToCart} = cartSlice.actions //the word "actions" will never change it is pre-define
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    SUCCUSS: "SUCCESS",
    ERROR: "ERROR",
    LOADING: "LOADING"

})

const productSlice = createSlice({
    name: 'Product',
    initialState: {
        data: [],
        status: STATUSES.SUCCUSS
    },
    reducers:{
        setproduct(state,action){
           state.data=action.payload;
        },
        setstatus(state,action){
            state.status=action.payload;
        }
    }

});

export const {setproduct,setstatus}=productSlice.actions;
export default productSlice.reducer;

export function fetchproducts(){
    return async function fetchproductthunk(dispatch){
        dispatch(setstatus(STATUSES.LOADING))
        try {
          const res= await  fetch('https://fakestoreapi.com/products')  ;
          const data= await res.json();
          dispatch(setproduct(data))
          dispatch(setstatus(STATUSES.SUCCUSS))
        } catch (error) {
            dispatch(setstatus(error))
            
        }
    }
}

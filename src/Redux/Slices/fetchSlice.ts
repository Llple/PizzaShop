import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { productPizza } from "./cartSlice";


type fetchTemp ={
    category:string,
    searchValue:string,
    SortItems:string,
    order:string
}

export const fetchPizza = createAsyncThunk("fetchPizza/fetchPizza", async (props:fetchTemp) => {
    const {category,searchValue,SortItems,order}  = props
    
    const { data } = await axios.get<productPizza[]>(
        `https://679ba69e33d316846324a48e.mockapi.io/pizza_items?search=${searchValue}&${category}&sortBy=${SortItems}&order=${order}`
    );
    
    return data 

  
});


interface fetchSliceState {

    allProducts: productPizza[],
    loading:"loading" | "success" | "error"

}

const initialState:fetchSliceState = {
    allProducts: [],
  loading:"loading" // loading/success/error
};

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    setAllProducts(state,action: PayloadAction<productPizza[]>){
        state.allProducts = action.payload

    }
  },
  extraReducers: (builder) => {
    
    builder.addCase(fetchPizza.pending, (state) => {
            state.allProducts = []
            state.loading = "loading";
        })
    builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<productPizza[]>) => {
            state.loading = "success";
            state.allProducts = action.payload;
        })
    builder.addCase(fetchPizza.rejected, (state) => {
            state.allProducts = []
            state.loading = "error";
        });
},
});

// Action creators are generated for each case reducer function
export const {setAllProducts} = fetchSlice.actions;

export default fetchSlice.reducer;

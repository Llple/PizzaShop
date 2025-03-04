import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type productPizza = {
  
  id:string, 
  title:string,
  price:number,
  imageUrl:string,
  type:string, 
  size:number,
  count:number,
  category:number,
  rating:number

}

interface cartSliceState {
  products: productPizza[],
  totalPrice: number,
  totalCountItems: number,
}



const initialState:cartSliceState = {
  products: [],
  totalPrice: 0,
  totalCountItems: 0,
};

export const cartSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    removeCart(state) {
      if(window.confirm("Вы уверены, что хотите удалить весь товар из корзины?"))
      {state.products = []
      state.totalPrice = 0
      state.totalCountItems = 0}
    },
    removeCartItem(state,action : PayloadAction<string>) {
     
      if(window.confirm("Вы уверены, что хотите удалить товар?"))
      {const id = action.payload
      const existingProduct  = state.products.find(item => item.id === id)!
      state.totalCountItems -= state.products.find(item => item.id === id)?.count!;
      state.totalPrice -= existingProduct.count*existingProduct.price
      state.products = state.products.filter(item => item.id !== id)}
    },


    minisItem(state,action : PayloadAction<string>) {
      const id = action.payload
      const existingProduct = state.products.find(
        (item) => id === item.id
      )!;
      existingProduct.count--
      state.totalCountItems -= 1;
      state.totalPrice -= existingProduct.price
      
      if(Number(existingProduct.count) === 0){
        state.products = state.products.filter(item => item.id !== id)
        
      }
      
      
    },



    addProduct(state, action: PayloadAction<productPizza>) {
      const existingProduct = state.products.find(
        (item) => action.payload.id === item.id
      )!;
      
      
      if (existingProduct) {
        existingProduct.count += 1;
        
        
      } else {
        action.payload.count = 1;
        state.products.push(action.payload);
        
        
      }
      state.totalPrice = state.products.reduce((sum,obj) => sum + obj.price*obj.count ,0);
      state.totalCountItems += 1;
    },
  },
});

// Action creators are generated for each case reducer function

export const { addProduct ,removeCart,minisItem,removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type SortByType = {
  name:string , 
  sortType:string[]

}


interface filterSliceState {
  selectCategories: number,
  selectSortItem:number,
  sortBy : SortByType[]
}


const initialState:filterSliceState = {
  selectCategories: 0,
  selectSortItem:0,
  sortBy : [
    {name:"популярность (ASC)" , sortType:["rating","asc"]}
    ,{name:"популярность (DESC)" , sortType:["rating","desc"]}
    ,{name:"цена (ASC)" , sortType:["price","asc"]}
    ,{name:"цена (DESC)" , sortType:["price","desc"]},
    {name:"название (ASC)" , sortType:["title","asc"]}
    ,{name:"название (DESC)" , sortType:["title","desc"]}]
}

export const filterSort = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectCategories(state ,  action: PayloadAction<number>){
      state.selectCategories  = action.payload
    },
    setSelectSortItem(state,action: PayloadAction<number>){
      state.selectSortItem = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setSelectCategories,setSelectSortItem } = filterSort.actions

export default filterSort.reducer
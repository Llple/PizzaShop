import React from "react";
import {useSelector ,useDispatch} from "react-redux"
import {setSelectCategories} from "../Redux/Slices/filterSort"
import { RootState } from "../Redux/store";
const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
]
export default function Categories() {
  const dispatch = useDispatch()
  const {selectCategories} = useSelector((state:RootState) => state.filter)

   
    const onClickCategories = (index : number) => {
      dispatch(setSelectCategories(index))
    }
    
  return (
    <div className="categories">
      <ul>
        {categories.map((category,index)=>(
            <li key={index} onClick={()=>onClickCategories(index)} className={selectCategories === index? "active" : ""}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Sceleton from "../components/Sceleton";
import { fetchPizza } from "../Redux/Slices/fetchSlice";

import { useSelector, useDispatch } from "react-redux";




const Home = ({ searchValue }) =>{

  const { selectCategories, sortBy, selectSortItem } = useSelector(
    (state) => state.filter
  );
  const { loading, allProducts } = useSelector((state) => state.fetch);
  

  const dispatch = useDispatch();

  const order = sortBy[selectSortItem].sortType[1];
  const category = selectCategories > 0 ? `category=${selectCategories}` : "";
  const SortItems = sortBy[selectSortItem].sortType[0];

  React.useEffect(() => {
      
      dispatch(fetchPizza({category, order, SortItems, searchValue}) );
      
      
  }, [selectCategories, selectSortItem, searchValue]);

  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading === "success"
          ? allProducts.map((objItem, index) => (
              <PizzaBlock key={index} {...objItem} />
              
            ))
          : [...new Array(8)].map((_, index) => <Sceleton key={index} />)}
      </div>
    </div>
  );
}
export default Home
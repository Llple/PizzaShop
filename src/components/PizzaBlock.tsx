import React from "react";

import { useSelector, useDispatch } from 'react-redux'

import {addProduct, productPizza} from "../Redux/Slices/cartSlice"
import { Link } from "react-router";
import { RootState } from "../Redux/store";

type PizzaBlockProps ={
  count:number,
    id:string,
    title:string,
    price:number,
    imageUrl:string,
    types:number[],
    sizes:number[],
    category:number,
    rating:number
}
type Product ={
  id:number
  count:number
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({
    id,
    title,
    price,
    imageUrl,
    types,
    sizes,
    category,
    rating
    
}) =>

    {
      
      
      const dispatch = useDispatch()

      const products  = useSelector((state:RootState) => state.cart.products)
      const count = products.find(item => item.id === id)?.count ?? 0
     
     
      
    const typePizza = ["тонкое","традиционное"]

    
    const[selectType,setSelectType] = React.useState(types[0])
    const[selectSize,setSelectSize] = React.useState(0)


    const onClickSelectType =(index:number)=>{
        setSelectType(index)
    }
    const onClickSelectSize =(index:number)=>{
        setSelectSize(index)
    }
    const onClickAdd = async () => {
      dispatch(addProduct({
        id,
        title,
        price,
        imageUrl,
        type : typePizza[selectType],
        size: sizes[selectSize],
        category,
        rating} as productPizza))
        

        
        
        



        
        
    }

    

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`} >
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
      <h4 className="pizza-block__title">{title}</h4>
      
      </Link>
      
      <div className="pizza-block__selector">
        <ul>
            {types.map(typeIndex =><li key={typeIndex} onClick={()=>{onClickSelectType(typeIndex)}} className={selectType ===typeIndex?"active":""}>{typePizza[typeIndex]}</li>)}
          
        </ul>
        <ul>
            {sizes.map((size,index) => (<li key={index} onClick={()=>{onClickSelectSize(index)}} className={selectSize ===index?"active":""}>{size}</li>))}
          
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add" onClick={()=> {onClickAdd()}}>
        
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {count>0 ? <i>{count}</i> : ""}
        </div>
      </div>
    </div>
  );
}

export default  PizzaBlock
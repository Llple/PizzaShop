import axios from 'axios'
import React from  'react'
import { useLocation, useNavigate, useParams } from 'react-router'


interface Pizza {
    imageUrl:string,
    title:string,
    price:number
}
export default function PizzaDetails() {
    const [fullPizzaInfo,setFullPizzaInfo] = React.useState<Pizza>()
    const {id} = useParams<{id :string }>()
    const navigate = useNavigate()
    
    React.useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get<Pizza>( `https://679ba69e33d316846324a48e.mockapi.io/pizza_items/${id}`)
                setFullPizzaInfo(data)
                
            } catch (error) {
                alert("Ошибка")
                navigate("/")
            }
             
        })()
    },[])
    
  if(fullPizzaInfo){
    return (
        <div className='content'>
            <img src={fullPizzaInfo.imageUrl} />
            <h1>{fullPizzaInfo.title}</h1>
            <h4>{fullPizzaInfo.price} руб.</h4>
            
        </div>
      )
  }
  
    return (
        <div className='content'>
            Загрузка...
            
        </div>
      )
  
}

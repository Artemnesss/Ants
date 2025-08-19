import React from 'react'
import { FaShoppingCart} from "react-icons/fa" 
import { useState } from 'react'
import Order from './order'


const showOrders = (props)=>{
  let sum = 0;
  props.orders.forEach(el=>sum+= +parseFloat(el.price))

  return (
    <>
    {props.orders.map(el => (
    <Order  onDelete={props.onDelete} key={el.id} item={el}/>
    
  ))}
  <p className="sum">Итого:   {new Intl.NumberFormat().format(sum)}р</p>
    </>

  )
}



const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  )
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Art ants</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingCart  onClick={()=>setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            {cartOpen &&(
              <div className='shop-cart'>
                {props.orders.length >0  ?
                showOrders(props) : showNothing()}

              </div>
            )}
        </div>
        <div className='presentation'></div >

    </header>
  )
}

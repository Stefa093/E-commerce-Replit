import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProdCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'

const Cart = () => {

  const [total, setTotal] = useState(0)

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProdCart())
  }, [])

  useEffect(() => {
    if (cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + Number(cv.price) * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])

  const handlePurchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: '',
      colony: '',
      zipCode: '',
      city:'',
      references: ''
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='cart'>
      <h2 className='cart__title'>Cart Shop</h2>
      <div className='cart__container'>
        {
          cart?.products.map(product => (
            <CartProduct
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
      <h2 className='cart__total'>Total: ${total}</h2>
      <button className='cart__btn' onClick={handlePurchase}>Buy Cart</button>
    </div>
  )
}

export default Cart
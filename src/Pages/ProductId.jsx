import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import SliderImg from '../components/productId/SliderImg'
import './styles/productId.css'

const ProductId = () => {

  const [product, setProduct] = useState()
  
  const {id} = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  }, [id])
  
  return (
    <div className='prodId__container'>
      <div className='prodId__bread'>
        <Link className='prodId__link' to='/'>Home</Link>
        <span><i className='prodId__icon bx bxs-circle'></i></span>
        <p>{product?.title}</p>
      </div>
      {
        product &&
        <SliderImg 
        product={product}/>
      }
      <ProductInfo
      product={product}/>
      <SimilarProducts
      product={product}/>
    </div>
  )
}

export default ProductId
import React from 'react'
import { useContext } from 'react';
import {ShopContext} from "../Context/ShopContext"
import { useParams } from 'react-router-dom';
import ProductHd from '../component/ProductHd';
import ProductDisplay from '../component/ProductDisplay';
import ProductDescription from '../component/ProductDescription';
import RelatedProduct from '../component/RelatedProduct';

const Product = () => {
  const{all_products} = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if(!product ){
    return <div>Product Not Found...</div>
  }
  return (
   <section className='max_padd_container py-28'>
    <div>
      <ProductHd product={product}/>
      <ProductDisplay product={product} />
      <ProductDescription />
      <RelatedProduct />
    </div>
   </section>
  )
}
 export default Product;
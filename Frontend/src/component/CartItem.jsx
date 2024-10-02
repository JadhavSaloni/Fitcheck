import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { FaTrash } from "react-icons/fa";




const CartItem = () => {

    const{ getTotalCartAmount, all_products, cartItem, removeFromCart}= useContext(ShopContext);
  return (
    <section className='max_padd_container pt-28'>
        <table className='w-full mx-auto '>
            <thead>
                <tr className='regular-18 sm-regular-22 text-start py-12 border'> 
                    <th className='p-1 py-2'> Product</th>
                    <th className='p-1 py-2'> Title</th>
                    <th className='p-1 py-2'> Price </th>
                    <th className='p-1 py-2'> Quantity </th>
                    <th className='p-1 py-2'> Total </th>
                    <th className='p-1 py-2'> Remove </th>
                </tr>
            </thead>
            <tbody>
                {all_products.map((e) => {
                    if(cartItem[e.id] > 0 ){
                        return <tr key={e.id} className='border-b border-slate-900/20 p-6 medium-14 text-center'>
                                <td className='flexcenter'><img src={e.image} alt='productimage' height={43} width={43} /></td>
                                <td><div className='line-clamp-3'>{e.name}</div></td>
                                <td>{e.new_price}</td>
                                <td>{cartItem[e.id]}</td>
                                <td className='w-16 h-16'>{e.new_price * cartItem[e.id]}</td>
                                <td>
                                    <div className='bold-19'><FaTrash onClick={() => removeFromCart(e.id)} /></div>
                                </td>
                                
                        </tr>
                    }
                }
                )}
            </tbody>
        </table>
        {/**cart details  */}
        <div className='flex flex-col gap-20 my-26 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px] max_padd_container'> 
            <div className='flex flex-col gap-10'>
                <h4 className='bold-20'>Summary</h4>
                <div>
                    <div className='flexBetween py-4'>
                        <h4 className='medium-16'>Subtotal:</h4>
                        <h4>{getTotalCartAmount()}Rs</h4>
                    </div>
                    <hr/>
                    <div className='flexBetween py-4'>
                        <h4 className='medium-16'>Shipping Fees :</h4>
                        <h4>Free</h4>
                    </div>
                    <hr />
                    <div className='flexBetween py-4 bold-16'>
                        <h4 className='medium-16 '>Total :</h4>
                        <h4>{getTotalCartAmount()}Rs</h4>
                    </div>
                </div>
                <button className='btn_secondary_rounded w-44 '>Checkout</button>
            </div>
        </div>
    </section>
  )
}

export default CartItem
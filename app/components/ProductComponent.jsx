'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { fetchProducts } from '@/store/productsSlice';


export default function ProductComponent(){

    
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state.products);
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [ dispatch]);
    
    return (
      
      <main className="p-8 md:mx-8 lg:mx-32">
          <h1 className="text-4xl text-blue-700 font-bold mb-6">Products</h1>

          {status === 'loading' && <p>Loading...</p>}
          
          {items && items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.map(product => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="border border-blue-700 rounded shadow p-4 cursor-pointer hover:bg-gray-100">
                    <img
                      src={`https://admin.refabry.com/storage/product/${product.image}`} 
                      alt={product.name}
                      className="w-full h-48 object-contain mb-4"
                      />
                    <h2 className=" text-center text-lg text-blue-700 font-semibold">{product.name}</h2>
                    <p className="text-white text-lg text-center mt-2 bg-slate-400 rounded-lg">{product.price} TK</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : status === 'succeeded' && (items.length === 0) ? (
              <p>No Products Available</p> 
          ): null
          }
    </main>
    )
}
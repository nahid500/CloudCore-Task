'use client';

import { fetchProducts } from '@/store/productsSlice';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const product = items.find(item => item.id === parseInt(id));

  if (status === 'loading') {
    return <p className='p-8 text-lg font-medium'>Loading...</p>;
  }

  if (!product) {
    return <p className='text-red-500 p-8 text-lg'>Product Details Not Found</p>;
  }

  return (
    <div className='p-8 max-w-6xl mx-auto'>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex items-center justify-center bg-gray-200">
            <img
              src={`https://admin.refabry.com/storage/product/${product.image}`}
              alt={product.name}
              className="h-96 w-full object-contain border rounded-lg"
              />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl text-blue-700 font-bold">{product.name}</h1>

              <p className="text-lg">
                {product.short_desc.split(/\r?\n/).map((desc, index) => (
                  <span key={index}>
                    {desc}
                    <br />
                  </span>
                ))}
              </p>
          
          </div>


        </div>


        <div className='mt-5'>

          <p className=' text-lg '>Stock Available: {product.stock} units</p>

          {product.is_discount !== 0 ? (
            <div>
              <p className='text-red-500'> Discount: TK {product.discount_amount}</p>
              <p className="text-xl font-bold text-green-600">Price: {product.price} TK</p>
            </div>
          ):
          (
            <p className="text-xl font-bold text-green-600">Price: {product.price} TK</p>
          )
          }
          
        <button className="mt-6 bg-blue-700 text-lg text-white px-6 py-3 rounded hover:bg-blue-500 transition">
          Add to Cart
        </button>

      </div>


    </div>
  );
}

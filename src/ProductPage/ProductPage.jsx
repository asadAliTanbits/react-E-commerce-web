import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const jsonData = await response.json()
      setProduct(jsonData)
    }

    fetchData()
  }, [productId])

  if (!product) {
    return <div className='flex justify-center items-center p-4'>Loading...</div>
  }

  return (
    <div className='flex mx-auto justify-center gap-6 h-[80vh] items-center'>
    <div className='flex '>
      <img src={product.image} alt={product.title} className="w-full h-96 object-contain" />
      </div>
    <div className='flex flex-col justify-center w-1/2'>
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="text-xl font-bold mb-2">${product.price}</p>
      <p className="text-gray-600 mb-2">{product.description}</p>
        <div>
            <button className='bg-[#FFFFFF] text-[#B88E2F] font-semibold py-2 px-5 border-2'>Add to Cart</button>
        </div>
    </div>
    </div>
  )
}

export default ProductPage
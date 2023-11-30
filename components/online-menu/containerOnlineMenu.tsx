import React, { Dispatch, SetStateAction } from 'react'
import { ProductType , sortedProduct , ContainerOnlineMenuProps   } from '@/types/onlineMenuUser/onlineMenuUser'
import HeaderMenu from './headerMenu';



export default function ContainerOnlineMenu({sortedProduct = [] , setIsShowProduct , setProductDetails}: ContainerOnlineMenuProps) {

  const detailsHandler = (producName: string , productImage: string , productPrice: string , productPricePetty: string , productDescription:string )=>{
    setIsShowProduct(true)
    setProductDetails({
      producName,
      productImage,
      productPrice,
      productPricePetty,
      productDescription
    })
  }

  return (
    <>
 {sortedProduct.map((item : sortedProduct) =>
           <div key={item.id} className='w-full bg-sky-50 rounded-lg h-max mb-2 px-4 pb-6 pt-2 border border-fuchsia-400'>
           <HeaderMenu content={item.group}/>
           <div className='w-full  h-max flex justify-around flex-wrap gap-x-2 gap-y-8 pt-4'>
   
           {item.values.map((product : ProductType) =>
               <div key={product._id} className=' w-full sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[400px] 2xl:w-[480px] h-28 md:h-32 lg:h-44 xl:h-40 2xl:h-48 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-50'>
               <div className=' sm:w-5/12 md:w-4/12 lg:w-5/12 h-full '>
               <img src={product.product_image_path} className=' w-[100px] sm:w-full h-full object-cover' alt="" />
               </div>
               <div className='w-8/12 px-2 h-full flex flex-col  items-start justify-around'>
               <p className=''>{product?.productName}</p>
               <button onClick={()=>detailsHandler(product.productName , product.product_image_path , product.productPrice , product.productPricePetty , product.productDescription )} className='truncate opacity-40 hover:underline'> <span>details: </span>{product?.productDescription}</button>
               <p className=''>{product.productPrice}{product.productPricePetty && `.${product.productPricePetty}`} $ </p>
               </div>
             </div>
             )}

           </div>
         </div>
          )}
    </>
  )
}

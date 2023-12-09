'use client'
import React from 'react'
import RegisterUser from '@/components/registeration/user/registerUser'
import LoadingPage from '@/components/loading/loadingPage'
import { AuthContext } from '@/context/authContext'
import { useContext } from 'react'
import Logo from '@/components/logo/logo'
 

const page = () => {

  const {infos} = useContext(AuthContext)
  console.log(infos);
  
  return (
   <div className=' pt-16 sm:pt-28 md:pt-36 lg:pt-40 xl:pt-44 container mx-auto flex items-center justify-center px-4'>

    <div className='mt-20 w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
      <div className='w-max h-max  mx-auto mb-5 md:mb-10'>
         {/* <p className='text-xl text-center text-indigo-600  '>Eye Roll</p> */}
      <svg className='fill-indigo-600 max-xs:w-16  w-20 md:w-28 lg:w-36   ' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 175.33 120.36" >

<g>
	<path className="st0" d="M172.35,50.99c0,0-17.59-17.42-17.6-17.42C139.1,17.29,117.81,6.38,95.27,4
		C64.75-0.98,33.36,26.08,41.61,62.13c2.05,8.4,6.48,16.18,12.62,22.24c0.46,0.46,1.51,1.48,2.31,2.27
		c-5.55-1.9-10.92-4.36-16.02-7.33l-0.37-0.21c-4.86-2.84-9.47-6.12-13.76-9.77c-2.88-2.49-16.47-14.65-21.1-18.78
		c4.32-4.27,17.15-16.88,19.68-19.35c4.17-3.98,8.68-7.58,13.48-10.77c-4.96,2.95-9.68,6.35-14.06,10.13
		C21.4,33.2,6.12,46.83,2.83,49.76l-0.89,0.79l0.89,0.88l16.81,16.54c5.59,5.69,11.7,10.97,18.45,15.28h0.01l0.49,0.33h0.03
		c7.47,4.78,15.63,8.56,24.21,11.1c0.8,0.24,1.74,0.5,2.68,0.76c7.47,7.26,16.19,15.68,21.98,21.51
		c7.52-7.35,24.75-24.16,32.09-31.36c3.62-3.44,6.86-7.35,9.26-11.74c10.26-17.81,6.97-41.78-7.61-56.27
		c-0.15-0.15-0.31-0.3-0.46-0.44c11.53,4.31,22.21,10.96,31.24,19.36l17.51,15.51c-4.53,4.48-17.36,17.22-19.94,19.71
		c-4.27,4.04-8.89,7.71-13.82,10.93c5.11-2.94,9.98-6.37,14.48-10.19c3.09-2.66,18.74-16.56,22.1-19.54l1.03-0.91L172.35,50.99z
		 M120.58,76.95c-0.95,1.31-2.19,2.64-3.29,3.83c-6.75,6.88-21.85,22.34-29.75,30.45L74.2,97.56l-7.99-8.2l-9.32-9.55
		c-4.89-5.31-8.32-11.92-9.9-18.95c-5.94-28.55,15.68-50.02,39.56-50.65c4.43-0.12,8.93,0.48,13.36,1.89
		c5.86,1.86,11.57,5.13,16.76,10.03C131.45,36.11,133.22,60.97,120.58,76.95z"/>
	<path  d="M87.53,20.63
		c-16.92,0-30.64,13.72-30.64,30.64c0,16.93,13.72,30.65,30.64,30.65c16.92,0,30.65-13.72,30.65-30.65
		C118.18,34.35,104.45,20.63,87.53,20.63z M113.81,51.27c0,1.89-0.2,3.72-0.57,5.5l-20.58-4.4c-0.23,1.1-0.8,2.07-1.61,2.8
		l14.09,15.61c-2.72,2.46-5.95,4.34-9.51,5.5l-6.48-20.01c-0.5,0.17-1.05,0.26-1.61,0.26c-0.57,0-1.1-0.09-1.61-0.26l-6.48,20.01
		c-3.57-1.15-6.8-3.04-9.51-5.5l14.09-15.61c-0.8-0.73-1.38-1.7-1.61-2.8l-20.56,4.4c-0.38-1.77-0.59-3.61-0.59-5.5
		c0-1.88,0.2-3.72,0.58-5.49l20.57,4.39c0.23-1.1,0.81-2.06,1.61-2.79L69.93,31.77c2.72-2.45,5.94-4.35,9.51-5.5l6.48,20.02
		c0.51-0.17,1.05-0.26,1.61-0.26c0.57,0,1.11,0.09,1.61,0.26l6.48-20.02c3.56,1.15,6.8,3.05,9.51,5.5l-14.1,15.61
		c0.8,0.73,1.38,1.7,1.61,2.8l20.58-4.4C113.61,47.55,113.81,49.39,113.81,51.27z"/>
</g>
</svg>
     
      </div>
  
    <div className='w-full border border-indigo-600 rounded-lg bg-sky-50 flex items-center max-xs:h-8 h-10 md:h-12 '>
    <svg className=' w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-auto ml-1 fill-zinc-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
     <input placeholder='search' className='w-full h-full outline-none px-2 bg-transparent text-sm md:text-base lg:text-lg  text-zinc-500' type="text" />
    </div>
    </div>
  

   </div>
  )
}

export default page
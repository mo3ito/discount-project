'use client'
import {useContext, useEffect, useState} from 'react'
import HeaderTitleLi from '../headerTitleLi'
import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/navigation'
import logoutHandler from '@/utils/logoutHandler'
import Logo from '@/components/logo/logo'
import linkHandler from '@/utils/linkHandler'
import useSetFirstWordUsername from '@/hooks/useSetFirstWordUsername'
import { InfosProps } from '@/types/authentication'



export default function FullScreenMode() {
    const {infos , setInfos}=useContext(AuthContext)
    const [showProfile , setShowProfile]=useState<boolean>(false)
    const router = useRouter()
    const {firstWordUsername , setFirstWordUsername} = useSetFirstWordUsername(infos as InfosProps)


  return (
    <div className='container hidden sm:flex h-full mx-auto   justify-between items-center    px-4 '>
    
      <ul className='flex items-center   text-xl h-full space-x-12 w-full '>
     <li onMouseEnter={()=>setShowProfile(true)} onMouseLeave={()=>setShowProfile(false)} className='relative cursor-pointer '>
    <div   className='w-16  h-16 rounded-full flex items-center justify-center  bg-indigo-400 relative '>
    { !firstWordUsername ? <img src="/images/defaultPerson.png" alt="" />
   : <p>{firstWordUsername}</p>}
    { typeof infos?.discounts_eyeRoll === "object" && infos?.discounts_eyeRoll?.length> 0 && <div className='w-5 h-5 bg-yellow-400 border border-black rounded-full flex-shrink-0 text-center absolute -right-2 bottom-2 text-sm '>{infos?.discounts_eyeRoll?.length}</div>}
    </div>
    <div  className={`${ showProfile ? 'absolute' : 'hidden'} w-52 h-max bg-blue-100 absolute text-base z-50 shadow-md border border-purple-500 rounded-md`}>
      <div className='flex items-center  px-1 border-b border-purple-500 py-2'>
      <svg className='inline-block w-4 h-4 flex-shrink-0 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>  
      <p className='truncate  ml-1 border-purple-500  text-lg '>{infos?.username && !infos.is_businessOwner && infos.is_verified ? infos.username : 'You are not logged in'}</p>
      </div>
     
    { infos?.username && !infos.is_businessOwner && infos.is_verified &&  <ul className="   rounded-b-md p-1 border-purple-500 bg-blue-100 z-50 shadow-md  h-max text-lg  w-full  px-1 ">
    <li onClick={()=>linkHandler("/discount-eyeRoll" , router , setShowProfile)} className='w-full py-1 truncate cursor-pointer hover:bg-pink-300 rounded-md text-fuchsia-700 hover:font-semibold hover:text-white px-1'>
      discounts
      { typeof infos.discounts_eyeRoll === "object" && infos.discounts_eyeRoll.length>0 && <span className='w-6 h-6 pt-0.5 bg-yellow-400 border border-fuchsia-700  rounded-full inline-block translate-y-0.5 float-right text-center text-sm text-fuchsia-700 '>{infos?.discounts_eyeRoll?.length}</span>}
      </li>
      <li onClick={()=>logoutHandler(router , setInfos , setFirstWordUsername)} className='w-full py-1 truncate cursor-pointer hover:bg-pink-300 rounded-md text-fuchsia-700 hover:font-semibold hover:text-white px-1'>log out</li>
    </ul>}
    </div>
    </li>
        <HeaderTitleLi title="Register/Login" options={[{id:"5" , name:"register as customer",path:"/register-user"  }, {id:"6" , name:"login as customer" , path:"/register-user/login"  } , {id:"4" , name:"register as business owner" , path:"/register-business-owner"  } ,
         {id:"12" , name:"login as business owner" , path:"/register-business-owner/login"  }]} />

      </ul>
      <Logo className='h-max trans sm:pt-0  2xl:translate-y-1  w-max   '/>
      </div>
  )
}

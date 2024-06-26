
'use client'
import {useRef} from 'react'
import linkHandler from '@/utils/linkHandler'
import logoutHandler from '@/utils/logoutHandler'
import Logo from '@/components/logo/logo'
import useDropDownHandler from '@/hooks/useDropDownHandler'
import { BoxMenuPropsType } from '@/types/businessOwnerDashboard/businessOwnerDashboard'



export default function BoxMenuProfile({setShowAside , setShowBox , setShowRoll , showBox , showRoll , router , setInfos , infos , showOnlineMenu , setShowOnlineMenu}:BoxMenuPropsType) {

  const menuBoxRef = useRef<HTMLDivElement | null>(null)
  useDropDownHandler(menuBoxRef , setShowBox)


  return (
    <header className='  h-24 bg-gradient-to-b from-indigo-300 to-sky-100 w-full fixed  top-0 z-50  flex items-center justify-center '>
    <div className=' w-full h-full  mx-auto  flex  items-center justify-between max-xs:px-2 px-4 sm:px-10 '>
    <div className='flex items-center   h-full space-x-3  w-full '>
        <button
          className="iniline-block text-xl   md:mr-8"
          onClick={() => setShowAside(true)}
        >
          <svg
            className="size-5 md:w-7 md:h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
        <div ref={menuBoxRef} className="w-max max-w-[200px] h-max relative bg-indigo-200  mt-1  rounded-md">
          <div onClick={()=>setShowBox(prev=> !prev)} className=" flex size-full items-center justify-center p-1 cursor-pointer ">
            <img className=" w-10 h-10 sm:w-12 sm:h-12 object-cover border bg-sky-100  rounded-full inline-block" src={infos?.profile_image_path ? infos.profile_image_path : "/images/defaultPerson.png"} alt="" />
            <p className="inline-block ml-2 truncate w-max text-stone-600 max-w-[110px] text-sm  md:text-lg  pr-2">{infos?.username}</p>
          </div>
          <div className={` ${showBox ? 'absolute' : 'hidden'}  bg-blue-100 max-xs:w-52 w-60  h-max top-12 sm:top-14  border rounded-lg border-purple-400`}>
          <ul className="w-full h-max  max-xs:text-xs text-sm sm:text-base p-1 shadow-md">
 
          <li onClick={()=>setShowRoll(prev=>!prev)}  className={` ${showRoll && 'bg-pink-300'} cursor-pointer px-2  py-2  relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white `}>
            <span className="">
            roll
            { !showRoll ? <svg className=" size-4 sm:size-5 float-right  fill-fuchsia-700 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"></path></svg>
           : <svg className="size-4 sm:size-5  float-right  fill-white inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>}
             </span>
            <ul className={` ${showRoll ? 'absolute' : 'hidden'} left-[9px] top-8 sm:top-9  z-40 w-11/12 rounded-lg  h-max bg-blue-100 border border-fuchsia-400 p-1`}>
            <li onClick={()=>linkHandler("/business-owner-dashboard/discount-setting",router,setShowBox)} className=" px-2  py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">set roll</li>
              <li onClick={()=>linkHandler("/business-owner-dashboard/qr-code-link-roll",router,setShowBox)} className=" px-2  py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">roll QR Code link</li>
            </ul>
            </li>
          <li onClick={()=>setShowOnlineMenu(prev=>!prev)}  className={` ${showOnlineMenu && 'bg-pink-300' } cursor-pointer px-2  py-2  relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white `}>
            <span className="">
            online menu
            { !showOnlineMenu ? <svg className=" size-4 sm:size-5 float-right fill-fuchsia-700 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"></path></svg>
           : <svg className=" size-4 sm:size-5  float-right  fill-white inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>}
             </span>
            <ul className={` ${showOnlineMenu ? 'absolute' : 'hidden'} left-[9px] top-8 sm:top-9 z-40 w-11/12   rounded-lg  h-max bg-blue-100 border border-fuchsia-400 p-1`}>
            <li onClick={()=>linkHandler("/business-owner-dashboard/online-menu/add-product",router,setShowBox)} className=" px-2  py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">add new product</li>
              <li onClick={()=>linkHandler("/business-owner-dashboard/online-menu/edit-menu",router,setShowBox)} className=" px-2  py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">edit menu</li>
              <li onClick={()=>linkHandler("/business-owner-dashboard/online-menu/logo-workplace-image",router,setShowBox)} className=" px-2  py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">import logo & work place image</li>
              <li onClick={()=>linkHandler("/business-owner-dashboard/online-menu/qr-code-link",router,setShowBox)} className=" px-2  py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">online menu QR Code link</li>
            </ul>
          </li>
          <li onClick={()=>linkHandler("/business-owner-dashboard/eyeRoll-reports",router,setShowBox)} className=' cursor-pointer px-2  py-2 hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>reports</li>
          <li onClick={()=>logoutHandler(router , setInfos)} className=' cursor-pointer px-2 py-2 hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>log out</li>
          </ul>
          </div>
 
        </div>
 
    </div>
    <Logo className='h-max  w-max' href="/business-owner-dashboard"/>
    </div>
    </header>
 
  )
}

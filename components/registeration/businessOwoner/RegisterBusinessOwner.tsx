'use client'
import { useState , FormEvent , useContext, useCallback, useRef , useEffect } from "react"
import Input from "../../shared/inputs/input"
import Button from "@/components/shared/button/button"
import { toast } from "react-toastify"
import Loading from "../../loading/loading"
import sender from "@/services/sender"
import { AuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {BUSINESS_OWNER_REGISTER} from "@/routeApi/endpoints"
import { handleInputChange } from "@/utils/handleInputChange"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ButtonDefault from "@/components/shared/button/buttonDefault"



const RegisterBusinessOwner = () => {

    const[name , setName]=useState<string>("")
    const[lastName , setLastName]=useState<string>("")
    const[username , setUsername]=useState<string>("")
    const[email , setEmail]= useState<string>("")
    const [phoneNumber , setPhoneNumber]=useState<string | undefined >('')
    const[password , setPassword]= useState<string>("")
    const[repeatPassword , setRepeatPassword]= useState<string>("")
    const {login} = useContext(AuthContext)
    const phoneNumberRef = useRef<null | HTMLDivElement>(null)
    const [isBorderBold , setIsBorderBold]=useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
   
      const handleOutSidePhoneNumberRef = (event : MouseEvent)=>{
        if(phoneNumberRef.current && !phoneNumberRef.current.contains(event.target as Node)){
          setIsBorderBold(false)
        }
      }
  
      document.addEventListener("click", handleOutSidePhoneNumberRef);
  
      return () => {
        document.removeEventListener("click", handleOutSidePhoneNumberRef);
      };
    }, []);
  
   
    


    const submitHandler = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log("submit");
        const body = {
            name ,
            last_name: lastName,
            phone_number:phoneNumber,
            username,
            password,
            repeat_password:repeatPassword,
            email: email.toLowerCase()
        }
        try {
          if( !email || !name.length || !lastName.length || !phoneNumber || !username.length || !password.length || !repeatPassword.length){
            toast.warn("Please Fill in the empty inputs")
            return
            }else if(password !== repeatPassword){
              toast.warn("Repeating the password is not the same as the password")
              return
            }else if (isNaN(+phoneNumber)){
              toast.warn("the phoneNumber must be number")
              return
            }else if(password.length < 8){
              toast.warn("the password must be at least 8 characters long")
              return
            }
            const response = await sender(BUSINESS_OWNER_REGISTER, body)
            if(response?.status === 200){
           await login(response?.data.userInfos , response?.data.token)
           router.push("/business-owner-verify-email")
            } 
              } catch (error : any) {
                if (error.response.status === 400) {
                  const errorMessage = error.response.data.message;
                  toast.error(errorMessage);
                } else {
                toast.error("An error occurred while processing your request");
                }
        }
      }
      


  return (
    <div className="bg-sky-100 w-full h-screen">
      <div className="container px-4  h-max mx-auto">
        <form autoComplete="off" onSubmit={submitHandler}>
          <div className="w-2/4 h-max mx-auto pt-32 ">
            <div className="w-full flex justify-around gap-x-5">


              <Input
               className="mb-4 w-1/2" 
               label="name" 
                value={name}
                onChange={useCallback((event)=>handleInputChange(event , setName),[])}
                disabled={false}
                type="text"
                  />

                <Input
               className="mb-4 w-1/2" 
               label="last name" 
                value={lastName}
                onChange={useCallback((event)=>handleInputChange(event , setLastName),[])}
                disabled={false}
                type="text"
                  />
            </div>

            <div className="w-full flex justify-around gap-x-5">
            <Input
               className="mb-4 w-1/2" 
               label="username" 
                value={username}
                onChange={useCallback((event)=>handleInputChange(event , setUsername),[])}
                disabled={false}
                type="text"
                  />

              <div ref={phoneNumberRef} className="mb-4 w-2/4"> 
                <p className="mb-3 starBefore ">phone number</p>
                <div  onClick={()=>setIsBorderBold(true)} className={`w-full h-10 border border-fuchsia-400 rounded-lg  pl-2 ${isBorderBold && 'border-2'}`}>
                  <PhoneInput
                  className=""
                  defaultCountry="US"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}/>
                  </div> 
                  </div>
            </div>

            <div className="w-full flex justify-around gap-x-5">
            <Input
               className="mb-4 w-full" 
               label="email" 
                value={email}
                onChange={useCallback((event)=>handleInputChange(event , setEmail),[])}
                disabled={false}
                type="email"
                  />
            </div>
     
            <div className="w-full flex justify-around gap-x-5">
            <Input
               className="mb-4 w-full" 
               label="password" 
                value={password}
                onChange={useCallback((event)=>handleInputChange(event , setPassword),[])}
                disabled={false}
                type="password"
                  />
          
            <Input
               className="mb-4 w-full" 
               label="repeat password" 
                value={repeatPassword}
                onChange={useCallback((event)=>handleInputChange(event , setRepeatPassword),[])}
                disabled={false}
                type="password"
                  />
            </div>

            <ButtonDefault
              text="register"
              className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
            />
        <div className="flex items-center justify-center  space-x-1 mt-3">
   <p className=" ">Do you have an account? </p>
   <Link href="/register-business-owner/login" className="text-fuchsia-500 underline text-xl">login</Link>
   </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterBusinessOwner;
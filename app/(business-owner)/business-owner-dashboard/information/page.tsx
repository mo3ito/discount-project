"use client";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import { useContext , useEffect, useRef, useState } from "react";
import { AuthContext } from "@/context/authContext";
import Loading from "@/components/loading/loading";
import { handleInputChange } from "@/utils/handleInputChange";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Information() {

  const {infos} = useContext(AuthContext)
  const [name , setName] = useState<string>('')
  const [lastName , setLastName]=useState<string>('')
  const [username , setUsername]=useState<string>('')
  const [email , setEmail]=useState<string>('')
  const [phoneNumber , setPhoneNumber]=useState<string | undefined >('')
  const [password , setPassword]=useState<string>('')
  const [repeatPassword , setRepeatPassword]=useState<string>('')
  const [country , setCountry]=useState<string>('')
  const [state , setState]=useState<string>('')
  const [city , setCity]=useState<string>('')
  const [address , setAddress]=useState<string>('')
  const [brandName , setBrandName]=useState<string>('')
  const [postalCode , setPostalCode]=useState<string>('')
  const [workPhone , setWorkPhone]=useState<string>('')
  const [isBorderBold , setIsBorderBold]=useState<boolean>(false)
  const phoneNumberRef = useRef<null | HTMLDivElement>(null)

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

  useEffect(()=>{
    if(infos){
      setName(infos?.name)
      setLastName(infos?.last_name)
      setUsername(infos?.username)
      setEmail(infos?.email)
      setPhoneNumber(infos?.phone_number)
      setCountry(infos?.country_name)
      setState(infos?.state_name)
      setCity(infos?.city_name)
      setAddress(infos?.address)
      setBrandName(infos?.brand_name)
      setPostalCode(infos.postal_code)
      setWorkPhone(infos?.work_phone)
    }

  },[infos])
  console.log(infos);

  
  console.log(phoneNumber);

  

  if(!infos){
    return <Loading/>
  }

  return (
    <div className="bg-sky-100 w-full h-screen">
      <div className="container px-4  h-max mx-auto">
        <form>
          <div className="w-2/4 h-max mx-auto pt-32 ">
            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/2 ">
                <p className="mb-3 starBefore ">name</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setName )}
                  value={name}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/2 ">
                <p className=" starBefore mb-3">last name</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setLastName)}
                value={lastName}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

            </div>
            <div className="w-full flex justify-around gap-x-5">
            <div className="mb-4 w-2/4 ">
                <p className="mb-3 starBefore ">username</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setUsername)}
                value={username}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div ref={phoneNumberRef} className="mb-4 w-2/4"> 
                <p className="mb-3 starBefore ">phone number</p>
                <div  onClick={()=>setIsBorderBold(true)} className={`w-full h-10 border border-fuchsia-400 rounded-lg pl-2 ${isBorderBold && 'border-2'}`}>
                  <PhoneInput
                  defaultCountry="US"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}/>
                  </div> 
                  </div>
            </div>
     
            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">email</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setEmail)}
                value={email}
                  disabled={false}
                  type="email"
                  className="inputInformationForm"
                />
              </div>
              

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">password</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setPassword)}
                value={password}
                placeholder="import new password"
                  disabled={false}
                  type="password"
                  className="inputInformationForm"
                />
                
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">repeat password</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setRepeatPassword)}
                value={repeatPassword}
                placeholder="repeat new password"
                  disabled={false}
                  type="password"
                  className="inputInformationForm"
                />
                
              </div>


         
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">country</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setCountry)}
                value={country}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">state</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setState)}
                value={state}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">city</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setCity)}
                value={city}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-full ">
                <p className="mb-3 starBefore">address</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setAddress)}
                value={address}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
              </div>

              <div className="w-full flex justify-around gap-x-5">

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">brand name</p>
                <InputDefault
                onChange={(event) => handleInputChange(event, setBrandName)}
                value={brandName}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">Postal code</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setPostalCode)}
                value={postalCode}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">work phone</p>
                <InputDefault
                 onChange={(event) => handleInputChange(event, setWorkPhone)}
                value={workPhone}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
              </div>

            <ButtonDefault
              text="send"
              className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

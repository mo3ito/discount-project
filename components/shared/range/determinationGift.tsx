import { ChangeEvent, useEffect } from "react";
import InformationButton from "@/components/informationButton/informationButton";
import CheckBox from "../checkeBox/checkBox";
import { DeterminationGiftProps } from "@/types/determinationGiftProps/determinationGiftProps";
import  handleInputChange   from "@/utils/handleInputChange";
import handleNumberInputChange from "@/utils/handleNumberInputChange";

export default function DeterminationGift({
  isChecked,
  setIsChecked,
  numberPurchaseGift,
  setNumberPurchaseGift,
  showInformation,
  giftValue,
  setGiftValue,
}: DeterminationGiftProps) {
  const changeGiftHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(event.target.checked);
  };

  useEffect(()=>{
    if(!isChecked){
      setNumberPurchaseGift(0)
      setGiftValue("")

    }
  },[isChecked])

  return (
    <div
      className={` ${
        isChecked ? "bg-indigo-100" : "bg-gray-200"
      } w-full h-max rounded-lg  mb-2 p-4`}
    >
      <div className="w-full flex items-center justify-center mb-4">
        <div>
          <InformationButton onClick={showInformation} />
          <p className="inline-block">Determining the gift</p>
        </div>
        <CheckBox
          onChange={(event) => changeGiftHandler(event)}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="w-12 h-6 ml-auto "
          circleClasses="w-4 h-4 bg-gray-200 peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
      </div>
      <div className="inline-block">
        <span>The number of purchases</span>
        <input
          value={numberPurchaseGift}
          onChange={(event)=>handleNumberInputChange(event , setNumberPurchaseGift)}
          disabled={!isChecked}
          className="w-20 h-10 outline-none border border-fuchsia-300 px-2 rounded-lg bg-transparent ml-1 shadow-md"
          type="number"
        />
      </div>

      <div className="inline-block ml-12">
        <span>enter the gift</span>
        <input
          value={giftValue}
          onChange={(event)=>handleInputChange(event,setGiftValue)}
          disabled={!isChecked}
          placeholder="for example moca"
          className="w-44 h-10 outline-none border border-fuchsia-300 px-2 rounded-lg bg-transparent ml-1 shadow-md "
          type="text"
        />
      </div>
    </div>
  );
}

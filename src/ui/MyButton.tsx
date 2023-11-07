import React, { ReactNode, useEffect, useRef } from "react";

interface MyButtonProps {
   children: ReactNode,
   onClick: () => void,
}



const MyButton = ({children, onClick,  ...props}: MyButtonProps) => {

   return (
          <button
         type="button"
         onClick={onClick}
         {...props} 
         className="bg-black font-bold p-1 border border-white text-base text-white rounded-md hover:bg-gray-900">
            {children}
         </button>   
   )
}


export default MyButton;
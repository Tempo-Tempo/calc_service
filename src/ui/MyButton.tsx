import React, { ReactNode, useEffect } from "react";

interface MyButtonProps {
   children: ReactNode,
   onClick: () => void,
   onSubmit: () => void,
}

const MyButton = ({children, onClick, onSubmit,  ...props}: MyButtonProps) => {
   return (
         <button 
         onClick={onClick} 
         {...props} 
         className="bg-black font-bold p-1 border border-white text-base text-white rounded-md hover:bg-gray-900">
            {children}
         </button>
   )
}

export default MyButton;
import React, { useState } from "react";



interface MyInputProps {
   placeholder: string,
   value: number,
   onChange: (e: any) => void;
   validison: number,
}


const MyInput = ({ placeholder, value, onChange, validison}: MyInputProps) => {

   return (
      <div>
         <input 
          type='number'
          className={'text-black m-1 rounded-sm pl-4'} 
          onChange={(e) => onChange(e.target.value)} 
          value={value} placeholder={placeholder}/>
            {validison === 1 ? <span className='text-xs absolute  text-red-500'>Поле не может быть пустым</span> : ''}
            {validison === 2 ? <span className='text-xs absolute  text-red-500'>Значение не может быть меньше или = 0</span> : ''}
      </div>
   );
};

export default MyInput;
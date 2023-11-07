import React, {useState, useCallback, useEffect} from 'react';
import MyImage from '../ui/MyImage';
import MyInput from '../ui/MyInputForCalc.tsx';
import { ErrorMessage } from './ErrorMessage';
import MyButton from '../ui/MyButton.tsx';
import { getTest } from '../hooks/UseTestPost/GetCalcResult.js';



const DymanicForm = ({options}) => {

   console.log(options)

   // ЗНАЧЕНИЯ
   const [allValue, setAllValue] = useState({a: '', b: '', c: '', d: ''});

   // Старт валидации
   const [startValid, setStartValid] = useState(false);

   // Выбор фигруы для select
   const [typeFigure, setTypeFigure] = useState('');

   // Результаты вычислений
   const [result, setReuslt ] = useState({Square: '', Perimeter: '', Median: '', Bisector: '', SquareRadius: '', typeTriangle: ''});


   const calcMyParallelogram = useCallback((e) => {
      setStartValid(true)
      setTimeout(() => {
         setStartValid(false)
      }, 2500);
   });

   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }


   const test = () => {
      options.map((i) => {
         i.valuesOption.map((v) => {
            console.log(v)
         })
      })
   }

   useEffect(() => {
      if(options) setTypeFigure(options[0]?.valueOption);
   }, [])

   return (
      <div>
         <label onClick={test}> Что будем рассчитывать? </label>
         <select onChange={(e) => handlerPutOption(e.target.value)} className='text-black cursor-pointer mt-2 w-100'>
         {options?.map((opt) => 
            <option key={opt.nameOption} value={opt.valueOption}>{opt.nameOption}</option>
         )}
         </select>
         <ul className='text-left p-2'>
            {options?.map((opt) => 
                  typeFigure === opt.valueOption && <li key={opt.nameOption} className='flex flex-col'>
                  <div className='flex mb-3 mt-2'>
                  {<MyImage src={require('../assets/imgFigure/myParallelogramImg2.png')} alt='ooops' />} 
                    <span className='ml-4'> {opt.fomrulaOption} </span>
                  </div>
                  {opt.valuesOption?.map((value) => 
                     <MyInput key={value.name} value={value.value} onChange={(e) => value.value} placeholder={`Введите значение ${value.name}`} validison={ErrorMessage(value.value, startValid)}/>
                  )}
                     Результат: <span className='text-green-500'>{result.Perimeter}</span>  
               </li>
            )}
         </ul>
         <MyButton onClick={calcMyParallelogram} >Рассчитать</MyButton> 
      </div>
   );
};

export default DymanicForm;
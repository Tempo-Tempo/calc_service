import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';

const MyParallelogram = () => {
   const [typeFigure, setTypeFigure] = useState('');

   const [startValid, setStartValid] = useState(false);

   const [ result, setResult ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: '', d: ''});
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
      setNewCalc({a: '', b: '', c: '', d: ''});
      setResult('');
   }

   useEffect(() => {
      handlerPutOption('parallelogram/square');
   }, []);

   const calcMyParallelogram = useCallback( async () => {
      setStartValid(true)
      setTimeout(() => {
         setStartValid(false)
      }, 2500);
     let finalResult = await calc(newCalc, typeFigure);
     setResult(finalResult);
   })

   return (
      <div className={'absolute flex flex-col bg-black border-2 p-2 text-base border-sky-500 rounded-md w-96 h-100'}>
         <LinkToMain />
         <div className='border-b-2'>Калькулятор параллелограмма</div>
         <div className='mt-1 mb-2 border-b-2 relative flex flex-col justify-center items-center'>
               Параллелограмм — это четырехугольник, у которого противоположные стороны попарно параллельны и равны.
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className='text-black cursor-pointer mt-2 w-100'>
            <option  value="parallelogram/square">Площадь параллелограмма</option>
            <option value="parallelogram/per">Периметр параллелограмма</option>
            <option value="parallelogram/height">Высоту параллелограмма</option>
         </select>
         <ul className='text-left p-2'>
            {typeFigure === "parallelogram/square" && <li className='flex flex-col'>
               <div className='flex mb-3 mt-2'>
               {<MyImage src={require('../../assets/imgFigure/myParallelogramImg2.png')} alt='ooops' />} 
                 <span className='ml-4'> Формула: S = AD * BM, где AD — это основание параллелограмма, BM — это высота параллелограмма </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение AD' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение BM' validison={ErrorMessage(newCalc.b, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "parallelogram/per" && <li className='flex flex-col'>
               <div className='flex mb-3 mt-2'>
                 {<MyImage src={require('../../assets/imgFigure/myParallelogramImg2.png')} alt='ooops' />} 
                 <span className='ml-4'> Формула: P = 2 * (AB + AD), где AB — это "короткая", AD — это "длинная" сторона параллелограмма </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение AB' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение AM' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "parallelogram/height" && <li className='flex flex-col'>
               <div className='flex mb-3 mt-2'>
                 {<MyImage src={require('../../assets/imgFigure/myParallelogramImg2.png')} alt='ooops' />} 
                 <span className='ml-4'> Формула: H = S / AD, где S — это площадь, AD — это основание </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение S' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение AD' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
         </ul>
         <MyButton onClick={calcMyParallelogram} >Рассчитать</MyButton>
      </div>
   );
};

export default MyParallelogram;
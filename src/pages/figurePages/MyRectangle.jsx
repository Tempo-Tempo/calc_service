import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';

const MyRentagle = () => {
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
      handlerPutOption('rectangle/square');
   }, []);

   const calcMyRentagle = useCallback( async () => {
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
         <div className='border-b-2'>Калькулятор прямоугольника</div>
         <div className='mt-1 mb-2 border-b-2 relative flex flex-col justify-center items-center'>
               Прямоугольником называется параллелограмм, у которого все углы прямые.
         </div> 
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className='text-black cursor-pointer mt-2 w-100'>
            <option value="rectangle/square">Площадь прямоугольника</option>
            <option value="rectangle/per">Периметр прямоугольника</option>
         </select>
            <ul className='text-left p-2'>
            {typeFigure === "rectangle/square" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                  {<MyImage src={require('../../assets/imgFigure/myRentagleImg.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: S =  a * b, где а — это ширина, b — это длина </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "rectangle/per" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                  {<MyImage src={require('../../assets/imgFigure/myRentagleImg.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: P = 2 * (a + b), где а — это длина, b — это ширина </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
         </ul>
         <MyButton onClick={calcMyRentagle} >Рассчитать</MyButton>     
      </div>
   );
};

export default MyRentagle;
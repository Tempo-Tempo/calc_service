import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';

const MyRhombus = () => {
   
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
      handlerPutOption('rhombus/square');
   }, []);

   const calcMyRhombus = useCallback( async () => {
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
      <div className='border-b-2'>Калькулятор ромбаa</div>
      <div className='mt-1 mb-2 border-b-2 relative flex flex-col justify-center items-center'>
      Ромбом называется параллелограмм, у которого все стороны равны.
      </div>
         <label> Что будем рассчитывать? </label>
      <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className='text-black cursor-pointer m-2 w-100'> 
         <option value={"rhombus/square"}>Площадь ромбa</option>
         <option value={"rhombus/per"}>Периметр ромбa</option>
         
      </select>
      <ul className='text-left p-2'>
         {typeFigure === "rhombus/square" && <li className='flex flex-col'>
            <div className='flex mb-3 mt-2'>
               {<MyImage src={require('../../assets/imgFigure/myRhombusImg.png')} alt='ooops' />}
               <span className='ml-4'> Формула: S = (AC · BD) / 2, где AC и BD — это диагонали ромба </span>
            </div>
             <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону AC' validison={ErrorMessage(newCalc.a, startValid)}/>
             <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите высоту BD' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span>  
         </li>}
         {typeFigure === "rhombus/per" && <li className='flex flex-col'>
         <div className='flex mb-3 mt-2'>
               {<MyImage src={require('../../assets/imgFigure/myRhombusImg2.png')} alt='ooops' />}
               <span className='ml-4'>  Формула: P = a + a + a + a, где a — это сторона </span>
            </div>
            <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону a' validison={ErrorMessage(newCalc.a, startValid)}/>
            Результат: <span className='text-green-500'>{result}</span> 
         </li>}
      </ul>
      <MyButton onClick={calcMyRhombus} >Рассчитать</MyButton>     
      </div>
   );
};

export default MyRhombus;
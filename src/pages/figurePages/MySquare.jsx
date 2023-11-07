import React, { useCallback, useEffect, useRef, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';

const MySquare = () => {

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
      handlerPutOption('squared/square');
   }, []);

   const calcMySquare = useCallback( async () => {
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
         <div className='border-b-2'>Калькулятор квадрата</div>
         <div className='mt-1 mb-2 border-b-2 relative flex flex-col justify-center items-center'>
               Квадрат - фигура, у которой все стороны равны.
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className='text-black cursor-pointer mt-2 w-100'>
            <option value="squared/square">Площадь квадрата</option>
            <option value="square/per">Периметр квадрата</option>
            <option value="square/radius">Площадь вписанной окружности</option>
            <option value="square/opi">Площадь описаной окружности</option>
         </select>
               <ul className='text-left p-2'>
            {typeFigure === "squared/square" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                 {<MyImage src={require(`../../assets/imgFigure/mySquareImg.png`)} alt='ooops' />}
                  <span className='ml-4'>  Формула: S = a * a, где S — площадь, a — сторона </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "square/per" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                 {<MyImage src={require(`../../assets/imgFigure/mySquareImg.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: P = a * 4, где P — периметр, a — сторона </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "square/radius" &&  <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                 {<MyImage src={require(`../../assets/imgFigure/mySquareImg2.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: Svp = π * (a / 2)², где a / 2 — радиус вписанной окружности, a — сторона, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
                 Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "square/opi" &&  <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                 {<MyImage src={require(`../../assets/imgFigure/mySquareImg2.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: Sop = (a * a * 2) * π, где R — радиус описанной окружности, a — сторона, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
                 Результат: <span className='text-green-500'>{result}</span>  
            </li>}
         </ul>
         <MyButton onClick={calcMySquare} >Рассчитать</MyButton>     
      </div>
   );
};

export default MySquare;
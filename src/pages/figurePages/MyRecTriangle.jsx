import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';

const MyRecTriangle = () => {
   
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
      handlerPutOption('recTriangle/sin');
   }, []);

   const calcMyRecTriangle = useCallback( async () => {
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
         <div className='border-b-2'>Калькулятор прямоугольного треугольника</div>
         <div className='mt-1 mb-2 border-b-2 relative flex flex-col justify-center items-center'>
            Прямоугольный треугольник — это треугольник, в котором один угол прямой (то есть 90 градусов)
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className='text-black cursor-pointer mt-2 w-100'>
            <option value="recTriangle/sin">Синус прямоугольного треугольника</option>
            <option value="recTriangle/cos">Косинус прямоугольного треугольника</option>
            <option value="recTriangle/tg">Тангенс прямоугольного треугольника</option>
            <option value="recTriangle/gip">Длину гипотенузы </option>
         </select>
         <ul className='text-left p-2'>
            {typeFigure === "recTriangle/sin" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                  {<MyImage src={require('../../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: Sin(a) =  a / c, где a — это противолежаший катет, c — гипотенуза</span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону a' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону c' validison={ErrorMessage(newCalc.b, startValid)}/>
                  Результат: {result?.length ? <span className='text-green-500'>Sin(a) = {result[0]} <br></br> Rad = {result[1]}</span> : ''} 
            </li>}
            {typeFigure === "recTriangle/cos" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                {<MyImage src={require('../../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: Cos(a) =  b / c, где b — это прилежащий катет, с — гипотенуза </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону b' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону c' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат:  {result?.length ? <span className='text-green-500'>Sin(a) = {result[0]} <br></br> Rad = {result[1]}</span> : ''}
            </li>}
            {typeFigure === "recTriangle/tg" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                {<MyImage src={require('../../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: Tg(a) =  a / b, где a — это противолежаший катет, b — это прилежащий катет</span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите соторну a' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону b' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат:{result?.length ? <span className='text-green-500'>Sin(a) = {result[0]} <br></br> Rad = {result[1]}</span> : ''}
            </li>}
            {typeFigure === "recTriangle/gip" && <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                {<MyImage src={require('../../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: c² = a² + b² - 2ab * cos(ab), где a, b — сотороны треугольника, с — угол между ними, а c² — гипотенуза</span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите соторну a' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите соторну b' validison={ErrorMessage(newCalc.b, startValid)}/>
                <MyInput value={newCalc.c}  onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите угол c' validison={ErrorMessage(newCalc.c, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
         </ul>
         <MyButton onClick={calcMyRecTriangle}>Рассчитать</MyButton>     
      </div>
   );
};

export default MyRecTriangle;
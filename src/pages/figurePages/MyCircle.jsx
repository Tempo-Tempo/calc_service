import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton/MyButton.tsx';
import MyImage from '../../ui/MyImage/MyImage.jsx';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';
import './MyFigures.css';

const MyCircle = () => {
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
      handlerPutOption('circle/square');
   }, []);

   const calcMyCircle = useCallback( async () => {
      setStartValid(true)
      setTimeout(() => {
         setStartValid(false)
      }, 2500);
     let finalResult = await calc(newCalc, typeFigure);
     setResult(finalResult);
   })

   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор круга</div>
         <div className='figure_title'>
               Круг — часть плоскости, которая лежит внутри окружности.
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}>
            <option value="circle/square">Площадь круга</option>
            <option value="circle/per">Периметр круга</option>
         </select>
         <ul className={'ul_Figure'}>
            {typeFigure === "circle/square" && <li className={'li_Figure'}>
                <div className={'li_Inner'}>
                  {<MyImage src={require('../../assets/imgFigure/myCircleImg2.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: S =  π * r², где r — это радиус, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение r' validison={ErrorMessage(newCalc.a, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "circle/per" && <li className={'li_Figure'}>
                <div className={'li_Inner'}>
                  {<MyImage src={require('../../assets/imgFigure/myCircleImg2.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: P = 2 * π * r, где r — это радиус, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение r' validison={ErrorMessage(newCalc.a, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
         </ul>
         <MyButton onClick={calcMyCircle} >Рассчитать</MyButton>     
      </div>
   );
};

export default MyCircle;
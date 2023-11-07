import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton/MyButton.tsx';
import MyImage from '../../ui/MyImage/MyImage.jsx';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';
import { HandlerRulesTrapezoid } from '../../components/RulesAndHelpers/HelperRulesTrapezoid/HelperRulesTrapezoid.js'

const MyTrapezoid = () => {

   const [typeFigure, setTypeFigure] = useState('');

   const [startValid, setStartValid] = useState(false);

   const [ result, setResult ] = useState('');

   const [ errorTrapezoid, setErrorTrapezoid ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: ''}, {b: ''}, {c: ''}, {d: ''});
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
      setNewCalc({a: '', b: '', c: '', d: ''});
      setErrorTrapezoid('');
      setResult('');
   }

   useEffect(() => {
      handlerPutOption('trapezoid/square');
   }, []);


   const calcMyTrapezoid = useCallback( async () => {
      setStartValid(true);
      setTimeout(() => {
         setStartValid(false)
      }, 2500);
     let finalResult = await calc(newCalc, typeFigure);
     let newWrong = HandlerRulesTrapezoid(newCalc);
     if(typeFigure === "trapezoid/per") setErrorTrapezoid(newWrong);
     setResult(finalResult);
   })

 

   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор трапеции</div>
         <div className='figure_title'>
              Трапеция — это четырёхугольник с двумя параллельными и двумя непараллельными сторонами.
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}>
            <option  value="trapezoid/square">Площадь трапеции</option>
            <option value="trapezoid/per">Периметр трапеции</option>
         </select>
         <ul className='ul_Figure'>
            {typeFigure === "trapezoid/square" && <li className='li_Figure'>
                <div className='li_Inner'>
                {<MyImage src={require('../../assets/imgFigure/myTrapezoidImg3.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: S = (a + b) * h / 2, где a и b - длины оснований трапеции, а h - высота трапеции, опущенная на основание. </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput value={newCalc.c}  onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите значение h' validison={ErrorMessage(newCalc.c, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "trapezoid/per" && <li className='li_Figure'>
            <div className='li_Inner'>
                {<MyImage src={require('../../assets/imgFigure/myTrapezoidImg2.png')} alt='ooops' />}
                  <span className='ml-4'>  Формула: P = a + b + c + d, где a, b, c, d — это сороны. </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput value={newCalc.c}  onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите значение c' validison={ErrorMessage(newCalc.c, startValid)}/>
               <MyInput value={newCalc.d}  onChange={(e) => setNewCalc({...newCalc, d: e})} placeholder='Введите значение d' validison={ErrorMessage(newCalc.d, startValid)}/>
               Результат: <span className='text-green-500'>{errorTrapezoid ? errorTrapezoid : result}</span> 
            </li>}
         </ul>
         <MyButton onClick={calcMyTrapezoid}>Рассчитать</MyButton> 
      </div>
   );
};

export default MyTrapezoid;
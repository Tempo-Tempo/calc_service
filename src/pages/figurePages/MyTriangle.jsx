import React, { useCallback, useState, useEffect } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';
import { HandlerTypeTriangle } from '../../components/RulesAndHelpers/HandlerTypeTriangle/HandlerTypeTriangle.js';
import { RulesTypeTriangle } from '../../components/RulesAndHelpers/HandlerTypeTriangle/RulesTypeTriangle.js';


const MyTriangle = () => {

   const [typeFigure, setTypeFigure] = useState('');

   const [startValid, setStartValid] = useState(false);

   const [ result, setResult ] = useState('');

   const [ resultTypeTriangle, setResultTypeTriangle ] = useState('')

   const [ errorTriangle, setErrorTriangle ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: '', d: ''});
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
      setNewCalc({a: '', b: '', c: '', d: ''});
      setErrorTriangle('');
      setResult('');

   }

   useEffect(() => {
     handlerPutOption('triangle/square');
   }, []);

   const otherResults = async () => {
      let wrongRule = RulesTypeTriangle(newCalc)
      let finalResult = await calc(newCalc, typeFigure);
      setErrorTriangle(wrongRule)
      setResult(finalResult);
   }

   const calcMyTriangle = useCallback( async () => {
      setErrorTriangle('');
      setStartValid(true)
      setTimeout(() => {
         setStartValid(false)
      }, 2500);
      if (typeFigure === "triangle/type") {
        let resultType = await calc(newCalc, typeFigure);
        return setResultTypeTriangle(resultType);
      } else {
         otherResults();
      }
   })

   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор треугольникa</div>
         <div className='figure_title'>
         Треугольник — это геометрическая фигура, состоящая из трех отрезков
         </div>
         <label> Что будем рассчитывать? </label>
          <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}> 
            <option value="triangle/square">Площадь треугольника</option>
            <option value="triangle/per">Периметр треугольника</option>
            <option value="triangle/med">Медиана треугольника</option>
            <option value="triangle/bess">Биссектриса треугольника</option>
            <option value="triangle/type">Тип треугольника</option>
            <option value="triangle/rad">Площадь вписанной в треугольник окружности</option>
            <option value="triangle/opi">Площадь описанной в треугольник окружности</option>
         </select>
         <ul className='ul_Figure'>
         {typeFigure === "triangle/square" && <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require(`../../assets/imgFigure/myTriangleImg.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: S = 0.5 * a * h, где a — основание,  h — высота.  </span>
                </div> 
               <MyInput
               value={newCalc.a} 
               onChange={(e) => setNewCalc({...newCalc, a: e})} 
               placeholder='Введите основание a' 
               validison={ ErrorMessage(newCalc.a, startValid)}
               calcMySquare={calcMyTriangle}
               />
               <MyInput 
               value={newCalc.b} 
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите высоту h' 
               validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{errorTriangle ? errorTriangle.resultText : result}</span> 
            </li>}
            {typeFigure === "triangle/per" && <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require(`../../assets/imgFigure/myTriangleImg2.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: P = a + b + c, где a, b, c - стороны треугольника </span>
                </div> 
               <MyInput 
               value={newCalc.a}  
               onChange={(e) => setNewCalc({...newCalc, a: e})} 
               placeholder='Введите катет a'
               validison={ErrorMessage(newCalc.a, startValid)}/> 
               <MyInput 
               value={newCalc.b} 
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите катет b' 
               validison={ErrorMessage(newCalc.b, startValid)}/>  
               {/* errorTriangle ? ErrorRulesTriangle(errorTriangle.errorInput, startValid) */}
               <MyInput 
               value={newCalc.c} 
               onChange={(e) => setNewCalc({...newCalc, c: e})}
                placeholder='Введите гипотенузу c' 
                validison={ErrorMessage(newCalc.c, startValid)}/>
               Результат: <span className='text-green-500'>{errorTriangle ? errorTriangle.resultText : result}</span> 
            </li>}
            {typeFigure === "triangle/med" &&  <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require(`../../assets/imgFigure/myTriangleImgMed.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: AM = √(2 * AB² + 2 * AC² - BC²) * 0.5, где AB, AC, BC - стороны треугольника; AM - медиана </span>
                </div> 
               <MyInput  
               value={newCalc.a}  
               onChange={(e) => setNewCalc({...newCalc, a: e})} 
               placeholder='Введите катет АВ' 
               validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput  
               value={newCalc.b}  
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите катет AC' 
               validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput  
               value={newCalc.c}  
               onChange={(e) => setNewCalc({...newCalc, c: e})} 
               placeholder='Введите гипотенуза BC'
               validison={ErrorMessage(newCalc.c, startValid)}/>
                 Результат: <span className='text-green-500'>{errorTriangle ? errorTriangle.resultText : result}</span>  
            </li>}
            {typeFigure === "triangle/bess" &&  <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require(`../../assets/imgFigure/myTriangleImgBiss.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: L =  √ab (a + b + c) * (a + b - c) / (a + b)</span>
                </div> 
               <MyInput 
               value={newCalc.a}  
               onChange={(e) => setNewCalc({...newCalc, a: e})} 
               placeholder='Введите катет a' 
               validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput  
               value={newCalc.b}  
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите катет b' 
               validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput  
               value={newCalc.c}   
               onChange={(e) => setNewCalc({...newCalc, c: e})} 
               placeholder='Введите гипотенуза c' 
               validison={ErrorMessage(newCalc.c, startValid)}/>
                 Результат: <span className='text-green-500'>{errorTriangle ? errorTriangle.resultText : result}</span>  
            </li>}
            {typeFigure === "triangle/type" &&  <li className='li_Figure'>
               Введите 3 известных значения угла, чтобы определить тип треугольника
               <MyInput 
               value={newCalc.a} 
               onChange={(e) => setNewCalc({...newCalc, a: e})}
               placeholder='Введите угол a' 
               validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput  
               value={newCalc.b}  
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите угол b' 
               validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput 
               value={newCalc.c}  
               onChange={(e) => setNewCalc({...newCalc, c: e})} 
               placeholder='Введите угол c' 
               validison={ErrorMessage(newCalc.c, startValid)}/>                 
               Результат: <span className='text-green-500'>{HandlerTypeTriangle(resultTypeTriangle)}</span>  
            </li>}
            {typeFigure === "triangle/rad" &&  <li className='li_Figure'>
               <div className='li_Inner'>
                 {<MyImage src={require(`../../assets/imgFigure/myTriangleImg6.png`)} alt='ooops' />}
                 <span className='ml-4'> Формула: π * r², где r = √(((p - a) * (p - b) * (p - c)) / p), p - полупериметр </span>
                </div> 
                <MyInput 
                value={newCalc.a}  
                onChange={(e) => setNewCalc({...newCalc, a: e})}  
                placeholder='Введите катет a' 
                validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput  
               value={newCalc.b}  
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите катет b'
               validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput 
               value={newCalc.c}  
               onChange={(e) => setNewCalc({...newCalc, c: e})} 
               placeholder='Введите гипотенузу c' 
               validison={ErrorMessage(newCalc.c, startValid)}/>     
                 Результат: <span className='text-green-500'>{errorTriangle ? errorTriangle.resultText : result}</span>  
            </li>}
            {typeFigure === "triangle/opi" &&  <li className='li_Figure'>
               <div className='li_Inner'>
                 {<MyImage src={require(`../../assets/imgFigure/MyTriangleImgVpis.png`)} alt='ooops' />}
                 <span className='ml-4'> Формула: π * r², где r = (a * b * c) / (4 * S), a, b, c - стороны треугольника, S - площадь треугольника  </span>
                </div> 
                <MyInput 
                value={newCalc.a}  
                onChange={(e) => setNewCalc({...newCalc, a: e})}
                placeholder='Введите катет a'
                validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput  
               value={newCalc.b}  
               onChange={(e) => setNewCalc({...newCalc, b: e})}
               placeholder='Введите катет b'
               validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput 
               value={newCalc.c}  
               onChange={(e) => setNewCalc({...newCalc, c: e})}
               placeholder='Введите гипотенузу d'
               validison={ErrorMessage(newCalc.c, startValid)}/>
                 Результат: <span className='text-green-500'>{errorTriangle ? errorTriangle.resultText : result}</span>  
            </li>}
         </ul>
         <MyButton onClick={calcMyTriangle}>Рассчитать</MyButton>
      </div>
   );
};

export default MyTriangle;
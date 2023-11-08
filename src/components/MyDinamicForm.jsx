import React, {useState, useCallback, useEffect} from 'react';
import { calc } from '../hooks/UseTestPost/GetCalcResult';
import MyImage from '../ui/MyImage/MyImage';
import MyButton from '../ui/MyButton/MyButton.tsx';
import MyInput from '../ui/MyInputForCalc/MyInputForCalc.tsx';
import { ErrorMessage } from './ErrorMessage';
import { HandlerTypeTriangle } from "../components/RulesAndHelpers/HandlerTypeTriangle/HandlerTypeTriangle";
import { HandlerRulesTrapezoid } from './RulesAndHelpers/HelperRulesTrapezoid/HelperRulesTrapezoid';
import { RulesTypeTriangle } from './RulesAndHelpers/HandlerTypeTriangle/RulesTypeTriangle';


const MyDinamicForm = ( { typeFigure, } ) => {

   const [startValid, setStartValid] = useState(false);

   const [ errorTriangle, setErrorTriangle ] = useState('');

   const [ errorTrapezoid, setErrorTrapezoid ] = useState('');

   const [ resultTypeTriangle, setResultTypeTriangle ] = useState('')

   const [ result, setResult ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: '', d: ''});
  
   useEffect(() => {
      setNewCalc({a: '', b: '', c: '', d: ''});
      setErrorTrapezoid('');
      setErrorTriangle('');
      setResult('');
   }, [typeFigure]);

   const otherResults = async () => {
      let wrongRule = RulesTypeTriangle(newCalc)
      let finalResult = await calc(newCalc, typeFigure);
      setErrorTriangle(wrongRule);
      setResult(finalResult);
   }

   const calcMyFigure = useCallback( async (e) => {
    console.log('alo')
      e.preventDefault();
      setErrorTriangle('');
      setStartValid(true)
      setTimeout(() => {
         setStartValid(false)
      }, 2500);
      if (typeFigure === "triangle/type") {
        let resultType = await calc(newCalc, typeFigure);
        return setResultTypeTriangle(resultType);
      } else if(typeFigure === "trapezoid/per"){
         let finalResult = await calc(newCalc, typeFigure);
         let newWrong = HandlerRulesTrapezoid(newCalc);
         setErrorTrapezoid(newWrong);
         setResult(finalResult);
      } else {
         otherResults();
      }
   })
   return (
      <form onSubmit={(e) => calcMyFigure(e)}>
           <ul className={'ul_Figure'}>
            {typeFigure === "circle/square" && <li className={'li_Figure'}>
                <div className={'li_Inner'}>
                  {<MyImage src={require('../assets/imgFigure/myCircleImg2.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: S =  π * r², где r — это радиус, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение r' validison={ErrorMessage(newCalc.a, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "circle/per" && <li className={'li_Figure'}>
                <div className={'li_Inner'}>
                  {<MyImage src={require('../assets/imgFigure/myCircleImg2.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: P = 2 * π * r, где r — это радиус, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение r' validison={ErrorMessage(newCalc.a, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "parallelogram/square" && <li className='li_Figure'>
               <div className='li_Inner'>
               {<MyImage src={require('../assets/imgFigure/myParallelogramImg2.png')} alt='ooops' />} 
                 <span className='ml-4'> Формула: S = AD * BM, где AD — это основание параллелограмма, BM — это высота параллелограмма </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение AD' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение BM' validison={ErrorMessage(newCalc.b, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "parallelogram/per" && <li className='li_Figure'>
               <div className='li_Inner'>
                 {<MyImage src={require('../assets/imgFigure/myParallelogramImg2.png')} alt='ooops' />} 
                 <span className='ml-4'> Формула: P = 2 * (AB + AD), где AB — это "короткая", AD — это "длинная" сторона параллелограмма </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение AB' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение AM' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "parallelogram/height" && <li className='li_Figure'>
               <div className='li_Inner'>
                 {<MyImage src={require('../assets/imgFigure/myParallelogramImg2.png')} alt='ooops' />} 
                 <span className='ml-4'> Формула: H = S / AD, где S — это площадь, AD — это основание </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение S' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение AD' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "rectangle/square" && <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require('../assets/imgFigure/myRentagleImg.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: S =  a * b, где а — это ширина, b — это длина </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "rectangle/per" && <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require('../assets/imgFigure/myRentagleImg.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: P = 2 * (a + b), где а — это длина, b — это ширина </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "recTriangle/sin" && <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require('../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: Sin(a) =  a / c, где a — это противолежаший катет, c — гипотенуза</span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону a' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону c' validison={ErrorMessage(newCalc.b, startValid)}/>
                  Результат: {result?.length ? <span className='text-green-500'>Sin(a) = {result[0]} <br></br> Rad = {result[1]}</span> : ''} 
            </li>}
            {typeFigure === "recTriangle/cos" && <li className='li_Figure'>
                <div className='li_Inner'>
                {<MyImage src={require('../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: Cos(a) =  b / c, где b — это прилежащий катет, с — гипотенуза </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону b' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону c' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат:  {result?.length ? <span className='text-green-500'>Sin(a) = {result[0]} <br></br> Rad = {result[1]}</span> : ''}
            </li>}
            {typeFigure === "recTriangle/tg" && <li className='li_Figure'>
                <div className='li_Inner'>
                {<MyImage src={require('../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: Tg(a) =  a / b, где a — это противолежаший катет, b — это прилежащий катет</span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите соторну a' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону b' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат:{result?.length ? <span className='text-green-500'>Sin(a) = {result[0]} <br></br> Rad = {result[1]}</span> : ''}
            </li>}
            {typeFigure === "recTriangle/gip" && <li className='li_Figure'>
                <div className='li_Inner'>
                {<MyImage src={require('../assets/imgFigure/MyRecTriangleImgSin.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: c² = a² + b² - 2ab * cos(ab), где a, b — сотороны треугольника, с — угол между ними, а c² — гипотенуза</span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите соторну a' validison={ErrorMessage(newCalc.a, startValid)}/>
                <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите соторну b' validison={ErrorMessage(newCalc.b, startValid)}/>
                <MyInput value={newCalc.c}  onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите угол c' validison={ErrorMessage(newCalc.c, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "rhombus/square" && <li className='li_Figure'>
            <div className='li_Inner'>
               {<MyImage src={require('../assets/imgFigure/myRhombusImg.png')} alt='ooops' />}
               <span className='ml-4'> Формула: S = (AC · BD) / 2, где AC и BD — это диагонали ромба </span>
            </div>
             <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону AC' validison={ErrorMessage(newCalc.a, startValid)}/>
             <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите высоту BD' validison={ErrorMessage(newCalc.b, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span>  
         </li>}
         {typeFigure === "rhombus/per" && <li className='li_Figure'>
         <div className='li_Inner'>
               {<MyImage src={require('../assets/imgFigure/myRhombusImg2.png')} alt='ooops' />}
               <span className='ml-4'>  Формула: P = a + a + a + a, где a — это сторона </span>
            </div>
            <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону a' validison={ErrorMessage(newCalc.a, startValid)}/>
            Результат: <span className='text-green-500'>{result}</span> 
         </li>}
         {typeFigure === "squared/square" && <li className='li_Figure'>
                <div className='li_Inner'>
                 {<MyImage src={require(`../assets/imgFigure/mySquareImg.png`)} alt='ooops' />}
                  <span className='ml-4'>  Формула: S = a * a, где S — площадь, a — сторона </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "square/per" && <li className='li_Figure'>
                <div className='li_Inner'>
                 {<MyImage src={require(`../assets/imgFigure/mySquareImg.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: P = a * 4, где P — периметр, a — сторона </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               Результат: <span className='text-green-500'>{result}</span> 
            </li>}
            {typeFigure === "square/radius" &&  <li className='li_Figure'>
                <div className='li_Inner'>
                 {<MyImage src={require(`../assets/imgFigure/mySquareImg2.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: Svp = π * (a / 2)², где a / 2 — радиус вписанной окружности, a — сторона, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
                 Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "square/opi" &&  <li className='li_Figure'>
                <div className='li_Inner'>
                 {<MyImage src={require(`../assets/imgFigure/mySquareImg2.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: Sop = (a * a * 2) * π, где R — радиус описанной окружности, a — сторона, π — это константа ранвая примерно 3.14 </span>
                </div>
                <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
                 Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "trapezoid/square" && <li className='li_Figure'>
                <div className='li_Inner'>
                {<MyImage src={require('../assets/imgFigure/myTrapezoidImg3.png')} alt='ooops' />}
                  <span className='ml-4'> Формула: S = (a + b) * h / 2, где a и b - длины оснований трапеции, а h - высота трапеции, опущенная на основание. </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput value={newCalc.c}  onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите значение h' validison={ErrorMessage(newCalc.c, startValid)}/>
                  Результат: <span className='text-green-500'>{result}</span>  
            </li>}
            {typeFigure === "trapezoid/per" && <li className='li_Figure'>
            <div className='li_Inner'>
                {<MyImage src={require('../assets/imgFigure/myTrapezoidImg2.png')} alt='ooops' />}
                  <span className='ml-4'>  Формула: P = a + b + c + d, где a, b, c, d — это сороны. </span>
               </div>
               <MyInput value={newCalc.a}  onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите значение a' validison={ErrorMessage(newCalc.a, startValid)}/>
               <MyInput value={newCalc.b}  onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите значение b' validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput value={newCalc.c}  onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите значение c' validison={ErrorMessage(newCalc.c, startValid)}/>
               <MyInput value={newCalc.d}  onChange={(e) => setNewCalc({...newCalc, d: e})} placeholder='Введите значение d' validison={ErrorMessage(newCalc.d, startValid)}/>
               Результат: <span className='text-green-500'>{errorTrapezoid ? errorTrapezoid : result}</span> 
            </li>}
            {typeFigure === "triangle/square" && <li className='li_Figure'>
                <div className='li_Inner'>
                  {<MyImage src={require(`../assets/imgFigure/myTriangleImg.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула: S = 0.5 * a * h, где a — основание,  h — высота.  </span>
                </div> 
               <MyInput
               value={newCalc.a} 
               onChange={(e) => setNewCalc({...newCalc, a: e})} 
               placeholder='Введите основание a' 
               validison={ ErrorMessage(newCalc.a, startValid)}
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
                  {<MyImage src={require(`../assets/imgFigure/myTriangleImg2.png`)} alt='ooops' />}
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
                  {<MyImage src={require(`../assets/imgFigure/myTriangleImgMed.png`)} alt='ooops' />}
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
                  {<MyImage src={require(`../assets/imgFigure/myTriangleImgBiss.png`)} alt='ooops' />}
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
                 {<MyImage src={require(`../assets/imgFigure/myTriangleImg6.png`)} alt='ooops' />}
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
                 {<MyImage src={require(`../assets/imgFigure/MyTriangleImgVpis.png`)} alt='ooops' />}
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
           <MyButton onClick={calcMyFigure} >Рассчитать</MyButton>    
      </form>
   );
};

export default MyDinamicForm;
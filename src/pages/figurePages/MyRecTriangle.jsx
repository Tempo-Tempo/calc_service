import React, { useEffect, useState } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';


const MyRecTriangle = () => {
   
   const [typeFigure, setTypeFigure] = useState('');
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
      handlerPutOption('recTriangle/sin');
   }, []);

 

   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор прямоугольного треугольника</div>
         <div className='figure_title'>
            Прямоугольный треугольник — это треугольник, в котором один угол прямой (то есть 90 градусов)
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}>
            <option value="recTriangle/sin">Синус прямоугольного треугольника</option>
            <option value="recTriangle/cos">Косинус прямоугольного треугольника</option>
            <option value="recTriangle/tg">Тангенс прямоугольного треугольника</option>
            <option value="recTriangle/gip">Длину гипотенузы </option>
         </select>
         <MyDinamicForm typeFigure={typeFigure}/>   
      </div>
   );
};

export default MyRecTriangle;
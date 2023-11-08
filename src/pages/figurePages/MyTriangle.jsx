import React, { useState, useEffect } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';


const MyTriangle = () => {

   const [typeFigure, setTypeFigure] = useState('');

   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
     handlerPutOption('triangle/square');
   }, []);


   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор треугольникa</div>
         <div className='figure_title'>
         Треугольник — это геометрическая фигура, состоящая из трех отрезков
         </div>
             <label> Что будем рассчитывать?  </label>
          <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}> 
            <option value="triangle/square">Площадь треугольника</option>
            <option value="triangle/per">Периметр треугольника</option>
            <option value="triangle/med">Медиана треугольника</option>
            <option value="triangle/bess">Биссектриса треугольника</option>
            <option value="triangle/type">Тип треугольника</option>
            <option value="triangle/rad">Площадь вписанной в треугольник окружности</option>
            <option value="triangle/opi">Площадь описанной в треугольник окружности</option>
         </select>
         <MyDinamicForm typeFigure={typeFigure}/>
      </div>
   );
};

export default MyTriangle;
import React, { useEffect, useState } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';
import './MyFigures.css';

const MyCircle = () => {
   const [typeFigure, setTypeFigure] = useState('');

  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
      handlerPutOption('circle/square');
   }, []);


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
         <MyDinamicForm typeFigure={typeFigure}/>  
      </div>
   );
};

export default MyCircle;
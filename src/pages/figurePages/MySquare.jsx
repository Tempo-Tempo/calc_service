import React, { useEffect, useState } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';

const MySquare = () => {

   const [typeFigure, setTypeFigure] = useState('');
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
      handlerPutOption('squared/square');
   }, []);

   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор квадрата</div>
         <div className='figure_title'>
               Квадрат - фигура, у которой все стороны равны.
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}>
            <option value="squared/square">Площадь квадрата</option>
            <option value="square/per">Периметр квадрата</option>
            <option value="square/radius">Площадь вписанной окружности</option>
            <option value="square/opi">Площадь описаной окружности</option>
         </select>
         <MyDinamicForm typeFigure={typeFigure}/> 
      </div>
   );
};

export default MySquare;
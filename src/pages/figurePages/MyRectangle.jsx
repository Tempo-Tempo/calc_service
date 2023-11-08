import React, {  useEffect, useState } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';


const MyRentagle = () => {
   const [typeFigure, setTypeFigure] = useState('');
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
      handlerPutOption('rectangle/square');
   }, []);

   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор прямоугольника</div>
         <div className='figure_title'>
               Прямоугольником называется параллелограмм, у которого все углы прямые.
         </div> 
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}>
            <option value="rectangle/square">Площадь прямоугольника</option>
            <option value="rectangle/per">Периметр прямоугольника</option>
         </select>
         <MyDinamicForm typeFigure={typeFigure}/>   
      </div>
   );
};

export default MyRentagle;
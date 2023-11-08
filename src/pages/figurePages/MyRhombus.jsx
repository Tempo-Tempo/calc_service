import React, { useEffect, useState } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';

const MyRhombus = () => {
   
   const [typeFigure, setTypeFigure] = useState('');
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
      handlerPutOption('rhombus/square');
   }, []);

   return (
      <div className='figure_item'>
      <LinkToMain />
      <div className='figure_title'>Калькулятор ромбаa</div>
      <div className='figure_title'>
      Ромбом называется параллелограмм, у которого все стороны равны.
      </div>
         <label> Что будем рассчитывать? </label>
      <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}> 
         <option value={"rhombus/square"}>Площадь ромбa</option>
         <option value={"rhombus/per"}>Периметр ромбa</option>
      </select>
      <MyDinamicForm typeFigure={typeFigure}/>  
      </div>
   );
};

export default MyRhombus;
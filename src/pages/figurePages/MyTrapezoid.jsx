import React, { useEffect, useState } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';

const MyTrapezoid = () => {

   const [typeFigure, setTypeFigure] = useState('');
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
      handlerPutOption('trapezoid/square');
   }, []);


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
         <MyDinamicForm typeFigure={typeFigure}/>
      </div>
   );
};

export default MyTrapezoid;
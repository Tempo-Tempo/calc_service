import React, { useEffect, useState } from 'react';
import LinkToMain from '../../ui/MyLinkToMain/LinkToMain.jsx';
import MyDinamicForm from '../../components/MyDinamicForm.jsx';

const MyParallelogram = () => {
   const [typeFigure, setTypeFigure] = useState('');
  
   const handlerPutOption = (type) => {
      setTypeFigure(type);
   }

   useEffect(() => {
      handlerPutOption('parallelogram/square');
   }, []);


   return (
      <div className='figure_item'>
         <LinkToMain />
         <div className='figure_title'>Калькулятор параллелограмма</div>
         <div className='figure_title'>
               Параллелограмм — это четырехугольник, у которого противоположные стороны попарно параллельны и равны.
         </div>
            <label> Что будем рассчитывать? </label>
         <select value={typeFigure} onChange={(e) => handlerPutOption(e.target.value)} className={"select_Figure"}>
            <option  value="parallelogram/square">Площадь параллелограмма</option>
            <option value="parallelogram/per">Периметр параллелограмма</option>
            <option value="parallelogram/height">Высоту параллелограмма</option>
         </select>
         <MyDinamicForm typeFigure={typeFigure}/>
      </div>
   );
};

export default MyParallelogram;
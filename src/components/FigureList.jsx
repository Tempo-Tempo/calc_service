import React, { useEffect, useState } from 'react';
import { UseGetFigure } from '../hooks/UseGetFigure/UseGetFigure';
import FigureListItem from './FigureListItem';
import { HelperFigurePath } from './RulesAndHelpers/HelperFigurePath/HelperFigutePath.js';
import { Link } from 'react-router-dom';

const FigureList = ({ ListIsOpen }) => {

   const [FigureList, setFigureList] = useState([]);
  
   useEffect(() => {
      return async () => {
         const responce = await UseGetFigure();
         setFigureList(responce?.map((figure) => {
            figure.path = HelperFigurePath(figure);
            return figure;
         }));
      }
   }, [])
   return (
      <ul className='figure_list'>
         { ListIsOpen && FigureList?.map(figure => <Link key={ figure?.id } to={figure?.path}> <FigureListItem figure={ figure } /></Link>)}
      </ul>
   );
};

export default FigureList;
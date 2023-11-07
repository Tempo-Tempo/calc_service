import React from 'react';

const FigureListItem = ({ figure }) => {
   return (
       <li
         className={'font-bold cursor-pointer p-1 text-base mt-1 rounded-md border border-sky-500 text-white hover:bg-gray-900'}>
        { figure?.title }
       </li>
   );
};

export default FigureListItem;
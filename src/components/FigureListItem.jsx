import React from 'react';

const FigureListItem = ({ figure }) => {
   return (
       <li
         className={'figure_list_item'}>
        { figure?.title }
       </li>
   );
};

export default FigureListItem;
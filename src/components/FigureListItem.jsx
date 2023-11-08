import React from 'react';

const FigureListItem = ({ figure }) => {
   return (
       <div
         className={'figure_list_item'}>
        { figure?.title }
       </div>
   );
};

export default FigureListItem;
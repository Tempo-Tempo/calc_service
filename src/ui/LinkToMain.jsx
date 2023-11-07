import React from 'react';
import { Link } from 'react-router-dom';

const LinkToMain = () => {
   return (
      <Link to='/' className='absolute right-3 top-1 cursor-pointer'>X</Link>
   );
};

export default LinkToMain;
import '../App.css';
import React, { useEffect, useState } from 'react';
import MyButton from '../ui/MyButton.tsx';
import FigureList from '../components/FigureList';



function MainPage() {

  const isOpen = JSON.parse(localStorage.getItem('isOpen'))

  const [ListIsOpen, setListIsOpen] = useState(isOpen);

  const openList = () => {
    setListIsOpen(prev => !prev);
  }

  useEffect(() => {
    localStorage.setItem('isOpen', JSON.stringify(ListIsOpen));
  }, [ListIsOpen])

  return (
    <div className="App">
      <header className="App-header">
          <MyButton onClick={openList} >
              Список фигур
          </MyButton>
          <FigureList ListIsOpen={ListIsOpen} /> 
      </header>
    </div>
  );
}

export default MainPage;

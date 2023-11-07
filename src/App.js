import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrRoutes } from './components/MyRoutes';
import { StopFetchContext } from './context';

function App() {

  // не используется
  const [ isFetch, setIsFetch ] = useState(false);

  return (
    <StopFetchContext.Provider value={{
      isFetch,
      setIsFetch
    }}>
      <div className="App">
      <header className="App-header">
        <Routes>
          {ArrRoutes.map((r) => 
            <Route 
            key={r.path}
            path={r.path}
            Component={r.component}
            exact={r.exact}
            />
          )}
        </Routes>
      </header>
    </div>
    </StopFetchContext.Provider>
    
  );
}

export default App;

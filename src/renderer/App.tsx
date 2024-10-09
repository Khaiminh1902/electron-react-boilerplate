import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './shared/store';
import MainComponent from './components/MainComponent';
import React from 'react';
import MainDisplay from './components/main-subs/MainDisplay';

const App = React.memo(() => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<MainComponent />}
            children={[
              <Route 
                path='server/:serverId'
                element={<MainDisplay />}
              />
            ]}
          />
        </Routes>
      </Router>
    </Provider>
  );
})

export default App
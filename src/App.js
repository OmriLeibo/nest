import Router from './Router';
import './App.scss';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Events from './components/Events';
import Albums from './components/Albums';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/events' element={<Events />} />
          <Route path='/albums' element={<Albums />} />
        </Routes>
      </main>

      <Router />

    </div>
  );
};

export default App;

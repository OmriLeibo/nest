import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Events from './components/Events';
import Albums from './components/Albums';

const App = () => {
  return (
    <div className='App'>
      <Header>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/events' element={<Events />} />
            <Route path='/albums' element={<Albums />} />
      </Header>
    </div>
  );
};

export default App;

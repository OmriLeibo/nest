import Router from './Router';
import './App.scss';
import Header from './components/Header';


const App = () => {
  return (
    <div className='App'>
      <Header />

      <Router />
    </div>
  );
};

export default App;

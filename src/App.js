import Router from './Router';
import './App.scss';
import Header from './components/Header';
import VideoBackground from './components/VideoBackground';

const App = () => {
  return (
    <div className='App'>
      <div className='appBody'>
        <Header />
        <Router />
      </div>
      <VideoBackground />
    </div>
  );
};

export default App;

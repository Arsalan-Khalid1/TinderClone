import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <Card />
      <SwipeButtons />
    </div>
  );
}

export default App;

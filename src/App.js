import './App.css';
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

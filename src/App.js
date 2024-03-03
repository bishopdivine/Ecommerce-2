import Logo from "./Components/Logo";
import TopSide from "./Components/TopSide";
import Main from "./Components/Main";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <TopSide />
        <Main />
        
      </BrowserRouter>
        
    </div>
  );
}

export default App;

import Logo from "./Components/Logo";
import TopSide from "./Components/TopSide";
import Main from "./Components/Main";
import Main2 from "./Components/Main2";
import './App.css';
//import Footer from './Components/Footer'
import Right from "./Components/Right";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-gray-100">
      <BrowserRouter>
      <div>
          <div className="inline-flex" >
            <Logo className="display"/>
            <div className="display 7">
              <TopSide/>
            </div>
             
          </div>

            <div className="display">
              <Main className="display" />
              
            </div>
            <div className="display">
            <Right className="display right"/>
            </div>
            <Main2 />
      </div>
         
      
      </BrowserRouter>
        
    </div>
  );
}

export default App;

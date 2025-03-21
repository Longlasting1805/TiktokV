// import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
// import Proceed from './Components/Proceed/Proceed';
// import Proceed from './Components/Proceed/Proceed';
// import {Routes, Route, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div >
       {/* <BrowserRouter>
        <Routes>
          <Route index element={<Proceed />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter> */}
      <LoginSignup />
     
   
    </div>
  );
}

export default App;

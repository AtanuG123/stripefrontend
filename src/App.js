
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Component/Cart';
import Test from './Component/test';
import Success from './Component/test';
import Fail from './Component/fail';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Cart />}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/fail" element={<Fail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

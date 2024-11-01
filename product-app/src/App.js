import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hello } from './Components/Hello';
import { Good } from "./Components/Good";

function App() {
  return (
    <BrowserRouter>
      <Routes  >
        <Route path="/" element={<Hello />} >
          <Route path="naber" element={<Good />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

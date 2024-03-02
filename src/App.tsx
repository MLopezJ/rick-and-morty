import Characters from "./compoments/Characters";
import Character from './compoments/Character'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Characters} />
          <Route path="/characters/:id" Component={Character} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

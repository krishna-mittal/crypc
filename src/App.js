import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Coins from "./component/Coins";
import CoinDetails from "./component/CoinDetails";
import Exchange from "./component/Exchange";

function App() {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/exchanges" element={<Exchange></Exchange>}></Route>
        <Route path="/coin/:id" element={<CoinDetails></CoinDetails>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

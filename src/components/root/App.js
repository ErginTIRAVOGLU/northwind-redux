import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import NotFound from "../toolbox/NotFound";


function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>        
        <Route path="/product" element={<Dashboard/>}></Route>        
        <Route path="/cart" element={<CartDetail/>}></Route>        
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Container>
  );
}

export default App;

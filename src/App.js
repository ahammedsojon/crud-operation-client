import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddProduct from "./components/AddProduct/AddProduct";
import Home from "./components/Home/Home";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Products from "./components/Products/Products";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route path="/products/add">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/products/update/:id">
              <UpdateProduct></UpdateProduct>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

import { Badge, Button, Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "../common/NotFound";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
//
function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/product" component={Dashboard} />
          <Route
            path="/saveproduct/:productId"
            component={AddOrUpdateProduct}
          />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route exact path="/cart" component={CartDetail} />
          <Route exact component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

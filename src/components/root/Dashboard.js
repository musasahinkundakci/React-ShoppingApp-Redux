import { Col, Container, Row } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import Navi from "../navi/Navi";
import ProductList from "../products/ProductList";
const Dashboard = () => {
  return (
    <div>
      <br />
      <Row>
        <Col xs="3">
          <CategoryList />
        </Col>
        <Col xs="9">
          <ProductList />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "./redux/reducers/configureStore";
import { BrowserRouter } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();

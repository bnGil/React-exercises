import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Homepage from "./Homepage";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import NotFound from "./NotFound";

class Exercise16_1 extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Exercise16_1;

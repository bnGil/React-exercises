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
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetail} />
          <Route component={NotFound} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Exercise16_1;

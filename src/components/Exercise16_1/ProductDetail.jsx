import React from "react";
import store from "./store";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component {
  findProductByID = (id) => {
    return store.find((product) => Number(id) === product.id);
  };

  render() {
    const { title, imageUrl, price, size } = this.findProductByID(
      this.props.match.params.id
    );
    console.log(this.props);
    return (
      <div className="product-detail">
        <h1>{title}</h1>
        <h3>Price: {price}$</h3>
        <h3>Size: {size}</h3>
        <img src={imageUrl} alt={title} />
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}

export default ProductDetail;

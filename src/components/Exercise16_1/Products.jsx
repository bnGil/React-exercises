import React from "react";
import { Link } from "react-router-dom";
import store from "./store";

class Products extends React.Component {
  state = { store: [] };
  componentDidMount() {
    this.setState({ store });
  }

  createProductLinks = () => {
    return this.state.store.map(({ title, id }) => {
      return (
        <Link
          className="link"
          to={this.props.location.pathname + `/${id}`}
          key={id}
        >
          {title}
        </Link>
      );
    });
  };

  render() {
    return <div className="links-container">{this.createProductLinks()}</div>;
  }
}

export default Products;

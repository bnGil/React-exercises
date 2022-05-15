import React from "react";

class Box1 extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgreen",
          width: "400px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class Box2 extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightblue",
          width: "380px",
          height: "280px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class Box3 extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightpink",
          width: "360px",
          height: "260px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class Box4 extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightsalmon",
          width: "280px",
          height: "100px",
          margin: "10px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class Exercise3_1 extends React.Component {
  render() {
    return (
      <div>
        <Box1>
          <Box2>
            <Box3>
              <Box4 />
              <Box4 />
            </Box3>
          </Box2>
        </Box1>
      </div>
    );
  }
}

export default Exercise3_1;

import React from "react";

class SelectAge extends React.Component {
  render() {
    return (
      <div>
        <label>Age:</label>
        <select
          onChange={(e) => this.props.onChange(this.props.id, e.target.value)}
          id={this.props.id}
          value={this.props.value}
        >
          <option>0-15</option>
          <option>16-40</option>
          <option>Over 40</option>
        </select>
      </div>
    );
  }
}

export default SelectAge;

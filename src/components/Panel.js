import React, { Component } from "react";

class Panel extends Component {

  render() {
    const { id, label, value } = this.props;

    return (
      <section
        className="dashboard__panel"
        onClick={event => this.props.onSelect(id)}
        
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;

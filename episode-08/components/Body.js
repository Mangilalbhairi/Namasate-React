import React, { Component } from "react";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "mangilal",
    };
  }

  // Update counter here
  increCounter = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  descCounter = () => {
    this.state.count > 0
      ? this.setState({ count: this.state.count - 1 })
      : this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <div className="body-container">
          <div className="counter-card">
            <h1 className="counter-heading">Counter App</h1>
            <h4>Counting start</h4>
            <h5>Count: {this.state.count}</h5>
            <div className="btn-group">
              <button className="btn" onClick={this.increCounter}>
                +
              </button>
              <button className="btn" onClick={this.descCounter}>
                -
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Body;

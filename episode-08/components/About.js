import React from "react";
import User from "./User";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {
        name: "mangilal",
        timerId: null,
      },
    };
    console.log("parent contructor call", this.state.user.name);
  }
  updateCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log("hi");
    }, 1000);
    clearInterval();
  }

  componentDidUpdate() {
    console.log("parent update");
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("componentWillMount");
  }
  render() {
    console.log("parent render call", this.state.user.name);
    return (
      <>
        <div>Count : {this.state.count}</div>
        <button onClick={this.updateCounter}>updateCounter</button>
        <User />
      </>
    );
  }
}
export default About;

import React, { Component } from "react";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        name: "dummy",
      },
    };

    console.log("child constructor call");
  }
  componentDidMount() {
    console.log("child componentDidMount call");
  }
  componentDidUpdate() {
    console.log("child update");
  }
  componentWillUnmount() {
    console.log("child unmount");
  }
  render() {
    console.log("child render call");
    return (
      <>
        <div>UserProfile</div>
      </>
    );
  }
}
export default User;

/*parent constructor call
  parent render() call
       child constructor call
       child render call
       child componentDidMount
  parent componentDidMount
  parent render call
       child render call
       child componentDidUpdate call
  parent componentDidUpdate call
  parent componentWillUnmount
        child componentWillUmount */

import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>About Class Component</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </>
    );
  }
}
export default About;

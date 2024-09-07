import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "dummy",
        avatar_url: "default",
        followers: 0,
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/HiteshChoudhary");
    const json = await data.json();
    this.setState({
      info: json,
    });
  }

  render() {
    const { name, followers, avatar_url } = this.state.info;
    return (
      <>
        <div className="team-card">
          <img src={avatar_url} alt="profile image" />
          <h3>{name}</h3>
          <h4>Followers: {followers}</h4>
        </div>
      </>
    );
  }
}
export default Team;

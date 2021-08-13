import React, { Component } from "react";
import "./style.css";
import Save from "./save.png";
import Cancel from "./cancel.png";
import Table from "./table.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      isActive: "today",
    };
  }

  render() {
    const onChange = () => {
      this.setState({ isLoggedIn: !this.state.isLoggedIn });
    };
    const change = (title) => {
      this.setState({ isActive: title });
    };

    return (
      <div>
        <div className="wrapper">
          <div
            onClick={() => change("today")}
            className={`title ${this.state.isActive === "today" && "active"} `}
          >
            Today
          </div>
          <div
            onClick={() => change("week")}
            className={`title ${this.state.isActive === "week" && "active"} `}
          >
            Week
          </div>
          <div
            onClick={() => change("month")}
            className={`title ${this.state.isActive === "month" && "active"} `}
          >
            Month
          </div>
        </div>
        {this.state.isActive === "today" && <h1>Todays news</h1>}
        {this.state.isActive === "week" && <h1>Weeks news</h1>}
        {this.state.isActive === "month" && <Table />}
      </div>
    );
  }
}

import React, { Component } from "react";
import profile from "./assets/profile.png";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "Abdelkader Danoune",
        bio: "I like web development and building cool projects.",
        imgSrc: profile,
        profession: "Student Developer"
      },
      shows: false,
      time: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Arial"
        }}
      >
        {/* title */}
        <h1 style={{ marginBottom: "20px" }}>
          React State Checkpoint
        </h1>

        {/* button */}
        <button
          onClick={this.toggleShow}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/*card */}
        {this.state.shows && (
          <div
            style={{
              width: "320px",
              borderRadius: "12px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
            }}
          >
            {/* image */}
            <div
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              <img
                src={this.state.Person.imgSrc}
                alt="profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />

              {/* gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "50%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                }}
              ></div>

              {/* name on image */}
              <h3
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  margin: 0
                }}
              >
                {this.state.Person.fullName}
              </h3>
            </div>

            {/* info */}
            <div style={{ padding: "15px", textAlign: "center" }}>
              <p>{this.state.Person.bio}</p>
              <p>
                <strong>{this.state.Person.profession}</strong>
              </p>
            </div>
          </div>
        )}

        {/* timer */}
        <p style={{ marginTop: "20px" }}>
          ⏱ {this.state.time} seconds since mount
        </p>
      </div>
    );
  }
}

export default App;
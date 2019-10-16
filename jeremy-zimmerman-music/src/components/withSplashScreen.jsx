import React, { Component } from "react";

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Welcome, please wait while we load this app.
      <div className="loading-dot">.</div>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    async componentDidMount() {
        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 4000)
    }

    render() {

      if (this.state.loading) return LoadingMessage()

      return <WrappedComponent />
    }
  }
}

export default withSplashScreen;

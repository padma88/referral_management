import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }
  componentDidCatch(error) {
    //this.setState({ hasError: error });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <section className="container">
        <p>ErrorBoundary: Something Went wrong: {this.state.error.Error}</p>
      </section>
    );
  }
}

export default ErrorBoundary;

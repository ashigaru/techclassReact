import React from "react";
import CardComponent from "./CardComponent";
import InputForm from "./InputForm";

class App extends React.Component {
  state = { signedIn: true };

  signIn() {
    this.setState({ signedIn: true });
  }

  render() {
    return (
      <div className="App">
        {this.state.signedIn ? <CardComponent /> : <InputForm onSignIn={() => this.signIn()} />}
      </div>
    );
  }
}

export default App;

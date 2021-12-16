import React, { useEffect } from "react";
import { View } from "react-native";
import Navigation from "./navigation";
import DummySplash from "./components/DummySplash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 3000);
  }
  render() {
    if (this.state.showSplash == true) {
      return <DummySplash />;
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <Navigation />
        </View>
      );
    }
  }
}

export default App;

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
// Unlike React, React Native doesn't have a set
// of preloaded components that map to HTML tags.
// React Native doesn't create HTML it creates
// iOS or Android native components.

// Our basic components must be import from 'react-native'
// everytime:
// - View: Similar to a div
// - Text: Required to display text on the screen
// - TouchableOpacity: Used to make any component pressable

// To see output from console.log, use the debugger.
// Press Command-D in the simulator and click on
// 'Remote JS Debugging'


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentTime: null,
      startTime: new Date()
    }

    this.handleStart = this.handleStart.bind(this);
    this.handleStop =  this.handleStop.bind(this);
  }
  handleStart () {
    this.setState(
      {startTime: new Date()},
      () => {
        this.intervalId = setInterval(() => {
          const elapsedMs = new Date() - this.state.startTime;
          this.setState({currentTime: elapsedMs})
        }, 10);
      }
    );
  }

  handleStop () {
    this.setState({currentTime: 0, startTime: new Date()}, () => {
      clearInterval(this.intervalId);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to our Timer</Text>
        <Text style={styles.mainDisplay}>
          {this.state.currentTime / 1000}
        </Text>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={this.handleStart}>
          <Text style={styles.mainButtonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={this.handleStop}>
          <Text style={styles.mainButtonText}>Stop</Text>
        </TouchableOpacity>

        <Text>What am I doing!?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    justifyContent: 'space-around'
    // units in react-native styles are either
    // % or relative pixels. They're written as follows:
    // '50%', 100.
    // height: 50,
    // width: '50%'
  },
  // All react-native components are flex by default
  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 200,
    height: 75,
    backgroundColor: 'deepskyblue',
  },
  mainButtonText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white'
  },
  mainDisplay: {
    fontSize: 50
  }
});

export default App;

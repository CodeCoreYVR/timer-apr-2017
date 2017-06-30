import React from 'react';
import { View, Text } from 'react-native';
// Unlike React, React Native doesn't have a set
// of preloaded components that map to HTML tags.
// React Native doesn't create HTML it creates
// iOS or Android native components.

// Our basic components must be import from 'react-native'
// everytime:
// - View: Similar to a div
// - Text: Required to display text on the screen

function App (props) {
  return (
    <View>
      <Text>What am I doing!?</Text>
    </View>
  );
}

export default App;

// Import Libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// Styles
const styles = {
  viewStyle: {
    backgroundColor: "#f8f8f8",
    paddingTop: 30,
    alignItems: "center"
  },
  textStyle: {
    fontSize: 30
  }
};

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

// Make the component available to other parts of the app
export default Header;

// Import Libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// Styles
const styles = {
  viewStyle: {
    backgroundColor: "#f8f8f8",
    paddingTop: 35,
    paddingBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevtion: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 30
  }
};

// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Make the component available to other parts of the app
export default Header;

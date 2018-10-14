/** @format */

import { AppRegistry } from "react-native";
import React from "react";

import Header from "./src/components/Header";

const App = () => {
  return <Header />;
};

AppRegistry.registerComponent("albums", () => App);

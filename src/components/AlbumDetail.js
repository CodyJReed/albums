import React from "react";
import { View, Text, Image } from "react-native";

import Card from "./Card";
import CardItem from "./CardItem";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    headerTitleStyle,
    thumbnailContainerStyle,
    artworkStyle
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image style={artworkStyle} source={{ uri: image }} />
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    justifyContent: "space-around"
  },
  headerTitleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  artworkStyle: {
    height: 300,
    width: null,
    flx: 1
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;

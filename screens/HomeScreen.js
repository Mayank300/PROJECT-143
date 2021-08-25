import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import axios from "axios";

export default class HomeScreen extends Component {
  state = {
    articleDetails: {},
    url: "https://554a-103-77-37-130.ngrok.io",
  };

  getArticle = () => {
    const url = this.state.url + "/get-article";
    axios.get(url).then((response) => {
      let details = response.data.data;
      this.setState({
        articleDetails: details,
      });
    });
    console.log("Home screen : ", this.state.articleDetails);
  };

  likeArticle = () => {
    const url = this.state.url + "/liked-article";
    axios
      .post(url)
      .then((_response) => {
        this.getArticle();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  notLikeArticle = () => {
    const url = this.state.url + "/unliked-article";
    axios
      .post(url)
      .then((_response) => {
        this.getArticle();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // small function to make first letter of each word capital
  titleCase = (title) => {
    title = `${title}`;
    var splitStr = title.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  componentDidMount() {
    this.getArticle();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";

export default class HomeScreen extends Component {
  state = {
    articleDetails: {},
    url: "http://localhost:5000",
  };

  getArticle = () => {
    const url = this.state.url + "/get-article";
    axios.get(url).then((response) => {
      let details = response.data.data;
      this.setState({
        articleDetails: details,
      });
    });
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
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

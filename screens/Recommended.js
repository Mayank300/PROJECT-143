import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";

export default class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleDetails: {},
      url: "https://554a-103-77-37-130.ngrok.io",
    };
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    const url = this.state.url + "/recommended-articles";
    axios.get(url).then((response) => {
      let details = response.data.data;
      this.setState({
        articleDetails: details,
      });
    });
    console.log("Recommended screen : ", this.state.articleDetails);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Recommended Screen</Text>
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

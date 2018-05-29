/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

import Shortcut from "./Shortcut";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      amount: 1700,
      currentAmount: 0
    };
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  _onPress = amount => {
    // this.setState({
    //   // currentAmount: this.state.currentAmount + amount
    // });
    this.setState({
      currentAmount: this.state.currentAmount + amount
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.percent}>{`${Math.floor(this.state.currentAmount / this.state.amount * 100)}%`}</Text>
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollView}>
            <Shortcut color="#40CEE6" onClick={() => this._onPress(50)} amount={50} name="Wasser" />
            <Shortcut color="#40CEE6" onClick={() => this._onPress(50)} amount={50} name="Wasser" />
            <Shortcut color="#40CEE6" onClick={() => this._onPress(50)} amount={50} name="Wasser" />
            <Shortcut color="#6E4A02" onClick={() => this._onPress(50)} amount={50} name="Kaffee" />
            <Shortcut color="#6E4A02" onClick={() => this._onPress(50)} amount={50} name="Kaffee" />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  percent: {},
  scrollView: {
    backgroundColor: "#F6F6F6",
    // backgroundColor: "#999",
    // alignSelf: "stretch",
    // height: 300,
    flex: 1,
    padding: 24
  },
  scrollViewContainer: {
    // flexGrow: 1,
    height: 140
  },
  shortcut: {
    height: 92,
    width: 92,
    backgroundColor: "#40CEE6",
    marginRight: 24,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#B4B4B4",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 14
  },
  ml: {
    color: "#fff",
    fontWeight: "bold"
  },
  type: {
    color: "#fff"
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

type Props = {
  onClick: () => void,
  amount: number,
  name: string,
  color: string
};

export default class Shortcut extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    const { onClick, amount, name, color } = this.props;
    return (
      <TouchableOpacity onPress={onClick} style={[styles.shortcut, { backgroundColor: color }]}>
        <Text style={styles.ml}>{amount}ml</Text>
        <Text style={styles.type}>{name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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

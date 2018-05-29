/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";

import { StackedAreaChart, YAxis, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

type Props = {};

export default class Analyse extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        water: 900,
        coffee: 100,
        coke: 0,
        limo: 100
      },
      {
        month: new Date(2015, 1, 1),
        water: 700,
        coffee: 200,
        coke: 100,
        limo: 100
      },
      {
        month: new Date(2015, 2, 1),
        water: 300,
        coffee: 150,
        coke: 200,
        limo: 100
      },
      {
        month: new Date(2015, 3, 1),
        water: 400,
        coffee: 200,
        coke: 200,
        limo: 300
      }
    ];

    const colors = [
      //   "rgb(138, 0, 230, 0.8)",
      "#40CEE6",
      "#87F3A6",
      "#6E4A02",
      "#A63166"
    ];
    const keys = ["water", "coffee", "coke", "limo"];

    return (
      <View style={{ flexDirection: "row", flex: 1 }}>
        <StackedAreaChart
          style={{ flex: 1 }}
          contentInset={{ top: 200 }}
          data={data}
          keys={keys}
          colors={colors}
          curve={shape.curveNatural}
        >
          {/* <Grid /> */}
        </StackedAreaChart>
        <YAxis
          style={{ position: "absolute", top: 0, bottom: 0 }}
          data={StackedAreaChart.extractDataPoints(data, keys)}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fontSize: 8,
            fill: "white",
            stroke: "black",
            strokeWidth: 0.1,
            alignmentBaseline: "baseline",
            baselineShift: "3"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#fff"
  }
});

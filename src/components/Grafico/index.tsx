import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

interface GraficoProps {
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

export function Grafico(props: GraficoProps) {
  return (
    <View style={styles.container}>
      <LineChart width={400} height={400} data={props.data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
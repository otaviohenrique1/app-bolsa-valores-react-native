import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DataGrafico } from '../../utils/utils';
import { SemDados } from '../SemDados';

interface GraficoProps {
  data: DataGrafico[];
}

export function Grafico(props: GraficoProps) {
  return (
    <View style={styles.container}>
      {(props.data) ? (
        <LineChart width={400} height={400} data={props.data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      ) : (
        <SemDados />
      )}
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
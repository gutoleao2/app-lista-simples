import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class app04 extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('app04', () => app04);


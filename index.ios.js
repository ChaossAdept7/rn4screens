
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Provider } from 'react-redux'
import configureStore from './js/configureStore'
import Router from './js/router';

const store = configureStore();

const ExportApp = () => (
    <Provider store={store}>
      <Router />
    </Provider>
)

AppRegistry.registerComponent('rn4screens', () => ExportApp);
